import test from "node:test";
import assert from "node:assert/strict";
import { isMigrationPath, navigationHref, isNavigationActive, previewPath } from "../src/app/migration.mjs";

test("migration allowlist accepts only the agreed routes", () => {
  for (const path of ["partnerstwa", "/kompas-spoleczny/", "wystapienia-publiczne", "badania", "warsztaty", "wystapienia-i-prezentacje"]) {
    assert.equal(isMigrationPath(path), true, path);
  }
  for (const path of ["", "oferta", "oferta/badania", "oferta/warsztaty", "oferta/wystapienia-i-prezentacje", "nowe/partnerstwa", "o-nas", "badania/podstrona", "oferta/../partnerstwa"]) {
    assert.equal(isMigrationPath(path), false, path);
  }
});

test("CMS links handle stories, external links and newsletter anchors", () => {
  assert.equal(navigationHref({ cached_url: "oferta/badania/", linktype: "story" }), "/oferta/badania");
  assert.equal(navigationHref({ cached_url: "https://www.linkedin.com/company/example/", linktype: "url" }), "https://www.linkedin.com/company/example/");
  assert.equal(navigationHref({ url: "#newsletter" }), "#newsletter");
  assert.equal(navigationHref({ cached_url: "home", anchor: "newsletter" }), "/#newsletter");
  assert.equal(navigationHref({ url: "javascript:alert(1)", linktype: "url" }), "#");
  assert.equal(isNavigationActive("/oferta/badania", { cached_url: "oferta" }), true);
  assert.equal(isNavigationActive("/oferta-inna", { cached_url: "oferta" }), false);
});

test("preview redirects stay on-site and accept only story paths", () => {
  assert.equal(previewPath("home"), "/");
  assert.equal(previewPath("oferta/badania"), "/oferta/badania");
  assert.equal(previewPath("oferta/"), "/oferta");
  for (const path of ["//evil.example", "https://evil.example", "../admin", "oferta?secret=x", "oferta#x", "a\\b", "%2f%2fevil.example"]) {
    assert.equal(previewPath(path), null, path);
  }
});
