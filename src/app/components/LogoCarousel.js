"use client";

import Image from "next/image";
import Slider from "react-slick";
import { storyblokEditable } from "@storyblok/react";

function CarouselArrow({ className, style, onClick, previous = false }) {
  return (
    <button
      type="button"
      className={`${className} before:hidden disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-brand-darkBlue`}
      style={style}
      onClick={onClick}
      disabled={!onClick}
      aria-label={previous ? "Poprzednie logotypy" : "Następne logotypy"}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={previous ? "M15 5L8 12L15 19" : "M9 5L16 12L9 19"}
          stroke="#224099"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function LogoCarousel({ blok }) {
  const logos = (blok.logos || []).filter((logo) => logo.filename);
  if (!logos.length) return null;

  const settings = {
    infinite: false,
    slidesToShow: Math.min(4, logos.length),
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    nextArrow: <CarouselArrow />,
    prevArrow: <CarouselArrow previous />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: Math.min(2, logos.length) } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="max-w-standard mx-auto w-full max-xl:px-tablet max-sm:px-0 my-12"
      {...storyblokEditable(blok)}
      aria-label={blok.title || "Logotypy partnerów"}
    >
      {blok.title && <h2 className="text-h2 font-bold text-black mb-8">{blok.title}</h2>}
      <div className="px-8 [&_.slick-list]:!mx-0">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={`${logo.id || logo.filename}-${index}`} className="px-3">
              <div className="relative h-32 w-full">
                <Image
                  src={logo.filename}
                  alt={logo.alt || logo.title || "Logo partnera"}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 205px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
