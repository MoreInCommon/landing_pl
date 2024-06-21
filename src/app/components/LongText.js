"use client";

import {
  render,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_IMAGE,
} from "storyblok-rich-text-react-renderer";
import StandardText from "@/app/components/StandardText";
import CenterContainer from "@/app/components/CenterContainer";
import HeaderFour from "@/app/components/HeaderFour";
import CenterText from "@/app/components/CenterText";
import ImageComponent from "@/app/components/ImageComponent";
import HeaderFive from "@/app/components/HeaderFive";
import Quote from "@/app/components/Quote";
import MainHeader from "@/app/components/MainHeader";
import QuoteContainer from "@/app/components/QuoteContainer";
import ChartEmbed from "@/app/components/ChartEmbed";

export default function LongText({ blok }) {
  return (
    <div>
      {render(blok.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (props) => {
            if (!props?.[0]?.type && typeof props?.[0] !== "string") return null;
            if (
              props[0].type === "a" ||
              props[0].type === "span" ||
              props[0].type === "b" ||
              props[0].type === "paragraph" ||
              typeof props?.[0] === "string"
            ) {
              return (
                <CenterContainer>
                  <CenterText text={props} />
                </CenterContainer>
              );
            }
            return <div>{props}</div>;
          },
          [NODE_IMAGE]: (props, { src, alt, title }) => {
            return <ImageComponent src={src} width={900} height={460} alt={alt} title={title} />;
          },
          [NODE_HEADING]: (props, { level }) => {
            if (level === 1) return <MainHeader text={props} />;
            if (level === 4 || level === 3)
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
          ["page lead"]: (props) => (
            <StandardText text={props.text} className="mb-[72px] max-xl:mb-12" />
          ),
          ["quote container"]: (props) => <QuoteContainer blok={props} />,
          ["quote"]: (props) => <Quote blok={props} />,
          ["iframe"]: (props) => {
            return <ChartEmbed src={props.url.url} />;
          },
        },
      })}
    </div>
  );
}
