"use client";
import Button from "@/app/components/Button";

export default function Well({ title, text, button }) {
  return (
    <div className="max-w-full m-auto px-[140px] max-lg:px-10 max-sm:px-4">
      <div className="bg-[#F8F8F9] p-8 mt-12 text-black text-center">
        <h4 className="text-h4 font-bold mb-2">{title}</h4>
        <p className="text-bodyRegular">{text}</p>
        <Button
          type="submit"
          classes="py-[14px] px-8 bg-brand-darkBlue text-white text-[21px] leading-[16px] m-auto mt-6"
        >
          <div className="relative top-[1px]">{button}</div>
        </Button>
      </div>
    </div>
  );
}
