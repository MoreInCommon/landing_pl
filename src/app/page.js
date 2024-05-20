import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export default async function Home() {
  const { isEnabled } = draftMode();
  console.log("DUPSKO", isEnabled);
  const { data } = await fetchData();
  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();
  return fetchPageData(`cdn/stories/home`, isEnabled);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/home`);
}
