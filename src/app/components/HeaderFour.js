"use client";
import { twMerge } from "tailwind-merge";

export default function HeaderFour({ text, ...rest }) {
  return (
    <h4 className={`text-h4 text-black mb-3 max-xl:px-tablet max-sm:px-mobile font-bold`} {...rest}>
      {text}
    </h4>
  );
}
