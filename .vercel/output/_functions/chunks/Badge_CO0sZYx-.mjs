import { c as createComponent, E as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { c as $$Badge$1 } from './Code_CLJ7HHbi.mjs';
/* empty css                                                             */

const $$Astro = createAstro("https://docs.astro.build/");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${renderComponent($$result, "StarlightBadge", $$Badge$1, { ...Astro2.props })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Badge.astro", void 0);

export { $$Badge as $ };
