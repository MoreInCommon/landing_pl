"use client";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const FooterNavLink = ({ blok }) => {
  return (
    <Link href={`/${blok.urls.cached_url}`} className="mb-4" {...storyblokEditable(blok)}>
      {blok.text}
    </Link>
  );
};

export default FooterNavLink;
