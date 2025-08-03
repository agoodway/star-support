import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, F as renderSlot, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Code_CLJ7HHbi.mjs';
/* empty css                                                                */

const $$Astro = createAstro("https://docs.astro.build/");
const $$PreCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PreCheck;
  return renderTemplate`${maybeRenderHead()}<div class="goals astro-iuwodqhz">
	<p class="title astro-iuwodqhz">
		<span class="icon astro-iuwodqhz" aria-hidden="true">
			${renderComponent($$result, "Icon", $$Icon, { "name": "approve-check-circle", "class": "astro-iuwodqhz" })}
		</span>
		${Astro2.locals.t("tutorial.getReady")}
	</p>
	${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/PreCheck.astro", void 0);

export { $$PreCheck as $ };
