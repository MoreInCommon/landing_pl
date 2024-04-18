"use client";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import Button from "@/app/components/Button";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed text-black bottom-6 left-[50%] translate-x-[-50%] w-[90%] max-w-[1170px] bg-white rounded-[5px] shadow-tile-shadow border-1 border-[rgba(231, 231, 231, 1)] p-5 z-50">
      <div className="cursor-pointer absolute top-4 right-4 bg-white pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          onClick={() => setShowBanner(false)}
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="black"
          />
        </svg>
      </div>
      <h5 className="text-h5 mb-[6px] font-bold">Pliki cookie i prywatność</h5>
      <p>
        Na tej stronie używamy plików cookies i podobnych funkcji do przetwarzania informacji o
        urządzeniach końcowych i danych osobowych. Przetwarzanie jest wykorzystywane do celów takich
        jak integracja treści, usług zewnętrznych i elementów stron trzecich, analiza/pomiary
        statystyczne oraz integracja mediów społecznościowych.{" "}
      </p>
      <div className="flex justify-end gap-6 mt-2">
        <Button
          onClick={handleReject}
          classes="py-[10px] px-8 bg-themeableColors-darkBlue text-white text-[16px] leading-[16px] min-w-[133px]"
        >
          <div className="relative top-[1px]">Odrzuć wszystkie</div>
        </Button>
        <Button
          onClick={handleAccept}
          classes="py-[10px] px-8 bg-themeableColors-darkBlue text-white text-[16px] leading-[12px] min-w-[133px]"
        >
          <div className="relative top-[1px]">Akceptuj wszystkie</div>
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
