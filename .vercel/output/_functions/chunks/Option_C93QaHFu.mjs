import { c as createComponent, E as createAstro, r as renderComponent, I as renderScript, a as renderTemplate, G as maybeRenderHead, F as renderSlot, H as addAttribute } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
/* empty css                                                                      */
/* empty css                                                              */

const $$Astro$1 = createAstro("https://docs.astro.build/");
const $$MultipleChoice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MultipleChoice;
  return renderTemplate`${renderComponent($$result, "multiple-choice", "multiple-choice", { "data-correct-label": Astro2.locals.t("multipleChoice.defaultCorrect"), "data-incorrect-label": Astro2.locals.t("multipleChoice.defaultIncorrect"), "class": "astro-sllw6jg7" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<form onsubmit="event.preventDefault()" class="astro-sllw6jg7">
		<ol class="opt-list not-content astro-sllw6jg7">${renderSlot($$result, $$slots["default"])}</ol>
		<div class="footer astro-sllw6jg7">
			<button class="submit astro-sllw6jg7" type="submit" disabled>
				${Astro2.locals.t("multipleChoice.submitLabel")}
			</button>
			<div class="answer sr-only astro-sllw6jg7" role="alert"></div>
		</div>
	</form>
` })}



${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/MultipleChoice.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/MultipleChoice.astro", void 0);

const $$Astro = createAstro("https://docs.astro.build/");
const $$Option = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Option;
  const { isCorrect } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="astro-ql7srw2r">
	<label class="astro-ql7srw2r">
		<input type="radio" disabled${addAttribute(isCorrect, "data-is-correct")} class="astro-ql7srw2r"><span class="astro-ql7srw2r">${renderSlot($$result, $$slots["default"])}</span>
		${Astro2.slots.has("feedback") && renderTemplate`<template class="astro-ql7srw2r">
					${renderSlot($$result, $$slots["feedback"])}
				</template>`}
	</label>
</li>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/Option.astro", void 0);

export { $$MultipleChoice as $, $$Option as a };
