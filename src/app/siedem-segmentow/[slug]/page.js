import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
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
    <>
      <StoryblokStory story={response.data.story} />
    </>
  );
}

export async function fetchData(slug) {
  return fetchPageData(`cdn/stories/siedem-segmentow/${slug}`);
}
export async function generateMetadata({ params }) {
  const slug = params.slug;
  return fetchMetadata(`cdn/stories/siedem-segmentow/${slug}`);
}
