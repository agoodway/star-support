import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$DontEditWarning } from './DontEditWarning_BZonRkvX.mjs';

const frontmatter = {
  "title": "Image missing required \"alt\" property.",
  "i18nReady": true,
  "githubURL": "https://github.com/withastro/astro/blob/main/packages/astro/src/core/errors/errors-data.ts"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-went-wrong",
    "text": "What went wrong?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$DontEditWarning, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p><strong>ImageMissingAlt</strong>: Image missing “alt” property. “alt” text is required to describe important images on the page.</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"what-went-wrong\">What went wrong?</h2><a class=\"sl-anchor-link\" href=\"#what-went-wrong\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “What went wrong?”</span></a></div>\n<p>The <code dir=\"auto\">alt</code> property allows you to provide descriptive alt text to users of screen readers and other assistive technologies. In order to ensure your images are accessible, the <code dir=\"auto\">Image</code> component requires that an <code dir=\"auto\">alt</code> be specified.</p>\n<p>If the image is merely decorative (i.e. doesn’t contribute to the understanding of the page), set <code dir=\"auto\">alt=\"\"</code> so that screen readers know to ignore the image.</p>\n<p><strong>See Also:</strong></p>\n<ul>\n<li><a href=\"/en/guides/images/\">Images</a></li>\n<li><a href=\"/en/reference/modules/astro-assets/#image-\">Image component</a></li>\n<li> <a href=\"/en/reference/modules/astro-assets/#alt-required\">Image component#alt</a></li>\n</ul>"
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

const url = "src/content/docs/en/reference/errors/image-missing-alt.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/errors/image-missing-alt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/errors/image-missing-alt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
