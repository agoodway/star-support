import { c as createComponent, G as maybeRenderHead, r as renderComponent, I as renderScript, a as renderTemplate, F as renderSlot } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
/* empty css                                                               */

const $$Spoiler = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<label class="spoiler astro-wj4hb2vs">
	${renderComponent($$result, "ad-spoiler", "ad-spoiler", { "class": "astro-wj4hb2vs" }, { "default": () => renderTemplate`
		<input class="sr-only astro-wj4hb2vs" type="checkbox">
		<span class="astro-wj4hb2vs">${renderSlot($$result, $$slots["default"])}</span>
	` })}
</label>

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/Spoiler.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Spoiler.astro", void 0);

export { $$Spoiler as $ };
