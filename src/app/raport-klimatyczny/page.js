import StoryblokStory from "@storyblok/react/story";
import { fetchPageData, fetchMetadata } from "@/app/utils";
import { draftMode } from "next/headers";

export default async function Home() {
  const { data } = await fetchData();
  return (
    // <div className="mt-[-64px] max-sm:mt-[-48px] max-xl:mt-[-48px]">
    <div>
      <StoryblokStory story={data.story} />
      <div className="flex gap-4 my-10">
        {[].map((content, index) => (
          <div className="flex p-6 flex-col items-center gap-2 min-w-[235px] h-[200px]" key={index}>
            <img src={content.logo.src} alt="img" className="h-3/4 object-contain	" />
            <p className="text-black flex items-center self-auto">{content.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();

  return fetchPageData(`cdn/stories/raport-klimatyczny`, isEnabled);
}
export async function generateMetadata() {
  return fetchMetadata(`cdn/stories/raport-klimatyczny`);
}
