import { c as createComponent, E as createAstro, G as maybeRenderHead, H as addAttribute, a as renderTemplate, r as renderComponent, d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import 'kleur/colors';
import { c as cachedFetch } from './cachedFetch_Bt5PS5Mm.mjs';
/* empty css                                                                */

const printError = (e) => console.warn(`[error]  /src/util/getContributors.ts
         ${e?.message ?? e}`);
async function recursiveFetch(endpoint, page = 1) {
  try {
    const queryParam = endpoint.includes("?") ? "&" : "?";
    const pageSize = 100;
    const url = `https://api.github.com/${endpoint}${queryParam}per_page=${pageSize}&page=${page}`;
    const token = undefined                                   ;
    const res = await cachedFetch(
      url,
      {
        method: "GET",
        headers: {
          Authorization: token && `Basic ${Buffer.from(token, "binary").toString("base64")}`,
          "User-Agent": "astro-docs/1.0"
        }
      },
      { duration: "15m" }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        `Request to fetch endpoint failed. Reason: ${res.statusText}
         Message: ${data?.message}`
      );
    }
    if (data.length === pageSize) {
      const rest = await recursiveFetch(endpoint, page + 1);
      data.push(...rest);
    }
    return data;
  } catch (e) {
    printError(e);
    return [];
  }
}
async function getAllContributors(repo) {
  const endpoint = `repos/${repo}/contributors`;
  const contributors = await recursiveFetch(endpoint);
  return contributors;
}

const $$Astro$1 = createAstro("https://docs.astro.build/");
const $$FacePile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FacePile;
  const { contributors } = Astro2.props;
  return renderTemplate`<!-- Thanks to @5t3ph for https://smolcss.dev/#smol-avatar-list! -->${maybeRenderHead()}<div class="astro-4mviunox">
	<ul class="avatar-list astro-4mviunox">
		${contributors.map((item) => renderTemplate`<li class="astro-4mviunox">
					<a${addAttribute(`https://github.com/${item.login}`, "href")} class="astro-4mviunox">
						<img${addAttribute(item.login, "alt")}${addAttribute(item.login, "title")} width="3rem" height="3rem"${addAttribute(`https://avatars.githubusercontent.com/u/${item.id}?s=64`, "src")} loading="lazy" class="astro-4mviunox">
					</a>
				</li>`)}
	</ul>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/FacePile.astro", void 0);

const $$Astro = createAstro("https://docs.astro.build/");
const $$ContributorList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContributorList;
  const { githubRepo = "withastro/docs" } = Astro2.props;
  const contributors = await getAllContributors(githubRepo);
  return renderTemplate`${renderComponent($$result, "FacePile", $$FacePile, { "contributors": contributors })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/ContributorList.astro", void 0);

const frontmatter = {
  "title": "Contribute to Astro",
  "description": "How to get involved and contribute to Astro.",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ways-to-contribute",
    "text": "Ways to Contribute"
  }, {
    "depth": 3,
    "slug": "project-repositories",
    "text": "Project repositories"
  }, {
    "depth": 3,
    "slug": "types-of-contributions",
    "text": "Types of contributions"
  }, {
    "depth": 2,
    "slug": "contributing-to-docs",
    "text": "Contributing to Docs"
  }, {
    "depth": 2,
    "slug": "our-contributors",
    "text": "Our contributors"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>We welcome contributions of any size and contributors of any skill level. As an open-source project, we believe in giving back to our contributors. We are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.</p>\n<p>Want to get even more involved? See our <a href=\"https://github.com/withastro/.github/blob/main/GOVERNANCE.md\">Governance doc</a> for detailed descriptions of different roles, maintainer nomination processes, code review processes, and Code of Conduct enforcement.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"ways-to-contribute\">Ways to Contribute</h2><a class=\"sl-anchor-link\" href=\"#ways-to-contribute\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Ways to Contribute”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"project-repositories\">Project repositories</h3><a class=\"sl-anchor-link\" href=\"#project-repositories\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Project repositories”</span></a></div>\n<p>There are lots of ways to contribute to the Astro Project! Every Astro repository has a README with a link to a <code dir=\"auto\">CONTRIBUTING.md</code> file in the root of the project.</p>\n<p>Visit <a href=\"https://github.com/withastro\">Astro’s GitHub profile</a> to find the repositories for:</p>\n<ul>\n<li>\n<p>The <a href=\"https://github.com/withastro/astro\">main Astro codebase</a>, including official integrations and starter templates.</p>\n</li>\n<li>\n<p><a href=\"https://github.com/withastro/docs\">Astro Docs</a>, an entire Astro website! Contribute not just written content, but also Astro code addressing a11y, CSS, UI, and UX concerns. We also make our documentation available in several languages, so we need help translating the entire site.</p>\n</li>\n<li>\n<p>The <a href=\"https://github.com/withastro/compiler\">Astro compiler</a>, written in Go, distributed as WASM.</p>\n</li>\n<li>\n<p>Astro’s <a href=\"https://github.com/withastro/language-tools\">language tools</a>, the editor tooling required for the Astro language (<code dir=\"auto\">.astro</code> files).</p>\n</li>\n<li>\n<p><a href=\"https://github.com/withastro/starlight\">Starlight</a>, Astro’s official documentation framework.</p>\n</li>\n<li>\n<p>The <a href=\"https://github.com/withastro/roadmap\">Astro Roadmap</a> where the future of Astro is shaped! Ideas, suggestions, and formal RFC proposals for the Astro project.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"types-of-contributions\">Types of contributions</h3><a class=\"sl-anchor-link\" href=\"#types-of-contributions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Types of contributions”</span></a></div>\n<p>In addition to contributing your own code or content, you can also make a huge contribution by getting involved by leaving review comments on PRs, adding ideas in existing GitHub Issues and Discussions, and participating in our “Pinned” issue maintenance tasks!</p>\n<p>Every PR, especially translation PRs, needs reviewers! Reviewing PRs and leaving comments, suggestions, or an approving “LGTM!” (“Looks Good To Me!”) is a great way to get started in any repository, and to learn more about Astro.</p>\n<p>We also have a very active <a href=\"https://astro.build/chat\">Discord</a> community! We value the contributions of those who welcome new members, answer support questions, and share what they have built with and for Astro! Beyond traditional GitHub contributions, Astro recognizes and supports community members who engage with our community, share Astro in blog posts, videos and conference talks, and help maintain the health of our community.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"contributing-to-docs\">Contributing to Docs</h2><a class=\"sl-anchor-link\" href=\"#contributing-to-docs\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Contributing to Docs”</span></a></div>\n<p>We have several guides available to assist you with contributing to Astro Docs.</p>\n<p>Whether it’s your very first contribution to open-source, or you need to add docs for the new Astro feature you just built, or you’re an experienced translator looking for the next page to translate, or you’d like to learn more about helping as a PR reviewer… we’ve got you covered!</p>\n<p>Please visit our dedicated site <a href=\"https://contribute.docs.astro.build\"><em>Astro Docs</em> Docs</a>, where you’ll find our documentation to help you contribute to Astro Docs as a typo-fixer, a writer, a translator, a feature-builder, and even as a PR reviewer.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"our-contributors\">Our contributors</h2><a class=\"sl-anchor-link\" href=\"#our-contributors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Our contributors”</span></a></div>\n<p>These docs are brought to you by all these helpful people. <a href=\"https://github.com/withastro/docs\">Join us on GitHub!</a></p>\n"
    }), createVNode($$ContributorList, {
      githubRepo: "withastro/docs"
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

const url = "src/content/docs/en/contribute.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/contribute.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/contribute.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
