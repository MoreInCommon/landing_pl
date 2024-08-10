"use client";
import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/navigation";

const MediaMention = ({ blok }) => {
  const formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const { push } = useRouter();
  const url = blok?.url?.url || blok?.url?.cached_url;
  console.log(url);
  const changePage = (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    push(`/${url}`);
    window.location.href = `/${url}`;
    window.history.replaceState(null, "", currentUrl);
  };
  return (
    <a
      onClick={changePage}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white cursor-pointer p-6 border-t-4 border-brand-darkBlue flex-[30%] max-lg:max-w-[46%] max-sm:max-w-[95%] flex flex-col max-w-[31%] hover:shadow-tile-shadow transition-shadow"
      {...storyblokEditable(blok)}
    >
      <p className="text-grey-medium text-captionRegular mb-1">
        {formatter?.format(blok?.date ? new Date(blok?.date) : new Date())}
      </p>
      <h4 className="text-h4 text-mono-neutral11 mb-2 font-bold">{blok?.title}</h4>
      <p className="text-bodyRegular text-mono-neutral11">{blok?.description}</p>
    </a>
  );
};

export default MediaMention;
