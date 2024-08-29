"use client";

export default function ImageComponent({ src, width, height, alt, title }) {
  return (
    <div className="max-w-standard m-auto w-full flex justify-center mb-10 mt-10 max-xl:px-tablet max-sm:px-mobile">
      <img
        src={`${src}/m/filters:quality(65)`}
        width={width}
        height={height}
        alt={alt || ""}
        title={title || ""}
      />
    </div>
  );
}
