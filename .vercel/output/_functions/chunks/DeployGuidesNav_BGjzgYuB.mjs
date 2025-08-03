import { c as createComponent, E as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { g as getLanguageFromURL } from './path-utils_B_P5Ub86.mjs';
import { $ as $$CardsNav } from './CardsNav_BoujZodt.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$DeployGuidesNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DeployGuidesNav;
  const { minimal } = Astro2.props;
  const lang = getLanguageFromURL(Astro2.url.pathname);
  const services = [
    { title: "Netlify", slug: "netlify", supports: ["ssr", "static"] },
    { title: "Vercel", slug: "vercel", supports: ["ssr", "static"] },
    { title: "Deno Deploy", slug: "deno", supports: ["ssr", "static"] },
    { title: "GitHub Pages", slug: "github", supports: ["static"] },
    { title: "GitLab Pages", slug: "gitlab", supports: ["static"] },
    { title: "Cloudflare Pages", slug: "cloudflare", supports: ["ssr", "static"] },
    { title: "AWS", slug: "aws", supports: ["ssr", "static"] },
    { title: "AWS via Flightcontrol", slug: "flightcontrol", supports: ["ssr", "static"] },
    { title: "AWS via SST", slug: "sst", supports: ["ssr", "static"] },
    { title: "Clever Cloud", slug: "clever-cloud", supports: ["ssr", "static"] },
    { title: "Azion", slug: "azion", supports: ["ssr", "static"] },
    { title: "Google Cloud", slug: "google-cloud", supports: ["ssr", "static"] },
    { title: "Google Firebase", slug: "google-firebase", supports: ["ssr", "static"] },
    { title: "Heroku", slug: "heroku", supports: ["static"] },
    { title: "Microsoft Azure", slug: "microsoft-azure", supports: ["static"] },
    { title: "Buddy", slug: "buddy", supports: ["static"] },
    { title: "Fleek", slug: "fleek", supports: ["static"] },
    { title: "Fly.io", slug: "flyio", supports: ["ssr", "static"] },
    { title: "Render", slug: "render", supports: ["static"] },
    { title: "Stormkit", slug: "stormkit", supports: ["static"] },
    { title: "Surge", slug: "surge", supports: ["static"] },
    { title: "Cleavr", slug: "cleavr", supports: ["ssr", "static"] },
    { title: "Kinsta", slug: "kinsta", supports: ["ssr", "static"] },
    { title: "Zeabur", slug: "zeabur", supports: ["ssr", "static"] },
    { title: "Zerops", slug: "zerops", supports: ["ssr", "static"] },
    { title: "CloudRay", slug: "cloudray", supports: ["static"] }
  ];
  return renderTemplate`${renderComponent($$result, "CardsNav", $$CardsNav, { "minimal": minimal, "links": services.map(({ title, slug, supports }) => ({
    title,
    href: `/${lang}/guides/deploy/${slug}/`,
    logo: slug,
    tags: Object.fromEntries(supports.map((s) => [s, Astro2.locals.t(`deploy.${s}Tag`)]))
  })) })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/DeployGuidesNav.astro", void 0);

export { $$DeployGuidesNav as $ };
