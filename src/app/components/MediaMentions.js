"use client";
import { useState } from "react";
import CenterText from "@/app/components/CenterText";
import Pagination from "@/app/components/Pagination";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";

const MediaMentions = ({ blok }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const copiedMedia = [...blok.media];
  const sortedMedia = copiedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedMedia.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedMedia.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="text-black w-full mb-4 text-bodyRegular max-xl:px-tablet max-sm:px-0 [&>a]:underline max-w-standard m-auto w-full ">
        <CenterText
          text={
            <div className="flex gap-4 flex-col">
              <p className="flex gap-2 items-center">
                <a href={`mailto:${"adam@moreincommon.com"}`}>
                  <span className="sr-only">email</span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2497_7472)">
                      <circle
                        cx="18"
                        cy="18"
                        r="17.5"
                        className="fill-themeableColors-darkBlue stroke-themeableColors-darkBlue"
                      />
                      <mask
                        id="mask0_2497_7472"
                        styles="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="6"
                        width="24"
                        height="24"
                      >
                        <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2497_7472)">
                        <path
                          d="M18 26.5C16.8254 26.5 15.7208 26.2769 14.6864 25.8307C13.6519 25.3846 12.7521 24.779 11.9869 24.0142C11.2217 23.2493 10.6159 22.3499 10.1696 21.3159C9.72319 20.2819 9.5 19.1771 9.5 18.0015C9.5 16.8259 9.72309 15.7208 10.1693 14.6864C10.6154 13.6519 11.221 12.7521 11.9858 11.9869C12.7507 11.2217 13.6501 10.6159 14.6841 10.1696C15.7181 9.72319 16.8229 9.5 17.9985 9.5C19.1741 9.5 20.2792 9.72313 21.3136 10.1694C22.3481 10.6156 23.2479 11.2213 24.0131 11.9863C24.7783 12.7513 25.3841 13.6508 25.8304 14.685C26.2768 15.7192 26.5 16.8242 26.5 18V19.0909C26.5 19.9076 26.2196 20.601 25.6588 21.1711C25.098 21.7412 24.4091 22.0263 23.5921 22.0263C23.0644 22.0263 22.5752 21.8973 22.1244 21.6392C21.6736 21.381 21.3174 21.026 21.0559 20.5741C20.6693 21.0352 20.2125 21.3925 19.6854 21.646C19.1583 21.8995 18.5965 22.0263 18 22.0263C16.8827 22.0263 15.9324 21.6346 15.1489 20.8511C14.3654 20.0676 13.9737 19.1173 13.9737 18C13.9737 16.8827 14.3654 15.9324 15.1489 15.1489C15.9324 14.3654 16.8827 13.9737 18 13.9737C19.1173 13.9737 20.0676 14.3654 20.8511 15.1489C21.6346 15.9324 22.0263 16.8827 22.0263 18V19.0909C22.0263 19.5302 22.1774 19.9056 22.4797 20.2171C22.7819 20.5285 23.1528 20.6842 23.5921 20.6842C24.0314 20.6842 24.4023 20.5285 24.7045 20.2171C25.0068 19.9056 25.1579 19.5302 25.1579 19.0909V18C25.1579 16.0017 24.4645 14.3092 23.0776 12.9224C21.6908 11.5355 19.9983 10.8421 18 10.8421C16.0017 10.8421 14.3092 11.5355 12.9224 12.9224C11.5355 14.3092 10.8421 16.0017 10.8421 18C10.8421 19.9983 11.5355 21.6908 12.9224 23.0776C14.3092 24.4645 16.0017 25.1579 18 25.1579H22.4737V26.5H18ZM18 20.6842C18.7456 20.6842 19.3794 20.4233 19.9013 19.9013C20.4233 19.3794 20.6842 18.7456 20.6842 18C20.6842 17.2544 20.4233 16.6206 19.9013 16.0987C19.3794 15.5767 18.7456 15.3158 18 15.3158C17.2544 15.3158 16.6206 15.5767 16.0987 16.0987C15.5767 16.6206 15.3158 17.2544 15.3158 18C15.3158 18.7456 15.5767 19.3794 16.0987 19.9013C16.6206 20.4233 17.2544 20.6842 18 20.6842Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2497_7472">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                Adam Traczyk, Dyrektor zarządzający
              </p>
              <p className="flex gap-2 items-center">
                <a href={`mailto:${"maria@moreincommon.com"}`}>
                  <span className="sr-only">email</span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2497_7472)">
                      <circle
                        cx="18"
                        cy="18"
                        r="17.5"
                        className="fill-themeableColors-darkBlue stroke-themeableColors-darkBlue"
                      />
                      <mask
                        id="mask0_2497_7472"
                        styles="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="6"
                        width="24"
                        height="24"
                      >
                        <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2497_7472)">
                        <path
                          d="M18 26.5C16.8254 26.5 15.7208 26.2769 14.6864 25.8307C13.6519 25.3846 12.7521 24.779 11.9869 24.0142C11.2217 23.2493 10.6159 22.3499 10.1696 21.3159C9.72319 20.2819 9.5 19.1771 9.5 18.0015C9.5 16.8259 9.72309 15.7208 10.1693 14.6864C10.6154 13.6519 11.221 12.7521 11.9858 11.9869C12.7507 11.2217 13.6501 10.6159 14.6841 10.1696C15.7181 9.72319 16.8229 9.5 17.9985 9.5C19.1741 9.5 20.2792 9.72313 21.3136 10.1694C22.3481 10.6156 23.2479 11.2213 24.0131 11.9863C24.7783 12.7513 25.3841 13.6508 25.8304 14.685C26.2768 15.7192 26.5 16.8242 26.5 18V19.0909C26.5 19.9076 26.2196 20.601 25.6588 21.1711C25.098 21.7412 24.4091 22.0263 23.5921 22.0263C23.0644 22.0263 22.5752 21.8973 22.1244 21.6392C21.6736 21.381 21.3174 21.026 21.0559 20.5741C20.6693 21.0352 20.2125 21.3925 19.6854 21.646C19.1583 21.8995 18.5965 22.0263 18 22.0263C16.8827 22.0263 15.9324 21.6346 15.1489 20.8511C14.3654 20.0676 13.9737 19.1173 13.9737 18C13.9737 16.8827 14.3654 15.9324 15.1489 15.1489C15.9324 14.3654 16.8827 13.9737 18 13.9737C19.1173 13.9737 20.0676 14.3654 20.8511 15.1489C21.6346 15.9324 22.0263 16.8827 22.0263 18V19.0909C22.0263 19.5302 22.1774 19.9056 22.4797 20.2171C22.7819 20.5285 23.1528 20.6842 23.5921 20.6842C24.0314 20.6842 24.4023 20.5285 24.7045 20.2171C25.0068 19.9056 25.1579 19.5302 25.1579 19.0909V18C25.1579 16.0017 24.4645 14.3092 23.0776 12.9224C21.6908 11.5355 19.9983 10.8421 18 10.8421C16.0017 10.8421 14.3092 11.5355 12.9224 12.9224C11.5355 14.3092 10.8421 16.0017 10.8421 18C10.8421 19.9983 11.5355 21.6908 12.9224 23.0776C14.3092 24.4645 16.0017 25.1579 18 25.1579H22.4737V26.5H18ZM18 20.6842C18.7456 20.6842 19.3794 20.4233 19.9013 19.9013C20.4233 19.3794 20.6842 18.7456 20.6842 18C20.6842 17.2544 20.4233 16.6206 19.9013 16.0987C19.3794 15.5767 18.7456 15.3158 18 15.3158C17.2544 15.3158 16.6206 15.5767 16.0987 16.0987C15.5767 16.6206 15.3158 17.2544 15.3158 18C15.3158 18.7456 15.5767 19.3794 16.0987 19.9013C16.6206 20.4233 17.2544 20.6842 18 20.6842Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2497_7472">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                Maria Wittels, Starsza specjalistka ds. komunikacji i badaczka
              </p>
            </div>
          }
        />
      </div>
      <div
        className="flex gap-10 flex-wrap mt-[72px] items-stretch max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center"
        {...storyblokEditable(blok)}
      >
        {currentItems.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </div>
      <div className="flex justify-center mt-[64px]">
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={changePage} />
      </div>
    </>
  );
};

export default MediaMentions;
