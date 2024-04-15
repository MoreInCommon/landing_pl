"use client";

import {
  render,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_IMAGE,
} from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";
import StandardText from "@/app/components/StandardText";
import CenterContainer from "@/app/components/CenterContainer";
import HeaderFour from "@/app/components/HeaderFour";
import CenterText from "@/app/components/CenterText";
import ImageComponent from "@/app/components/ImageComponent";
import HeaderFive from "@/app/components/HeaderFive";
import Quote from "@/app/components/Quote";
import MainHeader from "@/app/components/MainHeader";

export default function Statut({ blok }) {
  return (
    <div className="text-center">
      {render(blok.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (props) => {
            if (!props?.[0]?.type) return null;
            if (props[0].type === "span" || props[0].type === "paragraph") {
              return (
                <CenterContainer className="mt-2">
                  <CenterText text={props} />
                </CenterContainer>
              );
            }
            return <div>{props}</div>;
          },
          [NODE_HEADING]: (props, { level }) => {
            if (level === 3)
              return (
                <h4 className="text-h4 text-brand-darkBlue leading-[24px] mt-10 mb-10 max-xl:px-tablet max-sm:px-mobile font-bold">
                  {props}
                </h4>
              );
            if (level === 4)
              return (
                <CenterContainer>
                  <h4 className="text-h5 text-black leading-[24px] mt-10 mb-10 max-xl:px-tablet max-sm:px-mobile font-bold">
                    {props}
                  </h4>
                </CenterContainer>
              );
            return (
              <h6 className="text-h5 text-black mt-2 max-xl:px-tablet max-sm:px-mobile font-bold">
                {props}
              </h6>
            );
          },
        },
      })}
    </div>
  );
}
