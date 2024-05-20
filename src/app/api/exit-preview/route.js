// route handler enabling draft mode
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(req) {
  draftMode().enable();
  let res = NextResponse.next();

  const slug = req.nextUrl.searchParams.get("slug");
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // set the cookies to None
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None;Secure"))
  );

  // Redirect the user back to the index page.
  res.redirect(`/${slug}`);
}
