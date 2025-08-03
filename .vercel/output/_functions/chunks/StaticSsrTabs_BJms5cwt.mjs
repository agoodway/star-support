import { c as createComponent, E as createAstro, r as renderComponent, a as renderTemplate, F as renderSlot } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { h as $$Tabs, i as $$TabItem } from './Code_CLJ7HHbi.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$StaticSsrTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StaticSsrTabs;
  return renderTemplate`${renderComponent($$result, "Tabs", $$Tabs, { "syncKey": "deploy-type" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": Astro2.locals.t("deploy.staticTag") }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["static"])}
	` })}
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": Astro2.locals.t("deploy.ssrTag") }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["ssr"])}
	` })}
` })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/StaticSsrTabs.astro", void 0);

export { $$StaticSsrTabs as $ };
