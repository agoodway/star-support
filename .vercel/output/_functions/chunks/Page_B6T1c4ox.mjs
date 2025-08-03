import { t as tutorialPages, H as HeadConfigSchema, a as allPages } from './content_DZ93dYAP.mjs';
import { s as stripLangFromSlug, g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';
import { g as getStaticPaths } from './_...path__DrICPEUJ.mjs';
import { c as context, s as starlightConfig, B as BuiltInDefaultLocale, p as pickLang, u as useTranslations } from './translations_CuuVkjvL.mjs';
import { a as stripTrailingSlash, b as stripLeadingSlash, c as stripHtmlExtension, e as ensureHtmlExtension, d as ensureTrailingSlash, g as getCollectionPathFromRoot, s as stripLeadingAndTrailingSlashes, f as ensureLeadingSlash, h as stripExtension } from './path_v0J5uDfG.mjs';
import { g as getCollection, a as getEntry, r as renderEntry } from './_astro_content_CV7Xiz4D.mjs';
import { A as AstroUserError, E as createAstro, c as createComponent, G as maybeRenderHead, J as unescapeHTML, a as renderTemplate, F as renderSlot, r as renderComponent, H as addAttribute, I as renderScript, K as Fragment, L as defineStyleVars, M as spreadAttributes, N as renderHead } from './astro/server_CeKHpNWz.mjs';
import { p as printHref } from './index.abb2d11a_8HSLGEZK.mjs';
import 'kleur/colors';
import { $ as $$Icon, b as $$LinkButton, c as $$Badge } from './Code_CLJ7HHbi.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_C8dZNa5U.mjs';
import { $ as $$Button } from './Button_L62Xdzfn.mjs';
import { c as cachedFetch } from './cachedFetch_Bt5PS5Mm.mjs';
import { $ as $$BackendGuidesNav } from './BackendGuidesNav_BtVf80ZZ.mjs';
import { $ as $$CMSGuidesNav } from './CMSGuidesNav_CkN3Emjb.mjs';
import { $ as $$DeployGuidesNav } from './DeployGuidesNav_BGjzgYuB.mjs';
import { $ as $$MediaGuidesNav } from './MediaGuidesNav_DE6kE3MQ.mjs';
import { $ as $$IntegrationsNav } from './IntegrationsNav_z2k-qqJo.mjs';
import { $ as $$MigrationGuidesNav } from './MigrationGuidesNav_DS1bEQ1C.mjs';
import { $ as $$Version } from './Version_CxXcB569.mjs';

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	return x;
}

function defineRouteMiddleware(fn) {
  return fn;
}

const routes$1 = await getStaticPaths({});
const paths$1 = new Set(routes$1.map(({ params }) => params.path));
function getOgImageUrl(path, isFallback) {
  let imagePath = path.replace(/^\//, "").replace(/\/$/, "") + ".webp";
  if (isFallback) {
    imagePath = "en" + imagePath.slice(imagePath.indexOf("/"));
  }
  if (paths$1.has(imagePath)) return "/open-graph/" + imagePath;
}

const groupPagesByLang = (pages) => pages.reduce(
  (pages2, page) => {
    const lang = page.id.split("/")[0];
    if (!pages2[lang]) pages2[lang] = [];
    pages2[lang].push(page);
    return pages2;
  },
  {}
);

function getTutorialPages(allPages, lang) {
  const pagesByLang = groupPagesByLang(allPages);
  const pages = pagesByLang["en"].map((englishPage) => {
    const enSlug = stripLangFromSlug(englishPage.id);
    const langPage = pagesByLang[lang]?.find((page) => stripLangFromSlug(page.id) === enSlug);
    return {
      ...langPage || englishPage,
      isFallback: !langPage
    };
  }).sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
  return pages;
}
function getTutorialUnits(tutorialPages) {
  return tutorialPages.reduce(
    (units, page) => {
      if (page.data.unitTitle) {
        units.push({
          title: page.data.unitTitle,
          lessons: [page]
        });
      } else {
        units.at(-1)?.lessons.push(page);
      }
      return units;
    },
    []
  );
}

const onRequest = defineRouteMiddleware((context) => {
  updateHead(context);
  updateTutorialPagination(context.locals.starlightRoute);
});
function updateHead(context) {
  const { head, entry, isFallback, lang, entryMeta } = context.locals.starlightRoute;
  const title = head.find((item) => item.tag === "title");
  const frontmatterTitle = entry.data.head.find((item) => item.tag === "title");
  if (isTutorialEntry(entry) && title && !frontmatterTitle) {
    const isPrefixTranslated = context.locals.t.exists("tutorial.title.prefix", {
      lngs: [entryMeta.lang]
    });
    if (isPrefixTranslated) {
      title.content = context.locals.t("tutorial.title.prefix", {
        title: title.content,
        // Explicitly use the language based on the page content, which can be different from the
        // page language for fallback pages.
        lngs: [entryMeta.lang]
      });
    }
  }
  const ogImageUrl = getOgImageUrl(context.url.pathname, !!isFallback);
  const imageSrc = ogImageUrl ?? "/default-og-image.png";
  const canonicalImageSrc = new URL(imageSrc, context.site);
  const is404 = context.url.pathname.endsWith("/404/");
  head.push({ tag: "meta", attrs: { property: "og:image", content: canonicalImageSrc.href } });
  head.push({ tag: "meta", attrs: { name: "twitter:image", content: canonicalImageSrc.href } });
  head.push({ tag: "meta", attrs: { name: "twitter:site", content: "astrodotbuild" } });
  head.push({ tag: "meta", attrs: { name: "docsearch:language", content: lang } });
  head.push({
    tag: "script",
    attrs: {
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "EZBHTSIG",
      "data-canonical": is404 ? "false" : "true",
      defer: true
    }
  });
}
function updateTutorialPagination(starlightRoute) {
  const { entry, locale, pagination } = starlightRoute;
  if (!isTutorialEntry(entry)) return;
  const tutorialPages$1 = getTutorialPages(tutorialPages, locale);
  const i = tutorialPages$1.findIndex((p) => p.id === entry.id);
  if (tutorialPages$1[i - 1]) {
    const prevPage = tutorialPages$1[i - 1];
    pagination.prev = {
      href: `/${locale}/${stripLangFromSlug(prevPage.id)}/`,
      isCurrent: false,
      label: prevPage.data.title,
      type: "link",
      badge: void 0,
      attrs: {}
    };
  }
  if (tutorialPages$1[i + 1]) {
    const nextPage = tutorialPages$1[i + 1];
    pagination.next = {
      href: `/${locale}/${stripLangFromSlug(nextPage.id)}/`,
      isCurrent: false,
      label: nextPage.data.title,
      type: "link",
      badge: void 0,
      attrs: {}
    };
  }
}
function isTutorialEntry(entry) {
  return entry.id.split("/")[1] === "tutorial";
}

const routeMiddleware = [
	onRequest,
];

async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}

const PAGE_TITLE_ID = "_top";

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["src/content/docs/ar/basics/astro-components.mdx",1754183246000],["src/content/docs/ar/basics/astro-pages.mdx",1754183246000],["src/content/docs/ar/basics/layouts.mdx",1754183246000],["src/content/docs/ar/basics/project-structure.mdx",1754183246000],["src/content/docs/ar/concepts/why-astro.mdx",1754183246000],["src/content/docs/ar/contribute.mdx",1754183246000],["src/content/docs/ar/editor-setup.mdx",1754183246000],["src/content/docs/ar/getting-started.mdx",1754183246000],["src/content/docs/ar/guides/fonts.mdx",1754183246000],["src/content/docs/ar/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/de/basics/astro-components.mdx",1754183246000],["src/content/docs/de/basics/astro-pages.mdx",1754183246000],["src/content/docs/de/basics/layouts.mdx",1754183246000],["src/content/docs/de/basics/project-structure.mdx",1754183246000],["src/content/docs/de/concepts/islands.mdx",1754183246000],["src/content/docs/de/concepts/why-astro.mdx",1754183246000],["src/content/docs/de/contribute.mdx",1754183246000],["src/content/docs/de/develop-and-build.mdx",1754183246000],["src/content/docs/de/editor-setup.mdx",1754183246000],["src/content/docs/de/getting-started.mdx",1754183246000],["src/content/docs/de/guides/backend/index.mdx",1754183246000],["src/content/docs/de/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/de/guides/cms/index.mdx",1754183246000],["src/content/docs/de/guides/configuring-astro.mdx",1754183246000],["src/content/docs/de/guides/data-fetching.mdx",1754183246000],["src/content/docs/de/guides/deploy/aws.mdx",1754183246000],["src/content/docs/de/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/de/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/de/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/de/guides/deploy/deno.mdx",1754183246000],["src/content/docs/de/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/de/guides/deploy/github.mdx",1754183246000],["src/content/docs/de/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/de/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/de/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/de/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/de/guides/deploy/index.mdx",1754183246000],["src/content/docs/de/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/de/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/de/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/de/guides/deploy/render.mdx",1754183246000],["src/content/docs/de/guides/deploy/sst.mdx",1754183246000],["src/content/docs/de/guides/deploy/surge.mdx",1754183246000],["src/content/docs/de/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/de/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/de/guides/endpoints.mdx",1754183246000],["src/content/docs/de/guides/environment-variables.mdx",1754183246000],["src/content/docs/de/guides/fonts.mdx",1754183246000],["src/content/docs/de/guides/framework-components.mdx",1754183246000],["src/content/docs/de/guides/imports.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/de/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/de/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/de/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/de/guides/routing.mdx",1754183246000],["src/content/docs/de/guides/styling.mdx",1754183246000],["src/content/docs/de/guides/testing.mdx",1754183246000],["src/content/docs/de/guides/troubleshooting.mdx",1754183246000],["src/content/docs/de/guides/typescript.mdx",1754183246000],["src/content/docs/de/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/de/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/de/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/de/recipes/index.mdx",1754183246000],["src/content/docs/de/recipes/rss.mdx",1754183246000],["src/content/docs/de/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/de/reference/api-reference.mdx",1754183246000],["src/content/docs/de/reference/astro-syntax.mdx",1754183246000],["src/content/docs/de/reference/integrations-reference.mdx",1754183246000],["src/content/docs/de/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/es/basics/astro-components.mdx",1754183246000],["src/content/docs/es/basics/astro-pages.mdx",1754183246000],["src/content/docs/es/basics/layouts.mdx",1754183246000],["src/content/docs/es/basics/project-structure.mdx",1754183246000],["src/content/docs/es/concepts/islands.mdx",1754183246000],["src/content/docs/es/concepts/why-astro.mdx",1754183246000],["src/content/docs/es/contribute.mdx",1754183246000],["src/content/docs/es/develop-and-build.mdx",1754183246000],["src/content/docs/es/editor-setup.mdx",1754183246000],["src/content/docs/es/getting-started.mdx",1754183246000],["src/content/docs/es/guides/astro-db.mdx",1754183246000],["src/content/docs/es/guides/authentication.mdx",1754183246000],["src/content/docs/es/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/es/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/es/guides/backend/index.mdx",1754183246000],["src/content/docs/es/guides/backend/neon.mdx",1754183246000],["src/content/docs/es/guides/backend/sentry.mdx",1754183246000],["src/content/docs/es/guides/backend/supabase.mdx",1754183246000],["src/content/docs/es/guides/backend/turso.mdx",1754183246000],["src/content/docs/es/guides/backend/xata.mdx",1754183246000],["src/content/docs/es/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/es/guides/cms/apostrophecms.mdx",1754183246000],["src/content/docs/es/guides/cms/builderio.mdx",1754183246000],["src/content/docs/es/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/es/guides/cms/caisy.mdx",1754183246000],["src/content/docs/es/guides/cms/cloudcannon.mdx",1754183246000],["src/content/docs/es/guides/cms/contentful.mdx",1754183246000],["src/content/docs/es/guides/cms/cosmic.mdx",1754183246000],["src/content/docs/es/guides/cms/craft-cms.mdx",1754183246000],["src/content/docs/es/guides/cms/crystallize.mdx",1754183246000],["src/content/docs/es/guides/cms/datocms.mdx",1754183246000],["src/content/docs/es/guides/cms/decap-cms.mdx",1754183246000],["src/content/docs/es/guides/cms/directus.mdx",1754183246000],["src/content/docs/es/guides/cms/drupal.mdx",1754183246000],["src/content/docs/es/guides/cms/flotiq.mdx",1754183246000],["src/content/docs/es/guides/cms/frontmatter-cms.mdx",1754183246000],["src/content/docs/es/guides/cms/ghost.mdx",1754183246000],["src/content/docs/es/guides/cms/gitcms.mdx",1754183246000],["src/content/docs/es/guides/cms/hashnode.mdx",1754183246000],["src/content/docs/es/guides/cms/hygraph.mdx",1754183246000],["src/content/docs/es/guides/cms/index.mdx",1754183246000],["src/content/docs/es/guides/cms/keystatic.mdx",1754183246000],["src/content/docs/es/guides/cms/keystonejs.mdx",1754183246000],["src/content/docs/es/guides/cms/kontent-ai.mdx",1754183246000],["src/content/docs/es/guides/cms/microcms.mdx",1754183246000],["src/content/docs/es/guides/cms/payload.mdx",1754183246000],["src/content/docs/es/guides/cms/preprcms.mdx",1754183246000],["src/content/docs/es/guides/cms/prismic.mdx",1754183246000],["src/content/docs/es/guides/cms/sanity.mdx",1754183246000],["src/content/docs/es/guides/cms/sitecore.mdx",1754183246000],["src/content/docs/es/guides/cms/spinal.mdx",1754183246000],["src/content/docs/es/guides/cms/statamic.mdx",1754183246000],["src/content/docs/es/guides/cms/storyblok.mdx",1754183246000],["src/content/docs/es/guides/cms/strapi.mdx",1754183246000],["src/content/docs/es/guides/cms/studiocms.mdx",1754183246000],["src/content/docs/es/guides/cms/tina-cms.mdx",1754183246000],["src/content/docs/es/guides/cms/umbraco.mdx",1754183246000],["src/content/docs/es/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/es/guides/configuring-astro.mdx",1754183246000],["src/content/docs/es/guides/content-collections.mdx",1754183246000],["src/content/docs/es/guides/data-fetching.mdx",1754183246000],["src/content/docs/es/guides/deploy/aws.mdx",1754183246000],["src/content/docs/es/guides/deploy/azion.mdx",1754183246000],["src/content/docs/es/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/es/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/es/guides/deploy/clever-cloud.mdx",1754183246000],["src/content/docs/es/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/es/guides/deploy/deno.mdx",1754183246000],["src/content/docs/es/guides/deploy/fleek.mdx",1754183246000],["src/content/docs/es/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/es/guides/deploy/flyio.mdx",1754183246000],["src/content/docs/es/guides/deploy/github.mdx",1754183246000],["src/content/docs/es/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/es/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/es/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/es/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/es/guides/deploy/index.mdx",1754183246000],["src/content/docs/es/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/es/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/es/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/es/guides/deploy/render.mdx",1754183246000],["src/content/docs/es/guides/deploy/sst.mdx",1754183246000],["src/content/docs/es/guides/deploy/stormkit.mdx",1754183246000],["src/content/docs/es/guides/deploy/surge.mdx",1754183246000],["src/content/docs/es/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/es/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/es/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/es/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/es/guides/ecommerce.mdx",1754183246000],["src/content/docs/es/guides/endpoints.mdx",1754183246000],["src/content/docs/es/guides/environment-variables.mdx",1754183246000],["src/content/docs/es/guides/fonts.mdx",1754183246000],["src/content/docs/es/guides/framework-components.mdx",1754183246000],["src/content/docs/es/guides/images.mdx",1754183246000],["src/content/docs/es/guides/imports.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/cloudflare.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/deno.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/lit.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/markdoc.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/mdx.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/netlify.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/node.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/partytown.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/prefetch.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/vercel.mdx",1754183246000],["src/content/docs/es/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/es/guides/internationalization.mdx",1754183246000],["src/content/docs/es/guides/markdown-content.mdx",1754183246000],["src/content/docs/es/guides/media/cloudinary.mdx",1754183246000],["src/content/docs/es/guides/media/index.mdx",1754183246000],["src/content/docs/es/guides/middleware.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-docusaurus.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-gatsby.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-gitbook.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-gridsome.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-hugo.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-jekyll.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-nextjs.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-nuxtjs.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-pelican.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-sveltekit.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/es/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/es/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/es/guides/prefetch.mdx",1754183246000],["src/content/docs/es/guides/routing.mdx",1754183246000],["src/content/docs/es/guides/server-islands.mdx",1754183246000],["src/content/docs/es/guides/styling.mdx",1754183246000],["src/content/docs/es/guides/syntax-highlighting.mdx",1754183246000],["src/content/docs/es/guides/testing.mdx",1754183246000],["src/content/docs/es/guides/troubleshooting.mdx",1754183246000],["src/content/docs/es/guides/typescript.mdx",1754183246000],["src/content/docs/es/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/es/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/es/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/es/guides/view-transitions.mdx",1754183246000],["src/content/docs/es/install-and-setup.mdx",1754183246000],["src/content/docs/es/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/es/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/es/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/es/recipes/build-forms-api.mdx",1754183246000],["src/content/docs/es/recipes/build-forms.mdx",1754183246000],["src/content/docs/es/recipes/bun.mdx",1754183246000],["src/content/docs/es/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/es/recipes/captcha.mdx",1754183246000],["src/content/docs/es/recipes/docker.mdx",1754183246000],["src/content/docs/es/recipes/dynamically-importing-images.mdx",1754183246000],["src/content/docs/es/recipes/external-links.mdx",1754183246000],["src/content/docs/es/recipes/i18n.mdx",1754183246000],["src/content/docs/es/recipes/index.mdx",1754183246000],["src/content/docs/es/recipes/making-toolbar-apps.mdx",1754183246000],["src/content/docs/es/recipes/modified-time.mdx",1754183246000],["src/content/docs/es/recipes/reading-time.mdx",1754183246000],["src/content/docs/es/recipes/rss.mdx",1754183246000],["src/content/docs/es/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/es/recipes/sharing-state.mdx",1754183246000],["src/content/docs/es/recipes/streaming-improve-page-performance.mdx",1754183246000],["src/content/docs/es/recipes/tailwind-rendered-markdown.mdx",1754183246000],["src/content/docs/es/reference/adapter-reference.mdx",1754183246000],["src/content/docs/es/reference/api-reference.mdx",1754183246000],["src/content/docs/es/reference/astro-syntax.mdx",1754183246000],["src/content/docs/es/reference/cli-reference.mdx",1754183246000],["src/content/docs/es/reference/configuration-reference.mdx",1754183246000],["src/content/docs/es/reference/dev-toolbar-app-reference.mdx",1754183246000],["src/content/docs/es/reference/directives-reference.mdx",1754183246000],["src/content/docs/es/reference/error-reference.mdx",1754183246000],["src/content/docs/es/reference/errors/action-not-found-error.mdx",1754183246000],["src/content/docs/es/reference/errors/action-query-string-invalid-error.mdx",1754183246000],["src/content/docs/es/reference/errors/actions-cant-be-loaded.mdx",1754183246000],["src/content/docs/es/reference/errors/actions-returned-invalid-data-error.mdx",1754183246000],["src/content/docs/es/reference/errors/actions-used-with-for-get-error.mdx",1754183246000],["src/content/docs/es/reference/errors/actions-without-server-output-error.mdx",1754183246000],["src/content/docs/es/reference/errors/adapter-support-output-mismatch.mdx",1754183246000],["src/content/docs/es/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/es/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/es/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/es/reference/errors/cannot-extract-font-type.mdx",1754183246000],["src/content/docs/es/reference/errors/cannot-fetch-font-file.mdx",1754183246000],["src/content/docs/es/reference/errors/cannot-load-font-provider.mdx",1754183246000],["src/content/docs/es/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/es/reference/errors/cant-use-astro-config-module-error.mdx",1754183246000],["src/content/docs/es/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/es/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/es/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/es/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/es/reference/errors/content-entry-data-error.mdx",1754183246000],["src/content/docs/es/reference/errors/content-loader-invalid-data-error.mdx",1754183246000],["src/content/docs/es/reference/errors/content-loader-returns-invalid-id.mdx",1754183246000],["src/content/docs/es/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/es/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/es/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/es/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/es/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/es/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/es/reference/errors/env-invalid-variable.mdx",1754183246000],["src/content/docs/es/reference/errors/env-invalid-variables.mdx",1754183246000],["src/content/docs/es/reference/errors/env-unsupported-get-secret.mdx",1754183246000],["src/content/docs/es/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/es/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/es/reference/errors/expected-not-esmimage.mdx",1754183246000],["src/content/docs/es/reference/errors/experimental-fonts-not-enabled.mdx",1754183246000],["src/content/docs/es/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/es/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/es/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/es/reference/errors/font-family-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/forbidden-rewrite.mdx",1754183246000],["src/content/docs/es/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/es/reference/errors/get-entry-deprecation-error.mdx",1754183246000],["src/content/docs/es/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/es/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/es/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/es/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/es/reference/errors/i18n-no-locale-found-in-path.mdx",1754183246000],["src/content/docs/es/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/es/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/es/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/es/reference/errors/incorrect-strategy-for-i18n.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-content-entry-data-error.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/es/reference/errors/invalid-rewrite404.mdx",1754183246000],["src/content/docs/es/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/es/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/es/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/es/reference/errors/locals-reassigned.mdx",1754183246000],["src/content/docs/es/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/es/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/es/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/es/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/es/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/es/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-middleware-for-internationalization.mdx",1754183246000],["src/content/docs/es/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/es/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/es/reference/errors/no-adapter-installed-server-islands.mdx",1754183246000],["src/content/docs/es/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/es/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/es/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/es/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/es/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/es/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/es/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/es/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/es/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/es/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/prerender-client-address-not-available.mdx",1754183246000],["src/content/docs/es/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/es/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/es/reference/errors/render-undefined-entry-error.mdx",1754183246000],["src/content/docs/es/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/es/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/es/reference/errors/rewrite-encountered-an-error.mdx",1754183246000],["src/content/docs/es/reference/errors/route-not-found.mdx",1754183246000],["src/content/docs/es/reference/errors/server-only-module.mdx",1754183246000],["src/content/docs/es/reference/errors/session-config-missing-error.mdx",1754183246000],["src/content/docs/es/reference/errors/session-config-without-flag-error.mdx",1754183246000],["src/content/docs/es/reference/errors/session-storage-init-error.mdx",1754183246000],["src/content/docs/es/reference/errors/session-storage-save-error.mdx",1754183246000],["src/content/docs/es/reference/errors/session-without-supported-adapter-output-error.mdx",1754183246000],["src/content/docs/es/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/es/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/es/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-filesystem-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/es/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/es/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/es/reference/experimental-flags/client-prerender.mdx",1754183246000],["src/content/docs/es/reference/experimental-flags/content-intellisense.mdx",1754183246000],["src/content/docs/es/reference/experimental-flags/heading-id-compat.mdx",1754183246000],["src/content/docs/es/reference/experimental-flags/index.mdx",1754183246000],["src/content/docs/es/reference/experimental-flags/preserve-scripts-order.mdx",1754183246000],["src/content/docs/es/reference/image-service-reference.mdx",1754183246000],["src/content/docs/es/reference/integrations-reference.mdx",1754183246000],["src/content/docs/es/reference/legacy-flags.mdx",1754183246000],["src/content/docs/es/reference/modules/astro-config.mdx",1754183246000],["src/content/docs/es/reference/modules/astro-i18n.mdx",1754183246000],["src/content/docs/es/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/es/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/es/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/es/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/es/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/es/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/es/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/es/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/es/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/es/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/es/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/es/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/es/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/es/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/es/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/es/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/es/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/es/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/es/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/es/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/es/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/es/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/es/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/es/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/es/upgrade-astro.mdx",1754183246000],["src/content/docs/fr/astro-courses.mdx",1754183246000],["src/content/docs/fr/basics/astro-components.mdx",1754183246000],["src/content/docs/fr/basics/astro-pages.mdx",1754183246000],["src/content/docs/fr/basics/layouts.mdx",1754183246000],["src/content/docs/fr/basics/project-structure.mdx",1754183246000],["src/content/docs/fr/concepts/islands.mdx",1754183246000],["src/content/docs/fr/concepts/why-astro.mdx",1754183246000],["src/content/docs/fr/contribute.mdx",1754183246000],["src/content/docs/fr/develop-and-build.mdx",1754183246000],["src/content/docs/fr/editor-setup.mdx",1754183246000],["src/content/docs/fr/getting-started.mdx",1754183246000],["src/content/docs/fr/guides/actions.mdx",1754183246000],["src/content/docs/fr/guides/astro-db.mdx",1754183246000],["src/content/docs/fr/guides/authentication.mdx",1754183246000],["src/content/docs/fr/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/fr/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/fr/guides/backend/index.mdx",1754183246000],["src/content/docs/fr/guides/backend/neon.mdx",1754183246000],["src/content/docs/fr/guides/backend/sentry.mdx",1754183246000],["src/content/docs/fr/guides/backend/supabase.mdx",1754183246000],["src/content/docs/fr/guides/backend/turso.mdx",1754183246000],["src/content/docs/fr/guides/backend/xata.mdx",1754183246000],["src/content/docs/fr/guides/build-with-ai.mdx",1754183246000],["src/content/docs/fr/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/fr/guides/cms/apostrophecms.mdx",1754183246000],["src/content/docs/fr/guides/cms/builderio.mdx",1754183246000],["src/content/docs/fr/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/fr/guides/cms/caisy.mdx",1754183246000],["src/content/docs/fr/guides/cms/cloudcannon.mdx",1754183246000],["src/content/docs/fr/guides/cms/contentful.mdx",1754183246000],["src/content/docs/fr/guides/cms/cosmic.mdx",1754183246000],["src/content/docs/fr/guides/cms/craft-cms.mdx",1754183246000],["src/content/docs/fr/guides/cms/crystallize.mdx",1754183246000],["src/content/docs/fr/guides/cms/datocms.mdx",1754183246000],["src/content/docs/fr/guides/cms/decap-cms.mdx",1754183246000],["src/content/docs/fr/guides/cms/directus.mdx",1754183246000],["src/content/docs/fr/guides/cms/drupal.mdx",1754183246000],["src/content/docs/fr/guides/cms/flotiq.mdx",1754183246000],["src/content/docs/fr/guides/cms/frontmatter-cms.mdx",1754183246000],["src/content/docs/fr/guides/cms/ghost.mdx",1754183246000],["src/content/docs/fr/guides/cms/gitcms.mdx",1754183246000],["src/content/docs/fr/guides/cms/hashnode.mdx",1754183246000],["src/content/docs/fr/guides/cms/hygraph.mdx",1754183246000],["src/content/docs/fr/guides/cms/index.mdx",1754183246000],["src/content/docs/fr/guides/cms/keystatic.mdx",1754183246000],["src/content/docs/fr/guides/cms/keystonejs.mdx",1754183246000],["src/content/docs/fr/guides/cms/kontent-ai.mdx",1754183246000],["src/content/docs/fr/guides/cms/microcms.mdx",1754183246000],["src/content/docs/fr/guides/cms/optimizely.mdx",1754183246000],["src/content/docs/fr/guides/cms/payload.mdx",1754183246000],["src/content/docs/fr/guides/cms/preprcms.mdx",1754183246000],["src/content/docs/fr/guides/cms/prismic.mdx",1754183246000],["src/content/docs/fr/guides/cms/sanity.mdx",1754183246000],["src/content/docs/fr/guides/cms/sitecore.mdx",1754183246000],["src/content/docs/fr/guides/cms/sitepins.mdx",1754183246000],["src/content/docs/fr/guides/cms/spinal.mdx",1754183246000],["src/content/docs/fr/guides/cms/statamic.mdx",1754183246000],["src/content/docs/fr/guides/cms/storyblok.mdx",1754183246000],["src/content/docs/fr/guides/cms/strapi.mdx",1754183246000],["src/content/docs/fr/guides/cms/studiocms.mdx",1754183246000],["src/content/docs/fr/guides/cms/tina-cms.mdx",1754183246000],["src/content/docs/fr/guides/cms/umbraco.mdx",1754183246000],["src/content/docs/fr/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/fr/guides/configuring-astro.mdx",1754183246000],["src/content/docs/fr/guides/content-collections.mdx",1754183246000],["src/content/docs/fr/guides/data-fetching.mdx",1754183246000],["src/content/docs/fr/guides/deploy/aws.mdx",1754183246000],["src/content/docs/fr/guides/deploy/azion.mdx",1754183246000],["src/content/docs/fr/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/fr/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/fr/guides/deploy/clever-cloud.mdx",1754183246000],["src/content/docs/fr/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/fr/guides/deploy/cloudray.mdx",1754183246000],["src/content/docs/fr/guides/deploy/deno.mdx",1754183246000],["src/content/docs/fr/guides/deploy/fleek.mdx",1754183246000],["src/content/docs/fr/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/fr/guides/deploy/flyio.mdx",1754183246000],["src/content/docs/fr/guides/deploy/github.mdx",1754183246000],["src/content/docs/fr/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/fr/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/fr/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/fr/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/fr/guides/deploy/index.mdx",1754183246000],["src/content/docs/fr/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/fr/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/fr/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/fr/guides/deploy/render.mdx",1754183246000],["src/content/docs/fr/guides/deploy/sst.mdx",1754183246000],["src/content/docs/fr/guides/deploy/stormkit.mdx",1754183246000],["src/content/docs/fr/guides/deploy/surge.mdx",1754183246000],["src/content/docs/fr/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/fr/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/fr/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/fr/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/fr/guides/ecommerce.mdx",1754183246000],["src/content/docs/fr/guides/endpoints.mdx",1754183246000],["src/content/docs/fr/guides/environment-variables.mdx",1754183246000],["src/content/docs/fr/guides/fonts.mdx",1754183246000],["src/content/docs/fr/guides/framework-components.mdx",1754183246000],["src/content/docs/fr/guides/images.mdx",1754183246000],["src/content/docs/fr/guides/imports.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/cloudflare.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/deno.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/lit.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/markdoc.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/mdx.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/netlify.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/node.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/partytown.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/prefetch.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/vercel.mdx",1754183246000],["src/content/docs/fr/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/fr/guides/internationalization.mdx",1754183246000],["src/content/docs/fr/guides/markdown-content.mdx",1754183246000],["src/content/docs/fr/guides/media/cloudinary.mdx",1754183246000],["src/content/docs/fr/guides/media/index.mdx",1754183246000],["src/content/docs/fr/guides/middleware.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-docusaurus.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-gatsby.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-gitbook.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-gridsome.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-hugo.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-jekyll.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-nextjs.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-nuxtjs.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-pelican.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-sveltekit.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/fr/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/fr/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/fr/guides/prefetch.mdx",1754183246000],["src/content/docs/fr/guides/routing.mdx",1754183246000],["src/content/docs/fr/guides/server-islands.mdx",1754183246000],["src/content/docs/fr/guides/sessions.mdx",1754183246000],["src/content/docs/fr/guides/styling.mdx",1754183246000],["src/content/docs/fr/guides/syntax-highlighting.mdx",1754183246000],["src/content/docs/fr/guides/testing.mdx",1754183246000],["src/content/docs/fr/guides/troubleshooting.mdx",1754183246000],["src/content/docs/fr/guides/typescript.mdx",1754183246000],["src/content/docs/fr/guides/upgrade-to/v1.mdx",1754183246000],["src/content/docs/fr/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/fr/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/fr/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/fr/guides/upgrade-to/v5.mdx",1754183246000],["src/content/docs/fr/guides/view-transitions.mdx",1754183246000],["src/content/docs/fr/install-and-setup.mdx",1754183246000],["src/content/docs/fr/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/fr/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/fr/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/fr/recipes/build-forms-api.mdx",1754183246000],["src/content/docs/fr/recipes/build-forms.mdx",1754183246000],["src/content/docs/fr/recipes/bun.mdx",1754183246000],["src/content/docs/fr/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/fr/recipes/captcha.mdx",1754183246000],["src/content/docs/fr/recipes/docker.mdx",1754183246000],["src/content/docs/fr/recipes/dynamically-importing-images.mdx",1754183246000],["src/content/docs/fr/recipes/external-links.mdx",1754183246000],["src/content/docs/fr/recipes/i18n.mdx",1754183246000],["src/content/docs/fr/recipes/index.mdx",1754183246000],["src/content/docs/fr/recipes/making-toolbar-apps.mdx",1754183246000],["src/content/docs/fr/recipes/modified-time.mdx",1754183246000],["src/content/docs/fr/recipes/reading-time.mdx",1754183246000],["src/content/docs/fr/recipes/rss.mdx",1754183246000],["src/content/docs/fr/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/fr/recipes/sharing-state.mdx",1754183246000],["src/content/docs/fr/recipes/streaming-improve-page-performance.mdx",1754183246000],["src/content/docs/fr/recipes/tailwind-rendered-markdown.mdx",1754183246000],["src/content/docs/fr/reference/adapter-reference.mdx",1754183246000],["src/content/docs/fr/reference/api-reference.mdx",1754183246000],["src/content/docs/fr/reference/astro-syntax.mdx",1754183246000],["src/content/docs/fr/reference/cli-reference.mdx",1754183246000],["src/content/docs/fr/reference/configuration-reference.mdx",1754183246000],["src/content/docs/fr/reference/content-loader-reference.mdx",1754183246000],["src/content/docs/fr/reference/dev-toolbar-app-reference.mdx",1754183246000],["src/content/docs/fr/reference/directives-reference.mdx",1754183246000],["src/content/docs/fr/reference/error-reference.mdx",1754183246000],["src/content/docs/fr/reference/errors/action-called-from-server-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/action-not-found-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/action-query-string-invalid-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/actions-cant-be-loaded.mdx",1754183246000],["src/content/docs/fr/reference/errors/actions-returned-invalid-data-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/actions-used-with-for-get-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/actions-without-server-output-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/adapter-support-output-mismatch.mdx",1754183246000],["src/content/docs/fr/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/fr/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/fr/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/fr/reference/errors/cannot-determine-weight-and-style-from-font-file.mdx",1754183246000],["src/content/docs/fr/reference/errors/cannot-extract-font-type.mdx",1754183246000],["src/content/docs/fr/reference/errors/cannot-fetch-font-file.mdx",1754183246000],["src/content/docs/fr/reference/errors/cannot-load-font-provider.mdx",1754183246000],["src/content/docs/fr/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/fr/reference/errors/cant-use-astro-config-module-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/fr/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/fr/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/content-entry-data-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/content-loader-invalid-data-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/content-loader-returns-invalid-id.mdx",1754183246000],["src/content/docs/fr/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/fr/reference/errors/csp-not-enabled.mdx",1754183246000],["src/content/docs/fr/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/fr/reference/errors/env-invalid-variable.mdx",1754183246000],["src/content/docs/fr/reference/errors/env-invalid-variables.mdx",1754183246000],["src/content/docs/fr/reference/errors/env-unsupported-get-secret.mdx",1754183246000],["src/content/docs/fr/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/fr/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/fr/reference/errors/expected-not-esmimage.mdx",1754183246000],["src/content/docs/fr/reference/errors/experimental-fonts-not-enabled.mdx",1754183246000],["src/content/docs/fr/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/fr/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/fr/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/fr/reference/errors/file-glob-not-supported.mdx",1754183246000],["src/content/docs/fr/reference/errors/file-parser-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/font-family-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/forbidden-rewrite.mdx",1754183246000],["src/content/docs/fr/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/get-entry-deprecation-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/fr/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/fr/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/fr/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/fr/reference/errors/i18n-no-locale-found-in-path.mdx",1754183246000],["src/content/docs/fr/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/fr/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/fr/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/fr/reference/errors/incorrect-strategy-for-i18n.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-content-entry-data-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/fr/reference/errors/invalid-rewrite404.mdx",1754183246000],["src/content/docs/fr/reference/errors/live-content-config-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/fr/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/fr/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/fr/reference/errors/locals-reassigned.mdx",1754183246000],["src/content/docs/fr/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/fr/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/fr/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-middleware-for-internationalization.mdx",1754183246000],["src/content/docs/fr/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/fr/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-adapter-installed-server-islands.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/fr/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/fr/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/prerender-client-address-not-available.mdx",1754183246000],["src/content/docs/fr/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/fr/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/fr/reference/errors/render-undefined-entry-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/fr/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/rewrite-encountered-an-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/rewrite-with-body-used.mdx",1754183246000],["src/content/docs/fr/reference/errors/route-not-found.mdx",1754183246000],["src/content/docs/fr/reference/errors/server-only-module.mdx",1754183246000],["src/content/docs/fr/reference/errors/session-config-missing-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/session-config-without-flag-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/session-storage-init-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/session-storage-save-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/session-without-supported-adapter-output-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/fr/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/fr/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-filesystem-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/fr/reference/errors/unsupported-external-redirect.mdx",1754183246000],["src/content/docs/fr/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/fr/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/client-prerender.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/content-intellisense.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/csp.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/fonts.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/heading-id-compat.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/index.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/live-content-collections.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/preserve-scripts-order.mdx",1754183246000],["src/content/docs/fr/reference/experimental-flags/raw-env-values.mdx",1754183246000],["src/content/docs/fr/reference/image-service-reference.mdx",1754183246000],["src/content/docs/fr/reference/integrations-reference.mdx",1754183246000],["src/content/docs/fr/reference/legacy-flags.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-actions.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-assets.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-config.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-content.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-env.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-i18n.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-middleware.mdx",1754183246000],["src/content/docs/fr/reference/modules/astro-transitions.mdx",1754183246000],["src/content/docs/fr/reference/programmatic-reference.mdx",1754183246000],["src/content/docs/fr/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/fr/reference/routing-reference.mdx",1754183246000],["src/content/docs/fr/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/fr/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/fr/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/fr/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/fr/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/fr/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/fr/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/fr/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/fr/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/fr/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/fr/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/fr/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/fr/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/fr/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/fr/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/fr/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/fr/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/fr/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/fr/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/fr/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/fr/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/fr/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/fr/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/fr/upgrade-astro.mdx",1754183246000],["src/content/docs/hi/basics/astro-components.mdx",1754183246000],["src/content/docs/hi/basics/astro-pages.mdx",1754183246000],["src/content/docs/hi/basics/project-structure.mdx",1754183246000],["src/content/docs/hi/concepts/islands.mdx",1754183246000],["src/content/docs/hi/concepts/why-astro.mdx",1754183246000],["src/content/docs/hi/contribute.mdx",1754183246000],["src/content/docs/hi/develop-and-build.mdx",1754183246000],["src/content/docs/hi/editor-setup.mdx",1754183246000],["src/content/docs/hi/getting-started.mdx",1754183246000],["src/content/docs/hi/reference/astro-syntax.mdx",1754183246000],["src/content/docs/it/basics/astro-components.mdx",1754183246000],["src/content/docs/it/basics/astro-pages.mdx",1754183246000],["src/content/docs/it/basics/layouts.mdx",1754183246000],["src/content/docs/it/basics/project-structure.mdx",1754183246000],["src/content/docs/it/concepts/islands.mdx",1754183246000],["src/content/docs/it/concepts/why-astro.mdx",1754183246000],["src/content/docs/it/contribute.mdx",1754183246000],["src/content/docs/it/develop-and-build.mdx",1754183246000],["src/content/docs/it/editor-setup.mdx",1754183246000],["src/content/docs/it/getting-started.mdx",1754183246000],["src/content/docs/it/guides/astro-db.mdx",1754183246000],["src/content/docs/it/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/it/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/it/guides/backend/index.mdx",1754183246000],["src/content/docs/it/guides/backend/supabase.mdx",1754183246000],["src/content/docs/it/guides/backend/turso.mdx",1754183246000],["src/content/docs/it/guides/backend/xata.mdx",1754183246000],["src/content/docs/it/guides/configuring-astro.mdx",1754183246000],["src/content/docs/it/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/it/guides/deploy/deno.mdx",1754183246000],["src/content/docs/it/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/it/guides/endpoints.mdx",1754183246000],["src/content/docs/it/guides/fonts.mdx",1754183246000],["src/content/docs/it/guides/framework-components.mdx",1754183246000],["src/content/docs/it/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/it/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/it/guides/prefetch.mdx",1754183246000],["src/content/docs/it/guides/routing.mdx",1754183246000],["src/content/docs/it/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/it/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/it/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/it/recipes/bun.mdx",1754183246000],["src/content/docs/it/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/it/recipes/captcha.mdx",1754183246000],["src/content/docs/it/recipes/external-links.mdx",1754183246000],["src/content/docs/it/recipes/index.mdx",1754183246000],["src/content/docs/it/recipes/sharing-state.mdx",1754183246000],["src/content/docs/it/reference/astro-syntax.mdx",1754183246000],["src/content/docs/it/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/it/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/it/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/it/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/it/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/it/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/it/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/it/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/it/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/it/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/it/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/it/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/it/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/it/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/it/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/it/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/it/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/it/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/it/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/it/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/it/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/it/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/it/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/ja/basics/astro-components.mdx",1754183246000],["src/content/docs/ja/basics/astro-pages.mdx",1754183246000],["src/content/docs/ja/basics/layouts.mdx",1754183246000],["src/content/docs/ja/basics/project-structure.mdx",1754183246000],["src/content/docs/ja/concepts/islands.mdx",1754183246000],["src/content/docs/ja/concepts/why-astro.mdx",1754183246000],["src/content/docs/ja/contribute.mdx",1754183246000],["src/content/docs/ja/develop-and-build.mdx",1754183246000],["src/content/docs/ja/editor-setup.mdx",1754183246000],["src/content/docs/ja/getting-started.mdx",1754183246000],["src/content/docs/ja/guides/actions.mdx",1754183246000],["src/content/docs/ja/guides/astro-db.mdx",1754183246000],["src/content/docs/ja/guides/authentication.mdx",1754183246000],["src/content/docs/ja/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/ja/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/ja/guides/backend/index.mdx",1754183246000],["src/content/docs/ja/guides/backend/neon.mdx",1754183246000],["src/content/docs/ja/guides/backend/sentry.mdx",1754183246000],["src/content/docs/ja/guides/backend/supabase.mdx",1754183246000],["src/content/docs/ja/guides/backend/turso.mdx",1754183246000],["src/content/docs/ja/guides/backend/xata.mdx",1754183246000],["src/content/docs/ja/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/ja/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/ja/guides/cms/contentful.mdx",1754183246000],["src/content/docs/ja/guides/cms/index.mdx",1754183246000],["src/content/docs/ja/guides/cms/storyblok.mdx",1754183246000],["src/content/docs/ja/guides/configuring-astro.mdx",1754183246000],["src/content/docs/ja/guides/content-collections.mdx",1754183246000],["src/content/docs/ja/guides/data-fetching.mdx",1754183246000],["src/content/docs/ja/guides/deploy/aws.mdx",1754183246000],["src/content/docs/ja/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/ja/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/ja/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/ja/guides/deploy/deno.mdx",1754183246000],["src/content/docs/ja/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/ja/guides/deploy/github.mdx",1754183246000],["src/content/docs/ja/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/ja/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/ja/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/ja/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/ja/guides/deploy/index.mdx",1754183246000],["src/content/docs/ja/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/ja/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/ja/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/ja/guides/deploy/render.mdx",1754183246000],["src/content/docs/ja/guides/deploy/sst.mdx",1754183246000],["src/content/docs/ja/guides/deploy/surge.mdx",1754183246000],["src/content/docs/ja/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/ja/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/ja/guides/ecommerce.mdx",1754183246000],["src/content/docs/ja/guides/endpoints.mdx",1754183246000],["src/content/docs/ja/guides/environment-variables.mdx",1754183246000],["src/content/docs/ja/guides/fonts.mdx",1754183246000],["src/content/docs/ja/guides/framework-components.mdx",1754183246000],["src/content/docs/ja/guides/images.mdx",1754183246000],["src/content/docs/ja/guides/imports.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/cloudflare.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/markdoc.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/mdx.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/netlify.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/node.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/partytown.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/vercel.mdx",1754183246000],["src/content/docs/ja/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/ja/guides/markdown-content.mdx",1754183246000],["src/content/docs/ja/guides/media/index.mdx",1754183246000],["src/content/docs/ja/guides/middleware.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-docusaurus.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-gatsby.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-gitbook.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-gridsome.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-hugo.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-jekyll.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-pelican.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-sveltekit.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/ja/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/ja/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/ja/guides/prefetch.mdx",1754183246000],["src/content/docs/ja/guides/routing.mdx",1754183246000],["src/content/docs/ja/guides/server-islands.mdx",1754183246000],["src/content/docs/ja/guides/sessions.mdx",1754183246000],["src/content/docs/ja/guides/styling.mdx",1754183246000],["src/content/docs/ja/guides/syntax-highlighting.mdx",1754183246000],["src/content/docs/ja/guides/testing.mdx",1754183246000],["src/content/docs/ja/guides/troubleshooting.mdx",1754183246000],["src/content/docs/ja/guides/typescript.mdx",1754183246000],["src/content/docs/ja/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/ja/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/ja/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/ja/guides/view-transitions.mdx",1754183246000],["src/content/docs/ja/install-and-setup.mdx",1754183246000],["src/content/docs/ja/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/ja/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/ja/recipes/bun.mdx",1754183246000],["src/content/docs/ja/recipes/captcha.mdx",1754183246000],["src/content/docs/ja/recipes/docker.mdx",1754183246000],["src/content/docs/ja/recipes/index.mdx",1754183246000],["src/content/docs/ja/recipes/rss.mdx",1754183246000],["src/content/docs/ja/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/ja/reference/adapter-reference.mdx",1754183246000],["src/content/docs/ja/reference/astro-syntax.mdx",1754183246000],["src/content/docs/ja/reference/cli-reference.mdx",1754183246000],["src/content/docs/ja/reference/configuration-reference.mdx",1754183246000],["src/content/docs/ja/reference/content-loader-reference.mdx",1754183246000],["src/content/docs/ja/reference/directives-reference.mdx",1754183246000],["src/content/docs/ja/reference/error-reference.mdx",1754183246000],["src/content/docs/ja/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/ja/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/ja/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/ja/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/ja/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/ja/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/ja/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/ja/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/ja/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/ja/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/ja/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/ja/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/ja/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/ja/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/ja/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/ja/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/ja/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/ja/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/ja/reference/image-service-reference.mdx",1754183246000],["src/content/docs/ja/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/ja/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/ja/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/ja/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/ja/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/ja/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/ja/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/ja/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/ja/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/ja/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/ja/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/ja/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/ja/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/ja/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/ja/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/ja/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/ja/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/ja/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/ja/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/ja/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/ja/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/ja/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/ja/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/ja/upgrade-astro.mdx",1754183246000],["src/content/docs/ko/astro-courses.mdx",1754183246000],["src/content/docs/ko/basics/astro-components.mdx",1754183246000],["src/content/docs/ko/basics/astro-pages.mdx",1754183246000],["src/content/docs/ko/basics/layouts.mdx",1754183246000],["src/content/docs/ko/basics/project-structure.mdx",1754183246000],["src/content/docs/ko/concepts/islands.mdx",1754183246000],["src/content/docs/ko/concepts/why-astro.mdx",1754183246000],["src/content/docs/ko/contribute.mdx",1754183246000],["src/content/docs/ko/develop-and-build.mdx",1754183246000],["src/content/docs/ko/editor-setup.mdx",1754183246000],["src/content/docs/ko/getting-started.mdx",1754183246000],["src/content/docs/ko/guides/actions.mdx",1754183246000],["src/content/docs/ko/guides/astro-db.mdx",1754183246000],["src/content/docs/ko/guides/authentication.mdx",1754183246000],["src/content/docs/ko/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/ko/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/ko/guides/backend/index.mdx",1754183246000],["src/content/docs/ko/guides/backend/neon.mdx",1754183246000],["src/content/docs/ko/guides/backend/sentry.mdx",1754183246000],["src/content/docs/ko/guides/backend/supabase.mdx",1754183246000],["src/content/docs/ko/guides/backend/turso.mdx",1754183246000],["src/content/docs/ko/guides/backend/xata.mdx",1754183246000],["src/content/docs/ko/guides/build-with-ai.mdx",1754183246000],["src/content/docs/ko/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/ko/guides/cms/apostrophecms.mdx",1754183246000],["src/content/docs/ko/guides/cms/builderio.mdx",1754183246000],["src/content/docs/ko/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/ko/guides/cms/caisy.mdx",1754183246000],["src/content/docs/ko/guides/cms/cloudcannon.mdx",1754183246000],["src/content/docs/ko/guides/cms/contentful.mdx",1754183246000],["src/content/docs/ko/guides/cms/cosmic.mdx",1754183246000],["src/content/docs/ko/guides/cms/craft-cms.mdx",1754183246000],["src/content/docs/ko/guides/cms/crystallize.mdx",1754183246000],["src/content/docs/ko/guides/cms/datocms.mdx",1754183246000],["src/content/docs/ko/guides/cms/decap-cms.mdx",1754183246000],["src/content/docs/ko/guides/cms/directus.mdx",1754183246000],["src/content/docs/ko/guides/cms/drupal.mdx",1754183246000],["src/content/docs/ko/guides/cms/flotiq.mdx",1754183246000],["src/content/docs/ko/guides/cms/frontmatter-cms.mdx",1754183246000],["src/content/docs/ko/guides/cms/ghost.mdx",1754183246000],["src/content/docs/ko/guides/cms/gitcms.mdx",1754183246000],["src/content/docs/ko/guides/cms/hashnode.mdx",1754183246000],["src/content/docs/ko/guides/cms/hygraph.mdx",1754183246000],["src/content/docs/ko/guides/cms/index.mdx",1754183246000],["src/content/docs/ko/guides/cms/keystatic.mdx",1754183246000],["src/content/docs/ko/guides/cms/keystonejs.mdx",1754183246000],["src/content/docs/ko/guides/cms/kontent-ai.mdx",1754183246000],["src/content/docs/ko/guides/cms/microcms.mdx",1754183246000],["src/content/docs/ko/guides/cms/optimizely.mdx",1754183246000],["src/content/docs/ko/guides/cms/payload.mdx",1754183246000],["src/content/docs/ko/guides/cms/preprcms.mdx",1754183246000],["src/content/docs/ko/guides/cms/prismic.mdx",1754183246000],["src/content/docs/ko/guides/cms/sanity.mdx",1754183246000],["src/content/docs/ko/guides/cms/sitecore.mdx",1754183246000],["src/content/docs/ko/guides/cms/sitepins.mdx",1754183246000],["src/content/docs/ko/guides/cms/spinal.mdx",1754183246000],["src/content/docs/ko/guides/cms/statamic.mdx",1754183246000],["src/content/docs/ko/guides/cms/storyblok.mdx",1754183246000],["src/content/docs/ko/guides/cms/strapi.mdx",1754183246000],["src/content/docs/ko/guides/cms/studiocms.mdx",1754183246000],["src/content/docs/ko/guides/cms/tina-cms.mdx",1754183246000],["src/content/docs/ko/guides/cms/umbraco.mdx",1754183246000],["src/content/docs/ko/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/ko/guides/configuring-astro.mdx",1754183246000],["src/content/docs/ko/guides/content-collections.mdx",1754183246000],["src/content/docs/ko/guides/data-fetching.mdx",1754183246000],["src/content/docs/ko/guides/deploy/aws.mdx",1754183246000],["src/content/docs/ko/guides/deploy/azion.mdx",1754183246000],["src/content/docs/ko/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/ko/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/ko/guides/deploy/clever-cloud.mdx",1754183246000],["src/content/docs/ko/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/ko/guides/deploy/cloudray.mdx",1754183246000],["src/content/docs/ko/guides/deploy/deno.mdx",1754183246000],["src/content/docs/ko/guides/deploy/fleek.mdx",1754183246000],["src/content/docs/ko/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/ko/guides/deploy/flyio.mdx",1754183246000],["src/content/docs/ko/guides/deploy/github.mdx",1754183246000],["src/content/docs/ko/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/ko/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/ko/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/ko/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/ko/guides/deploy/index.mdx",1754183246000],["src/content/docs/ko/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/ko/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/ko/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/ko/guides/deploy/render.mdx",1754183246000],["src/content/docs/ko/guides/deploy/sst.mdx",1754183246000],["src/content/docs/ko/guides/deploy/stormkit.mdx",1754183246000],["src/content/docs/ko/guides/deploy/surge.mdx",1754183246000],["src/content/docs/ko/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/ko/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/ko/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/ko/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/ko/guides/ecommerce.mdx",1754183246000],["src/content/docs/ko/guides/endpoints.mdx",1754183246000],["src/content/docs/ko/guides/environment-variables.mdx",1754183246000],["src/content/docs/ko/guides/fonts.mdx",1754183246000],["src/content/docs/ko/guides/framework-components.mdx",1754183246000],["src/content/docs/ko/guides/images.mdx",1754183246000],["src/content/docs/ko/guides/imports.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/cloudflare.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/deno.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/lit.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/markdoc.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/mdx.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/netlify.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/node.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/partytown.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/prefetch.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/vercel.mdx",1754183246000],["src/content/docs/ko/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/ko/guides/internationalization.mdx",1754183246000],["src/content/docs/ko/guides/markdown-content.mdx",1754183246000],["src/content/docs/ko/guides/media/cloudinary.mdx",1754183246000],["src/content/docs/ko/guides/media/index.mdx",1754183246000],["src/content/docs/ko/guides/middleware.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-docusaurus.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-gatsby.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-gitbook.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-gridsome.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-hugo.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-jekyll.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-nextjs.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-nuxtjs.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-pelican.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-sveltekit.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/ko/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/ko/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/ko/guides/prefetch.mdx",1754183246000],["src/content/docs/ko/guides/routing.mdx",1754183246000],["src/content/docs/ko/guides/server-islands.mdx",1754183246000],["src/content/docs/ko/guides/sessions.mdx",1754183246000],["src/content/docs/ko/guides/styling.mdx",1754183246000],["src/content/docs/ko/guides/syntax-highlighting.mdx",1754183246000],["src/content/docs/ko/guides/testing.mdx",1754183246000],["src/content/docs/ko/guides/troubleshooting.mdx",1754183246000],["src/content/docs/ko/guides/typescript.mdx",1754183246000],["src/content/docs/ko/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/ko/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/ko/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/ko/guides/upgrade-to/v5.mdx",1754183246000],["src/content/docs/ko/guides/view-transitions.mdx",1754183246000],["src/content/docs/ko/install-and-setup.mdx",1754183246000],["src/content/docs/ko/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/ko/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/ko/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/ko/recipes/build-forms-api.mdx",1754183246000],["src/content/docs/ko/recipes/build-forms.mdx",1754183246000],["src/content/docs/ko/recipes/bun.mdx",1754183246000],["src/content/docs/ko/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/ko/recipes/captcha.mdx",1754183246000],["src/content/docs/ko/recipes/customizing-output-filenames.mdx",1754183246000],["src/content/docs/ko/recipes/docker.mdx",1754183246000],["src/content/docs/ko/recipes/dynamically-importing-images.mdx",1754183246000],["src/content/docs/ko/recipes/external-links.mdx",1754183246000],["src/content/docs/ko/recipes/i18n.mdx",1754183246000],["src/content/docs/ko/recipes/index.mdx",1754183246000],["src/content/docs/ko/recipes/making-toolbar-apps.mdx",1754183246000],["src/content/docs/ko/recipes/modified-time.mdx",1754183246000],["src/content/docs/ko/recipes/reading-time.mdx",1754183246000],["src/content/docs/ko/recipes/rss.mdx",1754183246000],["src/content/docs/ko/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/ko/recipes/sharing-state.mdx",1754183246000],["src/content/docs/ko/recipes/streaming-improve-page-performance.mdx",1754183246000],["src/content/docs/ko/recipes/tailwind-rendered-markdown.mdx",1754183246000],["src/content/docs/ko/reference/adapter-reference.mdx",1754183246000],["src/content/docs/ko/reference/api-reference.mdx",1754183246000],["src/content/docs/ko/reference/astro-syntax.mdx",1754183246000],["src/content/docs/ko/reference/cli-reference.mdx",1754183246000],["src/content/docs/ko/reference/configuration-reference.mdx",1754183246000],["src/content/docs/ko/reference/content-loader-reference.mdx",1754183246000],["src/content/docs/ko/reference/dev-toolbar-app-reference.mdx",1754183246000],["src/content/docs/ko/reference/directives-reference.mdx",1754183246000],["src/content/docs/ko/reference/error-reference.mdx",1754183246000],["src/content/docs/ko/reference/errors/action-called-from-server-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/action-not-found-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/action-query-string-invalid-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/actions-cant-be-loaded.mdx",1754183246000],["src/content/docs/ko/reference/errors/actions-returned-invalid-data-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/actions-used-with-for-get-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/actions-without-server-output-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/adapter-support-output-mismatch.mdx",1754183246000],["src/content/docs/ko/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/ko/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/ko/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/ko/reference/errors/cannot-determine-weight-and-style-from-font-file.mdx",1754183246000],["src/content/docs/ko/reference/errors/cannot-extract-font-type.mdx",1754183246000],["src/content/docs/ko/reference/errors/cannot-fetch-font-file.mdx",1754183246000],["src/content/docs/ko/reference/errors/cannot-load-font-provider.mdx",1754183246000],["src/content/docs/ko/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/ko/reference/errors/cant-use-astro-config-module-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/ko/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/ko/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/content-entry-data-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/content-loader-invalid-data-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/content-loader-returns-invalid-id.mdx",1754183246000],["src/content/docs/ko/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/ko/reference/errors/csp-not-enabled.mdx",1754183246000],["src/content/docs/ko/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/ko/reference/errors/env-invalid-variable.mdx",1754183246000],["src/content/docs/ko/reference/errors/env-invalid-variables.mdx",1754183246000],["src/content/docs/ko/reference/errors/env-unsupported-get-secret.mdx",1754183246000],["src/content/docs/ko/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/ko/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/ko/reference/errors/expected-not-esmimage.mdx",1754183246000],["src/content/docs/ko/reference/errors/experimental-fonts-not-enabled.mdx",1754183246000],["src/content/docs/ko/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/ko/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/ko/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/ko/reference/errors/file-glob-not-supported.mdx",1754183246000],["src/content/docs/ko/reference/errors/file-parser-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/font-family-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/forbidden-rewrite.mdx",1754183246000],["src/content/docs/ko/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/get-entry-deprecation-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/ko/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/ko/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/ko/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/ko/reference/errors/i18n-no-locale-found-in-path.mdx",1754183246000],["src/content/docs/ko/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/ko/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/ko/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/ko/reference/errors/incorrect-strategy-for-i18n.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-content-entry-data-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/ko/reference/errors/invalid-rewrite404.mdx",1754183246000],["src/content/docs/ko/reference/errors/live-content-config-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/ko/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/ko/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/ko/reference/errors/locals-reassigned.mdx",1754183246000],["src/content/docs/ko/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/ko/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/ko/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-middleware-for-internationalization.mdx",1754183246000],["src/content/docs/ko/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/ko/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-adapter-installed-server-islands.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/ko/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/ko/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/prerender-client-address-not-available.mdx",1754183246000],["src/content/docs/ko/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/ko/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/ko/reference/errors/render-undefined-entry-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/ko/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/rewrite-encountered-an-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/rewrite-with-body-used.mdx",1754183246000],["src/content/docs/ko/reference/errors/route-not-found.mdx",1754183246000],["src/content/docs/ko/reference/errors/server-only-module.mdx",1754183246000],["src/content/docs/ko/reference/errors/session-config-missing-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/session-config-without-flag-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/session-storage-init-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/session-storage-save-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/session-without-supported-adapter-output-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/ko/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/ko/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-filesystem-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/ko/reference/errors/unsupported-external-redirect.mdx",1754183246000],["src/content/docs/ko/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/ko/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/client-prerender.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/content-intellisense.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/csp.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/fonts.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/heading-id-compat.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/index.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/live-content-collections.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/preserve-scripts-order.mdx",1754183246000],["src/content/docs/ko/reference/experimental-flags/raw-env-values.mdx",1754183246000],["src/content/docs/ko/reference/image-service-reference.mdx",1754183246000],["src/content/docs/ko/reference/integrations-reference.mdx",1754183246000],["src/content/docs/ko/reference/legacy-flags.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-actions.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-assets.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-config.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-content.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-env.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-i18n.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-middleware.mdx",1754183246000],["src/content/docs/ko/reference/modules/astro-transitions.mdx",1754183246000],["src/content/docs/ko/reference/programmatic-reference.mdx",1754183246000],["src/content/docs/ko/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/ko/reference/routing-reference.mdx",1754183246000],["src/content/docs/ko/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/ko/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/ko/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/ko/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/ko/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/ko/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/ko/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/ko/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/ko/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/ko/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/ko/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/ko/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/ko/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/ko/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/ko/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/ko/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/ko/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/ko/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/ko/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/ko/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/ko/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/ko/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/ko/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/ko/upgrade-astro.mdx",1754183246000],["src/content/docs/pl/astro-courses.mdx",1754183246000],["src/content/docs/pl/basics/astro-components.mdx",1754183246000],["src/content/docs/pl/basics/astro-pages.mdx",1754183246000],["src/content/docs/pl/basics/layouts.mdx",1754183246000],["src/content/docs/pl/basics/project-structure.mdx",1754183246000],["src/content/docs/pl/concepts/islands.mdx",1754183246000],["src/content/docs/pl/concepts/why-astro.mdx",1754183246000],["src/content/docs/pl/contribute.mdx",1754183246000],["src/content/docs/pl/develop-and-build.mdx",1754183246000],["src/content/docs/pl/editor-setup.mdx",1754183246000],["src/content/docs/pl/getting-started.mdx",1754183246000],["src/content/docs/pl/guides/actions.mdx",1754183246000],["src/content/docs/pl/guides/cms/index.mdx",1754183246000],["src/content/docs/pl/guides/deploy/index.mdx",1754183246000],["src/content/docs/pl/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/pl/guides/fonts.mdx",1754183246000],["src/content/docs/pl/guides/imports.mdx",1754183246000],["src/content/docs/pl/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/pl/guides/media/index.mdx",1754183246000],["src/content/docs/pl/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/pl/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/pl/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/pl/install-and-setup.mdx",1754183246000],["src/content/docs/pl/recipes/rss.mdx",1754183246000],["src/content/docs/pl/reference/astro-syntax.mdx",1754183246000],["src/content/docs/pt-br/basics/astro-components.mdx",1754183246000],["src/content/docs/pt-br/basics/astro-pages.mdx",1754183246000],["src/content/docs/pt-br/basics/layouts.mdx",1754183246000],["src/content/docs/pt-br/basics/project-structure.mdx",1754183246000],["src/content/docs/pt-br/concepts/islands.mdx",1754183246000],["src/content/docs/pt-br/concepts/why-astro.mdx",1754183246000],["src/content/docs/pt-br/contribute.mdx",1754183246000],["src/content/docs/pt-br/develop-and-build.mdx",1754183246000],["src/content/docs/pt-br/editor-setup.mdx",1754183246000],["src/content/docs/pt-br/getting-started.mdx",1754183246000],["src/content/docs/pt-br/guides/authentication.mdx",1754183246000],["src/content/docs/pt-br/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/pt-br/guides/backend/index.mdx",1754183246000],["src/content/docs/pt-br/guides/backend/neon.mdx",1754183246000],["src/content/docs/pt-br/guides/backend/sentry.mdx",1754183246000],["src/content/docs/pt-br/guides/backend/turso.mdx",1754183246000],["src/content/docs/pt-br/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/pt-br/guides/cms/caisy.mdx",1754183246000],["src/content/docs/pt-br/guides/cms/index.mdx",1754183246000],["src/content/docs/pt-br/guides/cms/prismic.mdx",1754183246000],["src/content/docs/pt-br/guides/cms/sanity.mdx",1754183246000],["src/content/docs/pt-br/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/pt-br/guides/configuring-astro.mdx",1754183246000],["src/content/docs/pt-br/guides/content-collections.mdx",1754183246000],["src/content/docs/pt-br/guides/data-fetching.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/aws.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/azion.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/clever-cloud.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/deno.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/fleek.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/flyio.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/github.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/index.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/render.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/sst.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/stormkit.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/surge.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/pt-br/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/pt-br/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/pt-br/guides/ecommerce.mdx",1754183246000],["src/content/docs/pt-br/guides/endpoints.mdx",1754183246000],["src/content/docs/pt-br/guides/environment-variables.mdx",1754183246000],["src/content/docs/pt-br/guides/fonts.mdx",1754183246000],["src/content/docs/pt-br/guides/framework-components.mdx",1754183246000],["src/content/docs/pt-br/guides/images.mdx",1754183246000],["src/content/docs/pt-br/guides/imports.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/deno.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/prefetch.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/pt-br/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/pt-br/guides/markdown-content.mdx",1754183246000],["src/content/docs/pt-br/guides/media/cloudinary.mdx",1754183246000],["src/content/docs/pt-br/guides/media/index.mdx",1754183246000],["src/content/docs/pt-br/guides/middleware.mdx",1754183246000],["src/content/docs/pt-br/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/pt-br/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/pt-br/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/pt-br/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/pt-br/guides/prefetch.mdx",1754183246000],["src/content/docs/pt-br/guides/routing.mdx",1754183246000],["src/content/docs/pt-br/guides/styling.mdx",1754183246000],["src/content/docs/pt-br/guides/testing.mdx",1754183246000],["src/content/docs/pt-br/guides/troubleshooting.mdx",1754183246000],["src/content/docs/pt-br/guides/typescript.mdx",1754183246000],["src/content/docs/pt-br/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/pt-br/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/pt-br/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/pt-br/guides/view-transitions.mdx",1754183246000],["src/content/docs/pt-br/install-and-setup.mdx",1754183246000],["src/content/docs/pt-br/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/pt-br/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/pt-br/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/pt-br/recipes/build-forms-api.mdx",1754183246000],["src/content/docs/pt-br/recipes/build-forms.mdx",1754183246000],["src/content/docs/pt-br/recipes/bun.mdx",1754183246000],["src/content/docs/pt-br/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/pt-br/recipes/captcha.mdx",1754183246000],["src/content/docs/pt-br/recipes/docker.mdx",1754183246000],["src/content/docs/pt-br/recipes/dynamically-importing-images.mdx",1754183246000],["src/content/docs/pt-br/recipes/external-links.mdx",1754183246000],["src/content/docs/pt-br/recipes/i18n.mdx",1754183246000],["src/content/docs/pt-br/recipes/index.mdx",1754183246000],["src/content/docs/pt-br/recipes/making-toolbar-apps.mdx",1754183246000],["src/content/docs/pt-br/recipes/modified-time.mdx",1754183246000],["src/content/docs/pt-br/recipes/reading-time.mdx",1754183246000],["src/content/docs/pt-br/recipes/rss.mdx",1754183246000],["src/content/docs/pt-br/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/pt-br/recipes/sharing-state.mdx",1754183246000],["src/content/docs/pt-br/recipes/streaming-improve-page-performance.mdx",1754183246000],["src/content/docs/pt-br/recipes/tailwind-rendered-markdown.mdx",1754183246000],["src/content/docs/pt-br/reference/adapter-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/api-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/astro-syntax.mdx",1754183246000],["src/content/docs/pt-br/reference/cli-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/configuration-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/directives-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/error-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/action-called-from-server-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/action-not-found-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/action-query-string-invalid-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/actions-cant-be-loaded.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/actions-returned-invalid-data-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/actions-used-with-for-get-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/actions-without-server-output-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/adapter-support-output-mismatch.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/cant-use-astro-config-module-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/content-entry-data-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/content-loader-invalid-data-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/content-loader-returns-invalid-id.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/env-invalid-variable.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/env-invalid-variables.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/env-unsupported-get-secret.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/expected-not-esmimage.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/forbidden-rewrite.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/get-entry-deprecation-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/i18n-no-locale-found-in-path.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/incorrect-strategy-for-i18n.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-content-entry-data-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/invalid-rewrite404.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/locals-reassigned.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-middleware-for-internationalization.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-adapter-installed-server-islands.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/prerender-client-address-not-available.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/render-undefined-entry-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/rewrite-encountered-an-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/rewrite-with-body-used.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/route-not-found.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/server-only-module.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/session-config-missing-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/session-config-without-flag-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/session-storage-init-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/session-storage-save-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/session-without-supported-adapter-output-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-filesystem-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unsupported-external-redirect.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/pt-br/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/pt-br/reference/integrations-reference.mdx",1754183246000],["src/content/docs/pt-br/reference/legacy-flags.mdx",1754183246000],["src/content/docs/pt-br/reference/modules/astro-config.mdx",1754183246000],["src/content/docs/pt-br/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/pt-br/reference/routing-reference.mdx",1754183246000],["src/content/docs/pt-br/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/pt-br/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/pt-br/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/pt-br/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/pt-br/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/pt-br/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/pt-br/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/pt-br/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/pt-br/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/pt-br/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/pt-br/upgrade-astro.mdx",1754183246000],["src/content/docs/ru/basics/astro-components.mdx",1754183246000],["src/content/docs/ru/basics/astro-pages.mdx",1754183246000],["src/content/docs/ru/basics/layouts.mdx",1754183246000],["src/content/docs/ru/basics/project-structure.mdx",1754183246000],["src/content/docs/ru/concepts/islands.mdx",1754183246000],["src/content/docs/ru/concepts/why-astro.mdx",1754183246000],["src/content/docs/ru/contribute.mdx",1754183246000],["src/content/docs/ru/develop-and-build.mdx",1754183246000],["src/content/docs/ru/editor-setup.mdx",1754183246000],["src/content/docs/ru/getting-started.mdx",1754183246000],["src/content/docs/ru/guides/astro-db.mdx",1754183246000],["src/content/docs/ru/guides/authentication.mdx",1754183246000],["src/content/docs/ru/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/ru/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/ru/guides/backend/index.mdx",1754183246000],["src/content/docs/ru/guides/backend/supabase.mdx",1754183246000],["src/content/docs/ru/guides/backend/turso.mdx",1754183246000],["src/content/docs/ru/guides/backend/xata.mdx",1754183246000],["src/content/docs/ru/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/ru/guides/cms/apostrophecms.mdx",1754183246000],["src/content/docs/ru/guides/cms/builderio.mdx",1754183246000],["src/content/docs/ru/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/ru/guides/cms/caisy.mdx",1754183246000],["src/content/docs/ru/guides/cms/cloudcannon.mdx",1754183246000],["src/content/docs/ru/guides/cms/crystallize.mdx",1754183246000],["src/content/docs/ru/guides/cms/decap-cms.mdx",1754183246000],["src/content/docs/ru/guides/cms/directus.mdx",1754183246000],["src/content/docs/ru/guides/cms/index.mdx",1754183246000],["src/content/docs/ru/guides/cms/keystonejs.mdx",1754183246000],["src/content/docs/ru/guides/cms/microcms.mdx",1754183246000],["src/content/docs/ru/guides/cms/prismic.mdx",1754183246000],["src/content/docs/ru/guides/cms/sanity.mdx",1754183246000],["src/content/docs/ru/guides/cms/sitecore.mdx",1754183246000],["src/content/docs/ru/guides/cms/spinal.mdx",1754183246000],["src/content/docs/ru/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/ru/guides/configuring-astro.mdx",1754183246000],["src/content/docs/ru/guides/content-collections.mdx",1754183246000],["src/content/docs/ru/guides/data-fetching.mdx",1754183246000],["src/content/docs/ru/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/ru/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/ru/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/ru/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/ru/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/ru/guides/deploy/index.mdx",1754183246000],["src/content/docs/ru/guides/deploy/sst.mdx",1754183246000],["src/content/docs/ru/guides/deploy/surge.mdx",1754183246000],["src/content/docs/ru/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/ru/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/ru/guides/ecommerce.mdx",1754183246000],["src/content/docs/ru/guides/endpoints.mdx",1754183246000],["src/content/docs/ru/guides/environment-variables.mdx",1754183246000],["src/content/docs/ru/guides/fonts.mdx",1754183246000],["src/content/docs/ru/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/ru/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/ru/guides/internationalization.mdx",1754183246000],["src/content/docs/ru/guides/markdown-content.mdx",1754183246000],["src/content/docs/ru/guides/middleware.mdx",1754183246000],["src/content/docs/ru/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/ru/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/ru/guides/routing.mdx",1754183246000],["src/content/docs/ru/guides/styling.mdx",1754183246000],["src/content/docs/ru/guides/testing.mdx",1754183246000],["src/content/docs/ru/guides/typescript.mdx",1754183246000],["src/content/docs/ru/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/ru/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/ru/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/ru/guides/upgrade-to/v5.mdx",1754183246000],["src/content/docs/ru/guides/view-transitions.mdx",1754183246000],["src/content/docs/ru/install-and-setup.mdx",1754183246000],["src/content/docs/ru/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/ru/recipes/captcha.mdx",1754183246000],["src/content/docs/ru/recipes/external-links.mdx",1754183246000],["src/content/docs/ru/recipes/i18n.mdx",1754183246000],["src/content/docs/ru/recipes/index.mdx",1754183246000],["src/content/docs/ru/reference/api-reference.mdx",1754183246000],["src/content/docs/ru/reference/astro-syntax.mdx",1754183246000],["src/content/docs/ru/reference/cli-reference.mdx",1754183246000],["src/content/docs/ru/reference/error-reference.mdx",1754183246000],["src/content/docs/ru/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/ru/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/ru/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/ru/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/ru/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/ru/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/ru/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/ru/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/ru/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/ru/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/ru/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/ru/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/ru/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/ru/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/ru/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/ru/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/ru/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/ru/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/ru/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/ru/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/ru/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/ru/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/ru/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/ru/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/ru/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/ru/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/ru/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/ru/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/ru/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/ru/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/ru/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/ru/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/ru/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/ru/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/ru/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/ru/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/ru/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/ru/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/ru/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/ru/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/ru/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/ru/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/ru/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/ru/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/ru/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/ru/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/ru/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/ru/reference/image-service-reference.mdx",1754183246000],["src/content/docs/ru/reference/integrations-reference.mdx",1754183246000],["src/content/docs/ru/reference/modules/astro-i18n.mdx",1754183246000],["src/content/docs/ru/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/ru/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/ru/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/ru/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/ru/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/ru/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/ru/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/ru/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/ru/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/ru/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/ru/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/ru/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/ru/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/ru/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/ru/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/ru/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/ru/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/ru/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/ru/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/ru/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/ru/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/ru/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/ru/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/ru/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/ru/upgrade-astro.mdx",1754183246000],["src/content/docs/zh-cn/basics/astro-components.mdx",1754183246000],["src/content/docs/zh-cn/basics/astro-pages.mdx",1754183246000],["src/content/docs/zh-cn/basics/layouts.mdx",1754183246000],["src/content/docs/zh-cn/basics/project-structure.mdx",1754183246000],["src/content/docs/zh-cn/concepts/islands.mdx",1754183246000],["src/content/docs/zh-cn/concepts/why-astro.mdx",1754183246000],["src/content/docs/zh-cn/contribute.mdx",1754183246000],["src/content/docs/zh-cn/develop-and-build.mdx",1754183246000],["src/content/docs/zh-cn/editor-setup.mdx",1754183246000],["src/content/docs/zh-cn/getting-started.mdx",1754183246000],["src/content/docs/zh-cn/guides/actions.mdx",1754183246000],["src/content/docs/zh-cn/guides/astro-db.mdx",1754183246000],["src/content/docs/zh-cn/guides/authentication.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/appwriteio.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/google-firebase.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/neon.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/sentry.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/supabase.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/turso.mdx",1754183246000],["src/content/docs/zh-cn/guides/backend/xata.mdx",1754183246000],["src/content/docs/zh-cn/guides/client-side-scripts.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/apostrophecms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/builderio.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/buttercms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/caisy.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/cloudcannon.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/contentful.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/cosmic.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/craft-cms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/crystallize.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/datocms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/decap-cms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/directus.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/drupal.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/flotiq.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/frontmatter-cms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/ghost.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/gitcms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/hashnode.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/hygraph.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/keystatic.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/keystonejs.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/kontent-ai.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/microcms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/payload.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/preprcms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/prismic.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/sanity.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/sitecore.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/spinal.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/statamic.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/storyblok.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/strapi.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/studiocms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/tina-cms.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/umbraco.mdx",1754183246000],["src/content/docs/zh-cn/guides/cms/wordpress.mdx",1754183246000],["src/content/docs/zh-cn/guides/configuring-astro.mdx",1754183246000],["src/content/docs/zh-cn/guides/content-collections.mdx",1754183246000],["src/content/docs/zh-cn/guides/data-fetching.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/aws.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/azion.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/buddy.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/cleavr.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/clever-cloud.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/deno.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/fleek.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/flightcontrol.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/flyio.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/github.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/gitlab.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/google-cloud.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/google-firebase.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/heroku.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/kinsta.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/microsoft-azure.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/netlify.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/render.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/sst.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/stormkit.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/surge.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/vercel.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/zeabur.mdx",1754183246000],["src/content/docs/zh-cn/guides/deploy/zerops.mdx",1754183246000],["src/content/docs/zh-cn/guides/dev-toolbar.mdx",1754183246000],["src/content/docs/zh-cn/guides/ecommerce.mdx",1754183246000],["src/content/docs/zh-cn/guides/endpoints.mdx",1754183246000],["src/content/docs/zh-cn/guides/environment-variables.mdx",1754183246000],["src/content/docs/zh-cn/guides/fonts.mdx",1754183246000],["src/content/docs/zh-cn/guides/framework-components.mdx",1754183246000],["src/content/docs/zh-cn/guides/images.mdx",1754183246000],["src/content/docs/zh-cn/guides/imports.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/alpinejs.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/cloudflare.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/db.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/deno.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/lit.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/markdoc.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/mdx.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/netlify.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/node.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/partytown.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/preact.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/prefetch.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/react.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/sitemap.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/solid-js.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/svelte.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/tailwind.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/vercel.mdx",1754183246000],["src/content/docs/zh-cn/guides/integrations-guide/vue.mdx",1754183246000],["src/content/docs/zh-cn/guides/internationalization.mdx",1754183246000],["src/content/docs/zh-cn/guides/markdown-content.mdx",1754183246000],["src/content/docs/zh-cn/guides/media/cloudinary.mdx",1754183246000],["src/content/docs/zh-cn/guides/media/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/middleware.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-create-react-app.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-docusaurus.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-eleventy.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-gatsby.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-gitbook.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-gridsome.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-hugo.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-jekyll.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-nextjs.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-nuxtjs.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-pelican.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-sveltekit.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-vuepress.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/from-wordpress.mdx",1754183246000],["src/content/docs/zh-cn/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/zh-cn/guides/on-demand-rendering.mdx",1754183246000],["src/content/docs/zh-cn/guides/prefetch.mdx",1754183246000],["src/content/docs/zh-cn/guides/routing.mdx",1754183246000],["src/content/docs/zh-cn/guides/server-islands.mdx",1754183246000],["src/content/docs/zh-cn/guides/sessions.mdx",1754183246000],["src/content/docs/zh-cn/guides/styling.mdx",1754183246000],["src/content/docs/zh-cn/guides/syntax-highlighting.mdx",1754183246000],["src/content/docs/zh-cn/guides/testing.mdx",1754183246000],["src/content/docs/zh-cn/guides/troubleshooting.mdx",1754183246000],["src/content/docs/zh-cn/guides/typescript.mdx",1754183246000],["src/content/docs/zh-cn/guides/upgrade-to/v2.mdx",1754183246000],["src/content/docs/zh-cn/guides/upgrade-to/v3.mdx",1754183246000],["src/content/docs/zh-cn/guides/upgrade-to/v4.mdx",1754183246000],["src/content/docs/zh-cn/guides/upgrade-to/v5.mdx",1754183246000],["src/content/docs/zh-cn/guides/view-transitions.mdx",1754183246000],["src/content/docs/zh-cn/install-and-setup.mdx",1754183246000],["src/content/docs/zh-cn/recipes/add-yaml-support.mdx",1754183246000],["src/content/docs/zh-cn/recipes/analyze-bundle-size.mdx",1754183246000],["src/content/docs/zh-cn/recipes/build-custom-img-component.mdx",1754183246000],["src/content/docs/zh-cn/recipes/build-forms-api.mdx",1754183246000],["src/content/docs/zh-cn/recipes/build-forms.mdx",1754183246000],["src/content/docs/zh-cn/recipes/bun.mdx",1754183246000],["src/content/docs/zh-cn/recipes/call-endpoints.mdx",1754183246000],["src/content/docs/zh-cn/recipes/captcha.mdx",1754183246000],["src/content/docs/zh-cn/recipes/docker.mdx",1754183246000],["src/content/docs/zh-cn/recipes/dynamically-importing-images.mdx",1754183246000],["src/content/docs/zh-cn/recipes/external-links.mdx",1754183246000],["src/content/docs/zh-cn/recipes/i18n.mdx",1754183246000],["src/content/docs/zh-cn/recipes/index.mdx",1754183246000],["src/content/docs/zh-cn/recipes/making-toolbar-apps.mdx",1754183246000],["src/content/docs/zh-cn/recipes/modified-time.mdx",1754183246000],["src/content/docs/zh-cn/recipes/reading-time.mdx",1754183246000],["src/content/docs/zh-cn/recipes/rss.mdx",1754183246000],["src/content/docs/zh-cn/recipes/sharing-state-islands.mdx",1754183246000],["src/content/docs/zh-cn/recipes/sharing-state.mdx",1754183246000],["src/content/docs/zh-cn/recipes/streaming-improve-page-performance.mdx",1754183246000],["src/content/docs/zh-cn/recipes/tailwind-rendered-markdown.mdx",1754183246000],["src/content/docs/zh-cn/reference/adapter-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/api-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/astro-syntax.mdx",1754183246000],["src/content/docs/zh-cn/reference/cli-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/configuration-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/content-loader-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/dev-toolbar-app-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/directives-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/error-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/action-called-from-server-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/action-not-found-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/action-query-string-invalid-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/actions-cant-be-loaded.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/actions-returned-invalid-data-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/actions-used-with-for-get-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/actions-without-server-output-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/adapter-support-output-mismatch.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/astro-glob-no-match.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/astro-glob-used-outside.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/astro-response-headers-reassigned.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cannot-determine-weight-and-style-from-font-file.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cannot-extract-font-type.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cannot-fetch-font-file.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cannot-load-font-provider.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cant-render-page.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/cant-use-astro-config-module-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/client-address-not-available.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/collection-does-not-exist-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/config-legacy-key.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/config-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/content-collection-type-mismatch-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/content-entry-data-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/content-loader-invalid-data-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/content-loader-returns-invalid-id.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/content-schema-contains-slug-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/could-not-transform-image.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/csp-not-enabled.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/csssyntax-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/data-collection-entry-parse-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/duplicate-content-entry-slug-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/endpoint-did-not-return-aresponse.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/env-invalid-variable.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/env-invalid-variables.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/env-unsupported-get-secret.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/expected-image-options.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/expected-image.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/expected-not-esmimage.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/experimental-fonts-not-enabled.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/failed-to-find-page-map-ssr.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/failed-to-load-module-ssr.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/file-glob-not-supported.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/file-parser-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/font-family-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/forbidden-rewrite.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/generate-content-types-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/get-entry-deprecation-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/get-static-paths-expected-params.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/get-static-paths-invalid-route-param.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/get-static-paths-removed-rsshelper.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/get-static-paths-required.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/i18n-no-locale-found-in-path.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/i18n-not-enabled.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/image-missing-alt.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/image-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/incompatible-descriptor-options.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/incorrect-strategy-for-i18n.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-component-args.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-content-entry-data-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-content-entry-frontmatter-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-content-entry-slug-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-dynamic-route.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-frontmatter-injection-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-get-static-path-param.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-get-static-paths-entry.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-get-static-paths-return.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-glob.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-image-service.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-prerender-export.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/invalid-rewrite404.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/local-image-used-wrongly.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/locals-not-an-object.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/locals-not-serializable.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/locals-reassigned.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/markdown-content-schema-validation-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/markdown-frontmatter-parse-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/markdown-image-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/mdx-integration-missing-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/middleware-cant-be-loaded.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/middleware-no-data-or-next-called.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/middleware-not-aresponse.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-image-dimension.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-index-for-internationalization.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-locale.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-media-query-directive.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-middleware-for-internationalization.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/missing-sharp.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/mixed-content-data-collection-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-adapter-installed-server-islands.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-adapter-installed.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-client-entrypoint.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-client-only-hint.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-image-metadata.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-matching-import.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-matching-renderer.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-matching-static-path-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/no-prerendered-routes-with-domains.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/only-response-can-be-returned.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/page-number-param-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/prerender-client-address-not-available.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/redirect-with-no-location.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/render-undefined-entry-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/reserved-slot-name.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/response-sent-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/rewrite-encountered-an-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/rewrite-with-body-used.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/route-not-found.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/server-only-module.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/session-config-missing-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/session-config-without-flag-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/session-storage-init-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/session-storage-save-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/session-without-supported-adapter-output-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/static-client-address-not-available.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/static-redirect-not-available.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unhandled-rejection.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-clierror.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-compiler-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-config-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-content-collection-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-csserror.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-filesystem-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-markdown-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unknown-vite-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unsupported-config-transform-error.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unsupported-external-redirect.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unsupported-image-conversion.mdx",1754183246000],["src/content/docs/zh-cn/reference/errors/unsupported-image-format.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/client-prerender.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/content-intellisense.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/csp.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/fonts.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/heading-id-compat.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/index.mdx",1754183246000],["src/content/docs/zh-cn/reference/experimental-flags/preserve-scripts-order.mdx",1754183246000],["src/content/docs/zh-cn/reference/image-service-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/integrations-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/legacy-flags.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-actions.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-assets.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-config.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-content.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-env.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-i18n.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-middleware.mdx",1754183246000],["src/content/docs/zh-cn/reference/modules/astro-transitions.mdx",1754183246000],["src/content/docs/zh-cn/reference/programmatic-reference.mdx",1754183246000],["src/content/docs/zh-cn/reference/publish-to-npm.mdx",1754183246000],["src/content/docs/zh-cn/reference/routing-reference.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/0-introduction/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/0-introduction/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/4.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/5.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/1-setup/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/4.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/5.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/2-pages/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/3-components/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/3-components/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/3-components/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/3-components/4.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/3-components/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/4-layouts/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/4-layouts/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/4-layouts/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/4-layouts/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/5-astro-api/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/5-astro-api/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/5-astro-api/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/5-astro-api/4.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/5-astro-api/index.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/6-islands/1.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/6-islands/2.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/6-islands/3.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/6-islands/4.mdx",1754183246000],["src/content/docs/zh-cn/tutorial/6-islands/index.mdx",1754183246000],["src/content/docs/zh-cn/upgrade-astro.mdx",1754183246000],["src/content/docs/zh-tw/basics/astro-components.mdx",1754183246000],["src/content/docs/zh-tw/basics/astro-pages.mdx",1754183246000],["src/content/docs/zh-tw/basics/layouts.mdx",1754183246000],["src/content/docs/zh-tw/basics/project-structure.mdx",1754183246000],["src/content/docs/zh-tw/concepts/islands.mdx",1754183246000],["src/content/docs/zh-tw/concepts/why-astro.mdx",1754183246000],["src/content/docs/zh-tw/contribute.mdx",1754183246000],["src/content/docs/zh-tw/editor-setup.mdx",1754183246000],["src/content/docs/zh-tw/getting-started.mdx",1754183246000],["src/content/docs/zh-tw/guides/cms/index.mdx",1754183246000],["src/content/docs/zh-tw/guides/configuring-astro.mdx",1754183246000],["src/content/docs/zh-tw/guides/deploy/cloudflare.mdx",1754183246000],["src/content/docs/zh-tw/guides/deploy/github.mdx",1754183246000],["src/content/docs/zh-tw/guides/deploy/index.mdx",1754183246000],["src/content/docs/zh-tw/guides/migrate-to-astro/index.mdx",1754183246000],["src/content/docs/zh-tw/recipes/index.mdx",1754183246000],["src/content/docs/zh-tw/reference/astro-syntax.mdx",1754183246000],["src/content/docs/en/guides/deploy/github.mdx",1754074979000],["src/content/docs/en/guides/migrate-to-astro/from-docusaurus.mdx",1754056530000],["src/content/docs/en/guides/view-transitions.mdx",1753871021000],["src/content/docs/en/guides/cms/optimizely.mdx",1753732821000],["src/content/docs/en/reference/modules/astro-actions.mdx",1753731079000],["src/content/docs/en/recipes/customizing-output-filenames.mdx",1753704646000],["src/content/docs/en/reference/api-reference.mdx",1753478784000],["src/content/docs/en/guides/framework-components.mdx",1753472183000],["src/content/docs/en/guides/server-islands.mdx",1753472183000],["src/content/docs/en/guides/build-with-ai.mdx",1753458574000],["src/content/docs/en/tutorial/0-introduction/index.mdx",1753208644000],["src/content/docs/en/tutorial/1-setup/index.mdx",1753208644000],["src/content/docs/en/tutorial/2-pages/index.mdx",1753208644000],["src/content/docs/en/tutorial/3-components/index.mdx",1753208644000],["src/content/docs/en/tutorial/4-layouts/index.mdx",1753208644000],["src/content/docs/en/tutorial/5-astro-api/index.mdx",1753208644000],["src/content/docs/en/tutorial/6-islands/4.mdx",1753208644000],["src/content/docs/en/tutorial/6-islands/index.mdx",1753208644000],["src/content/docs/en/guides/configuring-astro.mdx",1753120778000],["src/content/docs/en/reference/content-loader-reference.mdx",1753104561000],["src/content/docs/en/reference/modules/astro-assets.mdx",1753085928000],["src/content/docs/en/guides/content-collections.mdx",1752758344000],["src/content/docs/en/reference/errors/data-collection-entry-parse-error.mdx",1752758344000],["src/content/docs/en/reference/errors/file-parser-not-found.mdx",1752758344000],["src/content/docs/en/reference/experimental-flags/raw-env-values.mdx",1752758344000],["src/content/docs/en/guides/integrations-guide/netlify.mdx",1752729839000],["src/content/docs/en/guides/typescript.mdx",1752587225000],["src/content/docs/en/guides/prefetch.mdx",1752495986000],["src/content/docs/en/guides/cms/sitepins.mdx",1752097593000],["src/content/docs/en/guides/deploy/cloudflare.mdx",1751900769000],["src/content/docs/en/guides/integrations-guide/node.mdx",1751542486000],["src/content/docs/en/guides/integrations-guide/vercel.mdx",1751542486000],["src/content/docs/en/reference/experimental-flags/live-content-collections.mdx",1751366220000],["src/content/docs/en/guides/integrations-guide/sitemap.mdx",1751293530000],["src/content/docs/en/guides/deploy/cloudray.mdx",1751278962000],["src/content/docs/en/astro-courses.mdx",1750786744000],["src/content/docs/en/guides/authentication.mdx",1750763540000],["src/content/docs/en/basics/astro-components.mdx",1750698784000],["src/content/docs/en/reference/errors/live-content-config-error.mdx",1750521982000],["src/content/docs/en/guides/actions.mdx",1750505477000],["src/content/docs/en/guides/integrations-guide/cloudflare.mdx",1750468171000],["src/content/docs/en/reference/configuration-reference.mdx",1750343444000],["src/content/docs/en/guides/images.mdx",1750335134000],["src/content/docs/en/reference/error-reference.mdx",1750335134000],["src/content/docs/en/reference/experimental-flags/responsive-images.mdx",1750335134000],["src/content/docs/fr/reference/experimental-flags/responsive-images.mdx",1750335134000],["src/content/docs/ko/reference/experimental-flags/responsive-images.mdx",1750335134000],["src/content/docs/zh-cn/reference/experimental-flags/responsive-images.mdx",1750335134000],["src/content/docs/en/reference/adapter-reference.mdx",1750122806000],["src/content/docs/en/reference/experimental-flags/csp.mdx",1749810526000],["src/content/docs/en/recipes/build-forms.mdx",1749569374000],["src/content/docs/en/reference/errors/csp-not-enabled.mdx",1749129834000],["src/content/docs/en/tutorial/5-astro-api/4.mdx",1749034719000],["src/content/docs/en/editor-setup.mdx",1748944346000],["src/content/docs/en/guides/upgrade-to/v5.mdx",1748632086000],["src/content/docs/en/guides/sessions.mdx",1748445821000],["src/content/docs/en/guides/backend/google-firebase.mdx",1748440997000],["src/content/docs/de/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/en/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/es/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/fr/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/ja/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/ko/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/pt-br/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/ru/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/zh-cn/guides/deploy/edgio.mdx",1748436233000],["src/content/docs/en/reference/modules/astro-config.mdx",1748124566000],["src/content/docs/en/guides/migrate-to-astro/from-create-react-app.mdx",1748117594000],["src/content/docs/en/guides/migrate-to-astro/from-nextjs.mdx",1748117594000],["src/content/docs/en/recipes/i18n.mdx",1748086986000],["src/content/docs/en/guides/deploy/netlify.mdx",1747910875000],["src/content/docs/en/install-and-setup.mdx",1747910875000],["src/content/docs/en/tutorial/1-setup/1.mdx",1747910875000],["src/content/docs/en/guides/cms/contentful.mdx",1747759652000],["src/content/docs/en/guides/cms/ghost.mdx",1747759652000],["src/content/docs/en/guides/cms/hashnode.mdx",1747759652000],["src/content/docs/en/guides/cms/preprcms.mdx",1747759652000],["src/content/docs/en/guides/cms/sitecore.mdx",1747759652000],["src/content/docs/en/guides/cms/statamic.mdx",1747759652000],["src/content/docs/en/guides/cms/strapi.mdx",1747759652000],["src/content/docs/en/guides/cms/umbraco.mdx",1747759652000],["src/content/docs/en/reference/experimental-flags/fonts.mdx",1747683032000],["src/content/docs/en/guides/backend/turso.mdx",1747657561000],["src/content/docs/en/guides/routing.mdx",1747575634000],["src/content/docs/en/guides/deploy/aws.mdx",1747327899000],["src/content/docs/en/guides/imports.mdx",1747244012000],["src/content/docs/en/guides/middleware.mdx",1747239870000],["src/content/docs/en/reference/errors/file-glob-not-supported.mdx",1747225570000],["src/content/docs/en/reference/errors/cannot-determine-weight-and-style-from-font-file.mdx",1746895241000],["src/content/docs/en/guides/client-side-scripts.mdx",1746646728000],["src/content/docs/en/guides/styling.mdx",1746627328000],["src/content/docs/en/guides/backend/xata.mdx",1746305509000],["src/content/docs/en/getting-started.mdx",1746031372000],["src/content/docs/en/guides/deploy/vercel.mdx",1745842953000],["src/content/docs/en/reference/errors/unsupported-external-redirect.mdx",1745840808000],["src/content/docs/en/reference/cli-reference.mdx",1745586696000],["src/content/docs/en/reference/modules/astro-content.mdx",1744987527000],["src/content/docs/en/tutorial/1-setup/2.mdx",1744897774000],["src/content/docs/en/guides/deploy/clever-cloud.mdx",1744712625000],["src/content/docs/en/reference/errors/cannot-extract-font-type.mdx",1744712053000],["src/content/docs/en/reference/errors/cannot-fetch-font-file.mdx",1744712053000],["src/content/docs/en/reference/errors/cannot-load-font-provider.mdx",1744712053000],["src/content/docs/en/reference/errors/cant-use-astro-config-module-error.mdx",1744712053000],["src/content/docs/en/reference/errors/experimental-fonts-not-enabled.mdx",1744712053000],["src/content/docs/en/reference/errors/font-family-not-found.mdx",1744712053000],["src/content/docs/en/guides/fonts.mdx",1744711492000],["src/content/docs/en/reference/errors/session-config-missing-error.mdx",1744711492000],["src/content/docs/en/reference/errors/session-config-without-flag-error.mdx",1744711492000],["src/content/docs/en/reference/errors/session-storage-init-error.mdx",1744711492000],["src/content/docs/en/reference/errors/session-storage-save-error.mdx",1744711492000],["src/content/docs/en/reference/errors/session-without-supported-adapter-output-error.mdx",1744711492000],["src/content/docs/en/reference/experimental-flags/serialized-configuration.mdx",1744711492000],["src/content/docs/en/reference/experimental-flags/sessions.mdx",1744711492000],["src/content/docs/en/reference/experimental-flags/svg.mdx",1744711492000],["src/content/docs/fr/reference/experimental-flags/serialized-configuration.mdx",1744711492000],["src/content/docs/fr/reference/experimental-flags/sessions.mdx",1744711492000],["src/content/docs/fr/reference/experimental-flags/svg.mdx",1744711492000],["src/content/docs/ko/reference/experimental-flags/serialized-configuration.mdx",1744711492000],["src/content/docs/ko/reference/experimental-flags/sessions.mdx",1744711492000],["src/content/docs/ko/reference/experimental-flags/svg.mdx",1744711492000],["src/content/docs/zh-cn/reference/experimental-flags/serialized-configuration.mdx",1744711492000],["src/content/docs/zh-cn/reference/experimental-flags/sessions.mdx",1744711492000],["src/content/docs/zh-cn/reference/experimental-flags/svg.mdx",1744711492000],["src/content/docs/en/reference/image-service-reference.mdx",1744648831000],["src/content/docs/en/guides/cms/directus.mdx",1744205566000],["src/content/docs/en/guides/cms/drupal.mdx",1744205566000],["src/content/docs/en/guides/cms/wordpress.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-eleventy.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-gatsby.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-gitbook.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-gridsome.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-hugo.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-jekyll.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-nuxtjs.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-pelican.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-sveltekit.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-vuepress.mdx",1744205566000],["src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx",1744205566000],["src/content/docs/en/guides/cms/flotiq.mdx",1744197998000],["src/content/docs/en/guides/integrations-guide/markdoc.mdx",1744033651000],["src/content/docs/en/reference/routing-reference.mdx",1743803641000],["src/content/docs/en/concepts/why-astro.mdx",1743687021000],["src/content/docs/en/guides/integrations-guide/index.mdx",1743687021000],["src/content/docs/en/reference/integrations-reference.mdx",1743687021000],["src/content/docs/en/reference/programmatic-reference.mdx",1743687021000],["src/content/docs/en/upgrade-astro.mdx",1743687021000],["src/content/docs/en/guides/cms/gitcms.mdx",1743183030000],["src/content/docs/en/recipes/rss.mdx",1743165405000],["src/content/docs/en/reference/modules/astro-env.mdx",1743124217000],["src/content/docs/en/reference/errors/prerender-client-address-not-available.mdx",1743105492000],["src/content/docs/en/guides/cms/studiocms.mdx",1743083661000],["src/content/docs/en/guides/environment-variables.mdx",1742567394000],["src/content/docs/en/recipes/add-yaml-support.mdx",1742476004000],["src/content/docs/en/reference/directives-reference.mdx",1742380140000],["src/content/docs/en/guides/cms/storyblok.mdx",1741969385000],["src/content/docs/en/reference/experimental-flags/heading-id-compat.mdx",1741958573000],["src/content/docs/en/guides/endpoints.mdx",1741951182000],["src/content/docs/en/reference/experimental-flags/preserve-scripts-order.mdx",1741867340000],["src/content/docs/en/guides/deploy/deno.mdx",1741716895000],["src/content/docs/en/guides/data-fetching.mdx",1741706484000],["src/content/docs/en/concepts/islands.mdx",1741692980000],["src/content/docs/en/guides/dev-toolbar.mdx",1741692980000],["src/content/docs/en/reference/errors/actions-cant-be-loaded.mdx",1741266628000],["src/content/docs/en/tutorial/4-layouts/2.mdx",1741210150000],["src/content/docs/en/tutorial/4-layouts/3.mdx",1741210150000],["src/content/docs/en/basics/astro-pages.mdx",1741088704000],["src/content/docs/en/guides/syntax-highlighting.mdx",1741075043000],["src/content/docs/en/guides/deploy/zerops.mdx",1740858081000],["src/content/docs/en/guides/deploy/microsoft-azure.mdx",1740753292000],["src/content/docs/en/guides/cms/sanity.mdx",1740746152000],["src/content/docs/en/guides/deploy/azion.mdx",1740746152000],["src/content/docs/en/guides/markdown-content.mdx",1740746152000],["src/content/docs/en/tutorial/5-astro-api/2.mdx",1740657660000],["src/content/docs/en/guides/troubleshooting.mdx",1740358272000],["src/content/docs/en/guides/testing.mdx",1739967268000],["src/content/docs/en/recipes/modified-time.mdx",1739549278000],["src/content/docs/en/recipes/reading-time.mdx",1739549278000],["src/content/docs/en/recipes/tailwind-rendered-markdown.mdx",1739549278000],["src/content/docs/en/guides/integrations-guide/lit.mdx",1738236783000],["src/content/docs/en/guides/integrations-guide/mdx.mdx",1738236783000],["src/content/docs/en/guides/integrations-guide/tailwind.mdx",1738236783000],["src/content/docs/en/reference/modules/astro-i18n.mdx",1738011322000],["src/content/docs/en/guides/integrations-guide/react.mdx",1738007363000],["src/content/docs/en/guides/cms/payload.mdx",1737635808000],["src/content/docs/en/reference/errors/content-loader-returns-invalid-id.mdx",1737635555000],["src/content/docs/en/tutorial/5-astro-api/3.mdx",1737382372000],["src/content/docs/en/tutorial/6-islands/2.mdx",1737382372000],["src/content/docs/en/basics/layouts.mdx",1736780362000],["src/content/docs/en/guides/integrations-guide/alpinejs.mdx",1736213614000],["src/content/docs/en/guides/integrations-guide/preact.mdx",1736213614000],["src/content/docs/en/guides/integrations-guide/solid-js.mdx",1736213614000],["src/content/docs/en/guides/integrations-guide/svelte.mdx",1736213614000],["src/content/docs/en/guides/integrations-guide/vue.mdx",1736213614000],["src/content/docs/en/recipes/build-forms-api.mdx",1736196545000],["src/content/docs/en/tutorial/3-components/1.mdx",1734699144000],["src/content/docs/en/reference/experimental-flags/index.mdx",1734474501000],["src/content/docs/en/guides/on-demand-rendering.mdx",1734470000000],["src/content/docs/en/guides/astro-db.mdx",1734448072000],["src/content/docs/en/guides/cms/decap-cms.mdx",1734448072000],["src/content/docs/en/guides/cms/frontmatter-cms.mdx",1734448072000],["src/content/docs/en/guides/deploy/flightcontrol.mdx",1734448072000],["src/content/docs/en/guides/deploy/gitlab.mdx",1734448072000],["src/content/docs/en/guides/deploy/sst.mdx",1734448072000],["src/content/docs/en/guides/migrate-to-astro/index.mdx",1734448072000],["src/content/docs/en/tutorial/5-astro-api/1.mdx",1733939671000],["src/content/docs/en/guides/deploy/google-cloud.mdx",1733920967000],["src/content/docs/en/guides/cms/cloudcannon.mdx",1733920475000],["src/content/docs/en/basics/project-structure.mdx",1733851440000],["src/content/docs/en/guides/internationalization.mdx",1733586102000],["src/content/docs/en/develop-and-build.mdx",1733439387000],["src/content/docs/de/basics/rendering-modes.mdx",1733224763000],["src/content/docs/de/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/de/recipes.mdx",1733224763000],["src/content/docs/en/basics/rendering-modes.mdx",1733224763000],["src/content/docs/en/community-resources/content.mdx",1733224763000],["src/content/docs/en/guides/backend/appwriteio.mdx",1733224763000],["src/content/docs/en/guides/backend/index.mdx",1733224763000],["src/content/docs/en/guides/backend/neon.mdx",1733224763000],["src/content/docs/en/guides/backend/sentry.mdx",1733224763000],["src/content/docs/en/guides/backend/supabase.mdx",1733224763000],["src/content/docs/en/guides/cms/apostrophecms.mdx",1733224763000],["src/content/docs/en/guides/cms/builderio.mdx",1733224763000],["src/content/docs/en/guides/cms/buttercms.mdx",1733224763000],["src/content/docs/en/guides/cms/caisy.mdx",1733224763000],["src/content/docs/en/guides/cms/cosmic.mdx",1733224763000],["src/content/docs/en/guides/cms/craft-cms.mdx",1733224763000],["src/content/docs/en/guides/cms/crystallize.mdx",1733224763000],["src/content/docs/en/guides/cms/datocms.mdx",1733224763000],["src/content/docs/en/guides/cms/hygraph.mdx",1733224763000],["src/content/docs/en/guides/cms/index.mdx",1733224763000],["src/content/docs/en/guides/cms/keystatic.mdx",1733224763000],["src/content/docs/en/guides/cms/keystonejs.mdx",1733224763000],["src/content/docs/en/guides/cms/kontent-ai.mdx",1733224763000],["src/content/docs/en/guides/cms/microcms.mdx",1733224763000],["src/content/docs/en/guides/cms/prismic.mdx",1733224763000],["src/content/docs/en/guides/cms/spinal.mdx",1733224763000],["src/content/docs/en/guides/cms/tina-cms.mdx",1733224763000],["src/content/docs/en/guides/content.mdx",1733224763000],["src/content/docs/en/guides/deploy/buddy.mdx",1733224763000],["src/content/docs/en/guides/deploy/cleavr.mdx",1733224763000],["src/content/docs/en/guides/deploy/fleek.mdx",1733224763000],["src/content/docs/en/guides/deploy/flyio.mdx",1733224763000],["src/content/docs/en/guides/deploy/google-firebase.mdx",1733224763000],["src/content/docs/en/guides/deploy/heroku.mdx",1733224763000],["src/content/docs/en/guides/deploy/index.mdx",1733224763000],["src/content/docs/en/guides/deploy/kinsta.mdx",1733224763000],["src/content/docs/en/guides/deploy/render.mdx",1733224763000],["src/content/docs/en/guides/deploy/stormkit.mdx",1733224763000],["src/content/docs/en/guides/deploy/surge.mdx",1733224763000],["src/content/docs/en/guides/deploy/zeabur.mdx",1733224763000],["src/content/docs/en/guides/integrations-guide/db.mdx",1733224763000],["src/content/docs/en/guides/integrations-guide/deno.mdx",1733224763000],["src/content/docs/en/guides/integrations-guide/partytown.mdx",1733224763000],["src/content/docs/en/guides/integrations-guide/prefetch.mdx",1733224763000],["src/content/docs/en/guides/media/cloudinary.mdx",1733224763000],["src/content/docs/en/guides/media/index.mdx",1733224763000],["src/content/docs/en/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/en/guides/upgrade-to/v1.mdx",1733224763000],["src/content/docs/en/guides/upgrade-to/v2.mdx",1733224763000],["src/content/docs/en/guides/upgrade-to/v3.mdx",1733224763000],["src/content/docs/en/guides/upgrade-to/v4.mdx",1733224763000],["src/content/docs/en/recipes/analyze-bundle-size.mdx",1733224763000],["src/content/docs/en/recipes/bun.mdx",1733224763000],["src/content/docs/en/recipes/call-endpoints.mdx",1733224763000],["src/content/docs/en/recipes/captcha.mdx",1733224763000],["src/content/docs/en/recipes/docker.mdx",1733224763000],["src/content/docs/en/recipes/index.mdx",1733224763000],["src/content/docs/en/recipes/sharing-state-islands.mdx",1733224763000],["src/content/docs/en/recipes/sharing-state.mdx",1733224763000],["src/content/docs/en/reference/astro-syntax.mdx",1733224763000],["src/content/docs/en/reference/container-reference.mdx",1733224763000],["src/content/docs/en/reference/dev-toolbar-app-reference.mdx",1733224763000],["src/content/docs/en/reference/errors/action-called-from-server-error.mdx",1733224763000],["src/content/docs/en/reference/errors/actions-without-server-output-error.mdx",1733224763000],["src/content/docs/en/reference/errors/adapter-support-output-mismatch.mdx",1733224763000],["src/content/docs/en/reference/errors/client-address-not-available.mdx",1733224763000],["src/content/docs/en/reference/errors/content-collection-type-mismatch-error.mdx",1733224763000],["src/content/docs/en/reference/errors/content-entry-data-error.mdx",1733224763000],["src/content/docs/en/reference/errors/content-loader-invalid-data-error.mdx",1733224763000],["src/content/docs/en/reference/errors/content-schema-contains-slug-error.mdx",1733224763000],["src/content/docs/en/reference/errors/env-invalid-variables.mdx",1733224763000],["src/content/docs/en/reference/errors/forbidden-rewrite.mdx",1733224763000],["src/content/docs/en/reference/errors/get-static-paths-expected-params.mdx",1733224763000],["src/content/docs/en/reference/errors/get-static-paths-invalid-route-param.mdx",1733224763000],["src/content/docs/en/reference/errors/get-static-paths-removed-rsshelper.mdx",1733224763000],["src/content/docs/en/reference/errors/get-static-paths-required.mdx",1733224763000],["src/content/docs/en/reference/errors/i18n-not-enabled.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-content-entry-data-error.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-content-entry-frontmatter-error.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-content-entry-slug-error.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-get-static-path-param.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-get-static-paths-entry.mdx",1733224763000],["src/content/docs/en/reference/errors/invalid-get-static-paths-return.mdx",1733224763000],["src/content/docs/en/reference/errors/locals-reassigned.mdx",1733224763000],["src/content/docs/en/reference/errors/mixed-content-data-collection-error.mdx",1733224763000],["src/content/docs/en/reference/errors/no-adapter-installed-server-islands.mdx",1733224763000],["src/content/docs/en/reference/errors/no-adapter-installed.mdx",1733224763000],["src/content/docs/en/reference/errors/no-matching-static-path-found.mdx",1733224763000],["src/content/docs/en/reference/errors/only-response-can-be-returned.mdx",1733224763000],["src/content/docs/en/reference/errors/prerender-dynamic-endpoint-path-collide.mdx",1733224763000],["src/content/docs/en/reference/errors/redirect-with-no-location.mdx",1733224763000],["src/content/docs/en/reference/errors/rewrite-with-body-used.mdx",1733224763000],["src/content/docs/en/reference/errors/static-client-address-not-available.mdx",1733224763000],["src/content/docs/en/reference/errors/static-redirect-not-available.mdx",1733224763000],["src/content/docs/en/reference/errors/unknown-content-collection-error.mdx",1733224763000],["src/content/docs/en/reference/experimental-flags/client-prerender.mdx",1733224763000],["src/content/docs/en/reference/experimental-flags/content-intellisense.mdx",1733224763000],["src/content/docs/en/reference/legacy-flags.mdx",1733224763000],["src/content/docs/en/reference/modules/astro-middleware.mdx",1733224763000],["src/content/docs/en/reference/modules/astro-transitions.mdx",1733224763000],["src/content/docs/en/tutorial/0-introduction/1.mdx",1733224763000],["src/content/docs/en/tutorial/1-setup/5.mdx",1733224763000],["src/content/docs/en/tutorial/2-pages/3.mdx",1733224763000],["src/content/docs/en/tutorial/2-pages/4.mdx",1733224763000],["src/content/docs/en/tutorial/2-pages/5.mdx",1733224763000],["src/content/docs/en/tutorial/3-components/4.mdx",1733224763000],["src/content/docs/en/tutorial/6-islands/3.mdx",1733224763000],["src/content/docs/en/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/en/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/es/basics/rendering-modes.mdx",1733224763000],["src/content/docs/es/community-resources/content.mdx",1733224763000],["src/content/docs/es/guides/content.mdx",1733224763000],["src/content/docs/es/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/es/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/es/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/fr/basics/rendering-modes.mdx",1733224763000],["src/content/docs/fr/community-resources/content.mdx",1733224763000],["src/content/docs/fr/guides/content.mdx",1733224763000],["src/content/docs/fr/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/fr/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/fr/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/it/basics/rendering-modes.mdx",1733224763000],["src/content/docs/it/community-resources/content.mdx",1733224763000],["src/content/docs/it/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/it/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/ja/basics/rendering-modes.mdx",1733224763000],["src/content/docs/ja/community-resources/content.mdx",1733224763000],["src/content/docs/ja/guides/content.mdx",1733224763000],["src/content/docs/ja/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/ko/basics/rendering-modes.mdx",1733224763000],["src/content/docs/ko/community-resources/content.mdx",1733224763000],["src/content/docs/ko/guides/content.mdx",1733224763000],["src/content/docs/ko/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/ko/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/ko/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/pl/basics/rendering-modes.mdx",1733224763000],["src/content/docs/pl/guides/content.mdx",1733224763000],["src/content/docs/pt-br/basics/rendering-modes.mdx",1733224763000],["src/content/docs/pt-br/community-resources/content.mdx",1733224763000],["src/content/docs/pt-br/guides/content.mdx",1733224763000],["src/content/docs/pt-br/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/ru/basics/rendering-modes.mdx",1733224763000],["src/content/docs/ru/community-resources/content.mdx",1733224763000],["src/content/docs/ru/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/ru/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/zh-cn/basics/rendering-modes.mdx",1733224763000],["src/content/docs/zh-cn/community-resources/content.mdx",1733224763000],["src/content/docs/zh-cn/guides/content.mdx",1733224763000],["src/content/docs/zh-cn/guides/server-side-rendering.mdx",1733224763000],["src/content/docs/zh-cn/tutorials/add-content-collections.mdx",1733224763000],["src/content/docs/zh-cn/tutorials/add-view-transitions.mdx",1733224763000],["src/content/docs/zh-tw/basics/rendering-modes.mdx",1733224763000],["src/content/docs/en/reference/errors/env-unsupported-get-secret.mdx",1732109509000],["src/content/docs/en/recipes/streaming-improve-page-performance.mdx",1731392559000],["src/content/docs/de/basics/astro-syntax.mdx",1731236410000],["src/content/docs/ko/basics/astro-syntax.mdx",1730918174000],["src/content/docs/ko/recipes.mdx",1730917781000],["src/content/docs/zh-cn/recipes.mdx",1730916138000],["src/content/docs/pl/guides/migrate-to-astro.mdx",1730915703000],["src/content/docs/fr/recipes.mdx",1730912963000],["src/content/docs/fr/basics/astro-syntax.mdx",1730912528000],["src/content/docs/zh-cn/basics/astro-syntax.mdx",1730893780000],["src/content/docs/en/basics/astro-syntax.mdx",1730825850000],["src/content/docs/en/reference/components-reference.mdx",1730825850000],["src/content/docs/fr/reference/components-reference.mdx",1730825850000],["src/content/docs/ko/reference/components-reference.mdx",1730825850000],["src/content/docs/zh-cn/reference/components-reference.mdx",1730825850000],["src/content/docs/en/community-resources/talks.mdx",1730822199000],["src/content/docs/en/recipes.mdx",1730822199000],["src/content/docs/es/community-resources/talks.mdx",1730822199000],["src/content/docs/fr/community-resources/talks.mdx",1730822199000],["src/content/docs/it/community-resources/talks.mdx",1730822199000],["src/content/docs/ko/community-resources/talks.mdx",1730822199000],["src/content/docs/pt-br/community-resources/talks.mdx",1730822199000],["src/content/docs/ru/community-resources/talks.mdx",1730822199000],["src/content/docs/zh-cn/community-resources/talks.mdx",1730822199000],["src/content/docs/pl/guides/integrations-guide.mdx",1730753760000],["src/content/docs/pl/guides/media.mdx",1730749775000],["src/content/docs/pl/guides/rss.mdx",1730748289000],["src/content/docs/de/guides/rss.mdx",1730747795000],["src/content/docs/en/tutorial/4-layouts/1.mdx",1730300551000],["src/content/docs/de/guides/markdown-content.mdx",1730295467000],["src/content/docs/de/guides/migrate-to-astro.mdx",1730295467000],["src/content/docs/ja/guides/media.mdx",1730218593000],["src/content/docs/en/reference/errors/image-missing-alt.mdx",1730217084000],["src/content/docs/en/reference/errors/missing-image-dimension.mdx",1730217084000],["src/content/docs/en/reference/errors/missing-sharp.mdx",1730217084000],["src/content/docs/en/reference/errors/actions-returned-invalid-data-error.mdx",1729864724000],["src/content/docs/pl/guides/cms.mdx",1729700154000],["src/content/docs/fr/guides/media.mdx",1729236990000],["src/content/docs/ko/guides/media.mdx",1729233114000],["src/content/docs/zh-cn/guides/media.mdx",1729218581000],["src/content/docs/pl/guides/deploy.mdx",1729181847000],["src/content/docs/en/guides/media.mdx",1729179527000],["src/content/docs/fr/guides/rss.mdx",1729095118000],["src/content/docs/zh-cn/guides/rss.mdx",1728870252000],["src/content/docs/ko/guides/rss.mdx",1728717714000],["src/content/docs/en/guides/rss.mdx",1728666590000],["src/content/docs/en/reference/publish-to-npm.mdx",1728422776000],["src/content/docs/pt-br/guides/integrations-guide.mdx",1728408200000],["src/content/docs/pt-br/guides/cms.mdx",1728254579000],["src/content/docs/pl/basics/astro-syntax.mdx",1728252264000],["src/content/docs/en/reference/errors/astro-glob-used-outside.mdx",1728076309000],["src/content/docs/en/reference/errors/render-undefined-entry-error.mdx",1728076309000],["src/content/docs/en/reference/errors/unknown-vite-error.mdx",1728076309000],["src/content/docs/es/guides/rss.mdx",1727989218000],["src/content/docs/ja/guides/rss.mdx",1727989218000],["src/content/docs/pt-br/guides/rss.mdx",1727989218000],["src/content/docs/pt-br/basics/astro-syntax.mdx",1726862822000],["src/content/docs/zh-tw/guides/cms.mdx",1726682374000],["src/content/docs/zh-cn/guides/migrate-to-astro.mdx",1726500214000],["src/content/docs/es/basics/astro-syntax.mdx",1726076294000],["src/content/docs/fr/guides/migrate-to-astro.mdx",1726067857000],["src/content/docs/zh-cn/guides/cms.mdx",1726039306000],["src/content/docs/ko/guides/migrate-to-astro.mdx",1725910667000],["src/content/docs/en/guides/migrate-to-astro.mdx",1725883714000],["src/content/docs/zh-tw/guides/migrate-to-astro.mdx",1725883714000],["src/content/docs/en/guides/deploy/space.mdx",1725819055000],["src/content/docs/es/guides/deploy/space.mdx",1725819055000],["src/content/docs/fr/guides/deploy/space.mdx",1725819055000],["src/content/docs/ja/guides/deploy/space.mdx",1725819055000],["src/content/docs/ko/guides/deploy/space.mdx",1725819055000],["src/content/docs/zh-cn/guides/deploy/space.mdx",1725819055000],["src/content/docs/ko/guides/cms.mdx",1725738472000],["src/content/docs/fr/guides/cms.mdx",1725735686000],["src/content/docs/en/guides/cms.mdx",1725704125000],["src/content/docs/en/guides/ecommerce.mdx",1725557879000],["src/content/docs/en/reference/errors/action-not-found-error.mdx",1724939084000],["src/content/docs/en/reference/errors/action-query-string-invalid-error.mdx",1724939084000],["src/content/docs/en/reference/errors/env-invalid-variable.mdx",1724935445000],["src/content/docs/en/reference/errors/invalid-rewrite404.mdx",1724935445000],["src/content/docs/en/reference/errors/locals-not-serializable.mdx",1724935445000],["src/content/docs/en/reference/errors/markdown-content-schema-validation-error.mdx",1724935445000],["src/content/docs/pt-br/guides/media.mdx",1724878161000],["src/content/docs/en/reference/errors/actions-used-with-for-get-error.mdx",1724415500000],["src/content/docs/en/reference/errors/get-entry-deprecation-error.mdx",1723717815000],["src/content/docs/en/reference/errors/unknown-filesystem-error.mdx",1723717815000],["src/content/docs/hi/basics/astro-syntax.mdx",1723652577000],["src/content/docs/ja/basics/astro-syntax.mdx",1722960296000],["src/content/docs/en/reference/errors/rewrite-encountered-an-error.mdx",1722507096000],["src/content/docs/es/guides/integrations-guide.mdx",1721673256000],["src/content/docs/404.mdx",1720854389000],["src/content/docs/es/guides/backend.mdx",1720106228000],["src/content/docs/fr/guides/backend.mdx",1719344613000],["src/content/docs/fr/guides/integrations-guide.mdx",1719344613000],["src/content/docs/ko/guides/integrations-guide.mdx",1718938134000],["src/content/docs/ko/guides/backend.mdx",1718898806000],["src/content/docs/zh-cn/guides/integrations-guide.mdx",1718882327000],["src/content/docs/zh-cn/guides/backend.mdx",1718867931000],["src/content/docs/en/guides/integrations-guide.mdx",1718832299000],["src/content/docs/en/guides/backend.mdx",1718822495000],["src/content/docs/en/reference/errors/expected-not-esmimage.mdx",1718801773000],["src/content/docs/en/tutorial/2-pages/2.mdx",1718621421000],["src/content/docs/de/guides/aliases.mdx",1718381755000],["src/content/docs/de/install/auto.mdx",1718381755000],["src/content/docs/de/install/manual.mdx",1718381755000],["src/content/docs/en/guides/aliases.mdx",1718381755000],["src/content/docs/en/install/auto.mdx",1718381755000],["src/content/docs/en/install/manual.mdx",1718381755000],["src/content/docs/es/guides/aliases.mdx",1718381755000],["src/content/docs/es/install/auto.mdx",1718381755000],["src/content/docs/es/install/manual.mdx",1718381755000],["src/content/docs/fr/guides/aliases.mdx",1718381755000],["src/content/docs/fr/install/auto.mdx",1718381755000],["src/content/docs/fr/install/manual.mdx",1718381755000],["src/content/docs/hi/install/auto.mdx",1718381755000],["src/content/docs/hi/install/manual.mdx",1718381755000],["src/content/docs/it/install/auto.mdx",1718381755000],["src/content/docs/it/install/manual.mdx",1718381755000],["src/content/docs/ja/guides/aliases.mdx",1718381755000],["src/content/docs/ja/install/auto.mdx",1718381755000],["src/content/docs/ja/install/manual.mdx",1718381755000],["src/content/docs/ko/guides/aliases.mdx",1718381755000],["src/content/docs/ko/install/auto.mdx",1718381755000],["src/content/docs/ko/install/manual.mdx",1718381755000],["src/content/docs/pl/guides/aliases.mdx",1718381755000],["src/content/docs/pl/install/auto.mdx",1718381755000],["src/content/docs/pl/install/manual.mdx",1718381755000],["src/content/docs/pt-br/guides/aliases.mdx",1718381755000],["src/content/docs/pt-br/install/auto.mdx",1718381755000],["src/content/docs/pt-br/install/manual.mdx",1718381755000],["src/content/docs/ru/guides/aliases.mdx",1718381755000],["src/content/docs/ru/install/auto.mdx",1718381755000],["src/content/docs/ru/install/manual.mdx",1718381755000],["src/content/docs/zh-cn/guides/aliases.mdx",1718381755000],["src/content/docs/zh-cn/install/auto.mdx",1718381755000],["src/content/docs/zh-cn/install/manual.mdx",1718381755000],["src/content/docs/zh-tw/install/auto.mdx",1718381755000],["src/content/docs/zh-tw/install/manual.mdx",1718381755000],["src/content/docs/en/tutorial/1-setup/3.mdx",1718199115000],["src/content/docs/en/tutorial/1-setup/4.mdx",1718199115000],["src/content/docs/en/tutorial/3-components/3.mdx",1718199115000],["src/content/docs/es/guides/cms.mdx",1718199115000],["src/content/docs/ru/guides/cms.mdx",1718199115000],["src/content/docs/en/reference/errors/i18n-no-locale-found-in-path.mdx",1718025222000],["src/content/docs/en/recipes/studio.mdx",1717772410000],["src/content/docs/es/recipes/studio.mdx",1717772410000],["src/content/docs/fr/recipes/studio.mdx",1717772410000],["src/content/docs/it/recipes/studio.mdx",1717772410000],["src/content/docs/ko/recipes/studio.mdx",1717772410000],["src/content/docs/ru/recipes/studio.mdx",1717772410000],["src/content/docs/zh-cn/recipes/studio.mdx",1717772410000],["src/content/docs/en/reference/errors/server-only-module.mdx",1717686295000],["src/content/docs/de/integrations/integrations.mdx",1717117443000],["src/content/docs/en/integrations/integrations.mdx",1717117443000],["src/content/docs/es/integrations/integrations.mdx",1717117443000],["src/content/docs/fr/integrations/integrations.mdx",1717117443000],["src/content/docs/it/integrations/integrations.mdx",1717117443000],["src/content/docs/ja/integrations/integrations.mdx",1717117443000],["src/content/docs/ko/integrations/integrations.mdx",1717117443000],["src/content/docs/pt-br/integrations/integrations.mdx",1717117443000],["src/content/docs/zh-cn/integrations/integrations.mdx",1717117443000],["src/content/docs/it/basics/astro-syntax.mdx",1716227952000],["src/content/docs/en/reference/errors/route-not-found.mdx",1715249965000],["src/content/docs/en/recipes/build-custom-img-component.mdx",1714670908000],["src/content/docs/en/recipes/dynamically-importing-images.mdx",1714670908000],["src/content/docs/en/recipes/external-links.mdx",1714670908000],["src/content/docs/pt-br/guides/deploy.mdx",1714421859000],["src/content/docs/fr/guides/deploy.mdx",1714152936000],["src/content/docs/en/recipes/making-toolbar-apps.mdx",1714041351000],["src/content/docs/ja/recipes.mdx",1713285907000],["src/content/docs/it/guides/integrations-guide.mdx",1713207026000],["src/content/docs/en/reference/errors/incorrect-strategy-for-i18n.mdx",1712911295000],["src/content/docs/en/reference/errors/missing-middleware-for-internationalization.mdx",1712836385000],["src/content/docs/en/reference/errors/no-prerendered-routes-with-domains.mdx",1712836385000],["src/content/docs/zh-tw/basics/astro-syntax.mdx",1712632302000],["src/content/docs/zh-tw/guides/deploy.mdx",1712632302000],["src/content/docs/ja/guides/integrations-guide.mdx",1712339576000],["src/content/docs/ja/guides/deploy.mdx",1712265149000],["src/content/docs/es/guides/deploy.mdx",1712221451000],["src/content/docs/ru/guides/integrations-guide.mdx",1711992773000],["src/content/docs/ru/guides/deploy.mdx",1711853643000],["src/content/docs/ko/guides/deploy.mdx",1711691620000],["src/content/docs/zh-cn/guides/deploy.mdx",1711689782000],["src/content/docs/en/guides/deploy.mdx",1711679919000],["src/content/docs/en/tutorial/2-pages/1.mdx",1711392147000],["src/content/docs/en/tutorial/3-components/2.mdx",1711392147000],["src/content/docs/en/tutorial/6-islands/1.mdx",1711392147000],["src/content/docs/en/reference/errors/endpoint-did-not-return-aresponse.mdx",1710940620000],["src/content/docs/ru/guides/migrate-to-astro.mdx",1710418195000],["src/content/docs/de/guides/deploy.mdx",1710351710000],["src/content/docs/en/reference/errors/astro-response-headers-reassigned.mdx",1710154165000],["src/content/docs/en/reference/errors/locals-not-an-object.mdx",1710154165000],["src/content/docs/ja/guides/migrate-to-astro.mdx",1709763061000],["src/content/docs/ja/guides/cms.mdx",1709760238000],["src/content/docs/ja/guides/backend.mdx",1709759073000],["src/content/docs/it/guides/backend.mdx",1709667879000],["src/content/docs/ru/basics/astro-syntax.mdx",1709662784000],["src/content/docs/ru/recipes.mdx",1709656503000],["src/content/docs/ru/guides/backend.mdx",1709587983000],["src/content/docs/en/reference/errors/middleware-cant-be-loaded.mdx",1709041165000],["src/content/docs/it/recipes.mdx",1709032342000],["src/content/docs/en/guides/backend/tigris.mdx",1708371603000],["src/content/docs/es/guides/backend/tigris.mdx",1708371603000],["src/content/docs/fr/guides/backend/tigris.mdx",1708371603000],["src/content/docs/it/guides/backend/tigris.mdx",1708371603000],["src/content/docs/ko/guides/backend/tigris.mdx",1708371603000],["src/content/docs/zh-cn/guides/backend/tigris.mdx",1708371603000],["src/content/docs/en/reference/errors/failed-to-fetch-remote-image-dimensions.mdx",1708005670000],["src/content/docs/pt-br/recipes.mdx",1707332835000],["src/content/docs/es/recipes.mdx",1707243029000],["src/content/docs/en/reference/errors/invalid-dynamic-route.mdx",1706798749000],["src/content/docs/en/reference/errors/no-client-entrypoint.mdx",1706798749000],["src/content/docs/en/reference/errors/no-matching-renderer.mdx",1706798749000],["src/content/docs/en/reference/errors/page-number-param-not-found.mdx",1706798749000],["src/content/docs/en/reference/errors/reserved-slot-name.mdx",1706798749000],["src/content/docs/es/guides/migrate-to-astro.mdx",1706798749000],["src/content/docs/pt-br/guides/migrate-to-astro.mdx",1706798749000],["src/content/docs/zh-cn/core-concepts/astro-syntax.mdx",1706539248000],["src/content/docs/zh-cn/core-concepts/astro-components.mdx",1706538525000],["src/content/docs/zh-cn/core-concepts/project-structure.mdx",1706537072000],["src/content/docs/zh-cn/core-concepts/endpoints.mdx",1706536307000],["src/content/docs/ko/core-concepts/astro-pages.mdx",1706370987000],["src/content/docs/en/reference/errors/astro-glob-no-match.mdx",1706204587000],["src/content/docs/en/reference/errors/missing-index-for-internationalization.mdx",1706204587000],["src/content/docs/fr/core-concepts/astro-components.mdx",1706198353000],["src/content/docs/fr/core-concepts/routing.mdx",1706198353000],["src/content/docs/ko/core-concepts/routing.mdx",1705944651000],["src/content/docs/ko/core-concepts/astro-components.mdx",1705944056000],["src/content/docs/es/core-concepts/routing.mdx",1705768060000],["src/content/docs/zh-cn/core-concepts/routing.mdx",1705674432000],["src/content/docs/es/core-concepts/astro-components.mdx",1705605120000],["src/content/docs/en/core-concepts/astro-components.mdx",1705576226000],["src/content/docs/en/core-concepts/routing.mdx",1705575687000],["src/content/docs/es/core-concepts/layouts.mdx",1705377163000],["src/content/docs/es/core-concepts/astro-pages.mdx",1705376405000],["src/content/docs/es/core-concepts/framework-components.mdx",1705376405000],["src/content/docs/fr/core-concepts/layouts.mdx",1705260066000],["src/content/docs/fr/core-concepts/sharing-state.mdx",1705238410000],["src/content/docs/fr/core-concepts/astro-pages.mdx",1705192306000],["src/content/docs/fr/core-concepts/framework-components.mdx",1705192306000],["src/content/docs/it/core-concepts/routing.mdx",1705111262000],["src/content/docs/ko/core-concepts/layouts.mdx",1705086040000],["src/content/docs/ko/core-concepts/framework-components.mdx",1705074563000],["src/content/docs/zh-cn/core-concepts/astro-pages.mdx",1705073855000],["src/content/docs/zh-cn/core-concepts/framework-components.mdx",1705073235000],["src/content/docs/zh-cn/core-concepts/layouts.mdx",1705072849000],["src/content/docs/ja/core-concepts/astro-components.mdx",1705069336000],["src/content/docs/en/reference/errors/cant-render-page.mdx",1705064040000],["src/content/docs/en/reference/errors/missing-locale.mdx",1705064040000],["src/content/docs/en/reference/errors/unhandled-rejection.mdx",1705064040000],["src/content/docs/ja/core-concepts/project-structure.mdx",1705050521000],["src/content/docs/ja/core-concepts/rendering-modes.mdx",1705048247000],["src/content/docs/en/core-concepts/astro-pages.mdx",1705007028000],["src/content/docs/en/core-concepts/framework-components.mdx",1705007028000],["src/content/docs/en/core-concepts/layouts.mdx",1705007028000],["src/content/docs/pt-br/guides/backend.mdx",1704986591000],["src/content/docs/ko/core-concepts/sharing-state.mdx",1704760956000],["src/content/docs/fr/core-concepts/project-structure.mdx",1704238601000],["src/content/docs/zh-cn/core-concepts/sharing-state.mdx",1704132972000],["src/content/docs/es/core-concepts/sharing-state.mdx",1704060722000],["src/content/docs/ko/core-concepts/endpoints.mdx",1704044300000],["src/content/docs/ko/core-concepts/astro-syntax.mdx",1704035637000],["src/content/docs/en/core-concepts/sharing-state.mdx",1703864361000],["src/content/docs/es/core-concepts/project-structure.mdx",1703785299000],["src/content/docs/ko/core-concepts/project-structure.mdx",1703433852000],["src/content/docs/en/core-concepts/project-structure.mdx",1703275121000],["src/content/docs/en/reference/errors/could-not-transform-image.mdx",1703075309000],["src/content/docs/ko/core-concepts/rendering-modes.mdx",1703019702000],["src/content/docs/ru/core-concepts/astro-components.mdx",1702850155000],["src/content/docs/it/core-concepts/rendering-modes.mdx",1702771850000],["src/content/docs/en/reference/errors/middleware-no-data-or-next-called.mdx",1702650764000],["src/content/docs/es/core-concepts/astro-syntax.mdx",1702307256000],["src/content/docs/es/core-concepts/rendering-modes.mdx",1702128460000],["src/content/docs/en/reference/dev-overlay-plugin-reference.mdx",1701794069000],["src/content/docs/zh-tw/core-concepts/project-structure.mdx",1701732369000],["src/content/docs/fr/core-concepts/astro-syntax.mdx",1701638496000],["src/content/docs/en/core-concepts/astro-syntax.mdx",1701623805000],["src/content/docs/en/contribute.mdx",1701618983000],["src/content/docs/ru/core-concepts/astro-pages.mdx",1700777927000],["src/content/docs/ru/core-concepts/layouts.mdx",1700777927000],["src/content/docs/fr/core-concepts/rendering-modes.mdx",1700657701000],["src/content/docs/zh-cn/core-concepts/rendering-modes.mdx",1699832581000],["src/content/docs/en/core-concepts/rendering-modes.mdx",1699566909000],["src/content/docs/it/core-concepts/astro-components.mdx",1699354868000],["src/content/docs/it/core-concepts/astro-pages.mdx",1699354868000],["src/content/docs/it/core-concepts/astro-syntax.mdx",1699354868000],["src/content/docs/it/core-concepts/endpoints.mdx",1699354868000],["src/content/docs/it/core-concepts/framework-components.mdx",1699354868000],["src/content/docs/it/core-concepts/layouts.mdx",1699354868000],["src/content/docs/de/core-concepts/astro-syntax.mdx",1698768136000],["src/content/docs/de/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/en/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/es/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/fr/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/ja/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/pt-br/core-concepts/endpoints.mdx",1698457033000],["src/content/docs/ar/core-concepts/astro-components.mdx",1698325220000],["src/content/docs/pt-br/core-concepts/layouts.mdx",1698094118000],["src/content/docs/en/reference/errors/unsupported-image-conversion.mdx",1697502471000],["src/content/docs/en/reference/errors/incompatible-descriptor-options.mdx",1697123631000],["src/content/docs/de/guides/backend.mdx",1697099943000],["src/content/docs/pt-br/core-concepts/astro-components.mdx",1696793520000],["src/content/docs/pt-br/core-concepts/astro-pages.mdx",1696793520000],["src/content/docs/en/reference/errors/collection-does-not-exist-error.mdx",1696449332000],["src/content/docs/ru/core-concepts/routing.mdx",1695662564000],["src/content/docs/it/core-concepts/project-structure.mdx",1695659832000],["src/content/docs/en/reference/errors/image-not-found.mdx",1695397845000],["src/content/docs/en/reference/errors/markdown-image-not-found.mdx",1695397845000],["src/content/docs/en/reference/errors/no-image-metadata.mdx",1695397845000],["src/content/docs/ja/core-concepts/layouts.mdx",1695294489000],["src/content/docs/ja/core-concepts/routing.mdx",1695294489000],["src/content/docs/en/reference/errors/expected-image.mdx",1694800506000],["src/content/docs/en/reference/errors/unsupported-config-transform-error.mdx",1694800506000],["src/content/docs/en/reference/errors/local-image-used-wrongly.mdx",1694713299000],["src/content/docs/pt-br/core-concepts/routing.mdx",1693853228000],["src/content/docs/de/reference/adapter-reference.mdx",1693493235000],["src/content/docs/de/reference/configuration-reference.mdx",1693493235000],["src/content/docs/de/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/en/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/es/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/fr/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/it/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/ja/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/ko/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/pt-br/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/ru/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/zh-cn/concepts/mpa-vs-spa.mdx",1693403618000],["src/content/docs/de/guides/images.mdx",1693401952000],["src/content/docs/en/guides/assets.mdx",1693401952000],["src/content/docs/en/guides/integrations-guide/image.mdx",1693401952000],["src/content/docs/en/reference/errors/expected-image-options.mdx",1693401952000],["src/content/docs/en/reference/errors/middleware-not-aresponse.mdx",1693401952000],["src/content/docs/en/reference/errors/unsupported-image-format.mdx",1693401952000],["src/content/docs/es/guides/assets.mdx",1693401952000],["src/content/docs/es/guides/integrations-guide/image.mdx",1693401952000],["src/content/docs/pt-br/core-concepts/project-structure.mdx",1693401952000],["src/content/docs/zh-cn/guides/integrations-guide/image.mdx",1693401952000],["src/content/docs/pt-br/core-concepts/sharing-state.mdx",1692819498000],["src/content/docs/ja/core-concepts/astro-syntax.mdx",1692641784000],["src/content/docs/ru/core-concepts/astro-syntax.mdx",1692201947000],["src/content/docs/ja/core-concepts/framework-components.mdx",1691684359000],["src/content/docs/pt-br/core-concepts/astro-syntax.mdx",1691680271000],["src/content/docs/pt-br/core-concepts/framework-components.mdx",1691330748000],["src/content/docs/en/guides/client-side-routing.mdx",1689869691000],["src/content/docs/de/core-concepts/layouts.mdx",1688137497000],["src/content/docs/zh-tw/core-concepts/layouts.mdx",1688137497000],["src/content/docs/en/reference/errors/config-legacy-key.mdx",1687429480000],["src/content/docs/en/reference/errors/config-not-found.mdx",1687429480000],["src/content/docs/en/reference/errors/csssyntax-error.mdx",1687429480000],["src/content/docs/en/reference/errors/duplicate-content-entry-slug-error.mdx",1687429480000],["src/content/docs/en/reference/errors/failed-to-find-page-map-ssr.mdx",1687429480000],["src/content/docs/en/reference/errors/failed-to-load-module-ssr.mdx",1687429480000],["src/content/docs/en/reference/errors/generate-content-types-error.mdx",1687429480000],["src/content/docs/en/reference/errors/invalid-component-args.mdx",1687429480000],["src/content/docs/en/reference/errors/invalid-frontmatter-injection-error.mdx",1687429480000],["src/content/docs/en/reference/errors/invalid-glob.mdx",1687429480000],["src/content/docs/en/reference/errors/invalid-image-service.mdx",1687429480000],["src/content/docs/en/reference/errors/invalid-prerender-export.mdx",1687429480000],["src/content/docs/en/reference/errors/markdown-frontmatter-parse-error.mdx",1687429480000],["src/content/docs/en/reference/errors/mdx-integration-missing-error.mdx",1687429480000],["src/content/docs/en/reference/errors/missing-media-query-directive.mdx",1687429480000],["src/content/docs/en/reference/errors/no-client-only-hint.mdx",1687429480000],["src/content/docs/en/reference/errors/no-matching-import.mdx",1687429480000],["src/content/docs/en/reference/errors/response-sent-error.mdx",1687429480000],["src/content/docs/en/reference/errors/unknown-compiler-error.mdx",1687429480000],["src/content/docs/zh-tw/core-concepts/astro-pages.mdx",1681398954000],["src/content/docs/de/core-concepts/astro-components.mdx",1681287054000],["src/content/docs/de/core-concepts/sharing-state.mdx",1680868646000],["src/content/docs/de/core-concepts/framework-components.mdx",1680722199000],["src/content/docs/en/guides/cms/netlify-cms.mdx",1679608569000],["src/content/docs/en/reference/errors/unknown-clierror.mdx",1676665588000],["src/content/docs/en/reference/errors/unknown-config-error.mdx",1676665588000],["src/content/docs/en/reference/errors/unknown-csserror.mdx",1676665588000],["src/content/docs/en/reference/errors/unknown-markdown-error.mdx",1676665588000],["src/content/docs/de/core-concepts/astro-pages.mdx",1676496173000],["src/content/docs/de/core-concepts/project-structure.mdx",1676496173000],["src/content/docs/de/core-concepts/routing.mdx",1676496173000],["src/content/docs/de/guides/cms.mdx",1676496173000],["src/content/docs/de/guides/integrations-guide.mdx",1676496173000],["src/content/docs/ja/core-concepts/astro-pages.mdx",1676496173000],["src/content/docs/ru/core-concepts/project-structure.mdx",1676496173000]]);const getNewestCommitDate = api.getNewestCommitDate;

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: context.build.format,
  trailingSlash: context.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" || slug === "/" ? void 0 : (slug.endsWith("/index") ? slug.slice(0, -6) : slug).normalize();
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedSlug(slug, locale) {
  const slugLocale = slugToLocale(slug);
  if (slugLocale === locale) return slug;
  locale = locale || "";
  if (slugLocale === slug) return locale;
  if (slugLocale) {
    return stripTrailingSlash(slug.replace(slugLocale + "/", locale ? locale + "/" : ""));
  }
  return slug ? locale + "/" + slug : locale;
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function urlToSlug(url) {
  let pathname = url.pathname;
  const base = stripTrailingSlash("/");
  if (pathname.startsWith(base)) pathname = pathname.replace(base, "");
  const segments = pathname.split("/");
  const htmlExt = ".html";
  if (segments.at(-1) === "index.html") {
    segments.pop();
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    const last = segments.pop();
    if (last) segments.push(last.slice(0, -1 * htmlExt.length));
  }
  return segments.filter(Boolean).join("/");
}

const logos = {};

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", context)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs$1 = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs$1.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  {
    const defaultLocaleDocs = getLocaleDocs(
      starlightConfig.defaultLocale?.locale === "root" ? void 0 : starlightConfig.defaultLocale?.locale
    );
    for (const key in starlightConfig.locales) {
      if (key === starlightConfig.defaultLocale.locale) continue;
      const localeConfig = starlightConfig.locales[key];
      if (!localeConfig) continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = slug;
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback) continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || BuiltInDefaultLocale.lang,
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs$1, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", context);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { attrs, collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(
      tree,
      currentPathname,
      locale,
      subgroupCollapsed ?? item.collapsed,
      attrs
    ),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return (        localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale)
  );
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route, attrs) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    { ...attrs, ...route.entry.data.sidebar.attrs }
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed, attrs) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed, attrs)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed, attrs) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed, attrs) : linkFromRoute(dirOrRoute, attrs);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed, attrs) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed, attrs)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getSidebarFromConfig(sidebarConfig, pathname, locale) {
  const intermediateSidebar = getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale);
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

const version = "0.35.2";

const canonicalTrailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: ensureTrailingSlash
};
function formatCanonical(href, opts) {
  return canonicalTrailingSlashStrategies[opts.trailingSlash](href);
}

function localizedUrl(url, locale, trailingSlash) {
  url = new URL(url);
  if (!starlightConfig.locales) {
    return url;
  }
  if (locale === "root") locale = "";
  const base = stripTrailingSlash("/");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase) url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
  if (baseSlug && baseSlug in starlightConfig.locales) {
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  if (hasBase) url.pathname = base + url.pathname;
  return url;
}

const HeadSchema = HeadConfigSchema();
function getHead({ entry, lang }, context$1, siteTitle) {
  const { data } = entry;
  const canonical = context$1.site ? new URL(context$1.url.pathname, context$1.site) : void 0;
  const canonicalHref = canonical?.href ? formatCanonical(canonical.href, {
    trailingSlash: context.trailingSlash
  }) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonicalHref } },
    { tag: "meta", attrs: { name: "generator", content: context$1.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonicalHref } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && starlightConfig.isMultilingual) {
    for (const locale in starlightConfig.locales) {
      const localeOpts = starlightConfig.locales[locale];
      if (!localeOpts) continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (context$1.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  const twitterLink = starlightConfig.social?.find(({ icon }) => icon === "twitter" || icon === "x.com");
  if (twitterLink) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(twitterLink.href).pathname.replace("/", "@")
      }
    });
  }
  return createHead(headDefaults, starlightConfig.head, data.head);
}
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(
        ({ attrs }) => entry.attrs?.rel === "canonical" && attrs?.rel === "canonical"
      );
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs?.[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs?.[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && entry.attrs && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && entry.attrs && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

async function getRoute(context) {
  return "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
}
async function useRouteData(context, route, { Content, headings }) {
  const routeData = generateRouteData({ props: { ...route, headings }, context });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  context
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(context.url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    head: getHead(props, context, siteTitle)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else {
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", context)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}

const $$Astro$H = createAstro("https://docs.astro.build/");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-s7a4jfqt" data-pagefind-ignore>${unescapeHTML(banner.content)}</div>`}

`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-ubkgmm4j">
	<div class="sl-container astro-ubkgmm4j">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$G = createAstro("https://docs.astro.build/");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-5unaioo4">
	${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-5unaioo4" })}
	<span class="astro-5unaioo4">${label}</span>
</p>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$F = createAstro("https://docs.astro.build/");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$E = createAstro("https://docs.astro.build/");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$D = createAstro("https://docs.astro.build/");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl, entry, locale, isFallback } = Astro2.locals.starlightRoute;
  const githubEditUrl = entry.data.githubURL && (locale === "en" || isFallback) ? `${entry.data.githubURL}${entry.data.hasREADME ? "README.md" : ""}` : editUrl;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<div class="sl-flex astro-dvlentyv">
			<a${addAttribute(githubEditUrl, "href")} class="sl-flex astro-dvlentyv">
				${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-dvlentyv" })}
				${Astro2.locals.t("page.editLink")}
			</a>
			<a href="https://contribute.docs.astro.build/guides/i18n/" class="sl-flex astro-dvlentyv">
				${renderComponent($$result, "Icon", $$Icon, { "name": "translate", "size": "1.2em", "class": "astro-dvlentyv" })} ${Astro2.locals.t("footer.translatePage")}
			</a>
		</div>`}

`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/EditLink.astro", void 0);

const $$Astro$C = createAstro("https://docs.astro.build/");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.locals.starlightRoute;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>
			${Astro2.locals.t("page.lastUpdated")}${" "}
			<time${addAttribute(lastUpdated.toISOString(), "datetime")}>
				${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}
			</time>
		</p>`}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$B = createAstro("https://docs.astro.build/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, pagination } = Astro2.locals.starlightRoute;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links print:hidden astro-5u5zgoff"${addAttribute(dir, "dir")}>
	${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-5u5zgoff">
				${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-5u5zgoff" })}
				<span class="astro-5u5zgoff">
					${Astro2.locals.t("page.previousLink")}
					<br class="astro-5u5zgoff">
					<span class="link-title astro-5u5zgoff">${prev.label}</span>
				</span>
			</a>`}
	${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-5u5zgoff">
				${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-5u5zgoff" })}
				<span class="astro-5u5zgoff">
					${Astro2.locals.t("page.nextLink")}
					<br class="astro-5u5zgoff">
					<span class="link-title astro-5u5zgoff">${next.label}</span>
				</span>
			</a>`}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$A = createAstro("https://docs.astro.build/");
const $$Footer$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Footer$1;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-t3uyoafn">
	<div class="meta sl-flex astro-t3uyoafn">
		${renderComponent($$result, "EditLink", $$EditLink, { "class": "astro-t3uyoafn" })}
		${renderComponent($$result, "LastUpdated", $$LastUpdated, { "class": "astro-t3uyoafn" })}
	</div>
	${renderComponent($$result, "Pagination", $$Pagination, { "class": "astro-t3uyoafn" })}

	${starlightConfig.credits}
</footer>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const $$Astro$z = createAstro("https://docs.astro.build/");
const $$FooterLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$FooterLinks;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<section class="sl-flex astro-m2zh2vwj">
	<a${addAttribute(`/${lang}/contribute/`, "href")} class="sl-flex astro-m2zh2vwj">
		${renderComponent($$result, "Icon", $$Icon, { "name": "rocket", "size": "1.2em", "class": "astro-m2zh2vwj" })}
		${Astro2.locals.t("footer.contribute")}
	</a>

	<a href="https://astro.build/chat" class="sl-flex astro-m2zh2vwj">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="width:1.2em;height:1.2em;" class="astro-m2zh2vwj">
			<path d="M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M9 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2a3 3 0 0 1 3 3a3 3 0 0 1-1.5 2.59a1 1 0 0 0-.5.84a1 1 0 0 0 .45.86l.39.26l.13.07a7 7 0 0 1 4 6.38a1 1 0 0 0 2 0a9 9 0 0 0-4.23-7.68" class="astro-m2zh2vwj"></path>
		</svg>
		${Astro2.locals.t("footer.community")}
	</a>

	<a href="https://opencollective.com/astrodotbuild" class="sl-flex astro-m2zh2vwj">
		${renderComponent($$result, "Icon", $$Icon, { "name": "heart", "size": "1.2em", "class": "astro-m2zh2vwj" })}
		${Astro2.locals.t("footer.sponsor")}
	</a>
</section>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/FooterLinks.astro", void 0);

const JamesQuick = new Proxy({"src":"/_astro/JamesQuick.BYVczE5K.webp","width":200,"height":200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/JamesQuick.webp";
							}
							
							return target[name];
						}
					});

const Scrimba = new Proxy({"src":"/_astro/Scrimba.ByZ1pAIN.webp","width":200,"height":200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/Scrimba.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$y = createAstro("https://docs.astro.build/");
const $$ScrimbaAd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$ScrimbaAd;
  const offerUrl = "https://scrimba.com/intro-to-astro-c00ar0fi5u?via=astro";
  const idCount = Astro2.locals._ad_render_id ??= 1;
  Astro2.locals._ad_render_id++;
  const headingId = `learn-astro-course-${idCount}`;
  return renderTemplate`${maybeRenderHead()}<div class="container astro-zwxhm4ix" lang="en" dir="ltr" data-algolia-exclude>
	<aside${addAttribute(headingId, "aria-labelledby")} class="astro-zwxhm4ix">
		<div class="graphics astro-zwxhm4ix">
			${renderComponent($$result, "Image", $$Image, { "class": "scrimba-bubble astro-zwxhm4ix", "src": Scrimba, "alt": "Scrimba", "width": "72" })}
			${renderComponent($$result, "Image", $$Image, { "src": JamesQuick, "alt": "", "width": "72", "class": "astro-zwxhm4ix" })}
		</div>
		<h2${addAttribute(headingId, "id")} class="astro-zwxhm4ix">
			<strong class="astro-zwxhm4ix">Learn Astro</strong> with James Q Quick
		</h2>
		<p class="astro-zwxhm4ix">Build your first site with 35 interactive Scrimba lessons</p>
		${renderComponent($$result, "LinkButton", $$LinkButton, { "href": offerUrl, "class": "cta astro-zwxhm4ix", "data-scrimba-cta": true }, { "default": ($$result2) => renderTemplate`Get 20% off` })}
	</aside>
</div>

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/ScrimbaAd.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/ScrimbaAd.astro", void 0);

const CodingInPublic = new Proxy({"src":"/_astro/CodingInPublic.DpaYu7Qd.png","width":130,"height":131,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/CodingInPublic.png";
							}
							
							return target[name];
						}
					});

const $$Astro$x = createAstro("https://docs.astro.build/");
const $$LearnAstroAd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$LearnAstroAd;
  const offerUrl = "https://learnastro.dev?code=ASTRO_PROMO";
  const idCount = Astro2.locals._ad_render_id ??= 1;
  Astro2.locals._ad_render_id++;
  const headingId = `learn-astro-course-${idCount}`;
  return renderTemplate`${maybeRenderHead()}<div class="container astro-6x7bp2qc" lang="en" dir="ltr" data-algolia-exclude>
	<aside${addAttribute(headingId, "aria-labelledby")} class="astro-6x7bp2qc">
		${renderComponent($$result, "Image", $$Image, { "src": CodingInPublic, "alt": "", "width": "130", "class": "astro-6x7bp2qc" })}
		<h2${addAttribute(headingId, "id")} class="astro-6x7bp2qc">Learn Astro with <strong class="astro-6x7bp2qc">Coding in Public</strong></h2>
		<p class="sl-flex astro-6x7bp2qc">
			<span class="sl-flex astro-6x7bp2qc" style="gap: 0.25rem; align-items: center;">
				<svg fill="currentColor" viewBox="0 0 18 18" aria-hidden="true" class="astro-6x7bp2qc">
					<path d="M12 7.7 8.25 5.53A1.5 1.5 0 0 0 6 6.83v4.34a1.5 1.5 0 0 0 2.25 1.3L12 10.3a1.5 1.5 0 0 0 0-2.6ZM11.25 9 7.5 11.17V6.83L11.25 9ZM9 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM9 15A6 6 0 1 1 9 3a6 6 0 0 1 0 12Z" class="astro-6x7bp2qc"></path>
				</svg>
				<span class="astro-6x7bp2qc">150+ video lessons</span>
			</span>
			<span class="astro-6x7bp2qc">•</span>
			<span class="astro-6x7bp2qc">Astro v5 ready</span>
		</p>
		${renderComponent($$result, "LinkButton", $$LinkButton, { "href": offerUrl, "class": "cta astro-6x7bp2qc", "data-learn-astro-cta": true }, { "default": ($$result2) => renderTemplate`Get 20% off` })}
	</aside>
</div>

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/LearnAstroAd.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/LearnAstroAd.astro", void 0);

const $$Astro$w = createAstro("https://docs.astro.build/");
const $$RandomizedAd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$RandomizedAd;
  const ads = [$$ScrimbaAd, $$LearnAstroAd];
  const Ad = ads[Math.floor(Math.random() * ads.length)];
  return renderTemplate`${renderComponent($$result, "Ad", Ad, {})}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/RightSidebar/RandomizedAd.astro", void 0);

const $$Astro$v = createAstro("https://docs.astro.build/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="hide-when-toc-is-visible astro-o5o7wsh2">
	${renderComponent($$result, "Ad", $$RandomizedAd, { "class": "astro-o5o7wsh2" })}
</div>
${renderComponent($$result, "DefaultFooter", $$Footer$1, { "class": "astro-o5o7wsh2" })}
${renderComponent($$result, "FooterLinks", $$FooterLinks, { "class": "astro-o5o7wsh2" })}

<!-- Star Support Widget - Show on all pages -->
${renderComponent($$result, "star-support", "star-support", { "api-base-url": Astro2.url.origin, "auth-key": "to-the-stars-12345", "theme": "auto", "position": "bottom-right", "welcome-message": "Hi! How can I help you with Astro today?", "bot-name": "Astro AI", "header-title": "Astro Chat", "class": "astro-o5o7wsh2" })}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Footer.astro", void 0);

const $$Astro$u = createAstro("https://docs.astro.build/");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Head;
  const { head } = Astro2.locals.starlightRoute;
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$t = createAstro("https://docs.astro.build/");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-5e6o2wg7">
	<span class="sr-only astro-5e6o2wg7">${Astro2.props.label}</span>
	${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-5e6o2wg7" })}
	<select${addAttribute(Astro2.props.value, "value")} autocomplete="off" class="astro-5e6o2wg7">
		${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-5e6o2wg7">${unescapeHTML(label)}</option>`)}
	</select>
	${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-5e6o2wg7" })}
</label>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$s = createAstro("https://docs.astro.build/");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  return renderTemplate`${renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`
			${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": Astro2.locals.t("languageSelect.accessibleLabel"), "value": localizedPathname(Astro2.locals.starlightRoute.locale), "options": Object.entries(starlightConfig.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.locals.starlightRoute.locale,
    label: locale.label
  })), "width": "7em" })}
		` })}`}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

const $$Astro$r = createAstro("https://docs.astro.build/");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Search;
  const docSearchStrings = (
    // 1. Load all translations strings
    Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("docsearch.")).map(([key, value]) => [key.replace("docsearch.", ""), value]).reduce((dict, [key, val]) => {
      const segments = key.split(".");
      let pointer = dict;
      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (i < segments.length - 1) {
          pointer[segment] ??= {};
          pointer = pointer[segment];
        } else {
          pointer[segment] = val;
        }
      }
      return dict;
    }, {})
  );
  return renderTemplate`${renderComponent($$result, "sl-doc-search", "sl-doc-search", { "data-translations": JSON.stringify(docSearchStrings) }, { "default": () => renderTemplate`
	${maybeRenderHead()}<button type="button" class="DocSearch DocSearch-Button"${addAttribute(Astro2.locals.t("docsearch.button"), "aria-label")}>
		<span class="DocSearch-Button-Container">
			<svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20">
				<path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
			<span class="DocSearch-Button-Placeholder">${Astro2.locals.t("docsearch.button")}</span>
		</span>
		<span class="DocSearch-Button-Keys"></span>
	</button>
` })}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Search.astro", void 0);

const logo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"106\" height=\"32\" viewBox=\"0 -6 381 100\">\n  <path class=\"flame\" fill=\"currentColor\" d=\"M25.8 85.2c-4.5-4.2-5.9-12.8-4-19.1 3.3 4 7.8 5.2 12.5 6 7.2 1 14.3.6 21-2.7l2.4-1.4c.6 1.8.8 3.7.5 5.6-.5 4.5-2.8 8-6.4 10.7-1.4 1.1-3 2-4.5 3-4.6 3.2-5.8 6.8-4 12.1v.6a12 12 0 0 1-5.3-4.6 13 13 0 0 1-2-7c0-1.2 0-2.5-.2-3.7-.4-3-1.8-4.3-4.5-4.4a5.2 5.2 0 0 0-5.4 4.2l-.1.7Z\"/>\n  <path fill=\"currentColor\" d=\"M0 65s13.4-6.5 26.8-6.5l10.1-31.3c.4-1.5 1.5-2.5 2.7-2.5 1.3 0 2.4 1 2.8 2.5l10 31.3c16 0 26.9 6.5 26.9 6.5L56.5 3c-.6-1.8-1.7-3-3.2-3H26c-1.5 0-2.5 1.2-3.2 3L0 65Zm141-19.9c0 5.5-6.8 8.8-16.2 8.8-6.2 0-8.3-1.5-8.3-4.7 0-3.4 2.6-5 8.8-5 5.5 0 10.3 0 15.7.8v.1Zm.1-6.8a71 71 0 0 0-14.5-1.2c-17.7 0-26 4.2-26 14 0 10.1 5.7 14 18.8 14 11.2 0 18.8-2.8 21.6-9.8h.4l-.1 4.7c0 3.6.6 3.9 3.5 3.9h13.8c-.8-2.2-1.2-8.2-1.2-13.4l.2-15.4c0-11.5-6.9-18.8-28.5-18.8-9.3 0-19.6 1.6-27.5 4 .8 3.1 1.8 9.4 2.3 13.5a61.4 61.4 0 0 1 24-4.5c10.4 0 13.2 2.3 13.2 7.1v2Zm37.9 10c-1.9.3-4.5.3-7 .3a60 60 0 0 1-7.1-.4l-.1 2c0 9.5 6.2 15 28.1 15 20.6 0 27.3-5.5 27.3-15.1 0-9.2-4.4-13.7-24-14.7-15.2-.6-16.6-2.3-16.6-4.2 0-2.2 2-3.4 12.2-3.4 10.6 0 13.4 1.5 13.4 4.5v.7a153 153 0 0 1 14.1 0v-1.7c0-11.2-9.2-14.9-27.2-14.9-20.3 0-27 5-27 14.6 0 8.7 5.4 14.1 24.8 15 14.3.4 16 2 16 4.2 0 2.4-2.4 3.5-12.5 3.5-11.5 0-14.4-1.6-14.4-5v-.4Zm66-40.1a58.2 58.2 0 0 1-20.8 11.6v10.8h5V47c0 10 5.3 17.7 21.8 17.7 7 0 11.6-.8 17.4-2-.6-3.7-1.3-9.4-1.5-13.8a41 41 0 0 1-12.6 1.8c-6.6 0-9.3-1.8-9.3-7.1V30.8c8.6 0 17.1.2 22.1.4 0-4 .1-9.7.3-13.5l-22.1.2.2-9.7h-.5Zm44.7 20.1.3-10.6h-15.1c.2 6.5.2 13.3.2 23 0 10 0 16.7-.2 23.2H292c-.3-4.6-.3-12.3-.3-18.9 0-10.3 4.2-13.3 13.7-13.3 4.4 0 7.6.5 10.3 1.5.1-3.8.9-11.4 1.3-14.7a34 34 0 0 0-9.8-1.4c-8.2 0-14.2 3.3-17 11.3l-.6-.1Zm75.1 12.2c0 8.3-6 12.2-15.4 12.2S334 49 334 40.5c0-8.6 6-11.8 15.4-11.8 9.3 0 15.4 3.5 15.4 11.8Zm15.7-.4c0-16.5-13-24-31.1-24-18.3 0-30.8 7.5-30.8 24s11.6 25.3 30.7 25.3c19.2 0 31.2-8.8 31.2-25.3Z\"/>\n  <defs>\n    <linearGradient id=\"gradient\" x1=\"21\" x2=\"64.6\" y1=\"100\" y2=\"79.4\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#D83333\"/>\n      <stop offset=\"1\" stop-color=\"#F041FF\"/>\n    </linearGradient>\n  </defs>\n  <style>\n    [data-theme=\"dark\"] .flame {\n      fill: url(#gradient);\n    }\n  </style>\n</svg>\n";

const docs = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"69\" height=\"28\" viewBox=\"0 -6 246 100\">\n\t<path fill=\"currentColor\" d=\"M29 63.8c16.6 0 28.1-9.5 28.1-23.8 0-14.4-10.8-22.3-27.8-22.3H0v46.1h29ZM13.2 26.6h14.2c9.5 0 16 4.6 16 13.6 0 9.3-6 14.7-15.9 14.7H13.1V26.6Zm80.1 38.8c18.8 0 31-9.7 31-24.6 0-15-12.2-24.6-31-24.6-18.7 0-31 9.6-31 24.6 0 14.8 12.3 24.6 31 24.6Zm0-9.8c-10.3 0-17-6-17-14.8 0-9 6.7-14.9 17-14.9s17.1 6 17.1 14.9-6.8 14.8-17.1 14.8Zm66.3 9.8c15 0 25.5-6 29.3-16.4l-13.5-3c-1.9 6.1-7.2 9.4-15.4 9.4-10.4 0-17-5.8-17-14.7 0-9 6.4-14.7 16.8-14.7 8.4 0 13.7 3.4 15.5 9.7l13.6-2.4c-3-10.7-13.9-17.2-28.9-17.2-18.1 0-30.7 10.2-30.7 24.8 0 14.8 11.7 24.4 30.2 24.4Zm60.3 0c16.6 0 26.1-5.7 26.1-15.9 0-8.5-5.2-12.3-18-13.6l-12.7-1.2c-5.9-.7-7.8-1.8-7.8-4.6 0-3.2 3.9-4.8 11-4.8 8.8 0 15.4 2.8 18.9 7.3l8.2-7c-5.7-6.4-14.8-9.4-26.5-9.4-15.7 0-24.6 5.4-24.6 14.5 0 8.5 5.4 12.7 16.7 14l14.1 1.5c5.5.6 7.5 1.7 7.5 4.6 0 3.6-4 5.3-12.3 5.3-9.4 0-16.5-3.6-20.4-9l-9.3 6.5c4.7 7.3 15.4 11.8 29 11.8Z\"/>\n</svg>\n";

const $$Astro$q = createAstro("https://docs.astro.build/");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const main = "https://astro.build/";
  const self = "/" + (Astro2.locals.starlightRoute.locale || "en") + "/getting-started/";
  return renderTemplate`${maybeRenderHead()}<span class="site-title sl-flex astro-oijwx5iz">
	<a class="astro-logo astro-oijwx5iz"${addAttribute(main, "href")} aria-label="Astro">${unescapeHTML(logo)}</a>
	<a class="docs-logo astro-oijwx5iz"${addAttribute(self, "href")} aria-label="Docs">${unescapeHTML(docs)}</a>
</span>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/SiteTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = starlightConfig.social || [];
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-jnndwhpw" }, { "default": ($$result2) => renderTemplate`${links.map(({ label, href, icon }) => renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} rel="me" class="sl-flex astro-jnndwhpw">
					<span class="sr-only astro-jnndwhpw">${label}</span>
					${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "astro-jnndwhpw" })}
				</a>`)}` })}`}

`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$p = createAstro("https://docs.astro.build/");
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "\n\n\n<script>\n	StarlightThemeProvider.updatePickers();\n<\/script>\n\n", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`
	
	${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })}
` }), renderScript($$result, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header astro-pxwrbae6">
	<div class="title-wrapper sl-flex astro-pxwrbae6">
		${renderComponent($$result, "SiteTitle", $$SiteTitle, { "class": "astro-pxwrbae6" })}
	</div>
	<div class="sl-flex print:hidden astro-pxwrbae6">
		${renderTemplate`${renderComponent($$result, "Search", $$Search, { "class": "astro-pxwrbae6" })}`}
	</div>
	<div class="sl-hidden md:sl-flex print:hidden right-group astro-pxwrbae6">
		<div class="sl-flex social-icons astro-pxwrbae6">
			${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-pxwrbae6" })}
		</div>
		${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-pxwrbae6" })}
		${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-pxwrbae6" })}
	</div>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const $$Astro$o = createAstro("https://docs.astro.build/");
const $$FacePile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$FacePile;
  const { tagline, link, linkText } = Astro2.props;
  const res = await cachedFetch("https://astro.badg.es/api/v1/top-contributors.json");
  const allContributors = (await res.json()).data;
  const arrangement = [3, 4, 3, 3, 6, 4, 6, 3, 3, 3];
  const circles = [1, 0, 2, 2, -1, 2, -1, -1, 3, -1];
  const spaces = [-1, -1, -1, 1, -1, -1, -1, -1, -1];
  const contributorArrangement = arrangement.map((i) => allContributors.splice(0, i));
  return renderTemplate`${maybeRenderHead()}<div class="mobile-only not-content astro-zmkmtucg">
	<p class="tagline astro-zmkmtucg">${tagline} <a${addAttribute(link, "href")} class="astro-zmkmtucg">${linkText}</a></p>
</div>
<div class="facepile not-content astro-zmkmtucg">
	${contributorArrangement.map((contributors, i) => {
    if (circles[i] !== -1) contributors.splice(circles[i], 0, 1);
    if (spaces[i] !== -1) contributors.splice(spaces[i], 0, 2);
    return renderTemplate`<div class="row astro-zmkmtucg">
					${i === 7 && renderTemplate`<p class="tagline astro-zmkmtucg">
							${tagline} <a${addAttribute(link, "href")} class="astro-zmkmtucg">${linkText}</a>
						</p>`}
					${contributors.map(
      (cell) => typeof cell === "number" ? renderTemplate`<span${addAttribute([[cell === 1 && "circle"], "astro-zmkmtucg"], "class:list")}></span>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": "84", "height": "84", "quality": "low", "loading": "eager", "src": cell.avatar_url, "alt": "", "class": "astro-zmkmtucg" })}`
    )}
				</div>`;
  })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Hero/FacePile.astro", void 0);

const $$Astro$n = createAstro("https://docs.astro.build/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.locals.starlightRoute.entry.data;
  const { title, tagline, actions, facepile } = hero;
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-w36gv4jc">
	<div class="grid-bg astro-w36gv4jc"></div>
	<div id="_top" class="hero-content stack astro-w36gv4jc" style="--stack-gap: 2rem;">
		<div class="stack astro-w36gv4jc" style="--stack-gap: 1rem;">
			<h1 class="astro-w36gv4jc">${unescapeHTML(title)}</h1>
			<p class="astro-w36gv4jc">${unescapeHTML(tagline)}</p>
		</div>
		<div class="sl-flex actions astro-w36gv4jc">
			${actions.map(({ link, icon, text, variant }) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "link": link, "variant": variant, "icon": icon, "class": "astro-w36gv4jc" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}
		</div>
	</div>
	${renderComponent($$result, "FacePile", $$FacePile, { ...facepile, "class": "astro-w36gv4jc" })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Hero.astro", void 0);

const defaultCategory = "Learn";
const categories = [
  ["guides/rss/", "Recipes"],
  ["guides/backend/", "Recipes"],
  ["guides/cms/", "Recipes"],
  ["guides/deploy/", "Recipes"],
  ["guides/media/", "Recipes"],
  ["guides/integrations-guide/", "Learn"],
  ["guides/migrate-to-astro/", "Recipes"],
  ["guides/upgrade-to/", "Upgrade Guides"],
  ["recipes/", "Recipes"],
  ["reference/errors/", "Error Reference"],
  ["reference/", "Reference"],
  ["tutorial/", "Tutorials"],
  ["tutorials/", "Tutorials"]
];
function getPageCategory(url) {
  const langAgnosticPath = url.pathname.replace(/\/\w\w(-\w\w)?\//, "");
  for (const [path, label] of categories) {
    if (langAgnosticPath.startsWith(path)) return label;
  }
  return defaultCategory;
}

const $$Astro$m = createAstro("https://docs.astro.build/");
const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  const { entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">
	${renderSlot($$result, $$slots["default"])}

	${entry.data.type === "backend" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("backend.navTitle")}</h2>
				${renderComponent($$result2, "BackendGuidesNav", $$BackendGuidesNav, { "minimal": true })}
			` })}`}
	${entry.data.type === "cms" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("cms.navTitle")}</h2>
				${renderComponent($$result2, "CMSGuidesNav", $$CMSGuidesNav, { "minimal": true })}
			` })}`}
	${entry.data.type === "deploy" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("deploy.altSectionTitle")}</h2>
				${renderComponent($$result2, "DeployGuidesNav", $$DeployGuidesNav, { "minimal": true })}
			` })}`}
	${entry.data.type === "media" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("media.navTitle")}</h2>
				${renderComponent($$result2, "MediaGuidesNav", $$MediaGuidesNav, { "minimal": true })}
			` })}`}
	${entry.data.type === "integration" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("integrations.more")}</h2>
				${renderComponent($$result2, "IntegrationsNav", $$IntegrationsNav, {})}
			` })}`}
	${entry.data.type === "migration" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
				<h2>${Astro2.locals.t("migration.navTitle")}</h2>
				${renderComponent($$result2, "MigrationGuidesNav", $$MigrationGuidesNav, { "minimal": true })}
			` })}`}
	<span id="docsearch-lvl0" hidden>${getPageCategory(Astro2.url)}</span>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/MarkdownContent.astro", void 0);

const $$Astro$l = createAstro("https://docs.astro.build/");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-h7vcqtge" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-h7vcqtge">
		${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-menu astro-h7vcqtge" })}
		${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-menu astro-h7vcqtge" })}
	</button>
` })}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$k = createAstro("https://docs.astro.build/");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-o3mntz72">
	<header class="header astro-o3mntz72">${renderSlot($$result, $$slots["header"])}</header>
	${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-o3mntz72"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}>
				${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-o3mntz72" })}
				<div id="starlight__sidebar" class="sidebar-pane astro-o3mntz72">
					<div class="sidebar-content sl-flex astro-o3mntz72">
						${renderSlot($$result, $$slots["sidebar"])}
					</div>
				</div>
			</nav>`}
	<div class="main-frame astro-o3mntz72">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$j = createAstro("https://docs.astro.build/");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-6nfxqshq"], "class:list")}${addAttribute($$definedVars, "style")}>
	${toc.map((heading) => renderTemplate`<li class="astro-6nfxqshq"${addAttribute($$definedVars, "style")}>
				<a${addAttribute("#" + heading.slug, "href")} class="astro-6nfxqshq"${addAttribute($$definedVars, "style")}>
					<span class="astro-6nfxqshq"${addAttribute($$definedVars, "style")}>${heading.text}</span>
				</a>
				${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-6nfxqshq" })}`}
			</li>`)}
</ul>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$i = createAstro("https://docs.astro.build/");
const $$TabListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$TabListItem;
  const { id, initial } = Astro2.props;
  const linkAttributes = initial ? { "data-initial": "true", "aria-selected": "true" } : {};
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(Astro2.props.class, "class:list")}>
	<a${addAttribute("#" + id, "href")} class="tab-link"${spreadAttributes(linkAttributes)}>
		${renderSlot($$result, $$slots["default"])}
	</a>
</li>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/TabListItem.astro", void 0);

const $$Astro$h = createAstro("https://docs.astro.build/");
const $$TabbedContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TabbedContent;
  const { tabs, styled } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "tabbed-content", "tabbed-content", { "class": "astro-6yyweqw4" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<ul${addAttribute([["tab-list", Astro2.props.class, { "tab-list--styled": styled }], "astro-6yyweqw4"], "class:list")}>
		${renderSlot($$result, $$slots["tab-list"], renderTemplate`
			${tabs?.map((tab) => renderTemplate`${renderComponent($$result, "TabListItem", $$TabListItem, { "id": tab.id, "initial": tab.initial, "class": "astro-6yyweqw4" }, { "default": ($$result2) => renderTemplate`${tab.label}` })}`)}
		`)}
	</ul>

	<div${addAttribute([["panels", Astro2.props.class, { "panels--styled": styled }], "astro-6yyweqw4"], "class:list")}>
		${renderSlot($$result, $$slots["default"])}
	</div>
` })}



${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/TabbedContent.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/TabbedContent.astro", void 0);

const $$Astro$g = createAstro("https://docs.astro.build/");
const $$TabPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TabPanel;
  const { id, initial } = Astro2.props;
  const attributes = initial ? { "data-initial": "true" } : {};
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${spreadAttributes(attributes, void 0, { "class": "astro-s7ttdo4b" })}>
	${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tabs/TabPanel.astro", void 0);

const $$Astro$f = createAstro("https://docs.astro.build/");
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Progress;
  const { path, index } = Astro2.props;
  const todoLabel = Astro2.locals.t("progress.todo");
  const doneLabel = Astro2.locals.t("progress.done");
  return renderTemplate`${renderComponent($$result, "check-mark", "check-mark", { "data-path": path, "data-todo-label": todoLabel, "data-done-label": doneLabel, "class": "astro-cciwla7n" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<span class="sr-only astro-cciwla7n">${todoLabel}</span>
	<span class="circle astro-cciwla7n">
		<span class="index astro-cciwla7n">${index}</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" aria-hidden="true" style="display:none" class="astro-cciwla7n">
			<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" class="astro-cciwla7n"></path>
		</svg>
	</span>
` })}



${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/Progress.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/Progress.astro", void 0);

const degToRad = (deg) => deg / 180 * Math.PI;
function polToCar(px, py, r, angleInDegrees) {
  const angleInRadians = degToRad(angleInDegrees);
  return {
    x: px + r * Math.cos(angleInRadians),
    y: py + r * Math.sin(angleInRadians)
  };
}
function getArcString(angle, { cx, cy, r, isLargeArc }) {
  const { x, y } = polToCar(cx, cy, r, angle);
  return `A${r},${r} 0 ${isLargeArc ? "1" : "0"} 0 ${x},${y}`;
}
function SectorPath({ cx = 0, cy = 0, r, startAngle, endAngle, arc = false }) {
  startAngle = startAngle % 360;
  endAngle = endAngle % 360;
  const start = polToCar(cx, cy, r, endAngle);
  const isLargeArc = endAngle - startAngle > 180;
  const arcString = getArcString(startAngle, { cx, cy, r, isLargeArc });
  let endString = "";
  let startString = "";
  if (arc) {
    startString = `M${start.x},${start.y}`;
  } else {
    startString = `M${cx},${cy} L${start.x},${start.y}`;
    endString = "z";
  }
  const d = `${startString} ${arcString} ${endString}`;
  return d.trim();
}

const $$Astro$e = createAstro("https://docs.astro.build/");
const $$UnitProgressIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$UnitProgressIcon;
  const { unitNumber, paths } = Astro2.props;
  const numberOfLessons = paths.length;
  let segments = [];
  const segmentLength = 360 / numberOfLessons;
  const gap = 35;
  for (let i = 0; i < numberOfLessons; i++) {
    segments.push({
      d: SectorPath({
        cx: 50,
        cy: 50,
        r: 40,
        startAngle: -90 + segmentLength * i + gap / 2,
        endAngle: -90 + segmentLength * i + segmentLength - gap / 2,
        arc: true
      })
    });
  }
  const size = 32;
  return renderTemplate`${renderComponent($$result, "unit-progress-icon", "unit-progress-icon", { "data-paths": JSON.stringify(paths), "class": "astro-xpd2nvpt" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<span class="sr-only astro-xpd2nvpt">
		${Astro2.locals.t("tutorial.unit")}
		${unitNumber}
		(<span class="sr-done-count astro-xpd2nvpt">0</span>/${numberOfLessons}
		${Astro2.locals.t("progress.done")})
	</span>
	<svg viewBox="0 0 100 100"${addAttribute(size, "width")}${addAttribute(size, "height")} aria-hidden="true" class="astro-xpd2nvpt">
		${segments.map(({ d }) => renderTemplate`<path${addAttribute(d, "d")} class="segment astro-xpd2nvpt"></path>`)}
		<text x="50" y="54" class="astro-xpd2nvpt">${unitNumber}</text>
	</svg>
` })}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/UnitProgressIcon.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/UnitProgressIcon.astro", void 0);

const $$Astro$d = createAstro("https://docs.astro.build/");
const $$TutorialNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TutorialNav;
  const currentUrl = Astro2.url.pathname.replace(/\/$/, "");
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const tutorialPages$1 = getTutorialPages(tutorialPages, lang);
  const units = getTutorialUnits(tutorialPages$1);
  const makeUnitId = (index) => `${Astro2.locals.starlightRoute.id}__tutorial-unit-nav-panel-${index}`;
  const isCurrentUnit = (unit) => unit.lessons.some((lesson) => currentUrl.endsWith(stripLangFromSlug(lesson.id)));
  return renderTemplate`${maybeRenderHead()}<div class="tutorial-nav astro-kht4synq">
	${renderComponent($$result, "TabbedContent", $$TabbedContent, { "styled": true, "class": "astro-kht4synq" }, { "default": async ($$result2) => renderTemplate`
		
		${units.map((unit, idx) => renderTemplate`${renderComponent($$result2, "TabPanel", $$TabPanel, { "id": makeUnitId(idx), "initial": isCurrentUnit(unit), "class": "astro-kht4synq" }, { "default": async ($$result3) => renderTemplate`
					<div class="unit astro-kht4synq">
						<h2 class="heading astro-kht4synq">${unit.title}</h2>
						<ol class="lessons astro-kht4synq">
							${unit.lessons.map(async (lesson, index) => {
    const slugWithoutLang = stripLangFromSlug(lesson.id);
    return renderTemplate`<li class="astro-kht4synq">
										<div class="astro-kht4synq">
											<a class="header-link astro-kht4synq"${addAttribute(`/${lang}/${slugWithoutLang}/`, "href")}${addAttribute(currentUrl.endsWith(slugWithoutLang), "aria-current")}>
												${renderComponent($$result3, "Progress", $$Progress, { "index": index, "path": "/" + lesson.id, "class": "astro-kht4synq" })}
												${lesson.data.title}
											</a>
										</div>
										${currentUrl.endsWith(lesson.id) && renderTemplate`<ul class="on-this-page astro-kht4synq">
												${(await renderEntry(lesson)).headings.filter(({ depth }) => depth <= 2).map((h) => renderTemplate`<li class="astro-kht4synq">
															<a class="header-link astro-kht4synq"${addAttribute("#" + h.slug, "href")}>
																${h.text}
															</a>
														</li>`)}
											</ul>`}
									</li>`;
  })}
						</ol>
					</div>
				` })}`)}`, "tab-list": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "tab-list" }, { "default": async ($$result3) => renderTemplate`${units.map((unit, idx) => renderTemplate`${renderComponent($$result3, "TabListItem", $$TabListItem, { "id": makeUnitId(idx), "initial": isCurrentUnit(unit), "class": "tutorial-tab astro-kht4synq" }, { "default": async ($$result4) => renderTemplate`
						${renderComponent($$result4, "UnitProgressIcon", $$UnitProgressIcon, { "unitNumber": idx, "paths": unit.lessons.map((l) => "/" + l.id), "class": "astro-kht4synq" })}
					` })}`)}` })}` })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/TutorialNav.astro", void 0);

const $$Astro$c = createAstro("https://docs.astro.build/");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { entry, toc } = Astro2.locals.starlightRoute;
  const isTutorial = entry.id.split("/")[1] === "tutorial";
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-yitqccco" }, { "default": () => renderTemplate`
			${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-yitqccco">
				<details id="starlight__mobile-toc" class="astro-yitqccco">
					<summary id="starlight__on-this-page--mobile" class="sl-flex astro-yitqccco">
						<div class="toggle sl-flex astro-yitqccco">
							${isTutorial ? Astro2.locals.t("tutorial.trackerLabel") : Astro2.locals.t("tableOfContents.onThisPage")}
							${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-yitqccco", "size": "1rem" })}
						</div>
						<span class="display-current astro-yitqccco"></span>
					</summary>
					<div class="dropdown astro-yitqccco">
						${isTutorial ? renderTemplate`${renderComponent($$result, "TutorialNav", $$TutorialNav, { "id": "mobile", "class": "astro-yitqccco" })}` : renderTemplate`${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-yitqccco" })}`}
					</div>
				</details>
			</nav>
		` })}`}



${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/MobileTableOfContents.astro", void 0);

const $$Astro$b = createAstro("https://docs.astro.build/");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { entry, toc } = Astro2.locals.starlightRoute;
  const isTutorial = entry.id.split("/")[1] === "tutorial";
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`
			${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page">
				<h2 id="starlight__on-this-page">
					${isTutorial ? Astro2.locals.t("tutorial.trackerLabel") : Astro2.locals.t("tableOfContents.onThisPage")}
				</h2>
				${isTutorial ? renderTemplate`${renderComponent($$result, "TutorialNav", $$TutorialNav, {})}` : renderTemplate`${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}`}
			</nav>
		` })}`}

${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/TableOfContents.astro", void 0);

const $$Astro$a = createAstro("https://docs.astro.build/");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  const Banner = $$RandomizedAd;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-evux67hy" }, { "default": ($$result2) => renderTemplate`
			${maybeRenderHead()}<div class="lg:sl-hidden astro-evux67hy">
				${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-evux67hy" })}
			</div>
			<div class="right-sidebar-panel sl-hidden lg:sl-block astro-evux67hy">
				<div class="sl-container astro-evux67hy">
					${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-evux67hy" })}
				</div>
				<div class="sl-container astro-evux67hy">
					${renderComponent($$result2, "Banner", Banner, { "class": "astro-evux67hy" })}
				</div>
			</div>
		` })}`}

`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/PageSidebar.astro", void 0);

const $$Astro$9 = createAstro("https://docs.astro.build/");
const $$PageTitle$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageTitle$1;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-xegkot7c">${Astro2.locals.starlightRoute.entry.data.title}</h1>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$Astro$8 = createAstro("https://docs.astro.build/");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const { data } = Astro2.locals.starlightRoute.entry;
  return renderTemplate`${data.type === "integration" ? renderTemplate`${maybeRenderHead()}<div class="wrapper astro-nabvmdom">
			<h1 id="_top" class="astro-nabvmdom">
				${renderComponent($$result, "Fragment", Fragment, { "class": "astro-nabvmdom" }, { "default": ($$result2) => renderTemplate`
					<span class="scope astro-nabvmdom">@astrojs/</span>
					<span class="astro-nabvmdom">${data.title.replace("@astrojs/", "")}</span>
				` })}
			</h1>
			<div class="integration-metadata astro-nabvmdom">
				${renderComponent($$result, "Version", $$Version, { "pkgName": data.title, "class": "astro-nabvmdom" })}
				<a${addAttribute(data.githubIntegrationURL, "href")} class="astro-nabvmdom">
					${renderComponent($$result, "Icon", $$Icon, { "size": "1rem", "name": "github", "class": "astro-nabvmdom" })} GitHub
				</a>
				<a${addAttribute("https://www.npmjs.com/package/" + data.title, "href")} class="astro-nabvmdom">
					<svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor" aria-hidden="true" class="astro-nabvmdom">
						<path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" class="astro-nabvmdom"></path>
					</svg>
					npm
				</a>
				<a${addAttribute(data.githubIntegrationURL + "CHANGELOG.md", "href")} class="astro-nabvmdom">
					${renderComponent($$result, "Icon", $$Icon, { "size": "1rem", "name": "list-format", "class": "astro-nabvmdom" })} ${Astro2.locals.t("integrations.changelog")}
				</a>
			</div>
		</div>` : renderTemplate`${renderComponent($$result, "Default", $$PageTitle$1, { "class": "astro-nabvmdom" }, { "default": ($$result2) => renderTemplate`
			${renderSlot($$result2, $$slots["default"])}
		` })}`}

`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/PageTitle.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro("https://docs.astro.build/");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-ykslxb7s" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([`
	<script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script>

	`, `

	<script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script>
`])), renderSlot($$result, $$slots["default"])) })}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$6 = createAstro("https://docs.astro.build/");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$5 = createAstro("https://docs.astro.build/");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-azjwsgez"], "class:list")}>
	${sublist.map((entry) => renderTemplate`<li class="astro-azjwsgez">
				${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-azjwsgez"], "class:list")}${spreadAttributes(entry.attrs)}>
						<span class="astro-azjwsgez">${entry.label}</span>
						${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-azjwsgez", "text": entry.badge.text })}`}
					</a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-azjwsgez">
						${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-azjwsgez" })}
						<summary class="astro-azjwsgez">
							<div class="group-label astro-azjwsgez">
								<span class="large astro-azjwsgez">${entry.label}</span>
								${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-azjwsgez", "text": entry.badge.text })}`}
							</div>
							${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-azjwsgez", "size": "1.25rem" })}
						</summary>
						${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-azjwsgez" })}
					</details>`}
			</li>`)}
</ul>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const categoryParents = {
  "Error Reference": "reference/error-reference",
  Tutorials: "tutorial/0-introduction"
};
function isSubPage(currentPage, parentSlug) {
  const category = getPageCategory({ pathname: "/" + currentPage + "/" });
  return categoryParents[category] === parentSlug;
}

const $$Astro$4 = createAstro("https://docs.astro.build/");
const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sponsors;
  return renderTemplate`${maybeRenderHead()}<div dir="ltr" lang="en" class="sponsors astro-kwmzlgva">
	<h2 class="sponsors-title astro-kwmzlgva">${Astro2.locals.t("leftSidebar.sponsoredBy")}</h2>
	<a href="https://www.netlify.com/?utm_campaign=Astro-2024&utm_source=astro-referral" aria-label="Netlify" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 256 105" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#32E6E2" d="M58.5 103.8V77.4l.5-.5h6.6l.6.5v26.4l-.6.5H59l-.5-.5Zm0-76.9V.5L59 0h6.6l.6.5V27l-.6.5H59l-.5-.5ZM35.8 85.2h-1l-4.4-4.5v-.9l8.5-8.5h4.7l.7.6v4.8l-8.5 8.5Zm-5.4-60.5v-.9l4.5-4.5h.9l8.5 8.5v4.8l-.7.6H39l-8.5-8.5ZM.5 48.3H38l.5.6v6.6l-.5.5H.5l-.5-.5v-6.6l.5-.6Zm255 0 .5.6v6.6l-.6.5h-37.8l-.6-.5 2.8-6.6.5-.6h35.1Z" class="astro-kwmzlgva"></path>
			<path d="M74.7 65.9H68l-.6-.6V50c0-2.7-1-4.9-4.4-5-1.7 0-3.6 0-5.7.2l-.3.3v20l-.6.5H50l-.6-.6V39l.6-.6h14.8c5.7 0 10.4 4.7 10.4 10.5v16.4l-.5.6Zm31.9-11.6-.6.6H89l-.6.5c0 1.1 1.1 4.4 5.5 4.4 1.7 0 3.3-.5 3.9-1.6l.5-.6h6.6l.6.6c-.6 3.3-3.3 8.2-11.6 8.2-9.3 0-13.7-6.6-13.7-14.3S84.6 38 93.4 38s13.2 6.6 13.2 14.2v2.2ZM98.3 49c0-.6-.5-4.4-5-4.4s-4.9 3.8-4.9 4.4l.6.5h8.8l.5-.5Zm23.7 8.7c0 1.1.5 1.7 1.6 1.7h5l.5.5v5.5l-.6.6h-4.9c-5 0-9.3-2.2-9.3-8.3v-12l-.6-.6H110l-.6-.5V39l.6-.6h3.8l.6-.5v-5l.5-.5h6.6l.5.5v5l.6.5h6l.6.6v5.5l-.6.5h-6l-.6.6v12Zm20.3 8.3h-6.6l-.6-.6V28l.6-.6h6.6l.5.6v37.3l-.5.6ZM157 34h-6.6l-.5-.5V28l.5-.6h6.6l.6.6v5.5l-.6.5Zm0 31.9h-6.6l-.5-.6V39l.5-.6h6.6l.6.6v26.3l-.6.6Zm25.8-38v5.6l-.5.5h-5c-1 0-1.6.6-1.6 1.7v2.2l.5.5h5.5l.6.6v5.5l-.6.5h-5.5l-.5.6v19.7l-.6.6h-6.5l-.6-.6V45.5l-.5-.5h-3.9l-.5-.5V39l.5-.6h3.9l.5-.5v-2.2c0-6 4.4-8.3 9.4-8.3h4.9l.5.6Zm20.3 38.5c-2.2 5.5-4.3 8.8-12 8.8h-2.8l-.5-.5v-5.5l.5-.6h2.8c2.7 0 3.3-.5 3.8-2.2V66l-8.8-21.4V39l.6-.6h5l.5.6 6.5 18.7h.6L206 39l.5-.6h5l.5.6v5.5l-8.8 22Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://sentry.io/welcome/?utm_medium=partner&utm_source=astro&utm_campaign=astro-docs" aria-label="Sentry" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 44" width="96" aria-hidden="true" class="astro-kwmzlgva">
			<path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" fill="currentColor" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://idx.dev/?utm_source=astro&utm_medium=astro&utm_campaign=astro" aria-label="Project IDX" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 52" width="125" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#8964E8" d="M23.39 44.18H4.19a3.6 3.6 0 0 0 0 7.2h19.2a3.6 3.6 0 0 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#17B877" d="M30.58 33.38h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 0 0 0-7.2Zm-14.38 0h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#FFA23E" d="M29.38 22.59h-8.4a3.6 3.6 0 1 0 0 7.2h8.4a3.6 3.6 0 1 0 0-7.2Zm14.4 3.59a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#25A6E9" d="M31.78 11.8H12.6a3.6 3.6 0 1 0 0 7.19h19.2a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#8964E8" d="M23.39 1h-8.4a3.6 3.6 0 0 0 0 7.2h8.4a3.6 3.6 0 0 0 0-7.2ZM7.8 4.6a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#currentColor" d="M66.5 36.08V15.47h7.08c1.25 0 2.38.27 3.4.8a5.99 5.99 0 0 1 2.42 2.22c.61.94.92 2.04.92 3.28a6.2 6.2 0 0 1-3.34 5.53 7.37 7.37 0 0 1-3.4.78h-3.91v8H66.5Zm3.17-11h4c.75 0 1.38-.15 1.9-.46a3.3 3.3 0 0 0 1.18-1.23c.29-.52.43-1.06.43-1.62a3.1 3.1 0 0 0-.43-1.58 3.3 3.3 0 0 0-3.08-1.73h-4v6.62Zm13.38 11V21.4h2.93v2.16h.18c.23-.5.55-.94.98-1.33.44-.38.94-.69 1.5-.92a4.76 4.76 0 0 1 2.78-.26c.3.04.55.1.78.2v3.23a7.7 7.7 0 0 0-1.12-.37 4.5 4.5 0 0 0-1.15-.15c-.73 0-1.38.2-1.96.6-.56.39-1 .9-1.32 1.56a4.82 4.82 0 0 0-.5 2.19v7.77h-3.1Zm17.59.46a7.41 7.41 0 0 1-6.7-3.83 8.12 8.12 0 0 1-.99-3.97c0-1.46.33-2.77.98-3.94a7.35 7.35 0 0 1 6.71-3.86c1.5 0 2.82.35 3.97 1.06a7.4 7.4 0 0 1 2.7 2.8c.66 1.17.99 2.48.99 3.94s-.33 2.78-.98 3.97a7.4 7.4 0 0 1-6.68 3.83Zm0-2.85c.8 0 1.55-.2 2.25-.57.69-.4 1.24-.97 1.67-1.7a5.2 5.2 0 0 0 .66-2.68c0-1.04-.22-1.92-.66-2.65a4.31 4.31 0 0 0-1.67-1.7 4.53 4.53 0 0 0-6.22 1.7 5.2 5.2 0 0 0-.64 2.65 4.67 4.67 0 0 0 2.36 4.38 4.7 4.7 0 0 0 2.25.57Zm9.37 8.9a9.4 9.4 0 0 1-1.61-.2v-3a3.34 3.34 0 0 0 1.35.38c.54 0 .92-.18 1.16-.52.23-.33.34-.8.34-1.44V21.4h3.1v16.44c0 1.13-.18 2.04-.57 2.73-.36.7-.87 1.2-1.52 1.53-.66.32-1.4.49-2.25.49Zm2.8-23.35a2.1 2.1 0 0 1-1.5-.6 2.1 2.1 0 0 1-.6-1.5c0-.6.2-1.09.6-1.47.42-.4.92-.6 1.5-.6.59 0 1.09.2 1.5.6.4.38.6.87.6 1.47 0 .57-.2 1.07-.6 1.5-.41.4-.91.6-1.5.6Zm11.97 17.3a7.27 7.27 0 0 1-6.54-3.77 8.28 8.28 0 0 1-.94-4c0-1.4.3-2.7.92-3.89a7.35 7.35 0 0 1 2.56-2.85 6.83 6.83 0 0 1 3.83-1.1c1.52 0 2.8.33 3.86.99a6.35 6.35 0 0 1 2.45 2.67 8.57 8.57 0 0 1 .77 4.81h-11.34c.08.8.28 1.5.6 2.1a4.3 4.3 0 0 0 3.92 2.28c.98 0 1.8-.22 2.45-.66a5.12 5.12 0 0 0 1.58-1.7l2.56 1.24a7.95 7.95 0 0 1-2.59 2.82 7.36 7.36 0 0 1-4.09 1.06Zm-4.26-9.47h8.15a3.37 3.37 0 0 0-.29-1.15 3.7 3.7 0 0 0-1.98-1.99 4.15 4.15 0 0 0-1.76-.34c-.84 0-1.6.22-2.25.66a4.22 4.22 0 0 0-1.52 1.78c-.16.33-.27.68-.35 1.04Zm21.05 9.47a7.26 7.26 0 0 1-6.62-3.77 8.45 8.45 0 0 1-.95-4.03c0-1.5.31-2.83.95-4a7.26 7.26 0 0 1 2.68-2.77 7.52 7.52 0 0 1 3.94-1.03c1.63 0 3 .36 4.12 1.1A6.02 6.02 0 0 1 148.1 25l-2.82 1.15a3.68 3.68 0 0 0-1.5-1.76c-.63-.4-1.39-.6-2.27-.6a4.43 4.43 0 0 0-3.83 2.33c-.4.73-.6 1.6-.6 2.62 0 1 .2 1.87.6 2.62a4.23 4.23 0 0 0 3.83 2.33 4.3 4.3 0 0 0 2.4-.63 4.23 4.23 0 0 0 1.52-1.79l2.76 1.21a7 7 0 0 1-6.62 4.06Zm8.14-15.14h2.56v-4.15h3.1v4.15h3.6v2.7h-3.6v7.06c0 .73.15 1.28.44 1.67.3.38.82.57 1.53.57.34 0 .65-.04.92-.14.27-.12.53-.25.8-.4v3.02a5.93 5.93 0 0 1-2.33.43c-1.36 0-2.44-.4-3.25-1.18-.8-.8-1.21-1.9-1.21-3.31v-7.71h-2.56V21.4Zm19.49 14.68V15.47h3.16v20.61h-3.16Zm7.84 0V15.47h6.6c2.16 0 4.02.44 5.58 1.32a8.92 8.92 0 0 1 3.63 3.63c.86 1.55 1.3 3.34 1.3 5.35 0 2.02-.44 3.8-1.3 5.36a9.1 9.1 0 0 1-3.63 3.66 11.4 11.4 0 0 1-5.59 1.3h-6.59Zm3.17-3h3.34c1.55 0 2.88-.28 4-.86a5.98 5.98 0 0 0 2.53-2.53c.58-1.1.86-2.4.86-3.92 0-1.51-.28-2.82-.86-3.91a5.81 5.81 0 0 0-2.53-2.5 8.38 8.38 0 0 0-4-.9h-3.34V33.1Zm15.63-17.61h3.9l4.57 7.4h.17l4.6-7.4h3.86l-6.41 9.9 6.88 10.71h-3.86l-5.07-8.03h-.17l-5.07 8.03h-3.86l6.88-10.7-6.41-9.91Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/LeftSidebar/Sponsors.astro", void 0);

const $$MobileMenuFooter$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-a5xzkh6j">
	<div class="social-icons astro-a5xzkh6j">
		${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-a5xzkh6j" })}
	</div>
	${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-a5xzkh6j" })}
	${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-a5xzkh6j" })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-flex astro-mkinwl4g">
	${renderComponent($$result, "Sponsors", $$Sponsors, { "class": "astro-mkinwl4g" })}
	${renderComponent($$result, "Default", $$MobileMenuFooter$1, { "class": "astro-mkinwl4g" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/MobileMenuFooter.astro", void 0);

const $$Astro$3 = createAstro("https://docs.astro.build/");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar, id } = Astro2.locals.starlightRoute;
  function markEntries(i) {
    if (i.type === "group") {
      i.entries.forEach(markEntries);
    } else {
      const itemSlug = stripLeadingAndTrailingSlashes(i.href);
      const itemSlugWithoutLang = stripLangFromSlug(itemSlug);
      const isFallback = !allPages.some((entry) => entry.id === itemSlug);
      if (isFallback) i.attrs.class = "fallback";
      i.isCurrent ||= isSubPage(id, itemSlugWithoutLang);
    }
  }
  sidebar.forEach(markEntries);
  function assertGroups(sidebar2) {
    for (const entry of sidebar2) {
      if (entry.type !== "group") {
        throw new Error("Top-level links are not permitted in the docs sidebar.");
      }
    }
  }
  assertGroups(sidebar);
  const makeId = (label) => "__tab-" + label.toLowerCase().replaceAll(/\s+/g, "-");
  const getIcon = (index) => ["rocket", "open-book", "information", "puzzle", "setting"][index];
  const isCurrent = (sidebar2) => sidebar2.map((entry) => entry.type === "link" ? entry.isCurrent : isCurrent(entry.entries)).some((entry) => entry === true);
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, { "class": "astro-3x5efdbn" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "TabbedContent", $$TabbedContent, { "class": "tabbed-sidebar astro-3x5efdbn" }, { "default": ($$result3) => renderTemplate`
		
		${sidebar.map(({ label, entries }) => renderTemplate`${renderComponent($$result3, "TabPanel", $$TabPanel, { "id": makeId(label), "initial": isCurrent(entries), "class": "astro-3x5efdbn" }, { "default": ($$result4) => renderTemplate`
					${renderComponent($$result4, "SidebarSublist", $$SidebarSublist, { "sublist": entries, "class": "astro-3x5efdbn" })}
				` })}`)}`, "tab-list": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "tab-list" }, { "default": ($$result4) => renderTemplate`${sidebar.map(({ label, entries }, index) => renderTemplate`${renderComponent($$result4, "TabListItem", $$TabListItem, { "id": makeId(label), "initial": isCurrent(entries), "class": "tab-item astro-3x5efdbn" }, { "default": ($$result5) => renderTemplate`
						${renderComponent($$result5, "Icon", $$Icon, { "class": "icon astro-3x5efdbn", "name": getIcon(index) })} ${label}` })}`)}` })}` })}
` })}

${maybeRenderHead()}<div class="md:sl-hidden astro-3x5efdbn">
	${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, { "class": "astro-3x5efdbn" })}
</div>

<div class="desktop-footer sl-hidden md:sl-block astro-3x5efdbn">
	${renderComponent($$result, "Sponsors", $$Sponsors, { "class": "astro-3x5efdbn" })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/starlight/Sidebar.astro", void 0);

const $$Astro$2 = createAstro("https://docs.astro.build/");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-a7lusixd">${Astro2.locals.t("skipLink.label")}</a>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["\n<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script>\n\n<template id=\"theme-icons\">\n	", "\n	", "\n	", "\n</template>"], ["\n<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script>\n\n<template id=\"theme-icons\">\n	", "\n	", "\n	", "\n</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://docs.astro.build/");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-2mqksoqo">
	${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-2mqksoqo">
				<div class="right-sidebar astro-2mqksoqo">
					${renderSlot($$result, $$slots["right-sidebar"])}
				</div>
			</aside>`}
	<div class="main-pane astro-2mqksoqo">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro = createAstro("https://docs.astro.build/");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-fakna7q3" })}>
	<head>
		${renderComponent($$result, "Head", $$Head, { "class": "astro-fakna7q3" })}
		
		${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-fakna7q3" })}
		<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">
	${renderHead()}</head>
	<body class="astro-fakna7q3">
		${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-fakna7q3" })}
		${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-fakna7q3" }, { "default": ($$result2) => renderTemplate`
			
			${renderScript($$result2, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")}
			${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-fakna7q3" }, { "default": ($$result3) => renderTemplate`
				
				<main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-fakna7q3" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>
					
					${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-fakna7q3" })}
					${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-fakna7q3" }, { "default": ($$result4) => renderTemplate`
								${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-fakna7q3" })}
								${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-fakna7q3" }, { "default": ($$result5) => renderTemplate`
									${renderSlot($$result5, $$slots["default"])}
								` })}
								${renderComponent($$result4, "Footer", $$Footer, { "class": "astro-fakna7q3" })}
							` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-fakna7q3" }, { "default": ($$result4) => renderTemplate`
								${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-fakna7q3" }, { "default": ($$result5) => renderTemplate`
									${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-fakna7q3" })}
									${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-fakna7q3" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-fakna7q3" })}`}` })}
								${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-fakna7q3" }, { "default": ($$result5) => renderTemplate`
									${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-fakna7q3" }, { "default": ($$result6) => renderTemplate`
										${renderSlot($$result6, $$slots["default"])}
									` })}
									${renderComponent($$result5, "Footer", $$Footer, { "class": "astro-fakna7q3" })}
								` })}
							` })}`}
				</main>
			`, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-fakna7q3" })}` })}
		`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-fakna7q3" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-fakna7q3" })}`}` })}
	</body></html>`;
}, "/Users/chasepursley/Development/ai/star-support/node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/components/Page.astro", void 0);

export { $$Page as $, getSidebar as a, getSiteTitle as b, getToC as c, getSiteTitleHref as d, getPrevNextLinks as e, getHead as f, getSidebarFromConfig as g, attachRouteDataAndRunMiddleware as h, getRoute as i, useRouteData as j, slugToLocale$1 as k, paths as p, slugToLocaleData as s, urlToSlug as u };
