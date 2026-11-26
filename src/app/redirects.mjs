// CMS redirects are exact, internal paths. Patterns and external destinations are
// deliberately unsupported so a content edit cannot introduce an open redirect.
export function internalPath(value) {
  if (typeof value !== "string" || !/^\/(?:[a-zA-Z0-9_-]+\/?)*$/.test(value)) return null;
  return value.replace(/\/+$/, "") || "/";
}

export function publishedRedirects(story) {
  const navigation = story?.content?.blocks?.find((block) => block.component === "global navigation");
  const rules = (navigation?.redirects || [])
    .map((rule) => ({ source: internalPath(rule.source), destination: internalPath(rule.destination) }))
    .filter((rule) => rule.source && rule.destination && rule.source !== rule.destination);
  // Reject duplicate sources and redirects to another source (chains or loops).
  return rules.filter((rule) =>
    rules.filter((other) => other.source === rule.source).length === 1 &&
    !rules.some((other) => other.source === rule.destination)
  );
}

export function redirectDestination(pathname, rules) {
  const path = internalPath(pathname);
  const configured = rules.find((rule) => rule.source === path);
  if (configured) return configured.destination;
  // Preserve the legacy behaviour until (and after) publishing the new menu.
  if (path === "/co-robimy" || path?.startsWith("/co-robimy/")) {
    const suffix = path.slice("/co-robimy".length).replace(/^\/nasze-projekty(?=\/|$)/, "");
    const legacyTarget = `/nasze-projekty${suffix}`;
    return rules.find((rule) => rule.source === legacyTarget)?.destination || legacyTarget;
  }
  return null;
}
