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
    <div className="mt-[-32px] max-sm:mt-[-16px] max-xl:mt-[-16px]">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();
  return fetchPageData(`cdn/stories/home`, isEnabled);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/home`);
}
