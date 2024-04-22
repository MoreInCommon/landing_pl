"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Quote({ blok }) {
  return (
    <div
      className="mt-28 mb-28 max-xl:my-10 bg-[#EDF0F7] bg-[url('/newsletter_bg.png')]"
      {...storyblokEditable(blok)}
    >
      <div className="text-brand-darkBlue m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile py-16 max-w-full">
        <div className="text-h3 mb-2 max-w-[650px] ml-auto flex gap-6">
          <div className="flex flex-col items-center relative w-[30px]">
            <p className="text-[112px] leading-[0px] absolute top-[22px]">“</p>
            <span className="w-[2px] bg-brand-darkBlue h-[92%] m-auto" />
            <p className="text-[112px] leading-[0px] absolute bottom-[22px] rotate-180">“</p>
          </div>
          <h3 className="text-h3 flex-1 leading-[36px] relative">
            {blok.text}
            {blok?.author && (
              <h4 className="text-h3 flex-1 leading-[36px] absolute right-0 bottom-[-45px]">
                {" "}
                - {blok.author}
              </h4>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}
