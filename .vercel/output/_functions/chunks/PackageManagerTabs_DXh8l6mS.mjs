import { c as createComponent, r as renderComponent, a as renderTemplate, F as renderSlot } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { h as $$Tabs, i as $$TabItem } from './Code_CLJ7HHbi.mjs';

const $$PackageManagerTabs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Tabs", $$Tabs, { "syncKey": "package-managers" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": "npm" }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["npm"])}
	` })}
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": "pnpm" }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["pnpm"])}
	` })}
	${renderComponent($$result2, "TabItem", $$TabItem, { "label": "Yarn" }, { "default": ($$result3) => renderTemplate`
		${renderSlot($$result3, $$slots["yarn"])}
	` })}
` })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/PackageManagerTabs.astro", void 0);

export { $$PackageManagerTabs as $ };
