import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});
export default async function Home() {
  const { data } = await fetchData();
  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();
  console.log("EJ no");

  return fetchPageData(`cdn/stories/o-nas/sprawozdania`, isEnabled);
}
export async function generateMetadata() {
  return fetchMetadata(`/o-nas/sprawozdania`);
}
