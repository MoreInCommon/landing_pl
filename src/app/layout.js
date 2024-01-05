import { Inter } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokProvider";

import Page from "@/app/components/Page";
import Teaser from "@/app/components/Teaser";
import Feature from "@/app/components/Feature";
import Grid from "@/app/components/Grid";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Config from "@/app/components/Config";
import HeaderMenu from "@/app/components/HeaderMenu";
import MenuLink from "@/app/components/MenuLink";
import Hero from "@/app/components/Hero";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  hero: Hero,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "More in common",
  description: "More in common desc",
};

export default async function RootLayout({ children }) {
  const { data } = await fetchData();
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <Config blok={data.story.content} />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/config`, sbParams);
}
