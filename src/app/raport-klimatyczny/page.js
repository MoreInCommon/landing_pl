import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Project from "@/app/components/Project";
import Newsletter from "@/app/components/Newsletter";
import Button from "@/app/components/Button";
import { fetchPageData, fetchMetadata } from "@/app/utils";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import Image3 from "../../../public/tempImages/s3.png";
import Well from "@/app/components/Well";
import StandardText from "../components/StandardText";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import Image2 from "../../../public/tempImages/1.png";
import Link from "next/link";
import { segments } from "@/app/utils";
import { draftMode } from "next/headers";

const contents = [
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
  {
    title: "Energetyka i polityka klimatyczna",
    img: Image2,
  },
  {
    title: "Polska przyszłości",
    img: Image2,
  },
  {
    title: "Wartości",
    img: Image2,
  },
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
];

export default async function Home() {
  const { data } = await fetchData();
  return (
    // <div className="mt-[-64px] max-sm:mt-[-48px] max-xl:mt-[-48px]">
    <div>
      <StoryblokStory story={data.story} />
      <div className="m-auto px-[140px]">
        <div className="flex gap-4 my-8 mt-10 mb-10 overflow-x-scroll">
          {contents.map((content, index) => (
            <Link
              className="flex p-6 flex-col items-center gap-2 border-[1px] border-mono-neutral22 min-w-[325px]"
              href="/raport-klimatyczny/segmenty-o-zmianach-klimatu"
              key={index}
            >
              <h4 className="text-h4 text-black text-center min-h-[60px]">{content.title}</h4>
              <img src={content.img.src} alt="img" />
              <p className="text-black flex items-center self-end mt-2">
                Czytaj dalej{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                    fill="black"
                    stroke="transparent"
                    strokeWidth="0.5"
                  />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </div>
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
