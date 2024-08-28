"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import useScroll from "@/app/useScroll";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const segments = [
  {
    title: "Postępowi zapaleńcy",
    color: "#D3405B",
    image: "/tempImages/Avatar_1.png",
    url: "/fokus-na-klimat/postepowi-zapalency",
  },
  {
    title: "Pasywni liberałowie",
    color: "#D87108",
    image: "/tempImages/Avatar_2.png",
    url: "/fokus-na-klimat/pasywni-liberalowie",
  },
  {
    title: "Zawiedzenie samotnicy",
    color: "#3A7F8E",
    image: "/tempImages/Avatar_3.png",
    url: "/fokus-na-klimat/zawiedzeni-samotnicy",
  },
  {
    title: "Niezaangażowani normalsi",
    color: "#445170",
    image: "/tempImages/Avatar_4.png",
    url: "/fokus-na-klimat/niezaangazowani-normalsi",
  },
  {
    title: "Spełnieni lokaliści",
    color: "#37821E",
    image: "/tempImages/Avatar_5.png",
    url: "/fokus-na-klimat/spelnieni-lokalisci",
  },
  {
    title: "Dumni patrioci",
    color: "#C11A37",
    image: "/tempImages/Avatar_6.png",
    url: "/fokus-na-klimat/dumni-patrioci",
  },
  {
    title: "Oddani tradycjonaliści",
    color: "#77539E",
    image: "/tempImages/Avatar_7.png",
    url: "/fokus-na-klimat/oddani-tradycjonalisci",
  },
];

const ClimateContent = ({ blok }) => {
  const hasSegments = blok.segment;
  const { containerRef, ScrollRightButton, ScrollLeftButton } = useScroll();
  const { push } = useRouter();
  const changePage = (url) => {
    push(`${url}`);
  };
  return (
    <>
      <div className="max-xl:px-4 ">
        <CenteredSection {...storyblokEditable(blok)}>
          <MainHeader className="green-heading-underline" text={blok.title} />
          <StoryblokComponent blok={blok.text[0]} />
        </CenteredSection>
      </div>
      {hasSegments && (
        <div className="relative m-auto px-[140px] max-lg:px-10 max-w-full max-md:px-6 max-sm:px-4 max-sm:mb-14">
          <div className="overflow-auto">
            <ScrollLeftButton />
          </div>
          <div ref={containerRef} className="flex gap-4 mt-16 overflow-x-scroll pb-[20px]">
            {segments.map((content, index) => (
              <div
                className="flex flex-col gap-4 min-w-[300px] cursor-pointer"
                key={index}
                onClick={() => changePage(content.url)}
              >
                <img src={content.image} alt={content.title} className="h-[205px] object-contain" />
                <Button
                  onClick={() => changePage(content.url)}
                  classes={`mr-auto mt-2 self-start mx-auto`}
                  style={{ background: content.color }}
                >
                  <div className="relative top-[1px]">{content.title}</div>
                </Button>
              </div>
            ))}
          </div>
          <div className="overflow-auto">
            <ScrollRightButton />
          </div>
        </div>
      )}
    </>
  );
};

export default ClimateContent;
