import localFont from "next/font/local";
import "./globals.css";
import { storyblokInit, apiPlugin, StoryblokBridgeLoader } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokProvider";
import "./lib/slick.css";
import "./lib/slick-theme.css";
import { fetchPageData } from "@/app/utils";
import CookieConsentBanner from "@/app/components/CookieConsentBanner";
import Decoration from "@/app/components/Decoration";
import { StoryblokComponent } from "@storyblok/react";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export const metadata = {
  metadataBase: new URL("https://www.moreincommon.pl/"),
  alternates: {
    canonical: "/",
  },
  title: "More in Common",
  description:
    "More in Common działa na rzecz wzmocnienia demokracji oraz zmniejszania polaryzacji politycznej i światopoglądowej.",
  openGraph: {
    images: "/tempImages/adam.jpg",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const { data } = await fetchData();
  const blocks = data?.story?.content?.blocks;
  const newsletter = blocks?.find((blok) => blok?.component === "global newsletter");
  const navigation = blocks?.find((blok) => blok?.component === "global navigation");
  const footer = blocks?.find((blok) => blok?.component === "global footer");
  const decoration = blocks?.find((blok) => blok?.component === "decoration urls");

  return (
    <StoryblokProvider>
      <html lang="pl">
        <GoogleAnalytics gaId="G-7RYKX332PZ" />
        <StoryblokBridgeLoader />
        <body className={`${sailec.className} bg-white mt-[76px] max-xl:mt-12 overflow-x-hidden`}>
          <StoryblokComponent blok={decoration} key={decoration._uid} />
          <StoryblokComponent blok={navigation} key={navigation._uid} />
          <main className="bg-transparent py-16 max-xl:py-12 max-sm:py-12 relative z-[1]">
            {children}
          </main>
          <StoryblokComponent blok={newsletter} key={newsletter._uid} />
          <StoryblokComponent blok={footer} key={footer._uid} />
          <CookieConsentBanner />
        </body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();

  return fetchPageData(`cdn/stories/global`, isEnabled, "decoration urls.decoratedUrls");
}
