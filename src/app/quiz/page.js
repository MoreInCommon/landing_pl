import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";
import QuizStart from "@/app/components/QuizStart";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export default async function Home() {
  // const { data } = await fetchData();
  return (
    <>
      <QuizStart />
    </>
  );
}

// export async function fetchData() {
// const { isEnabled } = draftMode();

//   return fetchPageData(`cdn/stories/nasze-projekty`, isEnabled);
// }
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/quiz`);
}
