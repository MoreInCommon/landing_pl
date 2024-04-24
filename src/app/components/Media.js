"use client";
import Pagination from "@/app/components/Pagination";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";

const Media = ({ blok }) => {
  return (
    <>
      <div
        className="flex gap-4 flex-wrap mt-[72px] items-stretch max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center"
        {...storyblokEditable(blok)}
      >
        {blok.media.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <Pagination currentPage={3} totalPages={8} />
      </div>
    </>
  );
};

export default Media;
