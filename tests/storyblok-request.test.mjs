import test from "node:test";
import assert from "node:assert/strict";
import StoryblokClient from "storyblok-js-client";
import { DynamicServerError } from "next/dist/client/components/hooks-server-context.js";
import { requestStoryblok, rethrowNextRenderError } from "../src/app/storyblokRequest.mjs";

const params = { token: "private-test-token", version: "published" };
const api = () => new StoryblokClient({ accessToken: params.token });

test("real SDK preserves Next's render signal for home, global and metadata requests", async (t) => {
  const signal = new DynamicServerError("render this page dynamically");
  t.mock.method(globalThis, "fetch", async () => { throw signal; });
  for (const path of ["cdn/stories/home", "cdn/stories/global", "cdn/stories/w-mediach"]) {
    await assert.rejects(requestStoryblok(api(), path, params), (error) => error === signal);
  }
});

test("Next render errors survive direct, nested and cyclic SDK wrappers", () => {
  const signal = new DynamicServerError("dynamic fetch");
  const cyclic = { message: { cause: signal } };
  cyclic.cause = cyclic;
  for (const error of [signal, { message: signal }, { cause: { message: signal } }, cyclic]) {
    assert.throws(() => rethrowNextRenderError(error), (caught) => caught === signal);
  }
  assert.doesNotThrow(() => rethrowNextRenderError(new Error("regular error")));
});

test("real HTTP failures produce a useful error without returning undefined or exposing tokens", async (t) => {
  t.mock.method(globalThis, "fetch", async () => new Response(JSON.stringify({ error: params.token }), { status: 401, statusText: "Unauthorized" }));
  await assert.rejects(requestStoryblok(api(), "cdn/stories/home", params), (error) => {
    assert.equal(error.message, "Storyblok request failed (HTTP 401)");
    assert.equal(error.cause, undefined);
    assert.equal(error.stack.includes(params.token), false);
    return true;
  });
});

test("SDK network failures do not leak request URLs or resolve to undefined", async (t) => {
  t.mock.method(globalThis, "fetch", async () => { throw new TypeError(`Failed https://example.com/?token=${params.token}`); });
  await assert.rejects(requestStoryblok(api(), "cdn/stories/home", params), { message: "Storyblok request failed (network or SDK error)" });
});

test("successful SDK requests return data; empty responses fail explicitly", async (t) => {
  t.mock.method(globalThis, "fetch", async () => new Response(JSON.stringify({ story: { name: "Home" } }), { status: 200 }));
  assert.equal((await requestStoryblok(api(), "cdn/stories/home", params)).data.story.name, "Home");
  for (const response of [undefined, null, {}]) {
    await assert.rejects(requestStoryblok({ get: async () => response }, "cdn/stories/home", params), { message: "Storyblok returned an empty response" });
  }
});
