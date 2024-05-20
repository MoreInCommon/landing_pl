// route handler enabling draft mode
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const slug = req.nextUrl.searchParams.get("slug");
  const secret = req.nextUrl.searchParams.get("secret");
  draftMode().enable();
  // get the storyblok params for the bridge to work
  const params = req.url.split("?");
  let res = NextResponse.next();

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN) {
    return new Response("Invalid token");
  }
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Set cookie to None, so it can be read in the Storyblok iframe
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None;Secure"))
  );

  // Redirect to the path from entry
  res.redirect(`/${slug}?${params[1]}`);
}
