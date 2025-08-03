import { c as createComponent, E as createAstro, o as objectType, u as unionType, s as stringType, f as enumType, p as custom, m as literalType, G as maybeRenderHead, H as addAttribute, F as renderSlot, r as renderComponent, a as renderTemplate, K as Fragment, J as unescapeHTML } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Code_CLJ7HHbi.mjs';
/* empty css                                                              */

const $$Astro = createAstro("https://docs.astro.build/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const propsSchema = objectType({
    variant: enumType(["primary", "secondary", "minimal"]).default("primary"),
    link: stringType(),
    icon: unionType([
      objectType({ type: literalType("icon"), name: custom(stringType().parse) }),
      objectType({ type: literalType("raw"), html: stringType() })
    ]).optional()
  });
  const { link, variant, icon } = propsSchema.parse(Astro2.props);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([["sl-flex action", variant], "astro-vnzlvqnm"], "class:list")}${addAttribute(link, "href")}>
	${renderSlot($$result, $$slots["default"])}
	${icon?.type === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "1.5em", "class": "astro-vnzlvqnm" })}`}
	${icon?.type === "raw" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.html)}` })}`}
</a>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Button.astro", void 0);

export { $$Button as $ };
