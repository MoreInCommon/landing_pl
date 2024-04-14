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

export default function LongText({ blok }) {
  return (
    <div>
      {render(blok.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (props) => {
            return (
              <CenterContainer>
                <CenterText text={props} />
              </CenterContainer>
            );
          },
          [NODE_IMAGE]: (props, { src, alt, title }) => {
            return (
              <ImageComponent src={props || src} width={900} height={460} alt={alt} title={title} />
            );
          },
          [NODE_HEADING]: (props, { level }) => {
            if (level === 4)
              return (
                <CenterContainer>
                  <HeaderFour text={props} />
                </CenterContainer>
              );
            return (
              <CenterContainer>
                <HeaderFive text={props} />
              </CenterContainer>
            );
          },
        },
      })}
    </div>
  );
}
