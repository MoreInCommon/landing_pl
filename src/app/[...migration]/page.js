import { cache } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { components } from "@/app/utils";
import { isMigrationPath, isPreviewDeployment } from "@/app/migration.mjs";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

const getStory = cache(async (path) => {
  if (!isMigrationPath(path)) notFound();
  const { isEnabled } = draftMode();
  let story;
  try {
    const response = await getStoryblokApi().get(
      `cdn/stories/${path}`,
      {
        version: isEnabled ? "draft" : "published",
        ...(isEnabled ? { cv: Date.now() } : {}),
      },
      isEnabled ? { cache: "no-store" } : { next: { revalidate: 3600 } }
    );
    story = response?.data?.story;
  } catch (error) {
    if (error?.status === 404) notFound();
    // An invalid token or CMS outage is not a missing page. Do not log credentials.
    throw new Error(`Storyblok request failed for ${path} (status ${error?.status || "unknown"})`);
  }
  if (!story) notFound();
  return story;
});

export default async function MigrationPage({ params }) {
  const story = await getStory(params.migration.join("/"));
  return <StoryblokStory story={story} />;
}

export async function generateMetadata({ params }) {
  const path = params.migration.join("/");
  const story = await getStory(path);
  const seo = story.content?.body?.find((block) => block.component === "seo") || {};
  const { isEnabled } = draftMode();
  return {
    title: seo.title || story.name,
    description: seo.description,
    alternates: { canonical: `https://www.moreincommon.pl/${path}` },
    openGraph: {
      title: seo.title || story.name,
      description: seo.description,
      ...(seo.image?.filename ? { images: [{ url: seo.image.filename, alt: seo.title || story.name }] } : {}),
    },
    ...((isEnabled || isPreviewDeployment()) ? { robots: { index: false, follow: false } } : {}),
  };
}
