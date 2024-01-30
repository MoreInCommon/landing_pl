"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/tempImages/image22.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { title: "O nas", link: "/about" },
  { title: "Co robimy", link: "/blog" },
  { title: "W mediach", link: "/services" },
  { title: "Kontakt", link: "/services" },
  { title: "Siedem Segmentów", link: "/services" },
  { title: "Raport klimatyczny", link: "/" },
];

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-[1440px] m-auto w-full bg-white">
        <div className="flex justify-between items-center px-[100px] ">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">More in common</span>
              <Image src={Logo} alt="More in common" width={143} height={44} />
            </Link>
          </div>
          {/* <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
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
          </div> */}
          <div className="hidden md:flex items-center justify-end gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.link}
                className={`py-8 px-4 text-brand-darkBlue text-bodySmall hover:text-brand-blue transition-colors ${
                  pathname === item.link
                    ? "border-b-4 border-brand-darkBlue font-bold hover:text-brand-darkBlue"
                    : ""
                }`}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="#">
              <span className="sr-only">X</span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_308_1948)">
                  <path
                    d="M19.4767 16.6218L26.0302 9H24.4772L18.7869 15.6179L14.242 9H9L15.8727 19.0074L9 27H10.553L16.5622 20.0113L21.3619 27H26.6039L19.4763 16.6218H19.4767ZM17.3496 19.0956L16.6533 18.0991L11.1126 10.1697H13.498L17.9694 16.5689L18.6657 17.5655L24.4779 25.8835H22.0926L17.3496 19.096V19.0956Z"
                    fill="#224099"
                  />
                  <circle cx="18" cy="18" r="17.5" stroke="#224099" />
                </g>
                <defs>
                  <clipPath id="clip0_308_1948">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <span className="sr-only">linkedin</span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_308_1952)">
                  <g clipPath="url(#clip1_308_1952)">
                    <path
                      d="M13.82 11.5046C13.82 12.4252 13.08 13.1712 12.1667 13.1712C11.2533 13.1712 10.5133 12.4252 10.5133 11.5046C10.5133 10.5846 11.2533 9.83789 12.1667 9.83789C13.08 9.83789 13.82 10.5846 13.82 11.5046ZM13.8333 14.5046H10.5V25.1712H13.8333V14.5046ZM19.1547 14.5046H15.8427V25.1712H19.1553V19.5719C19.1553 16.4586 23.1747 16.2039 23.1747 19.5719V25.1712H26.5V18.4172C26.5 13.1639 20.552 13.3552 19.1547 15.9412V14.5046Z"
                      fill="#224099"
                    />
                  </g>
                  <circle cx="18" cy="18" r="17.5" stroke="#224099" />
                </g>
                <defs>
                  <clipPath id="clip0_308_1952">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_308_1952">
                    <rect width="16" height="16" fill="white" transform="translate(10.5 9.5)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
