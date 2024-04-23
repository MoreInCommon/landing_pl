import { fetchPageData, fetchMetadata } from "@/app/utils";
import StoryblokStory from "@storyblok/react/story";
import QuizStart from "@/app/components/QuizStart";

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
// export async function generateMetadata() {
//   return fetchMetadata(`cdn/stories/nasze-projekty`);
// }
