"use client";

import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

export default function ContactCard({ blok }) {
  const email = (blok.email || "").trim().replace(/^mailto:/i, "");

  return (
    <div
      className="w-full px-full max-xl:px-tablet max-sm:px-mobile my-12"
      {...storyblokEditable(blok)}
    >
      <div className="border border-[#DADDE1] rounded-[4px] p-8 max-sm:p-5 flex items-start gap-10 max-sm:flex-col max-sm:gap-6">
        {blok.photo?.filename && (
          <div className="w-[38%] max-sm:w-full shrink-0">
            <Image
              src={blok.photo.filename}
              alt={blok.photo.alt || blok.name || ""}
              width={480}
              height={520}
              sizes="(max-width: 640px) 100vw, 38vw"
              className="w-full h-auto"
            />
          </div>
        )}
        <div className="min-w-0 flex-1 text-bodyRegular text-black">
          {blok.name && <p className="text-h3 font-bold mb-3">{blok.name}</p>}
          {blok.position && <p className="mb-5">{blok.position}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-brand-darkBlue underline underline-offset-4 break-words hover:text-hover-darkBlue"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
