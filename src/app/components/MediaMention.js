"use client";
import { storyblokEditable } from "@storyblok/react";

const Project = ({ blok }) => {
  const formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div
      className="bg-white p-6 border-t-4 border-brand-darkBlue flex-[30%] max-lg:max-w-[46%] max-sm:max-w-[95%] flex flex-col max-w-[31%] hover:shadow-tile-shadow transition-shadow"
      {...storyblokEditable(blok)}
    >
      <p className="text-grey-medium text-captionRegular mb-1">
        {formatter?.format(blok?.date ? new Date(blok?.date) : new Date())}
      </p>
      <h4 className="text-h4 text-mono-neutral11 mb-2 font-bold">{blok?.title}</h4>
      <p className="text-bodyRegular text-mono-neutral11 mb-[44px]">{blok?.description}</p>
    </div>
  );
};

export default Project;
