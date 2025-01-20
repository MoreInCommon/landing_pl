import localFont from "next/font/local";
import "./globals.css";
import { storyblokInit, apiPlugin, StoryblokBridgeLoader } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokProvider";
import "./lib/slick.css";
import "./lib/slick-theme.css";
import { fetchPageData } from "@/app/utils";
import CookieConsentBanner from "@/app/components/CookieConsentBanner";
import Newsletter from "@/app/components/Newsletter";
import { StoryblokComponent } from "@storyblok/react";
import { components } from "@/app/utils";
import { draftMode } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "./jsonLd";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export const metadata = {
  metadataBase: new URL("https://www.moreincommon.pl"),
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
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
  const navigation = blocks?.find((blok) => blok?.component === "global navigation");
  const footer = blocks?.find((blok) => blok?.component === "global footer");
  const decoration = blocks?.find((blok) => blok?.component === "decoration urls");
  const bridgeOptions = {
    resolveRelations: ["similar articles.urls", "automatic climate slides.articles"],
  };

  return (
    <StoryblokProvider>
      <html lang="pl">
        <JsonLd />
        <GoogleAnalytics gaId="G-7RYKX332PZ" />
        <StoryblokBridgeLoader options={bridgeOptions} />
        <body className={`${sailec.className} bg-white mt-[76px] max-xl:mt-12 overflow-x-hidden`}>
          <StoryblokComponent blok={decoration} key={decoration._uid} />
          <StoryblokComponent blok={navigation} key={navigation._uid} />
          <main className="bg-transparent py-16 max-xl:py-12 max-sm:py-12 relative z-[1] max-sm:px-4">
            {children}
          </main>
          <Newsletter />
          <StoryblokComponent blok={footer} key={footer._uid} />
          <CookieConsentBanner />
          <div id="modal-root" />
        </body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  const { isEnabled } = draftMode();

  return fetchPageData(`cdn/stories/global`, isEnabled, "decoration urls.decoratedUrls");
}
