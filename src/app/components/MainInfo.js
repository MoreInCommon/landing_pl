"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { navigationHref } from "@/app/migration.mjs";

export default function MainInfo({ blok }) {
  const router = useRouter();
  const hasText = Boolean(blok.text?.trim());
  const link = blok.button_url;
  const hasLink = Boolean(link?.cached_url || link?.url || link?.anchor);
  const href = !link?.cached_url && !link?.url && link?.anchor
    ? `#${link.anchor.replace(/^#/, "")}`
    : navigationHref(link);
  const openContact = () => {
    if (/^(https?:\/\/|mailto:|tel:)/i.test(href)) {
      window.location.assign(href);
    } else {
      router.push(href);
    }
  };

  return (
    <div {...storyblokEditable(blok)}>
      {hasText && (
      <div
        className="px-full max-xl:px-tablet max-sm:px-mobile bg-[#F1F1F3] p-8 justify-center mb-12"
      >
        <h1 className="text-brand-darkBlue text-[36px] leading-[36px] font-bold top-1 relative z-[1] text-center">
          {blok?.text}
          <span className="text-brand-blue">.</span>
        </h1>
      </div>
      )}
      {blok.button_text && hasLink && (
      <Button
        onClick={openContact}
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
      )}
    </div>
  );
}
