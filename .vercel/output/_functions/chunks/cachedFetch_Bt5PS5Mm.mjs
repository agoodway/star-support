import EleventyFetch from '@11ty/eleventy-fetch';
import retry from 'p-retry';

async function cachedFetch(url, fetchOptions = {}, { duration = "5m", verbose = false } = {}) {
  let status = 200;
  let statusText = "OK";
  let buffer;
  try {
    buffer = await retry(
      () => EleventyFetch(url, {
        duration,
        verbose,
        type: "buffer",
        fetchOptions
      })
    );
  } catch (e) {
    const error = e;
    const msg = error?.message || error.toString();
    const matches = msg.match(/^Bad response for (.*) \(.*?\): (.*)$/);
    status = parseInt(matches?.[2] || "") || 404;
    statusText = matches?.[3] || msg;
  }
  return {
    ok: status >= 200 && status <= 299,
    status,
    statusText,
    body: buffer,
    json: () => buffer && JSON.parse(buffer.toString()),
    text: () => buffer?.toString()
  };
}

export { cachedFetch as c };
