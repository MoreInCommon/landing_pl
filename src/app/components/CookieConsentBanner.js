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
    <div className="fixed bottom-6 left-[50%] translate-x-[-50%] w-[90%] max-w-[1170px] bg-white rounded-[5px] shadow-tile-shadow border-1 border-[rgba(231, 231, 231, 1)] p-5 z-50">
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
          classes="py-[10px] px-8 bg-brand-darkBlue text-white text-[16px] leading-[16px] min-w-[133px]"
        >
          <div className="relative top-[1px]">Odrzuć wszystkie</div>
        </Button>
        <Button
          onClick={handleAccept}
          classes="py-[10px] px-8 bg-brand-darkBlue text-white text-[16px] leading-[12px] min-w-[133px]"
        >
          <div className="relative top-[1px]">Akceptuj wszystkie</div>
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
