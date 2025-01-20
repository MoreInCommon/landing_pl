"use client";
import { useEffect, useState } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import SegmentBar from "@/app/components/SegmentBar";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SegmentContent = ({ blok }) => {
  const { push } = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const resultParam = searchParams.get("result");
    setResult(resultParam);
  }, []);

  const isResult = result !== null;
  const changePage = (url) => {};
  return (
    <div {...storyblokEditable(blok)}>
      <div style={{ background: blok?.background_color?.color }} className="overflow-y-hidden px-4">
        <div className="py-20 max-w-[1000px] m-auto relative flex items-center justify-center">
          <SegmentsSvg className="absolute top-[-4.375rem] right-[-9.5rem] z-0 max-sm:hidden" />
          <img
            src={`${blok.image.filename}/m/`}
            alt={blok?.image?.alt || ""}
            className="w-[235px] max-h-[245px] object-contain absolute left-0 max-lg:hidden"
          />
          <div className="my-[100px] max-lg:mb-0 max-lg:mt-10">
            {isResult && (
              <h4 className="text-center mb-5 text-[24px] text-themeableColors-darkBlue font-bold">
                Grupa, którą reprezentujesz to:
              </h4>
            )}
            <h1
              className="text-[32px] font-bold uppercase max-sm:text-[24px] max-sm:text-center"
              style={{ color: blok?.color?.color }}
            >
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
      {isResult && (
        <div className="mt-10 flex flex-col gap-6 text-center">
          <Button
            onClick={() => changePage(blok.button_url.cached_url)}
            classes="bg-brand-darkBlue m-auto pr-6 py-[12px]"
          >
            <div className="relative top-[1px]">Poznaj pozostałe segmenty</div>
          </Button>
          <div className="flex items-center justify-center relative top-1">
            <div className="w-[115px] h-px bg-black"></div>
            <div className="px-2 text-[14px] leading-[14px]">LUB</div>
            <div className="w-[115px] h-px bg-black"></div>
          </div>
          <a
            className="text-[20px] text-themeableColors-darkBlue underline cursor-pointer"
            onClick={() => changePage(`/${blok.back_url.cached_url}`)}
          >
            Wróć do quizu
          </a>
        </div>
      )}
    </div>
  );
};

export default SegmentContent;
