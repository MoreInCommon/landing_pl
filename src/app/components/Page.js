import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import MainHeader from "@/app/components/MainHeader";

const Page = ({ blok }) => (
  <React.Fragment {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => {
      if (nestedBlok.component === "Page title") {
        return <MainHeader text={nestedBlok.title} key={nestedBlok._uid} />;
      }
      return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
    })}
  </React.Fragment>
);

export default Page;
