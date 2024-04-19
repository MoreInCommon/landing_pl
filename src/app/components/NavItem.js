"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { storyblokEditable } from "@storyblok/react";

function removeTrailingSlash(str) {
  if (str.endsWith("/")) {
    return str.slice(0, -1);
  }
  return str;
}
const NavItem = ({ blok }) => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = (e, blok) => {
    setHovered(blok);
    e.target.classList.remove("animate-out");
  };
  const handleMouseLeave = (e) => {
    setHovered(null);
    if (!Array.from(e.target?.classList)?.includes("active")) e.target.classList.add("animate-out");
    setTimeout(() => {
      e.target.classList.remove("animate-out");
    }, 500);
  };

  const url = removeTrailingSlash(blok.urls.cached_url);

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e, blok.text)}
      onMouseLeave={(e) => handleMouseLeave(e, null)}
      key={url}
      className="flex flex-col relative"
      {...storyblokEditable(blok)}
    >
      <Link
        className={`sliding-border-bottom pt-7 pb-6 px-4 text-themeableColors-darkBlue border-b-4 text-captionSmall leading-[20px] transition-colors ${
          pathname === `/${url}` ||
          blok.subitem?.some((subblok) => pathname.includes(subblok.urls.cached_url))
            ? "border-themeableColors-darkBlue font-bold text-themeableColors-darkBlue active"
            : "border-transparent"
        }`}
        href={`/${url}`}
      >
        {blok.text}
      </Link>
      {blok.subitem && hovered === blok.text && (
        <div className="absolute w-48 z-10 top-[60px] left-4 bg-white mt-2 shadow-md text-themeableColors-darkBlue">
          {blok.subitem.map((subblok) => (
            <Link
              key={subblok.urls.cached_url}
              href={`/${subblok.urls.cached_url}`}
              className="block p-2 border-b mx-2 border-[#E1E3E6]"
            >
              {subblok.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
