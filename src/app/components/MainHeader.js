"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { useEffect, useState } from "react";

export default function MainHeader({ blok, text, className = null, childClassname = null }) {
  const [paddingRightClass, setPaddingRightClass] = useState("pr-4");

  useEffect(() => {
    function hasTextCenterClass(element) {
      if (!element) return false;
      if (element.classList.contains("text-center")) return true;
      return hasTextCenterClass(element.parentElement);
    }

    const parentElement = document.querySelector(".mainHeaderParent");
    if (parentElement && hasTextCenterClass(parentElement)) {
      setPaddingRightClass("pr-0");
    }
  }, []);

  return (
    <div
      className="max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile mainHeaderParent"
      {...storyblokEditable(blok)}
    >
      <div className={`inline-block heading-underline mb-3 ${className || ""}`}>
        <h1
          className={`text-black text-h1 font-bold mt-2 ${paddingRightClass} relative z-[1] ${childClassname || ""}`}
        >
          {blok?.title || text}
        </h1>
      </div>
    </div>
  );
}
