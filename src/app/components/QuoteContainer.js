"use client";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        bottom: 60,
        top: "auto",
        left: 200,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
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
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden max-sm:slick-hidden`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        bottom: 60,
        top: "auto",
        left: 100,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9425 9.88L19.0625 8L11.0625 16L19.0625 24L20.9425 22.12L14.8358 16L20.9425 9.88Z"
          fill="#1D2330"
        />
      </svg>
    </div>
  );
}
const QuoteContainer = ({ blok }) => {
  const currentItems = blok?.quote || [];
  var settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="bg-black">
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div {...storyblokEditable(blok)} className="quoteSlick">
      <Slider {...settings} className="mx-6 max-lg:mx-0">
        {currentItems.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </Slider>
    </div>
  );
};

export default QuoteContainer;
