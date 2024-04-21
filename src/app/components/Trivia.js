"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Trivia({ blok }) {
  return (
    <div
      className="flex p-6 flex-col gap-[-8px] bg-[#EDF0F7] rounded-[4px] text-left"
      {...storyblokEditable(blok)}
    >
      <h4 className="text-bold text-[32px] leading-6 text-brand-darkBlue">1</h4>
      <p>autorska metoda badawcza More in Common</p>
    </div>
  );
}
