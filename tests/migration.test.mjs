import test from "node:test";
import assert from "node:assert/strict";
import { isMigrationPath, navigationHref, isNavigationActive, isNavigationItemActive, previewPath } from "../src/app/migration.mjs";

test("migration allowlist accepts only the agreed routes", () => {
  for (const path of ["nasze-publikacje", "partnerstwa", "/kompas-spoleczny/", "wystapienia-publiczne", "badania", "warsztaty", "wystapienia-i-prezentacje"]) {
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

test("URL-type menu links take precedence over a cached story path", () => {
  assert.equal(navigationHref({ linktype: "url", url: "/nasze-publikacje", cached_url: "nasze-projekty" }), "/nasze-publikacje");
});

const pageLink = (path) => ({ linktype: "story", cached_url: path });
const navigation = [
  { text: "O nas", urls: pageLink("o-nas"), subitem: [{ urls: pageLink("o-nas/zespol") }] },
  { text: "Co robimy", menu_only: true, urls: pageLink("home"), subitem: ["siedem-segmentow", "nasze-publikacje", "kompas-spoleczny", "fokus-na-klimat", "w-mediach", "wystapienia-publiczne"].map((path) => ({ urls: pageLink(path) })) },
  { text: "Oferta", menu_only: true, subitem: ["badania", "warsztaty", "wystapienia-i-prezentacje"].map((path) => ({ urls: pageLink(path) })) },
  { text: "Partnerstwa", urls: pageLink("partnerstwa") },
  { text: "Kontakt", urls: pageLink("kontakt"), subitem: [{ urls: pageLink("kontakt/nasze-biuro") }] },
];

test("every navigation section activates only on its own pages on desktop and mobile", () => {
  const cases = [
    ["/", []], ["/nieznana", []], ["/badania-inne", []],
    ["/o-nas/zespol", ["O nas"]], ["/o-nas/misja", ["O nas"]],
    ["/siedem-segmentow", ["Co robimy"]], ["/siedem-segmentow/segment", ["Co robimy"]],
    ["/nasze-publikacje", ["Co robimy"]], ["/nasze-projekty", ["Co robimy"]], ["/nasze-projekty/raport", ["Co robimy"]],
    ["/kompas-spoleczny", ["Co robimy"]], ["/fokus-na-klimat/artykuly/raport", ["Co robimy"]],
    ["/w-mediach/artykul", ["Co robimy"]], ["/wystapienia-publiczne", ["Co robimy"]],
    ["/badania", ["Oferta"]], ["/warsztaty/", ["Oferta"]], ["/wystapienia-i-prezentacje", ["Oferta"]],
    ["/partnerstwa", ["Partnerstwa"]], ["/kontakt/nasze-biuro", ["Kontakt"]], ["/kontakt/dla-mediow/artykuly/raport", ["Kontakt"]],
    ["/quiz", []],
  ];
  for (const [path, expected] of cases) {
    assert.deepEqual(navigation.filter((item) => isNavigationItemActive(path, item)).map((item) => item.text), expected, path);
  }
});

test("empty, external and anchor links never identify an active page", () => {
  for (const link of [undefined, {}, { cached_url: "" }, { url: "#newsletter" }, { cached_url: "home", anchor: "newsletter" }, { url: "/badania#kontakt" }, { url: "https://example.com/badania" }, { url: "mailto:test@example.com" }]) {
    for (const path of ["/", "/badania"]) assert.equal(isNavigationActive(path, link), false);
  }
  assert.equal(navigationHref({}), "#");
  assert.equal(isNavigationActive("/", pageLink("home")), true);
  assert.equal(isNavigationActive("/badania", pageLink("home")), false);
  assert.equal(isNavigationItemActive("/", { menu_only: true, urls: pageLink("home") }), false);
});

test("active page matching handles trailing slashes, queries and path boundaries", () => {
  assert.equal(isNavigationActive("/badania/", { url: "/badania/?source=menu" }), true);
  assert.equal(isNavigationActive("/badania/raport", pageLink("badania")), true);
  assert.equal(isNavigationActive("/badania-inne", pageLink("badania")), false);
  assert.equal(isNavigationActive(null, pageLink("badania")), false);
  assert.equal(isNavigationActive("/nasze-projekty/raport", { url: "/nasze-publikacje" }), true);
  assert.equal(isNavigationActive("/nasze-publikacje", pageLink("nasze-projekty")), true);
  assert.equal(isNavigationActive("/nasze-projekty-inne", { url: "/nasze-publikacje" }), false);
});
