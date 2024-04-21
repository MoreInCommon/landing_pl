"use client";
import { storyblokEditable } from "@storyblok/react";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import { Link } from "react-scroll";
import { segments } from "@/app/utils";
import CenterContainer from "@/app/components/CenterContainer";
import Segment from "@/app/components/Segment";
import CenterText from "@/app/components/CenterText";

const Sidebar = ({ segments }) => {
  return (
    <div className="sticky top-[90px] min-w-[20rem] text-black p-5">
      {segments.map((item, index) => (
        <Link
          key={index}
          to={item.title}
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="block cursor-pointer pl-4 border-l-4 border-transparent font-medium	 p-2 text-[#858D9C] text-[18px]"
          activeClass="text-[#224099!important] border-[#224099!important]"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const SegmentationContent = ({ blok }) => {
  return (
    <div {...storyblokEditable}>
      <CenteredSection>
        <MainHeader text={"Siedem segmentów zamiast dwóch plemion"} className="mt-[72px] mb-10" />
      </CenteredSection>
      <CenterContainer className="text-center">
        <CenterText
          text={
            "Badania przeprowadzone przez More in Common zawierające elementy socjologii, psychologii i politologii. Analizie poddane zostały wyznawane wartości, fundamenty moralne i stosunek do świata zewnętrznego."
          }
        />
      </CenterContainer>
      <div className={`max-w-full m-auto w-full flex gap-10`}>
        <div className="overflow-visible">
          <Sidebar segments={segments} />
        </div>
        <div className="p-5 text-mono-neutral11">
          {segments.map((item, index) => (
            <Segment key={index} blok={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SegmentationContent;
