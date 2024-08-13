"use client";
import { storyblokEditable } from "@storyblok/react";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import { StoryblokComponent } from "@storyblok/react";
import CenterContainer from "@/app/components/CenterContainer";
import CenterText from "@/app/components/CenterText";
import ImageComponent from "@/app/components/ImageComponent";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const SegmentationHeader = ({ blok }) => {
  const router = useRouter();
  return (
    <div className="max-xl:px-4 ">
      <div
        className="text-brand-darkBlue m-auto w-full bg-[#EDF0F7] px-[6.25rem] max-md:px-4 py-16 text-center relative overflow-hidden"
        {...storyblokEditable(blok)}
      >
        <h1 className="text-h1 bold z-1">{blok.title}</h1>
        <p className="max-w-[46.875rem] max-md:max-w-[80rem] w-full m-auto mt-6 text-bodyRegular z-1">
          {blok.description}
        </p>
        <SegmentsSvg className="absolute top-[-9.375rem] right-[-5rem] z-0 max-sm:hidden" />
      </div>
      <CenteredSection>
        <MainHeader text={blok.subtitle} childClassname="pr-0" className="mt-[72px] mb-10" />
      </CenteredSection>
      <CenterContainer className="text-center">
        <CenterText text={blok.subtitle_description} />
        <div className="grid grid-cols-3 gap-6 mb-12 max-sm:grid-cols-2">
          {blok.trivia.map((trivia) => {
            return <StoryblokComponent blok={trivia} key={trivia._uid} />;
          })}
        </div>
        <Button
          onClick={() => {
            const currentUrl = window.location.href;
            router.push(`/${blok.button_link.cached_url}`);
            window.location.href = url;
            window.history.replaceState(null, "", currentUrl);
          }}
          classes="bg-brand-darkBlue m-auto"
        >
          <div className="relative top-[1px]">{blok.button_text}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
              fill="white"
              stroke="transparent"
              strokeWidth="0.5"
            />
          </svg>
        </Button>
      </CenterContainer>
      <div className="max-sm:hidden">
        <ImageComponent src={blok.image.filename} />
      </div>
      <div className="hidden max-sm:block">
        <ImageComponent src={blok.mobile_image.filename} className />
      </div>
      <div className="bg-[#EDF0F7] p-8 max-sm:p-4">
        <StoryblokComponent blok={blok.long_text[0]} />
      </div>
    </div>
  );
};

export default SegmentationHeader;
