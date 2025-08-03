import { c as createComponent, E as createAstro, r as renderComponent, a as renderTemplate, F as renderSlot } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { h as $$Tabs, i as $$TabItem } from './Code_CLJ7HHbi.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$AstroJSXTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AstroJSXTabs;
  return renderTemplate`${renderComponent($$result, "Tabs", $$Tabs, { "syncKey": "astro-jsx" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": "JSX" }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["jsx"])}
	` })}
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Astro" }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["astro"])}
	` })}
` })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/AstroJSXTabs.astro", void 0);

export { $$AstroJSXTabs as $ };
