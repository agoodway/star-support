import { c as createComponent, E as createAstro, G as maybeRenderHead, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { c as cachedFetch } from './cachedFetch_Bt5PS5Mm.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$Version = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Version;
  const { pkgName } = Astro2.props;
  const url = `https://registry.npmjs.org/${pkgName}/latest`;
  const response = await cachedFetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(
      `npm API call failed: GET "${url}" returned status ${response.status}: ${JSON.stringify(json)}`
    );
  }
  return renderTemplate`${maybeRenderHead()}<span>v${json.version}</span>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Version.astro", void 0);

export { $$Version as $ };
