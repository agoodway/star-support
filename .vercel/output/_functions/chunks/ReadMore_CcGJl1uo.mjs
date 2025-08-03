import { c as createComponent, G as maybeRenderHead, r as renderComponent, F as renderSlot, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Code_CLJ7HHbi.mjs';
/* empty css                                                                */

const $$ReadMore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="read-more astro-szj46hnz">
	${renderComponent($$result, "Icon", $$Icon, { "class": "icon astro-szj46hnz", "name": "open-book" })}
	<span class="astro-szj46hnz">${renderSlot($$result, $$slots["default"])}</span>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/ReadMore.astro", void 0);

export { $$ReadMore as $ };
