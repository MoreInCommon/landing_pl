"use client";
import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const SegmentsQuiz = ({ blok }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("fokus-na-klimat") ? "bg-themeGreen" : "";
  const handleClick = () => {
    const currentUrl = window.location.href;
    const url = `/${blok?.button_url?.cached_url}`;
    router.push(url);
    window.history.replaceState(null, "", currentUrl);
  };
  const [result, setResult] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const resultParam = searchParams.get("result");
    setResult(resultParam);
  }, []);

  const isResult = result !== null;

  if (isResult) return null;
  return (
    <div
      className={`max-w-full m-auto mt-20 px-[140px] max-lg:px-10 max-sm:px-4 max-sm:mt-0 ${isGreenUrl}`}
    >
      <div
        className={`bg-[#F8F8F9] p-8 mt-12 max-sm:mt-0 text-black flex flex-col items-center relative overflow-hidden border-b-4 border-[${isGreenUrl ? "#75C05C" : "transparent"}] border-solid max-sm:p-5`}
        {...storyblokEditable(blok)}
      >
        <Image src={"/Segments.png"} alt="" width={467} height={65} />
        <div className="max-w-[530px] text-center mt-2">
          <h4 className="text-themeableColors-darkBlue text-[28px] font-bold mt-2 mb-[18px] pr-4 relative z-[1]">
            {blok.title}
          </h4>
          <p className="text-bodyRegular mb-[32px]">{blok.description}</p>
          <Button
            onClick={handleClick}
            classes="py-[14px] m-auto px-8 bg-themeableColors-darkBlue text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
          >
            <div className="relative top-[1px]">{blok.button_text}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SegmentsQuiz;
