"use client";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const Button = ({ children, classes = "", ...props }) => {
  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("fokus-na-klimat") ? "bg-themeGreen" : "";

  return (
    <div className={`${isGreenUrl}`}>
      <button
        {...props}
        className={twMerge(
          "pt-[7px] pb-[5px] px-4 pl-6 flex items-center justify-center gap-4 rounded-full text-white text-[20px] bg-brand-blue hover:bg-themeableColors-buttonHover transition-all leading-none" +
            " " +
            classes
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
