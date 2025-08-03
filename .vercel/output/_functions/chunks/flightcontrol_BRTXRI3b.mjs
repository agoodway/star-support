import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to AWS with Flightcontrol",
  "description": "How to deploy your Astro site to AWS with Flightcontrol",
  "sidebar": {
    "label": "Flightcontrol"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-deploy",
    "text": "How to Deploy"
  }, {
    "depth": 3,
    "slug": "ssr-setup",
    "text": "SSR Setup"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>You can deploy an Astro site using <a href=\"https://www.flightcontrol.dev?ref=astro\">Flightcontrol</a>, which provides fully-automated deployments to your AWS account.</p>\n<p>Supports both static and SSR Astro sites.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"how-to-deploy\">How to Deploy</h2><a class=\"sl-anchor-link\" href=\"#how-to-deploy\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to Deploy”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Create a Flightcontrol account at <a href=\"https://app.flightcontrol.dev/signup?ref=astro\">app.flightcontrol.dev/signup</a></p>\n</li>\n<li>\n<p>Go to <a href=\"https://app.flightcontrol.dev/projects/new/1\">app.flightcontrol.dev/projects/new/1</a></p>\n</li>\n<li>\n<p>Connect your GitHub account and select your repo</p>\n</li>\n<li>\n<p>Select your desired “Config Type”:</p>\n<ul>\n<li><code dir=\"auto\">GUI</code> (all config managed through Flightcontrol dashboard) where you will select the <code dir=\"auto\">Astro Static</code> or <code dir=\"auto\">Astro SSR</code> preset</li>\n<li><code dir=\"auto\">flightcontrol.json</code> (“infrastructure as code” option where all config is in your repo) where you will select an Astro example config, then add it to your codebase as <code dir=\"auto\">flightcontrol.json</code></li>\n</ul>\n</li>\n<li>\n<p>Adjust any configuration as needed</p>\n</li>\n<li>\n<p>Click “Create Project” and complete any required steps (like linking your AWS account).</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"ssr-setup\">SSR Setup</h3><a class=\"sl-anchor-link\" href=\"#ssr-setup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SSR Setup”</span></a></div>\n<p>To deploy with SSR support, make sure you first set up the <a href=\"/en/guides/integrations-guide/node/\"><code dir=\"auto\">@astrojs/node</code></a> adapter. Then, follow the steps above, choosing the appropriate configurations for Astro SSR.</p>"
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

const url = "src/content/docs/en/guides/deploy/flightcontrol.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/flightcontrol.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/flightcontrol.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
