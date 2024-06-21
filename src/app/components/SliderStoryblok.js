"use client";
import Slider from "react-slick";
import Button from "@/app/components/Button";
import { storyblokEditable } from "@storyblok/react/rsc";
import { usePathname } from "next/navigation";

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
        width: 32,
        height: 32,
        borderRadius: 16,
        border: "1px solid var(--color-primary)",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180"
      >
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="var(--color-primary)"
        />
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
        width: 32,
        height: 32,
        borderRadius: 16,
        border: "1px solid var(--color-primary)",
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
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="var(--color-primary)"
        />
      </svg>
    </div>
  );
}

export default function CustomSlider({ blok }) {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("klimatyczny") ? "bg-themeGreen" : "";

  return (
    <div
      className={`max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile mb-20 m-t-[-40px] ${isGreenUrl}`}
    >
      <Slider {...settings} className="mx-6 max-lg:mx-0">
        {blok.slide.map((content, index) => (
          <div key={index} className="text-center px-4 max-lg:px-0" {...storyblokEditable(content)}>
            <div className="flex max-md:flex-col-reverse">
              <div className="flex-1 shadow-slider-shadow relative left-8 my-4 p-14 text-left z-10 bg-white max-md:left-0 max-md:mx-5 min-h-[420px] content-center">
                <h3
                  className={`text-themeableColors-darkBlue ${isGreenUrl ? "text-[96px]" : "text-[28px]"} leading-none font-bold mb-4`}
                >
                  {content.title}
                </h3>
                <p className="text-h4 text-black">{content.description}</p>
                <Button
                  type="submit"
                  classes="py-[14px] px-8 bg-themeableColors-darkBlue text-white text-[21px] leading-[16px] mt-12 min-w-[133px]"
                >
                  <div className="relative top-[1px]">Sprawdź</div>
                </Button>
              </div>
              <div className="flex-1 max-md:top-10 relative">
                <img src={content.image.filename} alt="img" className="h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
