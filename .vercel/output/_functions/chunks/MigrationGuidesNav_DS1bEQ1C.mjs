import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { e as englishPages, g as isMigrationEntry } from './content_DZ93dYAP.mjs';
import { i as isLogoKey, $ as $$CardsNav } from './CardsNav_BoujZodt.mjs';
import { g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$MigrationGuidesNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MigrationGuidesNav;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const enPages = englishPages.filter(isMigrationEntry);
  const links = enPages.sort((a, b) => {
    return a.data.framework.toLowerCase() > b.data.framework.toLowerCase() ? 1 : -1;
  }).map((page) => {
    const pageUrl = page.id.replace("en/", `/${lang}/`) + "/";
    const slug = page.id.split("/").pop()?.replace("from-", "");
    return { title: page.data.framework, href: pageUrl, logo: isLogoKey(slug) };
  });
  return renderTemplate`${maybeRenderHead()}<section>
	${renderComponent($$result, "CardsNav", $$CardsNav, { "minimal": true, "links": links })}
</section>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/MigrationGuidesNav.astro", void 0);

export { $$MigrationGuidesNav as $ };
