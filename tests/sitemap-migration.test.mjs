import test from "node:test";
import assert from "node:assert/strict";
import { fetchMigrationRoutes } from "../src/app/sitemapMigration.mjs";

test("sitemap requests published stories and includes only supported migration routes", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => {
    assert.equal(new URL(url).searchParams.get("version"), "published");
    return Response.json({ stories: [
      { full_slug: "badania/", published_at: "2026-11-01T12:00:00Z" },
      { full_slug: "oferta/warsztaty" },
    ] });
  });
  const routes = await fetchMigrationRoutes();
  assert.equal(routes.length, 1);
  assert.equal(routes[0].url, "https://www.moreincommon.pl/badania");
  assert.equal(routes[0].lastModified.toISOString(), "2026-11-01T12:00:00.000Z");
});

test("no published migration stories produces an empty list", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ stories: [] }));
  assert.deepEqual(await fetchMigrationRoutes(), []);
});

test("temporary rate limit is retried", async (t) => {
  let calls = 0;
  t.mock.method(globalThis, "fetch", async () => ++calls === 1
    ? new Response(null, { status: 429 })
    : Response.json({ stories: [{ full_slug: "warsztaty" }] }));
  assert.equal((await fetchMigrationRoutes()).length, 1);
  assert.equal(calls, 2);
});

test("invalid token omits optional routes with a status warning and no retry", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => new Response(null, { status: 401 }));
  const warn = t.mock.method(console, "warn", () => {});
  assert.deepEqual(await fetchMigrationRoutes(), []);
  assert.equal(fetchMock.mock.callCount(), 1);
  assert.match(warn.mock.calls[0].arguments[0], /HTTP 401/);
});

test("persistent network failure does not stop sitemap or leak error details", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => { throw new Error("secret-token"); });
  const warn = t.mock.method(console, "warn", () => {});
  assert.deepEqual(await fetchMigrationRoutes(), []);
  assert.equal(fetchMock.mock.callCount(), 3);
  assert.equal(warn.mock.callCount(), 1);
  assert.doesNotMatch(warn.mock.calls[0].arguments[0], /secret-token/);
});
