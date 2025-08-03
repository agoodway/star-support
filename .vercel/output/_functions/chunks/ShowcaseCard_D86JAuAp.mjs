import { c as createComponent, G as maybeRenderHead, F as renderSlot, a as renderTemplate, E as createAstro, H as addAttribute, r as renderComponent } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
/* empty css                                                                 */
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_C8dZNa5U.mjs';
/* empty css                                                                    */

const $$FluidGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="fluid-grid astro-omaix2uh">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/FluidGrid.astro", void 0);

const $$Astro = createAstro("https://docs.astro.build/");
const $$ShowcaseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShowcaseCard;
  const { href, title } = Astro2.props;
  const thumbnails = /* #__PURE__ */ Object.assign({"../assets/thumbnails/astro-chef-project.png": () => import('./astro-chef-project_CEOLS_CL.mjs'),"../assets/thumbnails/astro-decap-starter.png": () => import('./astro-decap-starter_--YzJZ97.mjs'),"../assets/thumbnails/astro-wordpress-starter.png": () => import('./astro-wordpress-starter_CYwOkueu.mjs'),"../assets/thumbnails/astros.png": () => import('./astros_BZgJs1W1.mjs'),"../assets/thumbnails/creek.png": () => import('./creek_DH7LeNI1.mjs'),"../assets/thumbnails/enhanced-astro-starter.png": () => import('./enhanced-astro-starter_7YvYjUTC.mjs'),"../assets/thumbnails/landing-page-book.png": () => import('./landing-page-book___BhIdYB.mjs'),"../assets/thumbnails/resume01.png": () => import('./resume01_DV1Q2AvK.mjs'),"../assets/thumbnails/sendit.png": () => import('./sendit_CWWoCGdP.mjs'),"../assets/thumbnails/simple-astro-blog.png": () => import('./simple-astro-blog_HTMhFcdd.mjs')

});
  const thumbnail = thumbnails[`../assets/thumbnails/${Astro2.props.thumbnail}`];
  if (!thumbnail) {
    throw new Error(`Could not resolve showcase thumbnail: ${Astro2.props.thumbnail}`);
  }
  const src = (await thumbnail()).default;
  return renderTemplate`${maybeRenderHead()}<li class="astro-cb7d7j45">
	<a class="showcase-card astro-cb7d7j45"${addAttribute(href, "href")}>
		<span class="image astro-cb7d7j45">${renderComponent($$result, "Image", $$Image, { "src": src, "alt": "", "width": "560", "class": "astro-cb7d7j45" })}</span>
		<span class="title astro-cb7d7j45">${title}</span>
	</a>
</li>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/ShowcaseCard.astro", void 0);

export { $$FluidGrid as $, $$ShowcaseCard as a };
