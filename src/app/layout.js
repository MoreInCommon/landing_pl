import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokProvider";

import Newsletter from "@/app/components/Newsletter";
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

const sailec = localFont({
  src: [
    {
      path: "/fonts/Sailec.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Sailec_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Sailec_Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "/fonts/Sailec_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Sailec_Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export default async function RootLayout({ children }) {
  const { data } = await fetchData();
  return (
    <StoryblokProvider>
      <html lang="pl">
        <body className={`${sailec.className} bg-white mt-[76px]`}>
          <Navigation />
          <main className="max-w-[1440px] m-auto w-full bg-transparent px-[100px] py-16 relative z-[1]">
            {/* <Config blok={data.story.content} /> */}
            {children}
          </main>
          <Newsletter />
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
