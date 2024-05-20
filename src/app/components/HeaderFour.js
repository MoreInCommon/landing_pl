"use client";
import { twMerge } from "tailwind-merge";

export default function HeaderFour({ text, className = {}, ...rest }) {
  return (
    <h4
      className={twMerge(
        `text-h4 text-black mb-3 max-xl:px-tablet max-sm:px-mobile font-bold ${className}`
      )}
      {...rest}
    >
      {text}
    </h4>
  );
}
