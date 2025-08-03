import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';

const frontmatter = {
  "title": "Experimental client prerendering",
  "sidebar": {
    "label": "Client prerendering"
  },
  "i18nReady": true
};
function getHeadings() {
  return [];
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
    children: [createVNode(_components.p, {
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
        v: "4.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Enables pre-rendering your prefetched pages on the client in supported browsers.</p>\n<p>This feature uses the experimental <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API\">Speculation Rules Web API</a> and enhances the default <code dir=\"auto\">prefetch</code> behavior globally to prerender links on the client.\nYou may wish to review the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API#unsafe_prefetching\">possible risks when prerendering on the client</a> before enabling this feature.</p>\n<p>Enable client side prerendering in your <code dir=\"auto\">astro.config.mjs</code> along with any desired <code dir=\"auto\">prefetch</code> configuration options:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">prefetch: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">prefetchAll: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">defaultStrategy: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">viewport</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">clientPrerender: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  prefetch: {    prefetchAll: true,    defaultStrategy: &#x27;viewport&#x27;,  },  experimental: {    clientPrerender: true,  },}\"><div></div></button></div></figure></div>\n<p>Continue to use the <code dir=\"auto\">data-astro-prefetch</code> attribute on any <code dir=\"auto\">&#x3C;a /></code> link on your site to opt in to prefetching.\nInstead of appending a <code dir=\"auto\">&#x3C;link></code> tag to the head of the document or fetching the page with JavaScript, a <code dir=\"auto\">&#x3C;script></code> tag will be appended with the corresponding speculation rules.</p>\n<p>Client side prerendering requires browser support. If the Speculation Rules API is not supported, <code dir=\"auto\">prefetch</code> will fallback to the supported strategy.</p>\n<p>See the <a href=\"/en/guides/prefetch/\">Prefetch Guide</a> for more <code dir=\"auto\">prefetch</code> options and usage.</p>"
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

const url = "src/content/docs/en/reference/experimental-flags/client-prerender.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/client-prerender.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/client-prerender.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
