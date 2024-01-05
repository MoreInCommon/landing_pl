import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({ blok }) => (
  <Link
    className="text-base font-medium text-gray-500 hover:text-gray-900"
    href={blok.link.cached_url}
    {...storyblokEditable(blok)}
  >
    {blok.name}
  </Link>
);
export default MenuLink;
