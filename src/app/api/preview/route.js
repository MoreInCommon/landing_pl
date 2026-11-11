import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { previewPath } from "@/app/migration.mjs";

export async function GET(req) {
  const slug = req.nextUrl.searchParams.get("slug");
  const secret = req.nextUrl.searchParams.get("secret");

  // Check the secret and next parameters
  if (!process.env.STORYBLOK_TOKEN || secret !== process.env.STORYBLOK_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  const path = previewPath(slug ?? "home");
  if (!path) return new Response("Invalid slug", { status: 400 });
  const redirectUrl = new URL(req.url);
  redirectUrl.pathname = path;
  redirectUrl.searchParams.delete("secret");
  redirectUrl.searchParams.delete("slug");
  draftMode().enable();
  // Relative Location preserves the public host even behind a reverse proxy.
  const response = new NextResponse(null, {
    status: 307,
    headers: { Location: `${redirectUrl.pathname}${redirectUrl.search}` },
  });
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Referrer-Policy", "no-referrer");
  return response;
}
