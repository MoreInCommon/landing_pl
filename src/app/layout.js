import localFont from "next/font/local";
import "./globals.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokProvider";
import "./lib/slick.css";
import "./lib/slick-theme.css";
import Newsletter from "@/app/components/Newsletter";
import Page from "@/app/components/Page";
import Teaser from "@/app/components/Teaser";
import Feature from "@/app/components/Feature";
import Grid from "@/app/components/Grid";
import Navigation from "@/app/components/Navigation";
import Decoration from "@/app/components/Decoration";
import Footer from "@/app/components/Footer";
import Config from "@/app/components/Config";
import HeaderMenu from "@/app/components/HeaderMenu";
import MenuLink from "@/app/components/MenuLink";
import Hero from "@/app/components/Hero";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { components } from "@/app/utils";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export const metadata = {
  title: "More in Common",
  description:
    "More in Common działa na rzecz wzmocnienia demokracji oraz zmniejszania polaryzacji politycznej i światopoglądowej.",
  openGraph: {
    images: "/tempImages/adam.jpg",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
  return (
    <StoryblokProvider>
      <html lang="pl">
        <body className={`${sailec.className} bg-white mt-[76px] max-xl:mt-12 overflow-x-hidden`}>
          <Decoration />
          <Navigation />
          <main className="bg-transparent py-16 max-xl:py-12 max-sm:py-12 relative z-[1]">
            {children}
          </main>
          <Newsletter />
          <Footer />
          <StoryblokBridgeLoader options={{}} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
