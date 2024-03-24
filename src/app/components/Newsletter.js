"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/tempImages/image22.png";
import { usePathname } from "next/navigation";
import { getIfGreenUrl } from "@/app/utils";
import Button from "@/app/components/Button";

const Newsletter = () => {
  const pathname = usePathname();
  const isGreenUrl = getIfGreenUrl(pathname);
  return (
    <div
      className={`text-themeableColors-darkBlue w-full newsletterBg bg-[url('/newsletter_bg.png')] py-[4.5rem] ${isGreenUrl}`}
    >
      <div className="max-w-[1440px] m-auto px-[100px]">
        <h4 className="text-h4 font-bold mb-2">Bądź na bieżąco!</h4>
        <p className="text-bodyRegular mb-8">
          Zasubskrybuj nasz newsletter, żeby być na biężąco z działaniami More in Common.
        </p>
        <form>
          <div className="flex gap-4 items-end">
            <div className="max-w-[248px]">
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
            <div className="max-w-[348px] w-full">
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
              type="submit"
              classes="py-[14px] px-8 bg-themeableColors-darkBlue text-white text-[21px] leading-[16px] ml-4 min-w-[133px]"
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
    </div>
  );
};

export default Newsletter;
