"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "@/app/components/Page";
import Teaser from "@/app/components/Teaser";
import Feature from "@/app/components/Feature";
import Grid from "@/app/components/Grid";
import Config from "@/app/components/Config";
import HeaderMenu from "@/app/components/HeaderMenu";
import MenuLink from "@/app/components/MenuLink";
import Hero from "@/app/components/Hero";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  // config: Config,
  // header_menu: HeaderMenu,
  // menu_link: MenuLink,
  // hero: Hero,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
  cache: {
    clear: "auto",
    type: "none",
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
