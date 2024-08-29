"use client";
import { storyblokEditable } from "@storyblok/react";
import { Element } from "react-scroll";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Segment = ({ blok }) => {
  const { push } = useRouter();
  const changePage = (url) => {
    push(`/${url}`);
  };
  return (
    <Element name={blok.title} className="section" {...storyblokEditable(blok)}>
      <div className="flex gap-20 pb-20 max-lg:gap-4 max-sm:flex-col-reverse max-sm:pb-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold uppercase" style={{ color: blok?.color?.color }}>
            {blok.title}
          </h2>
          <p>{blok.description}</p>
          <Button
            onClick={() => changePage(blok.button_url.cached_url)}
            classes={`mr-auto mt-2 self-start`}
            style={{ background: blok?.color?.color }}
          >
            <div className="relative top-[1px]">{blok.button_text}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                fill="white"
                stroke="transparent"
                strokeWidth="0.5"
              />
            </svg>
          </Button>
        </div>
        <img
          src={`${blok.image.filename}/m/filters:quality(65)`}
          alt={blok.title}
          className="min-w-[195px] max-h-[200px] object-contain"
        />
      </div>
    </Element>
  );
};

export default Segment;
