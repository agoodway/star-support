import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';

const frontmatter = {
  "title": "@deno/astro-adapter",
  "description": "The Deno Astro adapter",
  "sidebar": {
    "label": "Deno"
  },
  "i18nReady": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>The Deno adapter allows Astro to deploy your SSR site to Deno targets including Deno Deploy.</p>\n<p>The Deno adapter was previously maintained by Astro but now is maintained by Deno directly. Usage is now documented <a href=\"https://github.com/denoland/deno-astro-adapter\">in the Deno adapter repository</a>.</p>\n<p>If you are currently using this Astro adapter, you will need to migrate to the new Deno version or to <a href=\"/en/guides/on-demand-rendering/\">add another adapter</a> to continue using SSR in your project.</p>"
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
const url = "src/content/docs/en/guides/integrations-guide/deno.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/integrations-guide/deno.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/integrations-guide/deno.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
