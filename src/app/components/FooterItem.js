"use client";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";

const FooterItem = ({ blok }) => {
  const footerNavItems = blok.blocks.map((item) => ({
    ...item,
    component: "footer navigation item",
  }));
  return (
    <div className="flex flex-col" {...storyblokEditable(blok)}>
      <h5 className="uppercase font-bold mb-6">{blok.title}</h5>
      {footerNavItems.map((item) => (
        <StoryblokComponent blok={item} key={item._uid} />
      ))}
    </div>
  );
};

export default FooterItem;
