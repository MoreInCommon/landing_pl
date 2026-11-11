import { isPreviewDeployment } from "@/app/migration.mjs";

export default function robots() {
  if (isPreviewDeployment()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://www.moreincommon.pl/sitemap.xml",
  };
}
