"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import useScroll from "@/app/useScroll";
import Button from "@/app/components/Button";

const segments = [
  {
    title: "Postępowi Zapaleńcy",
    color: "#D3405B",
    image: "/tempImages/Avatar_1.png",
    url: "/siedem-segmentow/postepowi-zapalency",
  },
  {
    title: "Pasywni Liberałowie",
    color: "#D87108",
    image: "/tempImages/Avatar_2.png",
    url: "/siedem-segmentow/pasywni-liberalowie",
  },
  {
    title: "Zawiedzenie Samotnicy",
    color: "#3A7F8E",
    image: "/tempImages/Avatar_3.png",
    url: "/siedem-segmentow/zawiedzenie-samotnicy",
  },
  {
    title: "Niezaangażowani Normalsi",
    color: "#445170",
    image: "/tempImages/Avatar_4.png",
    url: "/siedem-segmentow/niezaangazowani-normalsi",
  },
  {
    title: "Spełnieni Lokaliści",
    color: "#37821E",
    image: "/tempImages/Avatar_5.png",
    url: "/siedem-segmentow/spelnieni-lokalisci",
  },
  {
    title: "Dumni patrioci",
    color: "#C11A37",
    image: "/tempImages/Avatar_6.png",
    url: "/siedem-segmentow/dumni-patrioci",
  },
  {
    title: "Oddani Tradycjonaliści",
    color: "#77539E",
    image: "/tempImages/Avatar_7.png",
    url: "/siedem-segmentow/oddani-tradycjonaliści",
  },
];

const ClimateContent = ({ blok }) => {
  const hasSegments = blok.segment;
  const { containerRef, ScrollRightButton, ScrollLeftButton } = useScroll();

  return (
    <>
      <div className="max-xl:px-4 ">
        <CenteredSection {...storyblokEditable(blok)}>
          <MainHeader className="green-heading-underline" text={blok.title} />
          <StoryblokComponent blok={blok.text[0]} />
        </CenteredSection>
      </div>
      {hasSegments && (
        <div className="relative m-auto px-[140px] max-w-full max-md:px-6 max-sm:px-4">
          <ScrollLeftButton />
          <div ref={containerRef} className="flex gap-4 my-8 mt-16 mb-10 overflow-x-scroll">
            {segments.map((content, index) => (
              <div className="flex flex-col gap-4 min-w-[300px]" key={index}>
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
          <ScrollRightButton />
        </div>
      )}
    </>
  );
};

export default ClimateContent;
