import { isMigrationPath, migrationPaths, normalizeStoryPath } from "./migration.mjs";
import { setTimeout as delay } from "node:timers/promises";

export async function fetchMigrationRoutes() {
  const query = new URLSearchParams({
    by_slugs: migrationPaths.flatMap((path) => [path, `${path}/`]).join(","),
    version: "published",
    token: process.env.STORYBLOK_TOKEN,
    per_page: "100",
  });

  for (let attempt = 0; attempt < 3; attempt++) {
    let status;
    try {
      const response = await fetch(`https://api.storyblok.com/v2/cdn/stories?${query}`, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10000),
      });
      status = response.status;
      if (response.ok) {
        const data = await response.json();
        if (!Array.isArray(data.stories)) throw new Error("Invalid stories response");
        return data.stories
          .filter((story) => isMigrationPath(story.full_slug))
          .map((story) => ({
            url: `https://www.moreincommon.pl/${normalizeStoryPath(story.full_slug)}`,
            ...(story.published_at ? { lastModified: new Date(story.published_at) } : {}),
            changeFrequency: "monthly",
            priority: 0.5,
          }));
      }
      // Retry rate limits and server failures, but not token/configuration errors.
      if (status !== 429 && status < 500) {
        console.warn(`[sitemap] Omitting migration routes: Storyblok HTTP ${status}. Check STORYBLOK_TOKEN in the deployment environment.`);
        return [];
      }
    } catch {
      // Do not log request URLs or raw errors: they can contain the API token.
    }
    if (attempt < 2) {
      await delay(250 * (attempt + 1));
    } else {
      console.warn(`[sitemap] Omitting migration routes after 3 attempts (Storyblok ${status ? `HTTP ${status}` : "network/timeout error"}).`);
    }
  }
  return [];
}
