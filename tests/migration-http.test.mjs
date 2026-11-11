import test from "node:test";
import assert from "node:assert/strict";
import { migrationPaths } from "../src/app/migration.mjs";

// Only allow local servers and the explicitly designated test deployment.
const origin = process.env.MIGRATION_TEST_ORIGIN || "http://127.0.0.1:3100";
const target = new URL(origin);
if (!["127.0.0.1", "localhost"].includes(target.hostname) &&
    !(target.hostname === "mic-test-gamma.vercel.app" && target.protocol === "https:")) {
  throw new Error("HTTP tests require a local server or the designated HTTPS test deployment");
}
const previewDeployment = process.env.EXPECT_PREVIEW === "true";

test("home includes the newsletter navigation item without an extra feature flag", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.equal(html.includes('id="migration-navigation"'), true);
  assert.equal(html.includes('href="#newsletter"'), true);
  assert.equal(html.includes('id="newsletter"'), true);
  if (previewDeployment) assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test("unrecognized routes stay 404", async () => {
  for (const path of ["/oferta/nieistniejaca", "/nowe/partnerstwa"]) {
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 404, path);
  }
});

test("preview deployment disallows crawlers and returns an empty sitemap", async () => {
  const robots = await (await fetch(`${origin}/robots.txt`)).text();
  assert.equal(robots.includes("Disallow: /\n"), previewDeployment);
  if (previewDeployment) {
    const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
    assert.equal(sitemap.includes("<loc>"), false);
  }
});

test("migration routes return content or 404 when no published story exists", async () => {
  for (const path of migrationPaths) {
    const response = await fetch(`${origin}/${path}`);
    assert.equal([200, 404].includes(response.status), true, `${path}: unexpected status ${response.status}`);
    if (response.status === 200) assert.match(await response.text(), /<h1/);
  }
});

test("each root page matches draft/published availability in Storyblok", { skip: !process.env.STORYBLOK_TOKEN }, async (t) => {
  const query = new URLSearchParams({ secret: process.env.STORYBLOK_TOKEN, slug: "home" });
  const entered = await fetch(`${origin}/api/preview?${query}`, { redirect: "manual" });
  assert.equal(entered.status, 307, "preview must accept the configured token");
  const cookies = entered.headers.getSetCookie().map((cookie) => cookie.split(";")[0]).join("; ");
  assert.ok(cookies.includes("__prerender_bypass="), "preview must set the draft cookie");
  let savedDrafts = 0;
  let draftOnly = 0;
  for (const path of migrationPaths) {
    const availability = {};
    for (const version of ["published", "draft"]) {
      const apiQuery = new URLSearchParams({ token: process.env.STORYBLOK_TOKEN, version, cv: String(Date.now()) });
      const source = await fetch(`https://api.storyblok.com/v2/cdn/stories/${path}?${apiQuery}`);
      assert.ok([200, 404].includes(source.status), `CMS ${path} (${version}): status ${source.status}`);
      availability[version] = source.status;
      const page = await fetch(`${origin}/${path}`, {
        redirect: "manual",
        ...(version === "draft" ? { headers: { Cookie: cookies } } : {}),
      });
      assert.equal(page.status, source.status, `${path}: ${version} visibility must match CMS`);
      if (version === "draft" && source.status === 200) {
        savedDrafts++;
        assert.match(await page.text(), /name="robots" content="noindex, nofollow"/);
      }
    }
    if (availability.draft === 200 && availability.published === 404) draftOnly++;
  }
  t.diagnostic(`Root pages with saved drafts: ${savedDrafts}/6; draft-only pages verified: ${draftOnly}/6`);
  if (!savedDrafts) t.diagnostic("No root drafts exist yet; repeat after creating them to verify rendering.");
});

test("preview rejects invalid credentials and redirect paths", async () => {
  const invalid = await fetch(`${origin}/api/preview?secret=invalid&slug=home`, { redirect: "manual" });
  assert.equal(invalid.status, 401);
  const invalidExit = await fetch(`${origin}/api/exit-preview?slug=//evil.example`, { redirect: "manual" });
  assert.equal(invalidExit.status, 400);
});

test("preview sets a cookie, removes the secret and exit deletes the cookie", { skip: !process.env.STORYBLOK_TOKEN }, async () => {
  const query = new URLSearchParams({ secret: process.env.STORYBLOK_TOKEN, slug: "home", _storyblok: "test" });
  const entered = await fetch(`${origin}/api/preview?${query}`, { redirect: "manual" });
  assert.equal(entered.status, 307);
  const location = new URL(entered.headers.get("location"), origin);
  assert.equal(location.origin, origin);
  assert.equal(location.pathname, "/");
  assert.equal(location.searchParams.has("secret"), false);
  assert.equal(location.searchParams.get("_storyblok"), "test");
  const cookies = entered.headers.getSetCookie();
  assert.equal(cookies.some((cookie) => cookie.startsWith("__prerender_bypass=")), true);
  const cookieHeader = cookies.map((cookie) => cookie.split(";")[0]).join("; ");
  const draft = await fetch(origin, { headers: { Cookie: cookieHeader } });
  assert.equal(draft.status, 200);
  assert.match(await draft.text(), /name="robots" content="noindex, nofollow"/);
  const exited = await fetch(`${origin}/api/exit-preview?slug=home`, {
    redirect: "manual", headers: { Cookie: cookieHeader },
  });
  assert.equal(exited.status, 307);
  assert.equal(new URL(exited.headers.get("location"), origin).pathname, "/");
  assert.equal(exited.headers.getSetCookie().some((cookie) => /^__prerender_bypass=;/.test(cookie)), true);
});
