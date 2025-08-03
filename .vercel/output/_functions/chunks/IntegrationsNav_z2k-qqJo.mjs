import { c as createComponent, E as createAstro, r as renderComponent, K as Fragment, a as renderTemplate, G as maybeRenderHead } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { e as englishPages, f as isIntegrationEntry } from './content_DZ93dYAP.mjs';
import { i as isLogoKey, $ as $$CardsNav } from './CardsNav_BoujZodt.mjs';
import { g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';
/* empty css                                                                       */

const $$Astro = createAstro("https://docs.astro.build/");
const $$IntegrationsNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IntegrationsNav;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  function categoryLinksFromPages(pages, category2) {
    return pages.filter((page) => page.data.category === category2).map((page) => {
      const [scope, name] = page.data.title.split(" ").shift().split("/");
      const pageUrl = page.id.replace("en/", `/${lang}/`) + "/";
      return {
        title: '<span class="scope">' + scope + "/</span><wbr>" + name.replaceAll("-", "&#8288;-&#8288;"),
        href: pageUrl,
        logo: isLogoKey(name)
      };
    });
  }
  const enPages = englishPages.filter(isIntegrationEntry);
  const allCategories = {
    renderer: {
      title: Astro2.locals.t("integrations.renderers"),
      links: categoryLinksFromPages(enPages, "renderer")
    },
    adapter: {
      title: Astro2.locals.t("integrations.adapters"),
      links: categoryLinksFromPages(enPages, "adapter")
    },
    other: {
      title: Astro2.locals.t("integrations.others"),
      links: categoryLinksFromPages(enPages, "other")
    }
  };
  const category = allCategories[Astro2.props.category];
  const categories = category ? [category] : allCategories;
  return renderTemplate`${Object.values(categories).map((category2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-hu7fe7u2" }, { "default": ($$result2) => renderTemplate`
			${maybeRenderHead()}<h3 class="astro-hu7fe7u2">${category2.title}</h3>
			${renderComponent($$result2, "CardsNav", $$CardsNav, { "minimal": true, "links": category2.links, "class": "integrations-nav astro-hu7fe7u2" })}
		` })}`)}

`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/IntegrationsNav.astro", void 0);

export { $$IntegrationsNav as $ };
