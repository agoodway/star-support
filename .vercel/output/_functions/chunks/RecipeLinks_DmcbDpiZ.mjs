import { c as createComponent, E as createAstro, G as maybeRenderHead, H as addAttribute, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { r as recipePages } from './content_DZ93dYAP.mjs';
import { g as getLanguageFromURL, s as stripLangFromSlug } from './path-utils_B_P5Ub86.mjs';
/* empty css                                                                   */

const $$Astro = createAstro("https://docs.astro.build/");
const $$RecipeLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecipeLinks;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const fallbackSlug = (slug) => "en/" + stripLangFromSlug(slug);
  const recipes = Astro2.props.slugs.map((slug) => {
    let isFallback = lang !== "en" && slug.startsWith("en/");
    let entry = recipePages.find((recipe) => recipe.id === slug);
    if (!entry) {
      isFallback = true;
      entry = recipePages.find((recipe) => recipe.id === fallbackSlug(slug));
    }
    if (!entry) {
      throw new Error(`Could not find entry for slug "${slug}"`);
    }
    return { slug, isFallback, title: entry.data.title, altTitle: entry.data.altTitle };
  });
  const isList = recipes.length > 1;
  const labelKey = isList ? "recipesLink.plural" : "recipesLink.singular";
  const firstRecipe = recipes[0];
  if (!firstRecipe) {
    throw new Error("No slugs passed to `<RecipeLinks>` component. Make sure you pass at least one.");
  }
  return renderTemplate`${maybeRenderHead()}<div class="root astro-u7553m4s">
	<div class="flex astro-u7553m4s">
		<img src="/houston_chef.webp" width="24" alt="" class="astro-u7553m4s">
		<strong class="astro-u7553m4s">${Astro2.locals.t(labelKey)}</strong>
		${!isList && renderTemplate`<a${addAttribute(`/${firstRecipe.slug}/`, "href")} class="astro-u7553m4s">
					${firstRecipe.altTitle ?? firstRecipe.title} ${firstRecipe.isFallback && "(EN)"}
				</a>`}
	</div>
	${isList && renderTemplate`<ul class="astro-u7553m4s">
				${recipes.map((recipe) => renderTemplate`<li class="astro-u7553m4s">
						<a${addAttribute(`/${recipe.slug}/`, "href")} class="astro-u7553m4s">
							${recipe.altTitle ?? recipe.title} ${recipe.isFallback && "(EN)"}
						</a>
					</li>`)}
			</ul>`}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/RecipeLinks.astro", void 0);

export { $$RecipeLinks as $ };
