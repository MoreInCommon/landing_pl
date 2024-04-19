import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();
  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  );
}

export async function fetchData() {
  return fetchPageData(`cdn/stories/w-mediach`);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/w-mediach`);
}
