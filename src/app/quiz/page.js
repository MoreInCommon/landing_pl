import { fetchMetadata } from "@/app/utils";
import QuizStart from "@/app/components/QuizStart";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export default async function Home() {
  return (
    <>
      <QuizStart />
    </>
  );
}

export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/quiz`);
}
