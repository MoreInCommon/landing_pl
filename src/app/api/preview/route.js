import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const slug = req.nextUrl.searchParams.get("slug");
  const secret = req.nextUrl.searchParams.get("secret");
  draftMode().enable();
  const params = req.url.split("?");

  // Check the secret and next parameters
  if (secret !== process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Preview Mode by setting the cookies
  const res = NextResponse.next();
  res.cookies.set("Next.js", "preview mode", { path: "/", sameSite: "none", secure: true });
  res.setPreviewData({});

  // Construct absolute URL for redirection
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const redirectUrl = `${protocol}://${host}/${slug}?${params[1]}`;

  return NextResponse.redirect(redirectUrl, 307);
}
