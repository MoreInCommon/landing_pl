import { getStoryblokApi } from "@storyblok/react/rsc";
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
  const sbParams = {
    version: "draft",
  };
  const storyblokApi = getStoryblokApi();
  console.log("test", storyblokApi);

  return storyblokApi?.get(`cdn/stories/w-mediach`, sbParams, {
    cache: "no-cache",
  });
}
