"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationHref, isNavigationActive } from "@/app/migration.mjs";

const Navblok = ({ blok, callback }) => {
  const pathname = usePathname();
  const url = navigationHref(blok.urls);

  return (
    <div key={url} className="w-full">
      {blok.menu_only ? (
        <div className="block p-4 font-bold text-gray-700">{blok.text}</div>
      ) : (
      <Link
        onClick={callback}
        href={url}
        className={`block p-4 hover:bg-gray-100 font-bold ${pathname === url ? "text-themeableColors-darkBlue" : "text-gray-700"}`}
      >
        {blok.text}
      </Link>
      )}
      {blok.subitem && (
        <div className="pl-4">
          {blok.subitem.map((subblok) => (
            <Link
              onClick={callback}
              key={subblok._uid || navigationHref(subblok.urls)}
              href={navigationHref(subblok.urls)}
              className={`block p-4 hover:bg-gray-50 ${isNavigationActive(pathname, subblok.urls) ? "text-themeableColors-darkBlue" : "text-gray-600"}`}
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
