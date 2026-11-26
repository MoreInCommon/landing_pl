"use client";

export default function CenterText({ text, textAlign }) {
  return (
    <p
      className={`text-black w-full mb-4 text-bodyRegular max-xl:px-tablet max-sm:px-0 [&>a]:underline`}
      style={textAlign ? { textAlign } : undefined}
    >
      {text}
    </p>
  );
}
