import { c as createComponent, E as createAstro, G as maybeRenderHead, r as renderComponent, a as renderTemplate, F as renderSlot, d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { j as $$Card$1, k as $$CardGrid } from './Code_CLJ7HHbi.mjs';
import 'kleur/colors';
/* empty css                                                            */
/* empty css                                                                */
/* empty css                                                                 */
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_C8dZNa5U.mjs';
import { $ as $$Button } from './Button_L62Xdzfn.mjs';
/* empty css                                                               */

const $$Astro$3 = createAstro("https://docs.astro.build/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  return renderTemplate`${maybeRenderHead()}<div class="landing-card astro-thryqltm">
	${renderComponent($$result, "StarlightCard", $$Card$1, { ...Astro2.props, "class": "astro-thryqltm" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Landing/Card.astro", void 0);

const $$Astro$2 = createAstro("https://docs.astro.build/");
const $$ListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListCard;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { ...Astro2.props, "class": "astro-nsjz63yc" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="link-list astro-nsjz63yc">
		${renderSlot($$result2, $$slots["default"])}
	</div>
` })}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Landing/ListCard.astro", void 0);

const $$Astro$1 = createAstro("https://docs.astro.build/");
const $$SplitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SplitCard;
  return renderTemplate`${maybeRenderHead()}<div class="card--fullwidth astro-5ohpsof5">
	${renderComponent($$result, "Card", $$Card$1, { ...Astro2.props, "class": "astro-5ohpsof5" }, { "default": ($$result2) => renderTemplate`
		<div class="split astro-5ohpsof5">
			${renderSlot($$result2, $$slots["default"])}
		</div>
	` })}
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Landing/SplitCard.astro", void 0);

const HoustonLove = new Proxy({"src":"/_astro/houston_love.BttrNCcZ.png","width":292,"height":293,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chasepursley/Development/ai/star-support/src/assets/houston_love.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://docs.astro.build/");
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Discord;
  const { title, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="discord astro-db2gborc">
	<h2 class="astro-db2gborc">${title}</h2>
	<div class="cta astro-db2gborc">
		${renderComponent($$result, "Image", $$Image, { "src": HoustonLove, "alt": "", "class": "hide astro-db2gborc" })}
		${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "link": "https://astro.build/chat", "class": "astro-db2gborc" }, { "default": ($$result2) => renderTemplate`${cta}` })}
	</div>
</div>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/Landing/Discord.astro", void 0);

const frontmatter = {
  "title": "Getting started",
  "description": "Guides, resources, and API references to help you build with Astro — the web framework for content-driven websites.",
  "i18nReady": true,
  "tableOfContents": false,
  "editUrl": false,
  "next": false,
  "banner": {
    "content": "Astro v5 is here! <a href=\"/en/guides/upgrade-to/v5/\">Learn how to upgrade your site</a>\n"
  },
  "hero": {
    "title": "Astro Docs",
    "tagline": "Guides, resources, and API references to help you build with Astro.",
    "actions": [{
      "text": "Install Astro",
      "icon": "rocket",
      "link": "/en/install-and-setup/"
    }, {
      "text": "Learn about Astro’s features",
      "icon": "right-arrow",
      "variant": "minimal",
      "link": "/en/concepts/why-astro/"
    }],
    "facepile": {
      "tagline": "Powered by Astro and our open-source contributors.",
      "linkText": "Join us!",
      "link": "/en/contribute/"
    }
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "What will you build with Astro?",
        icon: "laptop",
        "set:html": "<p>Explore <a href=\"https://astro.build/themes/\">Astro starter themes</a> for blogs, portfolios, docs, landing pages, SaaS, marketing, ecommerce sites, and more!</p>"
      }), createVNode($$Card, {
        title: "Take a guided tour",
        icon: "star",
        "set:html": "<p>Complete our introductory <a href=\"/en/tutorial/0-introduction/\">Build a Blog Tutorial</a> to learn the basics and create your first Astro site.</p>"
      }), createVNode($$SplitCard, {
        title: "Start a new project",
        icon: "rocket",
        "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"sh\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with npm</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest\"><div></div></button></div></figure></div><p>Our <a href=\"/en/install-and-setup/\">installation guide</a> has step-by-step instructions for installing Astro using our CLI wizard, creating a new project from an existing Astro GitHub repository, and for installing Astro manually.</p>"
      }), createVNode($$ListCard, {
        title: "Learn",
        icon: "open-book",
        "set:html": "<ul>\n<li><a href=\"/en/concepts/why-astro/\">Astro’s main features</a></li>\n<li><a href=\"/en/concepts/islands/\">Islands architecture</a></li>\n<li><a href=\"/en/basics/astro-components/\">Astro components</a></li>\n<li><a href=\"/en/reference/astro-syntax/\">The Astro template syntax</a></li>\n</ul>"
      }), createVNode($$ListCard, {
        title: "Extend",
        icon: "puzzle",
        "set:html": "<ul>\n<li><a href=\"/en/guides/integrations-guide/\">Add integrations like React and Partytown</a></li>\n<li><a href=\"/en/guides/content-collections/\">Create type safe content collections</a></li>\n<li><a href=\"/en/guides/view-transitions/\">Enhance navigation with view transitions</a></li>\n<li><a href=\"/en/guides/cms/\">Connect a headless CMS to your project</a></li>\n</ul>"
      })]
    }), "\n", createVNode($$Discord, {
      title: "Have a question or want to get involved?",
      cta: "Join our Discord"
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
  }) : _createMdxContent();
}

const url = "src/content/docs/en/getting-started.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
