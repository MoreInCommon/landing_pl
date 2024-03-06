"use client";
import Slider from "react-slick";
import Image2 from "../../../public/tempImages/s3.png";
import Button from "@/app/components/Button";

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
        border: "1px solid #03641B",
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
          fill="#03641B"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
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
        border: "1px solid #03641B",
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
          fill="#03641B"
        />
      </svg>
    </div>
  );
}

const contents = [
  {
    title: "17%",
    description:
      "Polek i Polaków uważa przeciwdziałanie kryzysowi klimatycznemu i zanieczyszczeniu środowiska za jedno z najważniejszych wyzwań stojących przed Polską",
    img: Image2,
  },
  {
    title: "60%",
    description: "Polek i Polaków obawia się zmian klimatu",
    img: Image2,
  },
  {
    title: "17%",
    description:
      "Polek i Polaków uważa przeciwdziałanie kryzysowi klimatycznemu i zanieczyszczeniu środowiska za jedno z najważniejszych wyzwań stojących przed Polską",
    img: Image2,
  },
  {
    title: "60%",
    description: "Polek i Polaków obawia się zmian klimatu",
    img: Image2,
  },
];

export default function CustomSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="mx-6">
      {contents.map((content, index) => (
        <div key={index} className="text-center px-4">
          <div className="flex">
            <div className="flex-1 shadow-slider-shadow relative left-8 my-4 p-14 text-left bg-white">
              <h3 className="text-brand-darkGreen text-[96px] leading-none font-bold">
                {content.title}
              </h3>
              <p className="text-h4 text-black">{content.description}</p>
              <Button
                type="submit"
                classes="py-[14px] px-8 bg-brand-darkGreen text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
              >
                <div className="relative top-[1px]">Sprawdź</div>
              </Button>
            </div>
            <div className="flex-1">
              <img src={content.img.src} alt="img" className="h-full" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
