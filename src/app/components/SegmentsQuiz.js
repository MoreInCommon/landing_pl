"use client";
import { storyblokEditable } from "@storyblok/react";
import Button from "@/app/components/Button";
import SegmentsSvg from "@/app/components/SegmentsSvg";

const SegmentsQuiz = ({ blok }) => {
  return (
    <div className="max-w-full m-auto mt-20 px-[140px]">
      <div
        className="bg-[#F8F8F9] p-8 mt-12 text-black text-left relative overflow-hidden"
        {...storyblokEditable}
      >
        <SegmentsSvg className="absolute top-[-6.375rem] left-[5rem] z-0" />
        <div className="max-w-[530px] ml-auto">
          <div className="inline-block heading-underline">
            <h4 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">
              Quiz 7 segementów
            </h4>
          </div>
          <h3 className="text-h3 mt-2">Sprawdź do której grupy przynależysz</h3>
          <p className="text-bodyRegular mb-6">
            Możesz odpowiedzieć na serię pytań (3-5 minut) dotyczących twoich przekonań i wartości,
            a nasz algorytm wskaże, do której z siedmiu grup najlepiej pasujesz.
          </p>
          <Button
            type="submit"
            classes="py-[14px] px-8 bg-themeableColors-darkBlue  text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
          >
            <div className="relative top-[1px]">Rozwiąż Quiz</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SegmentsQuiz;
