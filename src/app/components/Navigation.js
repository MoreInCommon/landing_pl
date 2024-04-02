"use client";
import Image from "next/image";
import { useState } from "react";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Logo from "../../../public/tempImages/image22.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { urls } from "@/app/utils";
import { getIfGreenUrl } from "@/app/utils";

const navigationItems = [
  {
    title: "O nas",
    link: urls.about,
    submenu: [
      { title: "Zespół", link: urls.team },
      { title: "Misja", link: urls.about },
    ],
  },
  { title: "Co robimy", link: urls.whatWeDo },
  { title: "W mediach", link: urls.media },
  {
    title: "Kontakt",
    link: urls.contact,
    submenu: [
      { title: "Nasze biuro", link: urls.contact },
      { title: "Pracuj z nami", link: urls.workWithUs },
    ],
  },
  { title: "Siedem Segmentów", link: urls.seven },
  { title: "Raport klimatyczny", link: urls.climate },
];

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const handleMouseEnter = (e, item) => {
    setHovered(item);
    e.target.classList.remove("animate-out");
  };

  const handleMouseLeave = (e) => {
    setHovered(null);
    if (!Array.from(e.target?.classList)?.includes("active")) e.target.classList.add("animate-out");
    setTimeout(() => {
      e.target.classList.remove("animate-out");
    }, 500);
  };

  const isGreenUrl = getIfGreenUrl(pathname);
  return (
    <div className={`w-full bg-white fixed top-0 shadow-nav-shadow z-50 ${isGreenUrl}`}>
      <div className="max-w-full m-auto w-full bg-white">
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
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
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
            </button>
          </div>
          <div className="hidden xl:flex items-center justify-end gap-4 ml-[90px]">
            {navigationItems.map((item) => (
              <div
                onMouseEnter={(e) => handleMouseEnter(e, item.title)}
                onMouseLeave={(e) => handleMouseLeave(e, null)}
                key={item.link}
                className="flex flex-col relative"
              >
                <Link
                  className={`sliding-border-bottom pt-7 pb-6 px-4 text-themeableColors-darkBlue border-b-4 text-captionSmall leading-[20px] transition-colors ${
                    pathname === item.link ||
                    item.submenu?.some((subItem) => subItem.link === pathname)
                      ? "border-themeableColors-darkBlue font-bold text-themeableColors-darkBlue active"
                      : "border-transparent"
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
                {item.submenu && hovered === item.title && (
                  <div className="absolute w-48 bottom-[-75px] bg-white mt-2 shadow-md text-themeableColors-darkBlue">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.link} href={subItem.link} className="block p-2">
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <SocialMediaIcons />
        </div>
      </div>
      {openMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 xl:hidden">
          {navigationItems.map((item) => (
            <div key={item.link} className="w-full">
              <Link href={item.link} className="block p-4 text-gray-700 hover:bg-gray-100">
                {item.title}
              </Link>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.link}
                      href={subItem.link}
                      className="block p-4 text-gray-600 hover:bg-gray-50"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
