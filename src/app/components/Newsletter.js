"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Markdown from "react-markdown";
import Button from "@/app/components/Button";
import Notification from "@/app/components/Notification";

const Newsletter = () => {
  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("fokus-na-klimat") ? "bg-themeGreen" : "";
  const formRef = useRef(null);
  const [formLoaded, setFormLoaded] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  useEffect(() => {
    const loadHubspotScript = () => {
      if (!formLoaded && !isFormLoading) {
        setIsFormLoading(true);
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
        setFormLoaded(true);
        setIsFormLoading(false);
      }
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        loadHubspotScript();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "400px",
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, [formLoaded, isFormLoading]);

  return (
    <div
      className={`text-[#152321] w-full newsletterBg bg-[url('/newsletter_bg.png')] py-[4.5rem] max-sm:py-10 ${isGreenUrl}`}
    >
      <div className="max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile">
        <h4 className="text-h4 font-bold mb-2">Bądź na bieżąco!</h4>
        <p className="text-bodyRegular mb-8 max-md:mb-4">
          Zasubskrybuj nasz newsletter, żeby być na biężąco z działaniami More in Common.
        </p>
        <div id="hubspotForm" ref={formRef}></div>
      </div>
    </div>
  );
};

export default Newsletter;
