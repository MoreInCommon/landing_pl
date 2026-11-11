export const migrationPaths = [
  "partnerstwa",
  "kompas-spoleczny",
  "wystapienia-publiczne",
  "badania",
  "warsztaty",
  "wystapienia-i-prezentacje",
];

export function normalizeStoryPath(path = "") {
  return path.replace(/^\/+|\/+$/g, "");
}

export function isMigrationPath(path) {
  return migrationPaths.includes(normalizeStoryPath(path));
}

export function isPreviewDeployment() {
  return process.env.SITE_PREVIEW_ENABLED === "true" || process.env.VERCEL_ENV === "preview";
}

// CMS links may be internal stories, external URLs or anchors.
export function navigationHref(link) {
  const value = link?.cached_url || link?.url || "";
  if (/^https?:\/\//i.test(value) || /^(mailto:|tel:)/i.test(value)) return value;
  if (link?.linktype === "url" && value && !value.startsWith("/") && !value.startsWith("#")) {
    return "#";
  }
  const normalized = normalizeStoryPath(value);
  const path = value.startsWith("#") ? value : normalized === "home" ? "/" : `/${normalized}`;
  return link?.anchor ? `${path.split("#")[0]}#${link.anchor.replace(/^#/, "")}` : path;
}

export function isNavigationActive(pathname, link) {
  const href = navigationHref(link).split("#")[0];
  return href.startsWith("/") && href !== "/" &&
    (pathname === href || pathname?.startsWith(`${href}/`));
}

// Do not allow a slug to escape this site's origin or introduce query parameters.
export function previewPath(slug = "home") {
  if (!/^(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]*\/?$/.test(slug)) return null;
  const path = normalizeStoryPath(slug);
  return path === "home" || !path ? "/" : `/${path}`;
}
