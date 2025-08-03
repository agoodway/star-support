import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to Stormkit",
  "description": "Deploy your Astro site to Stormkit",
  "sidebar": {
    "label": "Stormkit"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-deploy",
    "text": "How to deploy"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>You can deploy your Astro project to <a href=\"https://stormkit.io/\">Stormkit</a>, a deployment platform for static websites, single-page applications (SPAs), and serverless functions.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"how-to-deploy\">How to deploy</h2><a class=\"sl-anchor-link\" href=\"#how-to-deploy\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p><a href=\"https://app.stormkit.io/auth\">Log in to Stormkit</a>.</p>\n</li>\n<li>\n<p>Using the user interface, import your Astro project from one of the three supported Git providers (GitHub, GitLab, or Bitbucket).</p>\n</li>\n<li>\n<p>Navigate to the project’s production environment in Stormkit or create a new environment if needed.</p>\n</li>\n<li>\n<p>Verify the build command in your <a href=\"https://stormkit.io/docs/deployments/configuration\">Stormkit configuration</a>. By default, Stormkit CI will run <code dir=\"auto\">npm run build</code> but you can specify a custom build command on this page.</p>\n</li>\n<li>\n<p>Click the “Deploy Now” button to deploy your site.</p>\n</li>\n</ol>"
    }), "\n", createVNode($$ReadMore, {
      "set:html": "Read more in the <a href=\"https://stormkit.io/docs\">Stormkit Documentation</a>."
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

const url = "src/content/docs/en/guides/deploy/stormkit.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/stormkit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/stormkit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
