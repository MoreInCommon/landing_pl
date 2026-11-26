// Shared by middleware and the sitemap. The Management API token is never
// used here: rendering requires only the existing Content Delivery API token.
export async function fetchPublishedGlobalStory() {
  const query = new URLSearchParams({
    token: process.env.STORYBLOK_TOKEN,
    version: "published",
    cv: String(Date.now()),
  });
  const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/global?${query}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Global Storyblok configuration failed (HTTP ${response.status})`);
  const data = await response.json();
  if (!data.story?.content) throw new Error("Missing global Storyblok configuration");
  return data.story;
}
