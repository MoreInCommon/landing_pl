"use client";

export default function CenterText({ text }) {
  return (
    <p className="text-black w-full mb-3 text-bodyRegular max-xl:px-tablet max-sm:px-mobile">
      {text}
    </p>
  );
}
