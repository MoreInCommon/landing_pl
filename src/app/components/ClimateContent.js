"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";

const ClimateContent = ({ blok }) => {
  return (
    <div className="max-xl:px-4 ">
      <CenteredSection {...storyblokEditable(blok)}>
        <MainHeader className="green-heading-underline" text={blok.title} />
        <StoryblokComponent blok={blok.text[0]} />
      </CenteredSection>
    </div>
  );
};

export default ClimateContent;
