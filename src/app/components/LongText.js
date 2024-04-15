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
import MainHeader from "@/app/components/MainHeader";

export default function LongText({ blok }) {
  return (
    <div>
      {render(blok.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (props) => {
            if (!props?.[0]?.type) return null;
            if (props[0].type !== "span") return <div>{props}</div>;
            return (
              <CenterContainer>
                <CenterText text={props} />
              </CenterContainer>
            );
          },
          [NODE_IMAGE]: (props, { src, alt, title }) => {
            return <ImageComponent src={src} width={900} height={460} alt={alt} title={title} />;
          },
          [NODE_HEADING]: (props, { level }) => {
            if (level === 1) return <MainHeader text={props} />;
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
        blokResolvers: {
          ["page lead"]: (props) => <StandardText text={props.text} />,
        },
      })}
    </div>
  );
}
