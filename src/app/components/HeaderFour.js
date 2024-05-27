"use client";
import { twMerge } from "tailwind-merge";

export default function HeaderFour({ text, ...rest }) {
  return (
    <h4
      className={`text-h4 text-black mt-12 mb-6 max-xl:px-tablet max-sm:px-mobile font-bold`}
      {...rest}
    >
      {text}
    </h4>
  );
}
