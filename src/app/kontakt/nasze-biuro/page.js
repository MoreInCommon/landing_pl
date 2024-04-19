import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import ContactInfo from "@/app/components/ContactInfo";

export default async function Home() {
  const { data } = await fetchData();
  return (
    <>
      <StoryblokStory story={data.story} />
      <ContactInfo />
    </>
  );
}

export async function fetchData() {
  const sbParams = {
    version: "draft",
  };
  const storyblokApi = getStoryblokApi();
  console.log("test", storyblokApi);

  return storyblokApi?.get(`cdn/stories/kontakt/nasze-biuro`, sbParams, {
    cache: "no-cache",
  });
}
