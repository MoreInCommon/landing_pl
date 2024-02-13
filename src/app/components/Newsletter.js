"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/tempImages/image22.png";
import Button from "@/app/components/Button";

const Newsletter = () => {
  return (
    <div className="text-brand-darkBlue  max-w-[1440px] m-auto w-full bg-[#EDF0F7] px-[100px] bg-[url('/newsletter_bg.png')] py-16">
      <h4 className="text-h4 font-bold mb-2">Bądź na bieżąco!</h4>
      <p className="text-bodyRegular mb-8">
        Zasubskrybuj nasz newsletter, żeby być na biężąco z działaniami More in Common.
      </p>
      <form>
        <div className="flex gap-4 items-end">
          <div>
            <label htmlFor="name" className="text-inputLabel pl-4 font-medium">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              placeholder="Twoje imię i nazwisko"
              className="px-6 pt-[10px] pb-[6px] text-captionSmall border-brand-darkBlue border w-full bg-white text-grey-dark rounded-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-inputLabel pl-4 font-medium">
              Adres e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Twój adres e-mail"
              className="px-6 pt-[10px] pb-[6px] text-captionSmall border-brand-darkBlue border w-full bg-white text-grey-dark rounded-full"
            />
          </div>
          <Button
            type="submit"
            classes="py-[14px] px-8 bg-brand-darkBlue text-white text-[21px] leading-[16px] ml-4 min-w-[133px]"
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
  );
};

export default Newsletter;
