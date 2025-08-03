import { c as createComponent, E as createAstro, r as renderComponent, I as renderScript, a as renderTemplate, G as maybeRenderHead, F as renderSlot, K as Fragment, H as addAttribute } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
/* empty css                                                                 */
import { c as getImage } from './_astro_assets_C8dZNa5U.mjs';
/* empty css                                                           */
/* empty css                                                           */

const $$Astro$1 = createAstro("https://docs.astro.build/");
const $$Checklist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Checklist;
  const { key = "default" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "check-list", "check-list", { "data-key": key, "class": "astro-mfhmb7ge" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<div class="checklist astro-mfhmb7ge">${renderSlot($$result, $$slots["default"])}</div>
	${Astro2.slots.has("alternative") && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-mfhmb7ge" }, { "default": ($$result2) => renderTemplate`
				<p class="or astro-mfhmb7ge">${Astro2.locals.t("checklist.or")}</p>
				<div class="checklist alternative astro-mfhmb7ge">
					${renderSlot($$result2, $$slots["alternative"])}
				</div>
			` })}`}
` })}



${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/Checklist.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Checklist.astro", void 0);

const HoustonGrad = new Proxy({"src":"/_astro/houston_grad.CTlb_ZyZ.png","width":448,"height":448,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/houston_grad.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://docs.astro.build/");
const $$Box = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Box;
  const { src: houstonGrad } = await getImage({ src: HoustonGrad });
  const { icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((`highlight-box content ${icon}` ?? "") + " astro-7ap2y2gv", "class")}${addAttribute(icon === "question-mark" ? `--box-icon-url: url('${houstonGrad}');` : "", "style")}>
	<section class="astro-7ap2y2gv">
		${renderSlot($$result, $$slots["default"])}
	</section>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/Box.astro", void 0);

export { $$Box as $, $$Checklist as a };
