"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function MainInfo({ blok }) {
  return (
    <div
      className="px-full max-xl:px-tablet max-sm:px-mobile bg-[#F1F1F3] p-8 justify-center mb-12"
      {...storyblokEditable(blok)}
    >
      <p className="text-brand-darkBlue text-[36px] leading-[36px] font-bold top-1 relative z-[1] text-center">
        {blok?.text}
        <span className="text-brand-blue">.</span>
      </p>
    </div>
  );
}
