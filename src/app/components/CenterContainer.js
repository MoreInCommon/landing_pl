"use client";
export default function CenterContainer({ children, className = null }) {
  return <div className={`max-w-standard m-auto w-full ${className || ""}`}>{children}</div>;
}
