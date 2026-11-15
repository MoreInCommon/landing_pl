"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Trivia({ blok, variant }) {
  const isTile = variant === "tile";
  const Heading = isTile ? "h3" : "h4";
  return (
    <div
      className="flex p-6 flex-col gap-[-8px] bg-[#EDF0F7] rounded-[4px] text-left"
      {...storyblokEditable(blok)}
    >
      <Heading className={isTile
        ? "text-h4 font-bold text-brand-darkBlue break-words"
        : "text-bold text-[32px] leading-6 text-brand-darkBlue"}
      >
        {blok.title}
      </Heading>
      {isTile ? (blok.text && <p className="mt-3 text-bodyRegular">{blok.text}</p>) : <p>{blok.text}</p>}
    </div>
  );
}
