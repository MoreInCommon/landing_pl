"use client";
import { storyblokEditable } from "@storyblok/react";

const JobAd = ({ blok }) => {
  return (
    <a
      href={blok?.file?.filename || blok.url.url || blok.url.cached_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-6 border border-gray-300 flex-[48%] max-lg:max-w-[46%] max-sm:max-w-[95%] flex flex-col max-w-[48%]"
      {...storyblokEditable(blok)}
    >
      <h4 className="text-black text-[22px] font-bold leading-[30px]">{blok.title}</h4>
      <p className="pb-4 mb-4 border-b border-gray-300">{blok.place}</p>
      <p className="mb-6">{blok.desc}</p>
      <div className="flex ml-auto gap-[2px] align-middle">
        <a
          href={blok?.file?.filename || blok.url.url || blok.url.cached_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sprawdź
        </a>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="keyboard_backspace">
            <mask
              id="mask0_2409_2347"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                id="Bounding box"
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2409_2347)">
              <path
                id="keyboard_backspace_2"
                d="M14.8462 17.6534L20.5 11.9995L14.8462 6.3457L13.7923 7.39953L17.6424 11.2496H3.50005V12.7495H17.6424L13.7923 16.5995L14.8462 17.6534Z"
                fill="black"
              />
            </g>
          </g>
        </svg>
      </div>
    </a>
  );
};

export default JobAd;
