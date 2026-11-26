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

test("first deployment keeps all original redirects unless migration is explicitly enabled", async () => {
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);
  const previous = process.env.SITE_NAVIGATION_MIGRATION_ENABLED;
  try {
    for (const value of [undefined, "false", "TRUE", "1", "true"]) {
      if (value === undefined) delete process.env.SITE_NAVIGATION_MIGRATION_ENABLED;
      else process.env.SITE_NAVIGATION_MIGRATION_ENABLED = value;
      delete require.cache[require.resolve("../next.config.js")];
      const config = require("../next.config.js");
      const redirects = await config.redirects();
      const expectedEnabled = value === "true";
      assert.equal(config.env.SITE_NAVIGATION_MIGRATION_ENABLED, String(expectedEnabled));
      assert.equal(redirects.length, expectedEnabled ? 4 : 7);
      assert.deepEqual(redirects.find((rule) => rule.source === "/kontakt"), {
        source: "/kontakt", destination: "/kontakt/nasze-biuro", permanent: true,
      });
      if (!expectedEnabled) {
        assert.deepEqual(redirects.slice(0, 3), [
          { source: "/co-robimy/nasze-projekty", destination: "/nasze-projekty", permanent: true },
          { source: "/co-robimy/nasze-projekty/:path*", destination: "/nasze-projekty/:path*", permanent: true },
          { source: "/co-robimy/:path*", destination: "/nasze-projekty/:path*", permanent: true },
        ]);
      }
    }
  } finally {
    if (previous === undefined) delete process.env.SITE_NAVIGATION_MIGRATION_ENABLED;
    else process.env.SITE_NAVIGATION_MIGRATION_ENABLED = previous;
    delete require.cache[require.resolve("../next.config.js")];
  }
});
