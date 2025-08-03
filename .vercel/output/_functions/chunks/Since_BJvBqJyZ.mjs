import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { c as cachedFetch } from './cachedFetch_Bt5PS5Mm.mjs';
import { $ as $$Badge } from './Badge_CO0sZYx-.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$Since = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Since;
  const { v, pkg = "astro" } = Astro2.props;
  const parseSemVer = (semver) => semver.split(".").map((part) => parseInt(part.replace(/[^0-9]/g, ""), 10));
  const getFeatureStatus = async (sinceVersion) => {
    const astroInfo = await cachedFetch(`https://registry.npmjs.org/${pkg}/latest`).then(
      (res) => res.json()
    );
    const latestAstroVersion = astroInfo.version;
    const [sinceMajor, sinceMinor] = parseSemVer(sinceVersion);
    const [latestMajor, latestMinor] = parseSemVer(latestAstroVersion);
    if (sinceMajor > latestMajor) {
      return "beta";
    }
    if (sinceMajor === latestMajor) {
      if (sinceMinor > latestMinor) return "beta";
      if (sinceMinor === latestMinor) return "new";
    }
    return "current";
  };
  const featureStatus = await getFeatureStatus(v);
  return renderTemplate`${maybeRenderHead()}<span>
	<strong>${Astro2.locals.t("since.addedIn")}</strong>
	<code>${pkg}@${v}</code>
	${featureStatus === "new" && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "text": Astro2.locals.t("since.new") })}`}
	${featureStatus === "beta" && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "text": Astro2.locals.t("since.beta") })}`}
</span>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Since.astro", void 0);

export { $$Since as $ };
