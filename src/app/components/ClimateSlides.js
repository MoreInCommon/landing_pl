"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { storyblokEditable } from "@storyblok/react";
import useScroll from "@/app/useScroll";

const ClimateSlides = ({ blok }) => {
  const formattedArticles = blok?.articles
    ? blok.articles.map((a) => {
        return {
          image: {
            filename: a?.content?.body?.find((b) => b.component === "article header")?.image
              ?.filename,
          },
          title: a?.name,
          url: {
            cached_url: a?.full_slug,
          },
        };
      })
    : null;
  const contents = formattedArticles || blok.slide;
  const { containerRef, ScrollRightButton, ScrollLeftButton } = useScroll();
  const router = useRouter();

  const handleNavigation = useCallback(
    (event, url) => {
      event.preventDefault();
      const currentUrl = window.location.href;
      router.push(url);
      window.location.href = url;
      window.history.replaceState(null, "", currentUrl);
    },
    [router]
  );

  if (contents?.length === 1) {
    return (
      <div className="bg-[#F8F8F9] max-sm:p-6 p-[72px] mt-[72px]">
        <div className="relative m-auto max-w-full" {...storyblokEditable(blok)}>
          <div className="flex gap-4 my-8 mt-10 mb-10 overflow-x-scroll">
            {contents.map((content, index) => (
              <Link
                className="flex max-lg:flex-col p-8 m-auto items-center gap-8 bg-white w-full max-w-[1000px]"
                href={`/${content?.url?.cached_url}`}
                key={index}
                onClick={(event) => handleNavigation(event, `/${content?.url?.cached_url}`)}
              >
                <div className="flex-1">
                  <img src={content?.image?.filename} alt="img" />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-[28px] font-medium text-black">{content.title}</h4>
                  <p className="text-black mt-4">{content.description}</p>
                  <p className="text-black flex items-center self-end mt-2">
                    Czytaj dalej{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                        fill="black"
                        stroke="transparent"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative m-auto px-[140px] max-lg:px-10 max-w-full max-md:px-6 max-sm:px-4"
      {...storyblokEditable(blok)}
    >
      <ScrollLeftButton />
      <div ref={containerRef} className="flex gap-4 my-8 mt-10 mb-10 overflow-x-scroll">
        {contents?.map((content, index) => (
          <Link
            className="flex p-6 flex-col items-center gap-2 border-[1px] border-mono-neutral22 min-w-[325px]"
            href={`/${content?.url?.cached_url}`}
            key={index}
            onClick={(event) => handleNavigation(event, `/${content?.url?.cached_url}`)}
          >
            <h4 className="text-h4 text-black text-center min-h-[60px] ellipsis">
              {content.title}
            </h4>
            <img src={content?.image?.filename} alt="img" className="min-h-[330px]" />
            <p className="text-black flex items-center self-end mt-2">
              Czytaj dalej{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                  fill="black"
                  stroke="transparent"
                  strokeWidth="0.5"
                />
              </svg>
            </p>
          </Link>
        ))}
      </div>
      <ScrollRightButton />
    </div>
  );
};

export default ClimateSlides;
