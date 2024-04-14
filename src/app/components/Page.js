import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import MainHeader from "@/app/components/MainHeader";

const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => {
      return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
    })}
  </div>
);

export default Page;
