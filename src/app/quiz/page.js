import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";
import QuizStart from "@/app/components/QuizStart";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";

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
//   return fetchPageData(`cdn/stories/nasze-projekty`);
// }
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/quiz`);
}
