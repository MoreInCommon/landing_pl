"use client";

export default function CenterText({ text, highlight }) {
  return (
    <p
      className={`text-black w-full mb-4 text-bodyRegular max-xl:px-tablet max-sm:px-mobile [&>a]:underline`}
    >
      {text}
    </p>
  );
}
