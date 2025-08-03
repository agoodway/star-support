import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';

const frontmatter = {
  "title": "GitCMS & Astro",
  "description": "Integrate GitCMS into your Astro project for seamless content management",
  "sidebar": {
    "label": "GitCMS"
  },
  "type": "cms",
  "service": "GitCMS",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "official-resources",
    "text": "Official Resources"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p><a href=\"https://gitcms.blog\">GitCMS</a> turns GitHub into a Git-based headless CMS, offering a Notion-like markdown editing experience right in your browser.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"official-resources\">Official Resources</h2><a class=\"sl-anchor-link\" href=\"#official-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Official Resources”</span></a></div>\n<ul>\n<li><a href=\"https://gitcms.blog/posts/introducing-gitcms/\">Introducing GitCMS</a></li>\n<li><a href=\"https://gitcms.blog/posts/how-to-configure-gitcms/\">How to Configure GitCMS for an Astro Site</a></li>\n<li><a href=\"https://gitcms.blog/extension\">Install GitCMS Chrome Extension</a></li>\n</ul>"
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
const url = "src/content/docs/en/guides/cms/gitcms.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/gitcms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/gitcms.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
