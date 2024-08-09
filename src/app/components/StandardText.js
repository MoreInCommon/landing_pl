"use client";
import { twMerge } from "tailwind-merge";
import { storyblokEditable } from "@storyblok/react";

export default function StandardText({ blok, className = null }) {
  return (
    <div
      className="max-w-full m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile"
      {...storyblokEditable(blok)}
    >
      <p
        className={twMerge(
          `text-black max-w-[765px] w-full mb-3 text-bodyRegular ${className || ""}`
        )}
      >
        {blok.text}
      </p>
    </div>
  );
}
