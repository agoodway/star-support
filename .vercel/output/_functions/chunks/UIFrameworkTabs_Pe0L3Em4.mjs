import { c as createComponent, E as createAstro, r as renderComponent, a as renderTemplate, F as renderSlot } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { h as $$Tabs, i as $$TabItem } from './Code_CLJ7HHbi.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$UIFrameworkTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UIFrameworkTabs;
  return renderTemplate`${renderComponent($$result, "Tabs", $$Tabs, { "syncKey": "ui-frameworks" }, { "default": ($$result2) => renderTemplate`${Astro2.slots.has("preact") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Preact" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["preact"])}
			` })}`}${Astro2.slots.has("react") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "React" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["react"])}
			` })}`}${Astro2.slots.has("solid") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Solid" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["solid"])}
			` })}`}${Astro2.slots.has("svelte") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Svelte" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["svelte"])}
			` })}`}${Astro2.slots.has("vue") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Vue" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["vue"])}
			` })}`}${Astro2.slots.has("lit") && renderTemplate`${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Lit" }, { "default": ($$result3) => renderTemplate`
				${renderSlot($$result3, $$slots["lit"])}
			` })}`}` })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/UIFrameworkTabs.astro", void 0);

export { $$UIFrameworkTabs as $ };
