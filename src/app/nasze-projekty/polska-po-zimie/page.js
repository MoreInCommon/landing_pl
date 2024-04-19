import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="text-black text-bodyRegular">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const sbParams = {
    version: "draft",
  };
  const storyblokApi = getStoryblokApi();
  console.log("test", storyblokApi);

  return storyblokApi?.get(`cdn/stories/nasze-projekty/polska-po-zimie`, sbParams, {
    cache: "no-cache",
  });
}
