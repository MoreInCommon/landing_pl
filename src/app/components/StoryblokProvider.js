"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "@/app/utils";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    cache: { type: "none" },
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
