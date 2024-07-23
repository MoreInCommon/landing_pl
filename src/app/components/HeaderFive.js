"use client";

export default function HeaderFive({ text, ...rest }) {
  return (
    <h5
      className={`text-h5 text-black mb-6 mt-6 max-xl:px-tablet max-sm:px-mobile font-bold `}
      {...rest}
    >
      {text}
    </h5>
  );
}
