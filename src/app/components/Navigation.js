"use client";
import Image from "next/image";
import { useState } from "react";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Logo from "../../../public/tempImages/image22.png";
import { StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ blok }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const navItems = blok.blocks.filter((block) => block.component === "navigation item");
  const socialMediaLink = blok.blocks.filter((block) => block.component === "social media link");
  const twitter = socialMediaLink.find((block) => block.type === "twitter")?.url?.url;
  const linkedin = socialMediaLink.find((block) => block.type === "linkedin")?.url?.url;
  const facebook = socialMediaLink.find((block) => block.type === "facebook")?.url?.url;
  const mobileNavigationItems = navItems.map((block) => ({
    ...block,
    component: "mobile navigation item",
  }));
  const isGreenUrl = pathname?.includes("klimatyczny") ? "bg-themeGreen" : "";
  return (
    <div className={`w-full bg-white fixed top-0 shadow-nav-shadow z-50 ${isGreenUrl}`}>
      <div className="max-w-full m-auto w-full bg-white max-xl:py-4">
        <div className="flex justify-between items-center px-full max-xl:px-tablet max-sm:px-mobile ">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">More in common</span>
              <Image src={Logo} alt="More in common" width={143} height={44} />
            </Link>
          </div>
          <div className="-mr-2 -my-2 xl:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded={openMenu ? "true" : "false"}
            >
              <span className="sr-only">{openMenu ? "Zamknij menu" : "Otworz menu"}</span>
              {openMenu ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden xl:flex items-center justify-end gap-4 ml-[90px]">
            {navItems.map((item) => (
              <StoryblokComponent blok={item} key={item._uid} />
            ))}
          </div>
          <div className="max-xl:hidden">
            <SocialMediaIcons xUrl={twitter} linkedinUrl={linkedin} facebookUrl={facebook} />
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 xl:hidden px-6 pb-4">
          {mobileNavigationItems.map((item) => (
            <StoryblokComponent blok={item} key={item._uid} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
