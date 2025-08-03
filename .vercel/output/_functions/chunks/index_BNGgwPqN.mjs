import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$MigrationGuidesNav } from './MigrationGuidesNav_DS1bEQ1C.mjs';

const frontmatter = {
  "title": "Migrate an existing project to Astro",
  "description": "Some tips and tricks for converting your site to Astro.",
  "sidebar": {
    "label": "Site migration overview"
  },
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "migration-guides",
    "text": "Migration Guides"
  }, {
    "depth": 2,
    "slug": "why-migrate-your-site-to-astro",
    "text": "Why migrate your site to Astro?"
  }, {
    "depth": 2,
    "slug": "which-projects-can-i-convert-to-astro",
    "text": "Which projects can I convert to Astro?"
  }, {
    "depth": 2,
    "slug": "how-will-my-project-design-change",
    "text": "How will my project design change?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><strong>Ready to convert your site to Astro?</strong> See one of our guides for migration tips.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"migration-guides\">Migration Guides</h2><a class=\"sl-anchor-link\" href=\"#migration-guides\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Migration Guides”</span></a></div>\n"
    }), createVNode($$MigrationGuidesNav, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Note that many of these pages are <strong>stubs</strong>: they’re collections of resources waiting for your contribution!</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"why-migrate-your-site-to-astro\">Why migrate your site to Astro?</h2><a class=\"sl-anchor-link\" href=\"#why-migrate-your-site-to-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Why migrate your site to Astro?”</span></a></div>\n<p>Astro provides many benefits: performance, simplicity, and many of the features you want built right into the framework. When you do need to extend your site, Astro provides several <a href=\"https://astro.build/integrations\">official and 3rd-party community integrations</a>.</p>\n<p>Migrating may be less work than you think!</p>\n<p>Depending on your existing project, you may be able to use your existing:</p>\n<ul>\n<li>\n<p><a href=\"/en/guides/framework-components/\">UI framework components</a> directly in Astro.</p>\n</li>\n<li>\n<p><a href=\"/en/guides/styling/\">CSS stylesheets or libraries</a> including Tailwind.</p>\n</li>\n<li>\n<p><a href=\"/en/guides/markdown-content/\">Markdown/MDX files</a>, configured using your existing <a href=\"/en/guides/markdown-content/#markdown-plugins\">remark and rehype plugins</a>.</p>\n</li>\n<li>\n<p><a href=\"/en/guides/cms/\">Content from a CMS</a> through an integration or API.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"which-projects-can-i-convert-to-astro\">Which projects can I convert to Astro?</h2><a class=\"sl-anchor-link\" href=\"#which-projects-can-i-convert-to-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Which projects can I convert to Astro?”</span></a></div>\n<p><a href=\"/en/concepts/why-astro/\">Many existing sites can be built with Astro</a>. Astro is ideally suited for your existing content-based sites like blogs, landing pages, marketing sites and portfolios. Astro integrates with several popular headless CMSes, and allows you to connect eCommerce shop carts.</p>\n<p>Astro allows you have a fully statically-generated website, a dynamic app with routes rendered on demand, or a combination of both with <a href=\"/en/guides/on-demand-rendering/\">complete control over your project rendering</a>, making it a great replacement for SSGs or for sites that need to fetch some page data on the fly.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"how-will-my-project-design-change\">How will my project design change?</h2><a class=\"sl-anchor-link\" href=\"#how-will-my-project-design-change\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How will my project design change?”</span></a></div>\n<p>Depending on your existing project, you may need to think differently about:</p>\n<ul>\n<li>\n<p>Designing in <a href=\"/en/concepts/islands/#what-is-an-island\">Astro Islands</a> to avoid sending unnecessary JavaScript to the browser.</p>\n</li>\n<li>\n<p>Providing client-side interactivity with <a href=\"/en/guides/client-side-scripts/\">client-side <code dir=\"auto\">&#x3C;script></code> tags</a> or <a href=\"/en/guides/framework-components/\">UI framework components</a>.</p>\n</li>\n<li>\n<p>Managing <a href=\"/en/recipes/sharing-state-islands/\">shared state</a> with Nano Stores or local storage instead of app-wide hooks or wrappers.</p>\n</li>\n</ul>"
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

const url = "src/content/docs/en/guides/migrate-to-astro/index.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
