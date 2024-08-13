"use client";
import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import Notification from "@/app/components/Notification";
import { TwitterShareButton, LinkedinShareButton } from "next-share";
import { usePathname } from "next/navigation";

export default function ClimateArticleHeader({ blok }) {
  const formatter = new Intl.DateTimeFormat("pl", {
    month: "long",
    year: "numeric",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  let currentUrl;
  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("fokus-na-klimat") ? "bg-themeGreen" : "";
  if (typeof window !== "undefined") {
    currentUrl = window?.location?.toString();
  }

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentUrl);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    return () => {
      clearTimeout();
    };
  };
  return (
    <div
      className={`text-black text-bodyRegular px-6 ${isGreenUrl} mb-10`}
      {...storyblokEditable(blok)}
    >
      {showSuccess && (
        <Notification message={"Pomyślnie skopiowano link!"} setShowSuccess={setShowSuccess} />
      )}
      <div className="text-center">
        <h1
          className="font-bold text-[64px] mt-2 relative z-[1] leading-[84px] max-sm:text-[36px] max-sm:leading-[46px]"
          style={{ color: blok.color.color }}
        >
          {blok.title} <br />
          <span className="text-[#03641B]">o klimacie</span>
        </h1>
      </div>
      <p className="text-black max-w-[818px] w-full mt-6 font-medium text-bodyRegular mx-auto mb-20 max-md:mb-8">
        {blok.text}
      </p>
      <div className="mx-auto flex items-center justify-center gap-8 max-w-[800px] max-md:flex-col max-md:items-baseline max-md:gap-4">
        <div>
          <span className="font-medium">Data publikacji:</span>{" "}
          {formatter?.format(blok?.date ? new Date(blok?.date) : new Date())}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Udostępnij:</span>
          <div className="flex gap-3">
            <TwitterShareButton
              url={currentUrl || ""}
              title={`${blok.title}`}
              via={`moreincommon_pl`}
            >
              <a href={""} className="pointer" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">X</span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_308_1948)">
                    <path
                      className="fill-themeableColors-darkBlue"
                      d="M19.4767 16.6218L26.0302 9H24.4772L18.7869 15.6179L14.242 9H9L15.8727 19.0074L9 27H10.553L16.5622 20.0113L21.3619 27H26.6039L19.4763 16.6218H19.4767ZM17.3496 19.0956L16.6533 18.0991L11.1126 10.1697H13.498L17.9694 16.5689L18.6657 17.5655L24.4779 25.8835H22.0926L17.3496 19.096V19.0956Z"
                    />
                    <circle className="stroke-themeableColors-darkBlue" cx="18" cy="18" r="17.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_1948">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </TwitterShareButton>
            <LinkedinShareButton url={currentUrl || ""}>
              <a href={""} className="pointer" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">linkedin</span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_308_1952)">
                    <g clipPath="url(#clip1_308_1952)">
                      <path
                        d="M13.82 11.5046C13.82 12.4252 13.08 13.1712 12.1667 13.1712C11.2533 13.1712 10.5133 12.4252 10.5133 11.5046C10.5133 10.5846 11.2533 9.83789 12.1667 9.83789C13.08 9.83789 13.82 10.5846 13.82 11.5046ZM13.8333 14.5046H10.5V25.1712H13.8333V14.5046ZM19.1547 14.5046H15.8427V25.1712H19.1553V19.5719C19.1553 16.4586 23.1747 16.2039 23.1747 19.5719V25.1712H26.5V18.4172C26.5 13.1639 20.552 13.3552 19.1547 15.9412V14.5046Z"
                        className="fill-themeableColors-darkBlue"
                      />
                    </g>
                    <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_1952">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_308_1952">
                      <rect width="16" height="16" fill="white" transform="translate(10.5 9.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </LinkedinShareButton>
            <a href="#" onClick={copyToClipboard} className="pointer">
              <span className="sr-only">kopiuj link</span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1711_11975)">
                  <mask
                    id="mask0_1711_11975"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="1.41016"
                      y="18.0723"
                      width="24"
                      height="24"
                      transform="rotate(-45 1.41016 18.0723)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1711_11975)">
                    <path
                      d="M20.7468 22.124L18.0816 24.7892C17.1937 25.6771 16.124 26.1211 14.8725 26.1211C13.621 26.1212 12.5514 25.6774 11.6636 24.7896C10.7759 23.9019 10.3319 22.8321 10.3317 21.5803C10.3316 20.3286 10.7754 19.2588 11.6633 18.3709L14.3285 15.7057L15.3891 16.7663L12.7239 19.4315C12.1301 20.0253 11.8332 20.7415 11.8332 21.5801C11.8332 22.4186 12.1301 23.1348 12.7239 23.7286C13.3177 24.3224 14.0339 24.6193 14.8724 24.6193C15.711 24.6193 16.4272 24.3224 17.0209 23.7286L19.6862 21.0634L20.7468 22.124ZM16.2594 21.2537L15.1988 20.1931L20.5021 14.8898L21.5627 15.9504L16.2594 21.2537ZM22.433 20.4378L21.3724 19.3772L24.0376 16.7119C24.6314 16.1181 24.9283 15.402 24.9283 14.5634C24.9283 13.7248 24.6314 13.0087 24.0376 12.4149C23.4438 11.8211 22.7276 11.5242 21.8891 11.5242C21.0505 11.5242 20.3343 11.8211 19.7406 12.4149L17.0753 15.0801L16.0147 14.0195L18.6799 11.3543C19.5678 10.4664 20.6375 10.0224 21.889 10.0223C23.1405 10.0222 24.2101 10.4661 25.0979 11.3538C25.9856 12.2416 26.4296 13.3114 26.4298 14.5631C26.4299 15.8149 25.9861 16.8847 25.0982 17.7726L22.433 20.4378Z"
                      className="fill-themeableColors-darkBlue"
                    />
                  </g>
                  <circle cx="18" cy="18" r="17.5" className="stroke-themeableColors-darkBlue" />
                </g>
                <defs>
                  <clipPath id="clip0_1711_11975">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
