import { isNavigationMigrationEnabled } from "./deployment.mjs";
import { fetchPublishedGlobalStory } from "./globalConfig";
import { publishedRedirects } from "./redirects.mjs";
import { isPreviewDeployment } from "@/app/migration.mjs";
import { fetchMigrationRoutes } from "./sitemapMigration.mjs";

export default async function sitemap() {
  if (isPreviewDeployment()) return [];
  // Fetch static URLs
  const staticRoutes = [
    {
      url: "https://www.moreincommon.pl",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.moreincommon.pl/o-nas/zespol",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.moreincommon.pl/o-nas/sprawozdania",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.moreincommon.pl/o-nas/misja",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/o-nas/statut",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/nasze-projekty",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/w-mediach",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/kontakt/nasze-biuro",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/kontakt/pracuj-z-nami",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/kontakt/dla-mediow",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/quiz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/postepowi-zapalency",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/pasywni-liberalowie",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/zawiedzeni-samotnicy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/niezaangazowani-normalsi",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/spelnieni-lokalisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/lojalni-hierarchisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/fokus-na-klimat/oddani-tradycjonalisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/postepowi-zapalency",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/pasywni-liberalowie",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/zawiedzeni-samotnicy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/niezaangazowani-normalsi",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/spelnieni-lokalisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/lojalni-hierarchisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.moreincommon.pl/siedem-segmentow/oddani-tradycjonalisci",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const dynamicFokusSlugs = await fetchDynamicSlugs("fokus-na-klimat/artykuly");
  const dynamicFokus = dynamicFokusSlugs.map((slug) => ({
    url: `https://www.moreincommon.pl/fokus-na-klimat/artykuly/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const dynamicProjectSlugs = await fetchDynamicSlugs("nasze-projekty");
  const dynamicProject = dynamicProjectSlugs.map((slug) => ({
    url: `https://www.moreincommon.pl/nasze-projekty/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const dynamicMediaSlugs = await fetchDynamicSlugs("kontakt/dla-mediow/artykuly");
  const dynamicMedia = dynamicMediaSlugs.map((slug) => ({
    url: `https://www.moreincommon.pl/kontakt/dla-mediow/artykuly/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const migrationRoutes = await fetchMigrationRoutes();
  const rules = isNavigationMigrationEnabled()
    ? publishedRedirects(await fetchPublishedGlobalStory())
    : [];
  const routes = [...staticRoutes, ...dynamicFokus, ...dynamicProject, ...dynamicMedia, ...migrationRoutes];
  // The new listing shares its CMS story with the old listing. Only advertise
  // the new canonical address after the redirect configuration is published.
  return routes.map((route) => {
      const source = new URL(route.url).pathname;
      const redirect = rules.find((rule) => rule.source === source);
      return redirect ? { ...route, url: `https://www.moreincommon.pl${redirect.destination}` } : route;
    });
}

async function fetchDynamicSlugs(startsWith) {
  const version = "published";
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?starts_with=${startsWith}&version=${version}&token=${process.env.STORYBLOK_TOKEN}`
  );
  const data = await res.json();

  const slugs = data.stories.map((story) => story.slug);

  return slugs;
}
