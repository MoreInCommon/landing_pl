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
  return normalizeStoryPath(path) === "nasze-publikacje" || migrationPaths.includes(normalizeStoryPath(path));
}

export function isPreviewDeployment() {
  return process.env.SITE_PREVIEW_ENABLED === "true" || process.env.VERCEL_ENV === "preview";
}

// CMS links may be internal stories, external URLs or anchors.
export function navigationHref(link) {
  const value = link?.linktype === "url"
    ? link.url || link.cached_url || ""
    : link?.cached_url || link?.url || "";
  if (/^https?:\/\//i.test(value) || /^(mailto:|tel:)/i.test(value)) return value;
  if (link?.linktype === "url" && value && !value.startsWith("/") && !value.startsWith("#")) {
    return "#";
  }
  if (!value) return "#";
  const normalized = normalizeStoryPath(value);
  const path = value.startsWith("#") ? value : normalized === "home" ? "/" : `/${normalized}`;
  return link?.anchor ? `${path.split("#")[0]}#${link.anchor.replace(/^#/, "")}` : path;
}

// Only page links identify the current section. Anchors and empty CMS links
// must never mark a whole page (especially the homepage) as active.
export function isNavigationActive(pathname, link) {
  const href = navigationHref(link);
  if (!pathname || !href.startsWith("/") || href.startsWith("//") || href.includes("#")) return false;
  const path = `/${normalizeStoryPath(pathname.split(/[?#]/)[0])}`;
  const destination = `/${normalizeStoryPath(href.split("?")[0])}`;
  if (destination === "/") return path === "/";
  // The renamed listing keeps publication detail stories under the old prefix.
  const sectionPath = (value) => value === "/nasze-publikacje" ? "/nasze-projekty" : value;
  const current = sectionPath(path);
  const section = sectionPath(destination);
  return current === section || current.startsWith(`${section}/`);
}

export function isNavigationItemActive(pathname, item) {
  return (!item.menu_only && isNavigationActive(pathname, item.urls)) ||
    Boolean(item.subitem?.some((child) => isNavigationActive(pathname, child.urls)));
}

// Do not allow a slug to escape this site's origin or introduce query parameters.
export function previewPath(slug = "home") {
  if (!/^(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]*\/?$/.test(slug)) return null;
  const path = normalizeStoryPath(slug);
  return path === "home" || !path ? "/" : `/${path}`;
}
