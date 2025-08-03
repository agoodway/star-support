import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';

const frontmatter = {
  "title": "Experimental raw environment variables values",
  "sidebar": {
    "label": "Raw environment variables"
  },
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "usage",
    "text": "Usage"
  }, {
    "depth": 3,
    "slug": "updating-your-project",
    "text": "Updating your project"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    p: "p",
    strong: "strong",
    ...props.components
  }, { Fragment: Fragment$1 } = _components;
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
        v: "5.12.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Astro allows you to configure a <a href="/en/guides/environment-variables/#type-safe-environment-variables">type-safe schema for your environment variables</a>, and converts variables imported via <code dir="auto">astro:env</code> into the expected type.</p>\n<p>However, Astro also converts your environment variables used through <code dir="auto">import.meta.env</code> in some cases, and this can prevent access to some values such as the strings <code dir="auto">"true"</code> (which is converted to a boolean value), and <code dir="auto">"1"</code> (which is converted to a number).</p>\n<p>The <code dir="auto">experimental.rawEnvValues</code> flag disables coercion of <code dir="auto">import.meta.env</code> values that are populated from <code dir="auto">process.env</code>, allowing you to use the raw value.</p>\n<p>To disable Astro’s coercion on values used through <code dir="auto">import.meta.env</code>, set the <code dir="auto">experimental.rawEnvValues</code> flag to <code dir="auto">true</code> in your Astro configuration:</p>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.rvnnt.css"><script type="module" src="/_astro/ec.8zarh.js"></script><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">experimental: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">rawEnvValues: </span><span style="--0:#ff99aa;--1:#7a3636">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x22;astro/config&#x22;export default defineConfig({  experimental: {    rawEnvValues: true,  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h2"><h2 id="usage">Usage</h2><a class="sl-anchor-link" href="#usage"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Usage”</span></a></div>\n<p>Enabling this experimental flag will no longer convert string values into booleans or numbers. This aligns <code dir="auto">import.meta.env</code>’s behavior in Astro with <a href="https://vite.dev/guide/env-and-mode.html#env-variables">Vite</a>.</p>\n<p>In a future major version, Astro will switch to not coercing <code dir="auto">import.meta.env</code> values by default, but you can opt in to the future behavior early using the <code dir="auto">experimental.rawEnvValues</code> flag and if necessary, <a href="#updating-your-project">updating your project</a> accordingly.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="updating-your-project">Updating your project</h3><a class="sl-anchor-link" href="#updating-your-project"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Updating your project”</span></a></div>\n<p>If you were relying on this coercion, you may need to update your project code to apply it manually:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/components/MyComponent.astro</span></figcaption><pre data-language="ts"><code><div class="ec-line highlight del"><div class="code"><span style="--0:#d0a3ed;--1:#663383">const </span><span style="--0:#91b4ff;--1:#2c4984">enabled</span><span style="--0:#7FDBCA;--1:#075356">:</span><span style="--0:#d0a3ed;--1:#663383"> </span><span style="--0:#C5E478;--1:#2c4984">boolean</span><span style="--0:#d0a3ed;--1:#663383"> = import.</span><span style="--0:#7FDBCA;--1:#075356">meta</span><span style="--0:#d0a3ed;--1:#663383">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#d0a3ed;--1:#663383">.</span><span style="--0:#91b4ff;--1:#2c4984">ENABLED</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">const </span><span style="--0:#94b6ff;--1:#2d4a87">enabled</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#C5E478;--1:#2d4a87">boolean</span><span style="--0:#d2a6ee;--1:#6a3588"> = import.</span><span style="--0:#7FDBCA;--1:#075457">meta</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">ENABLED</span><span style="--0:#d2a6ee;--1:#6a3588"> === </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">true</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="const enabled: boolean = import.meta.env.ENABLEDconst enabled: boolean = import.meta.env.ENABLED === &#x22;true&#x22;"><div></div></button></div></figure></div>\n<p>If you need coercion in Astro, we recommend you use <a href="/en/guides/environment-variables/"><code dir="auto">astro:env</code></a>.</p>'
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
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
const url = "src/content/docs/en/reference/experimental-flags/raw-env-values.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/raw-env-values.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/raw-env-values.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
