"use client";
import { useState } from "react";
import Pagination from "@/app/components/Pagination";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";

const JobAds = ({ blok }) => {
  const jobs = blok?.job || [];
  if (!jobs.length) {
    return null;
  }
  return (
    <div className="mb-[72px] mt-[72px] ">
      <h2 className="text-h3 font-bold max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-start text-left">
        Oferty pracy
      </h2>
      <div
        className="flex gap-6 flex-wrap mt-[32px] items-stretch max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center"
        {...storyblokEditable(blok)}
      >
        {jobs.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </div>
    </div>
  );
};

export default JobAds;
