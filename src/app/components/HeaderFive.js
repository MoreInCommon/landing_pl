"use client";

export default function HeaderFive({ text, className = {}, ...rest }) {
  return (
    <h5
      className={`text-h5 text-black mb-2 max-xl:px-tablet max-sm:px-mobile font-bold ${className}`}
      {...rest}
    >
      {text}
    </h5>
  );
}
