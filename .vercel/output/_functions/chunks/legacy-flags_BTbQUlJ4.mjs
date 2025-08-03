import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';

const frontmatter = {
  "title": "Legacy flags",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "collections",
    "text": "Collections"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    p: "p",
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>To help some users migrate between versions of Astro, we occasionally introduce <code dir=\"auto\">legacy</code> flags.</p>\n<p>These flags allow you to opt in to some deprecated or otherwise outdated behavior of Astro\nin the latest version, so that you can continue to upgrade and take advantage of new Astro releases until you are able to fully update your project code.</p>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"collections\">Collections</h2><a class=\"sl-anchor-link\" href=\"#collections\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Collections”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "boolean"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "false"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Enable legacy behavior for content collections (as used in Astro v2 through v4)</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">legacy: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">collections: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig } from &#x27;astro/config&#x27;;export default defineConfig({  legacy: {    collections: true  }});\"><div></div></button></div></figure></div>\n<p>If enabled, <code dir=\"auto\">data</code> and <code dir=\"auto\">content</code> collections (only) are handled using the legacy content collections implementation. Collections with a <code dir=\"auto\">loader</code> (only) will continue to use the Content Layer API instead. Both kinds of collections may exist in the same project, each using their respective implementations.</p>\n<p>The following limitations continue to exist:</p>\n<ul>\n<li>Any legacy (<code dir=\"auto\">type: 'content'</code> or <code dir=\"auto\">type: 'data'</code>) collections must continue to be located in the <code dir=\"auto\">src/content/</code> directory.</li>\n<li>These legacy collections will not be transformed to implicitly use the <code dir=\"auto\">glob()</code> loader, and will instead be handled by legacy code.</li>\n<li>Collections using the Content Layer API (with a <code dir=\"auto\">loader</code> defined) are forbidden in <code dir=\"auto\">src/content/</code>, but may exist anywhere else in your project.</li>\n</ul>\n<p>When you are ready to remove this flag and migrate to the new Content Layer API for your legacy collections, you must define a collection for any directories in <code dir=\"auto\">src/content/</code> that you want to continue to use as a collection. It is sufficient to declare an empty collection, and Astro will implicitly generate an appropriate definition for your legacy collections:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/content/config.ts</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineCollection, z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">blog</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">collections</span><span style=\"--0:#C792EA;--1:#8844AE\"> = { </span><span style=\"--0:#D7DBE0;--1:#403F53\">blog</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineCollection, z } from &#x27;astro:content&#x27;;const blog = defineCollection({ })export const collections = { blog };\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/en/reference/legacy-flags.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/legacy-flags.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/legacy-flags.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
