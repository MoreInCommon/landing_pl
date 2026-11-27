import test from "node:test";
import assert from "node:assert/strict";
import { internalPath, publishedRedirects, redirectDestination } from "../src/app/redirects.mjs";

const story = (redirects) => ({ content: { blocks: [{ component: "global navigation", redirects }] } });
const rules = publishedRedirects(story([
  { source: "/nasze-projekty", destination: "/nasze-publikacje" },
  { source: "/co-robimy/nasze-projekty", destination: "/nasze-publikacje" },
  { source: "/co-robimy", destination: "/nasze-publikacje" },
]));

test("unpublished configuration leaves existing publication URLs working", () => {
  assert.deepEqual(publishedRedirects(story([])), []);
  assert.equal(redirectDestination("/nasze-projekty", []), null);
  assert.equal(redirectDestination("/co-robimy", []), "/nasze-projekty");
  assert.equal(redirectDestination("/co-robimy/nasze-projekty", []), "/nasze-projekty");
  assert.equal(redirectDestination("/co-robimy/raport", []), "/nasze-projekty/raport");
  assert.equal(redirectDestination("/co-robimy/nasze-projekty/raport", []), "/nasze-projekty/raport");
});

test("published rules redirect listing URLs directly and retain detailed publication URLs", () => {
  for (const path of ["/nasze-projekty", "/co-robimy", "/co-robimy/nasze-projekty/"]) {
    assert.equal(redirectDestination(path, rules), "/nasze-publikacje");
  }
  assert.equal(redirectDestination("/nasze-publikacje", rules), null);
  assert.equal(redirectDestination("/nasze-projekty/raport", rules), null);
  assert.equal(redirectDestination("/co-robimy/nasze-projekty/raport", rules), "/nasze-projekty/raport");
  assert.equal(redirectDestination("/co-robimy-inne", rules), null);
});

test("CMS rules reject external URLs, ambiguous paths, duplicate sources, loops and chains", () => {
  for (const path of ["//evil.example", "/../admin", "/a?x=1", "/a#x", "/a\\b", "/%2fadmin", "https://evil.example", "/a/:path*"]) {
    assert.equal(internalPath(path), null, path);
  }
  assert.deepEqual(publishedRedirects(story([
    { source: "/a", destination: "/b" }, { source: "/b", destination: "/a" },
    { source: "/c", destination: "/c" }, { source: "/d", destination: "https://evil.example" },
    { source: "/e", destination: "/f" }, { source: "/e", destination: "/g" },
  ])), []);
});

test("legacy publication redirects are handled by middleware, other redirects remain static", async () => {
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);
  const config = require("../next.config.js");
  const redirects = await config.redirects();
  assert.deepEqual(redirects, [
    { source: "/kontakt", destination: "/kontakt/nasze-biuro", permanent: true },
    { source: "/o-nas", destination: "/o-nas/zespol", permanent: true },
    { source: "/siedem-segmentow/dumni-patrioci", destination: "/siedem-segmentow/lojalni-hierarchisci", permanent: true },
    { source: "/fokus-na-klimat/dumni-patrioci", destination: "/fokus-na-klimat/lojalni-hierarchisci", permanent: true },
  ]);
});
