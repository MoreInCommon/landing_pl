import StoryblokStory from "@storyblok/react/story";
import { fetchPageData, fetchMetadata } from "@/app/utils";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});
export default async function Home({ params }) {
  const response = await fetchData(params.slug);
  // Show 404 if page is not published
  if (!response?.data?.story) {
    return null;
  }
  return (
    <div className="text-black text-bodyRegular">
      <StoryblokStory story={response.data.story} />
    </div>
  );
}

export async function fetchData(slug) {
  const { isEnabled } = draftMode();

  return fetchPageData(`cdn/stories/nasze-projekty/${slug}`, isEnabled);
}
export async function generateMetadata({ params }) {
  const slug = params.slug;
  return fetchMetadata(`cdn/stories/nasze-projekty/${slug}`);
}
