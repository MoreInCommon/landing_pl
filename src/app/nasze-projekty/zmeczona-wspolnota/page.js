import StoryblokStory from "@storyblok/react/story";
import { fetchPageData, fetchMetadata } from "@/app/utils";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="text-black text-bodyRegular">
      <StoryblokStory story={data.story} />
    </div>
  );
}
export async function fetchData() {
  return fetchPageData(`cdn/stories/nasze-projekty/zmeczona-wspolnota`);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/nasze-projekty/zmeczona-wspolnota`);
}
