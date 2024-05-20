"use client";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="max-w-[640px] px-5 my-32 text-center mx-auto relative">
      <div className="text-cyan-500 text-9xl absolute font-bold right-[100px] top-[-50px]">*</div>
      <h2 className="text-gray-400 text-[156px] tracking-[12.48px] leading-[156px] mb-6">404</h2>
      <p className="text-[32px] font-bold">Wygląda na to, że strona nie istnieje</p>
      <div className="text-lg font-bold">Wróć do strony głównej i kontynuuj przeglądanie.</div>{" "}
      <div className="mt-16">
        <Button onClick={() => router.push("/")} classes="bg-themeableColors-darkBlue m-auto">
          <div className="relative top-[1px]">Strona główna</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
              fill="white"
              stroke="transparent"
              strokeWidth="0.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
