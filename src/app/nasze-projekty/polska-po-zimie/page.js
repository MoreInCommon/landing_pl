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

  return storyblokApi?.get(`cdn/stories/nasze-projekty/polska-po-zimie`, sbParams, {
    cache: "no-cache",
  });
}

export async function generateMetadata() {
  const sbParams = {
    version: "draft",
  };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi?.get(`cdn/stories/nasze-projekty/polska-po-zimie`, sbParams, {
    cache: "no-cache",
  });

  const seoData = data?.data?.story?.content?.body?.find((blok) => blok?.component === "seo") || {};

  return {
    title: seoData?.title,
    description: seoData?.description,
    openGraph: {
      images: [
        {
          url: seoData?.image?.filename,
          alt: seoData?.title,
        },
      ],
    },
  };
}
