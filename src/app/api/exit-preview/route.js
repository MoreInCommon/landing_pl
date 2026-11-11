import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { previewPath } from "@/app/migration.mjs";

export async function GET(req) {
  const path = previewPath(req.nextUrl.searchParams.get("slug") ?? "home");
  if (!path) return new Response("Invalid slug", { status: 400 });
  draftMode().disable();
  const response = new NextResponse(null, { status: 307, headers: { Location: path } });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
