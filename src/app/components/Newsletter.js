"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getIfGreenUrl } from "@/app/utils";
import Button from "@/app/components/Button";

const Newsletter = () => {
  const pathname = usePathname();
  const isGreenUrl = getIfGreenUrl(pathname);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
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
      className={`text-themeableColors-darkBlue w-full newsletterBg bg-[url('/newsletter_bg.png')] py-[4.5rem] max-sm:py-10 ${isGreenUrl}`}
    >
      <div className="max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile">
        <h4 className="text-h4 font-bold mb-2">Bądź na bieżąco!</h4>
        <p className="text-bodyRegular mb-8 max-md:mb-4">
          Zasubskrybuj nasz newsletter, żeby być na biężąco z działaniami More in Common.
        </p>
        <form>
          <div className="flex gap-4 items-end max-md:flex-col max-md:items-start">
            <div className="max-w-[248px] max-lg:w-[248px] max-md:w-[400px] max-md:max-w-full max-sm:w-auto">
              <label htmlFor="name" className="text-inputLabel pl-4 font-medium">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                placeholder="Twoje imię i nazwisko"
                className="px-6 pt-[10px] pb-[6px] text-captionSmall border-themeableColors-darkBlue border w-full bg-white text-grey-dark rounded-full"
              />
            </div>
            <div className="max-w-[348px] w-full max-lg:w-[248px] max-md:w-[400px] max-md:max-w-full max-sm:w-auto">
              <label htmlFor="email" className="text-inputLabel pl-4 font-medium">
                Adres e-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Twój adres e-mail"
                className="px-6 pt-[10px] pb-[6px] text-captionSmall border-themeableColors-darkBlue border w-full bg-white text-grey-dark rounded-full"
              />
            </div>
            <Button
              onClick={handleSubmit}
              classes="py-[14px] px-8 bg-themeableColors-darkBlue text-white text-[21px] leading-[16px] ml-4 min-w-[133px] max-md:ml-0"
            >
              <div className="relative top-[1px]">Dołącz</div>
            </Button>
          </div>
          <div className="text-captionSmall mt-4">
            *Zapisując się do newslettera, akceptujesz warunki{" "}
            <a href="/" className="underline">
              {" "}
              Polityki prywatności
            </a>
            .
          </div>
        </form>
      </div>
      {showSuccess && (
        <div className="fixed top-32 right-10 max-w-[90%] bg-white rounded-[5px] shadow-tile-shadow border border-brand-darkGreen px-6 py-[16px] z-50">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_2110_8133)">
                <circle cx="12" cy="12" r="12" fill="#009E59" />
                <path
                  d="M9.59844 14.9246L6.44844 11.7746L5.39844 12.8246L9.59844 17.0246L18.5984 8.02461L17.5484 6.97461L9.59844 14.9246Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2110_8133">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5 className="text-h5 font-bold text-black leading-[16px] relative top-[1px]">
              Pomyślnie zapisano do newslettera!
            </h5>
            <div className="cursor-pointer flex items-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                onClick={() => setShowSuccess(false)}
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
