import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { e as englishPages, b as isCmsEntry } from './content_DZ93dYAP.mjs';
import { i as isLogoKey, $ as $$CardsNav } from './CardsNav_BoujZodt.mjs';
import { g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$CMSGuidesNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CMSGuidesNav;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const enPages = englishPages.filter(isCmsEntry);
  const links = enPages.sort((a, b) => {
    return a.data.service.toLowerCase() > b.data.service.toLowerCase() ? 1 : -1;
  }).map((page) => {
    const { service } = page.data;
    const pageUrl = "/" + page.id.replace("en/", `${lang}/`) + "/";
    const logo = isLogoKey(page.id.split("/").pop());
    return { title: service, href: pageUrl, logo };
  });
  return renderTemplate`${maybeRenderHead()}<section>
	${renderComponent($$result, "CardsNav", $$CardsNav, { "minimal": true, "links": links })}
</section>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/CMSGuidesNav.astro", void 0);

export { $$CMSGuidesNav as $ };
