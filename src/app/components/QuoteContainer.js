"use client";
import { useRef } from "react";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import Slider from "react-slick";
import { getColors } from "@/app/utils";

const QuoteContainer = ({ blok }) => {
  const currentItems = blok?.quote || [];
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="flex align-center gap-1">
        <div
          className={`max-sm:slick-hidden`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={previous}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9425 9.88L19.0625 8L11.0625 16L19.0625 24L20.9425 22.12L14.8358 16L20.9425 9.88Z"
              fill="#1D2330"
            />
          </svg>
        </div>
        <div className="relative top-[3px]">
          <ul> {dots} </ul>
        </div>
        <div
          className={`max-sm:slick-hidden`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={next}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M11.0575 9.88L12.9375 8L20.9375 16L12.9375 24L11.0575 22.12L17.1642 16L11.0575 9.88Z"
                fill="#1D2330"
              />
            </g>
          </svg>
        </div>
      </div>
    ),
  };

  const { bg, text, lineBg } = getColors(blok?.[currentItems]?.[0]?.color);

  return (
    <div
      {...storyblokEditable(blok)}
      className={`quoteSlick ${bg} bg-[url('/newsletter_bg.png')] my-20`}
    >
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="mx-6 max-lg:mx-0"
      >
        {currentItems.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} multiple />
        ))}
      </Slider>
    </div>
  );
};

export default QuoteContainer;
