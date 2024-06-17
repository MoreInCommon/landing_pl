"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { storyblokEditable } from "@storyblok/react";
import Markdown from "react-markdown";
import Button from "@/app/components/Button";
import Notification from "@/app/components/Notification";

const Newsletter = ({ blok }) => {
  const pathname = usePathname();

  const isGreenUrl = pathname?.includes("klimatyczny") ? "bg-themeGreen" : "";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26724274",
          formId: "1adf0717-6e67-42d5-960f-b22994350eea",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`text-themeableColors-darkBlue w-full newsletterBg bg-[url('/newsletter_bg.png')] py-[4.5rem] max-sm:py-10 ${isGreenUrl}`}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile">
        <h4 className="text-h4 font-bold mb-2">{blok.title}</h4>
        <p className="text-bodyRegular mb-8 max-md:mb-4">{blok.description}</p>
        <div id="hubspotForm" style={{ minHeight: "300px" }}></div>{" "}
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
                Adres e-mail*
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Twój adres e-mail"
                className="px-6 pt-[10px] pb-[6px] text-captionSmall border-themeableColors-darkBlue border w-full bg-white text-grey-dark rounded-full"
              />
            </div>
            <Button
              onClick={handleSubmit}
              classes="py-[14px] px-8 bg-themeableColors-darkBlue text-white text-[21px] leading-[16px] ml-4 min-w-[133px] max-md:ml-0"
            >
              <div className="relative top-[1px]">{blok.button_text}</div>
            </Button>
          </div>
          <div className="text-captionSmall mt-4 [&_a]:underline">
            <Markdown>{blok.terms}</Markdown>
          </div>
        </form>
      </div>
      {showSuccess && (
        <Notification
          message={"Pomyślnie zapisano do newslettera!"}
          setShowSuccess={setShowSuccess}
        />
      )}
    </div>
  );
};

export default Newsletter;
