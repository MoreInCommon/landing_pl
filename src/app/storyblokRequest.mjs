// Storyblok wraps fetch exceptions in { message: error }. Next must receive
// its original render-control exception, including when it is wrapped by SDKs.
function errorChain(error) {
  const pending = [error];
  const seen = new Set();
  const errors = [];
  while (pending.length) {
    const current = pending.pop();
    if (!current || typeof current !== "object" || seen.has(current)) continue;
    seen.add(current);
    errors.push(current);
    pending.push(current.message, current.cause);
  }
  return errors;
}

export function rethrowNextRenderError(error) {
  for (const current of errorChain(error)) {
    if (current.digest === "DYNAMIC_SERVER_USAGE" ||
        current.digest === "NEXT_NOT_FOUND" ||
        current.digest?.startsWith?.("NEXT_REDIRECT;") ||
        current.code === "NEXT_STATIC_GEN_BAILOUT") {
      throw current;
    }
  }
}

export async function requestStoryblok(api, url, params, options) {
  let response;
  try {
    response = await api.get(url, params, options);
  } catch (error) {
    rethrowNextRenderError(error);
    const errors = errorChain(error);
    const status = errors.find((item) => Number.isInteger(item.status) && item.status >= 100 && item.status <= 599)?.status;
    // Do not retain the raw cause/message: SDK errors can contain URLs/tokens.
    throw new Error(`Storyblok request failed (${status ? `HTTP ${status}` : "network or SDK error"})`);
  }
  if (!response?.data) throw new Error("Storyblok returned an empty response");
  return response;
}
