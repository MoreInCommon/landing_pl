"use client";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import { storyblokEditable } from "@storyblok/react";

export default function ArticleHeader({ blok }) {
  const formatter = new Intl.DateTimeFormat("pl", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="text-black text-bodyRegular" {...storyblokEditable(blok)}>
      <div className="text-center">
        <div className="inline-block heading-underline">
          <h1 className="text-black text-h1 font-bold text-[64px] mt-2 relative z-[1] leading-[4.5rem]">
            {blok.title}
          </h1>
        </div>
      </div>
      <p className="text-black max-w-[818px] w-full mt-6 font-medium text-bodyRegular mx-auto mb-20">
        {blok.text}
      </p>
      <div className="mx-auto flex items-center justify-center gap-16 max-w-[800px]">
        <div>
          <span className="font-medium">Data publikacji:</span>{" "}
          {formatter.format(new Date(blok.date))}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Udostępnij:</span>
          <SocialMediaIcons>
            <a href="#">
              <span className="sr-only">kopiuj link</span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1711_11975)">
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
                      fill="#224099"
                    />
                  </g>
                  <circle cx="18" cy="18" r="17.5" stroke="#224099" />
                </g>
                <defs>
                  <clipPath id="clip0_1711_11975">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </SocialMediaIcons>
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Pobierz raport</span>
          <a href="#">
            <span className="sr-only">pobierz</span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#224099" />
              <mask
                id="mask0_1712_12654"
                maskUnits="userSpaceOnUse"
                x="6"
                y="6"
                width="24"
                height="24"
              >
                <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1712_12654)">
                <path
                  d="M18 21.7884L13.7308 17.5193L14.7846 16.4347L17.25 18.9V10.5H18.7499V18.9L21.2153 16.4347L22.2692 17.5193L18 21.7884ZM12.3077 25.5C11.8026 25.5 11.375 25.325 11.025 24.975C10.675 24.625 10.5 24.1974 10.5 23.6923V20.9808H12V23.6923C12 23.7692 12.032 23.8397 12.0961 23.9038C12.1602 23.9679 12.2308 24 12.3077 24H23.6922C23.7692 24 23.8397 23.9679 23.9038 23.9038C23.9679 23.8397 24 23.7692 24 23.6923V20.9808H25.5V23.6923C25.5 24.1974 25.325 24.625 24.975 24.975C24.625 25.325 24.1974 25.5 23.6922 25.5H12.3077Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <img src={blok.image.filename} alt="main photo" className="w-full mt-12 mb-12" />
    </div>
  );
}
