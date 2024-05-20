import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  draftMode().enable();
  let res = NextResponse.next();

  const slug = req.nextUrl.searchParams.get("slug");
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Set the cookies to None
  res.cookies.set("Next.js", "preview mode", { path: "/", sameSite: "none", secure: true });

  // Construct absolute URL for redirection
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const redirectUrl = `${protocol}://${host}/${slug}`;

  return NextResponse.redirect(redirectUrl, 307);
}
