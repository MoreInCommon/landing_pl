"use client";

import { storyblokEditable } from "@storyblok/react";
import Trivia from "@/app/components/Trivia";

export default function TriviaContainer({ blok }) {
  return (
    <section
      className="max-w-standard mx-auto w-full max-xl:px-tablet max-sm:px-0 my-12"
      {...storyblokEditable(blok)}
    >
      {blok.title && (
        <h2 className="text-h2 font-bold text-black mb-8">{blok.title}</h2>
      )}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        {(blok.items || []).map((item) => (
          <Trivia key={item._uid} blok={item} variant="tile" />
        ))}
      </div>
    </section>
  );
}
