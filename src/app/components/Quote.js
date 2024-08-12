"use client";
import { storyblokEditable } from "@storyblok/react";
import { getColors } from "@/app/utils";

export default function Quote({ blok, multiple }) {
  const { bg, text, lineBg } = getColors(blok.color);
  return (
    <div
      className={`mt-14 mb-14 max-xl:my-10 ${multiple ? "bg-transparent" : bg} ${multiple ? "bg-transparent" : "bg-[url('/newsletter_bg.png')]"}`}
      {...storyblokEditable(blok)}
    >
      <div
        className={`${text} m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile ${multiple ? "py-4" : "py-20"} max-w-full`}
      >
        <div className="text-h3 mb-2 max-w-[730px] ml-auto flex gap-6">
          <div className="flex flex-col items-center relative w-[30px]">
            <p className="text-[112px] leading-[0px] absolute top-[22px]">“</p>
            <span className={`w-[2px] ${lineBg} h-[92%] m-auto`} />
            <p className="text-[112px] leading-[0px] absolute bottom-[22px] rotate-180">“</p>
          </div>
          <div className="text-[22px] font-medium flex-1 leading-[30px] relative">
            {blok.text}
            {blok?.author && (
              <h4 className="text-[22px] font-medium flex-1 leading-[30px] relative right-0 pt-6 text-right">
                {" "}
                - {blok.author}
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
