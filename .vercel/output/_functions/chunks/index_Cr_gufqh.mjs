import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, a as renderTemplate, d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { r as recipePages, h as createIsLangEntry, j as isEnglishEntry } from './content_DZ93dYAP.mjs';
import { g as getLanguageFromURL, s as stripLangFromSlug } from './path-utils_B_P5Ub86.mjs';
import { $ as $$CardsNav } from './CardsNav_BoujZodt.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$RecipesNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecipesNav;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const langRecipes = recipePages.filter(createIsLangEntry(lang));
  const englishRecipes = recipePages.filter(isEnglishEntry);
  const recipes = englishRecipes.map((fallback) => {
    const slug = stripLangFromSlug(fallback.id);
    const translation = langRecipes.find((doc) => stripLangFromSlug(doc.id) === slug);
    return translation || fallback;
  });
  return renderTemplate`${maybeRenderHead()}<div>
	${renderComponent($$result, "CardsNav", $$CardsNav, { "links": recipes.map(({ data, id }) => {
    const linkLang = id.split("/").shift();
    return {
      title: data.altTitle ?? data.title,
      description: data.description,
      // Fallback entries will have a slug starting with 'en/',
      // so we replace that to link to the correct language.
      href: "/" + id.replace("en/", `${lang}/`) + "/",
      // Fallback content will be in English, unlike the page,
      // so we set an explicit `lang="en"` for these entries.
      lang: linkLang !== lang ? linkLang : void 0
    };
  }) })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/RecipesNav.astro", void 0);

const frontmatter = {
  "title": "Astro recipes",
  "sidebar": {
    "label": "Recipes overview"
  },
  "description": "Short, focused how-to guides.",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "official-recipes",
    "text": "Official Recipes"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>See guided examples of adding features to your Astro project.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"official-recipes\">Official Recipes</h2><a class=\"sl-anchor-link\" href=\"#official-recipes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Official Recipes”</span></a></div>\n<p>Astro’s official recipes are short, focused how-to guides that walk a reader through completing a working example of a specific task. Recipes are a great way to add new features or behavior to your Astro project by following step-by-step instructions!</p>\n"
    }), createVNode($$RecipesNav, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"community-resources\">Community Resources</h2><a class=\"sl-anchor-link\" href=\"#community-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Community Resources”</span></a></div>\n"
    }), createVNode($$ReadMore, {
      "set:html": "Find more recipes written and submitted by the community at <a href=\"https://astro-tips.dev\">Astro Tips</a>."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/en/recipes/index.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
