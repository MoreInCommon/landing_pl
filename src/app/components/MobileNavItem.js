"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function removeTrailingSlash(str) {
  if (str.endsWith("/")) {
    return str.slice(0, -1);
  }
  return str;
}
const Navblok = ({ blok }) => {
  const pathname = usePathname();
  const url = removeTrailingSlash(blok.urls.cached_url);

  return (
    <div key={url} className="w-full">
      <Link
        href={`/${url}`}
        className={`block p-4 hover:bg-gray-100 font-bold ${pathname === `/${url}` ? "text-themeableColors-darkBlue" : "text-gray-700"}`}
      >
        {blok.text}
      </Link>
      {blok.subitem && (
        <div className="pl-4">
          {blok.subitem.map((subblok) => (
            <Link
              key={subblok.urls.cached_url}
              href={`/${subblok.urls.cached_url}`}
              className={`block p-4 hover:bg-gray-50 ${pathname.includes(subblok.urls.cached_url) ? "text-themeableColors-darkBlue" : "text-gray-600"}`}
            >
              {subblok.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navblok;
