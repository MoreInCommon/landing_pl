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
import HeaderFour from "@/app/components/HeaderFour";
import LongText from "@/app/components/LongText";

const SegmentationHeader = ({ blok }) => {
  return (
    <>
      <div
        className="text-brand-darkBlue m-auto w-full bg-[#EDF0F7] px-[6.25rem] py-16 text-center relative overflow-hidden"
        {...storyblokEditable(blok)}
      >
        <h1 className="text-h1 bold z-1">{blok.title}</h1>
        <p className="max-w-[46.875rem] w-full m-auto mt-6 text-bodyRegular z-1">
          {blok.description}
        </p>
        <SegmentsSvg className="absolute top-[-9.375rem] right-[-5rem] z-0" />
      </div>
      <CenteredSection>
        <MainHeader text={blok.subtitle} className="mt-[72px] mb-10" />
      </CenteredSection>
      <CenterContainer className="text-center">
        <CenterText text={blok.subtitle_description} />
        <div className="grid grid-cols-3 gap-6 mb-12">
          {blok.trivia.map((trivia) => {
            return <StoryblokComponent blok={trivia} key={trivia._uid} />;
          })}
        </div>
        <Button
          onClick={() => console.log()}
          classes="bg-brand-darkBlue hover:bg-hover-blue m-auto"
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
      <ImageComponent src={blok.image.filename} />
      <div className="bg-[#EDF0F7] p-8">
        <StoryblokComponent blok={blok.long_text[0]} />
      </div>
    </>
  );
};

export default SegmentationHeader;
