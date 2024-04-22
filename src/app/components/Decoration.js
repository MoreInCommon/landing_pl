"use client";
import { usePathname } from "next/navigation";

const Decoration = () => {
  const pathname = usePathname();
  const isDecorationUrl = false;
  if (!isDecorationUrl) return null;
  return (
    <svg
      className="absolute top-0 left-0 z-[-1]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 583"
      fill="none"
    >
      <path d="M0 0H1440V305.5L0 583V0Z" fill="#F8F8F9" />
    </svg>
  );
};

export default Decoration;
