"use client";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import SegmentBar from "@/app/components/SegmentBar";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SegmentContent = ({ blok }) => {
  const { push } = useRouter();
  const changePage = (url) => {
    push(`/${url}`);
  };
  return (
    <div {...storyblokEditable(blok)}>
      <div style={{ background: blok?.background_color?.color }}>
        <div className="py-20 max-w-[1000px] m-auto relative flex items-center justify-center">
          <SegmentsSvg className="absolute top-[-4.375rem] right-[-9.5rem] z-0" />
          <img
            src={blok?.image?.filename}
            className="w-[235px] max-h-[245px] object-contain absolute left-0"
          />
          <div className="my-[100px]">
            <h4 className="text-center mb-5 text-[24px] text-themeableColors-darkBlue font-bold">
              Grupa, którą reprezentujesz to:
            </h4>
            <h1 className="text-[32px] font-bold uppercase" style={{ color: blok?.color?.color }}>
              {blok.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-h4 text-center font-bold">
          Grupa ta stanowi{" "}
          <span
            className="text-[32px] mx-[2px] relative top-[1px]"
            style={{ color: blok?.color?.color }}
          >
            {blok.percent}%
          </span>{" "}
          polskiego społeczeństwa
        </h4>
      </div>
      <SegmentBar number={blok.number} color={blok?.color?.color} />
      <StoryblokComponent blok={blok.long_text[0]} />
      <div className="mt-10 flex flex-col gap-6 text-center">
        <Button
          onClick={() => changePage(blok.button_url.cached_url)}
          classes="bg-brand-darkBlue hover:bg-hover-blue m-auto pr-6 py-[12px]"
        >
          <div className="relative top-[1px]">Poznaj pozostałe segmenty</div>
        </Button>
        <div class="flex items-center justify-center relative top-1">
          <div class="w-[115px] h-px bg-black"></div>
          <div class="px-2 text-[14px] leading-[14px]">LUB</div>
          <div class="w-[115px] h-px bg-black"></div>
        </div>
        <Link
          className="text-[20px] text-themeableColors-darkBlue underline"
          href={`/${blok.back_url.cached_url}`}
        >
          Wróć do quizu
        </Link>
      </div>
    </div>
  );
};

export default SegmentContent;
