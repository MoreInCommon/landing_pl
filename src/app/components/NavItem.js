"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { storyblokEditable } from "@storyblok/react";
import { navigationHref, isNavigationActive, isNavigationItemActive } from "@/app/migration.mjs";

const NavItem = ({ blok }) => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  const url = navigationHref(blok.urls);
  const active = isNavigationItemActive(pathname, blok);
  const className = `sliding-border-bottom pt-7 pb-6 px-4 text-themeableColors-darkBlue border-b-4 text-captionSmall leading-[20px] transition-colors ${active
    ? "border-themeableColors-darkBlue font-bold text-themeableColors-darkBlue active"
    : "border-transparent"}`;

  return (
    <div
      onMouseEnter={() => setHovered(blok.text)}
      onMouseLeave={() => setHovered(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.currentTarget.querySelector("button, a")?.focus();
          setHovered(null);
        }
      }}
      key={url}
      className="flex flex-col relative"
      {...storyblokEditable(blok)}
    >
      {blok.menu_only ? (
        <button
          type="button"
          className={className}
          aria-expanded={hovered === blok.text}
          aria-controls={`submenu-${blok._uid}`}
          onClick={() => setHovered(blok.text)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setHovered(blok.text);
            }
          }}
        >
          {blok.text}
        </button>
      ) : (
        <Link className={className} href={url} onFocus={() => setHovered(blok.text)}>{blok.text}</Link>
      )}
      {blok.subitem && hovered === blok.text && (
        <div id={`submenu-${blok._uid}`} className="absolute w-48 z-10 top-[60px] left-4 bg-white mt-2 shadow-md text-themeableColors-darkBlue">
          {blok.subitem.map((subblok) => (
            <Link
              key={subblok._uid || navigationHref(subblok.urls)}
              href={navigationHref(subblok.urls)}
              className={`block p-2 border-b mx-2 border-[#E1E3E6] ${isNavigationActive(pathname, subblok.urls) ? "font-bold" : ""}`}
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
