"use client";

import {
  render,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_IMAGE,
  NODE_UL,
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
import Button from "@/app/components/ButtonStoryblok";
import dynamic from "next/dynamic";
const ChartEmbed = dynamic(() => import("@/app/components/ChartEmbed"), { ssr: false });

export default function LongText({ blok }) {
  const color = blok?.decoration_color?.color;
  return (
    <div>
      {render(blok.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (props) => {
            if (!props?.[0]?.type && typeof props?.[0] !== "string") return null;
            if (
              props[0].type === "a" ||
              props[0].type === "sup" ||
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
            if (level === 6)
              return (
                <CenterContainer>
                  <h6
                    className={`text-[12px] text-black font-normal mt-4 mb-2 max-xl:px-tablet max-sm:px-mobile`}
                  >
                    {props}
                  </h6>
                </CenterContainer>
              );
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
          [NODE_UL]: (props) => {
            return (
              <CenterContainer>
                <ul className="space-y-4 mt-8 mb-12">
                  {props.map((child, i) => {
                    return (
                      <li className="flex space-x-4 items-baseline mt-0" key={i}>
                        <div
                          className={`w-[6px] h-[6px] rounded-full flex items-center justify-center relative top-[-3px]`}
                          style={{ backgroundColor: color }}
                        />
                        <span>{child}</span>
                      </li>
                    );
                  })}
                </ul>
              </CenterContainer>
            );
            return <ul class="space-y-4 my-8"></ul>;
          },
        },
        blokResolvers: {
          ["page lead"]: (props) => (
            <StandardText blok={props} className="mb-[72px] max-xl:mb-12" />
          ),
          ["quote container"]: (props) => <QuoteContainer blok={props} />,
          ["quote"]: (props) => <Quote blok={props} />,
          ["button"]: (props) => <Button blok={props} />,
          ["iframe"]: (props) => {
            return <ChartEmbed src={props.url.url} />;
          },
        },
      })}
    </div>
  );
}
