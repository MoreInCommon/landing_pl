"use client";
import { twMerge } from "tailwind-merge";
import CenterContainer from "@/app/components/CenterContainer";
import { useRouter } from "next/navigation";

const Button = ({ blok }) => {
  const url = blok?.url?.cached_url || blok?.url?.url;
  const pdf = blok?.pdf?.filename;
  const { push } = useRouter();
  const color = {
    blue: "bg-brand-darkBlue hover:bg-hover-darkBlue",
    green: "bg-brand-darkGreen hover:bg-hover-green",
    lightblue: "bg-brand-blue hover:bg-hover-blue",
  };
  const changePage = () => {
    if (pdf) {
      window.open(pdf);
      return;
    }
    if (url.includes("http")) {
      window.open(url);
      return;
    }
    push(`/${url}`);
  };
  return (
    <CenterContainer>
      <div className="my-8 text-center">
        <button
          onClick={changePage}
          className={`py-[14px] px-8 rounded-full ${color[blok.color || "blue"]} text-white text-[21px] leading-[16px] min-w-[133px]`}
        >
          <div className="relative top-[1px]">{blok.text}</div>
        </button>
      </div>
    </CenterContainer>
  );
};

export default Button;
