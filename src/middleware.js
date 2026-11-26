import { NextResponse } from "next/server";
import { isNavigationMigrationEnabled } from "./app/deployment.mjs";
import { fetchPublishedGlobalStory } from "./app/globalConfig";
import { publishedRedirects, redirectDestination } from "./app/redirects.mjs";

export async function middleware(request) {
  if (!isNavigationMigrationEnabled()) return NextResponse.next();
  let rules = [];
  // Redirects always use published configuration, including in draft mode.
  // Detailed publication URLs keep their current addresses.
  const path = request.nextUrl.pathname.replace(/\/+$/, "");
  if (["/nasze-projekty", "/co-robimy", "/co-robimy/nasze-projekty"].includes(path)) {
    try {
      rules = publishedRedirects(await fetchPublishedGlobalStory());
    } catch {
      // A CMS outage must not activate draft rules or hide the existing pages.
      console.warn("[redirects] Published configuration unavailable; preserving legacy routing.");
    }
  }
  const destination = redirectDestination(request.nextUrl.pathname, rules);
  if (!destination) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/nasze-projekty", "/co-robimy/:path*"],
};
