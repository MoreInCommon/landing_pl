import StoryblokStory from "@storyblok/react/story";
import { fetchPageData, fetchMetadata } from "@/app/utils";
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
  return fetchPageData(`cdn/stories/kontakt/nasze-biuro`);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/nasze-projekty/polska-po-zimie`);
}
