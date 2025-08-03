import { E as createAstro, c as createComponent, G as maybeRenderHead, H as addAttribute, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
/* empty css                            */
import { g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$InstallGuideTabGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InstallGuideTabGroup;
  const currentPage = new URL(Astro2.request.url).pathname;
  const lang = getLanguageFromURL(currentPage);
  const segments = currentPage.split("/");
  return renderTemplate`${maybeRenderHead()}<div class="TabGroup no-flex">
	<a${addAttribute(`/${lang}/install/auto/`, "href")}${addAttribute(segments.includes("auto") ? "active" : "", "class")}>
		${Astro2.locals.t("install.autoTab")}
	</a>
	<a${addAttribute(`/${lang}/install/manual/`, "href")}${addAttribute(segments.includes("manual") ? "active" : "", "class")}>
		${Astro2.locals.t("install.manualTab")}
	</a>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/TabGroup/InstallGuideTabGroup.astro", void 0);
