"use client";
import { twMerge } from "tailwind-merge";

export default function StandardText({ text, className = null }) {
  return (
    <div className="max-w-full m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile">
      <p
        className={twMerge(
          `text-black max-w-[765px] w-full mb-3 text-bodyRegular ${className || ""}`
        )}
      >
        {text}
      </p>
    </div>
  );
}
