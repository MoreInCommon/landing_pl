"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

export default function MainInfo({ blok }) {
  const router = useRouter();

  return (
    <>
      <div
        className="px-full max-xl:px-tablet max-sm:px-mobile bg-[#F1F1F3] p-8 justify-center mb-12"
        {...storyblokEditable(blok)}
      >
        <p className="text-brand-darkBlue text-[36px] leading-[36px] font-bold top-1 relative z-[1] text-center">
          {blok?.text}
          <span className="text-brand-blue">.</span>
        </p>
      </div>
      <Button
        onClick={() => router.push(`/${blok.button_url.cached_url}`)}
        classes="bg-brand-darkBlue m-auto mb-10"
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
    </>
  );
}
