import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";
import { redirect } from "next/navigation";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});
export default async function Home({ params }) {
  const res = await fetchData(params.slug);
  const data = res?.data;
  if (!data?.story) {
    redirect(`/404`);
  }
  return (
    <div className="mt-[-64px] max-sm:mt-[-48px] max-xl:mt-[-48px]">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(slug) {
  const { isEnabled } = draftMode();

  return fetchPageData(`cdn/stories/raport-klimatyczny/${slug}`, isEnabled);
}
export async function generateMetadata({ params }) {
  const slug = params.slug;
  return fetchMetadata(`cdn/stories/raport-klimatyczny/${slug}`);
}
