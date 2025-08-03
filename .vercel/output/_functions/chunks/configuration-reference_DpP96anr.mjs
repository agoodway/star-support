import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';
import { $ as $$DontEditWarning } from './DontEditWarning_BZonRkvX.mjs';

const frontmatter = {
  "title": "Configuration Reference",
  "i18nReady": true,
  "githubURL": "https://github.com/withastro/astro/blob/main/packages/astro/src/types/public/config.ts"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "top-level-options",
    "text": "Top-Level Options"
  }, {
    "depth": 3,
    "slug": "site",
    "text": "site"
  }, {
    "depth": 3,
    "slug": "base",
    "text": "base"
  }, {
    "depth": 3,
    "slug": "trailingslash",
    "text": "trailingSlash"
  }, {
    "depth": 3,
    "slug": "redirects",
    "text": "redirects"
  }, {
    "depth": 3,
    "slug": "output",
    "text": "output"
  }, {
    "depth": 3,
    "slug": "adapter",
    "text": "adapter"
  }, {
    "depth": 3,
    "slug": "integrations",
    "text": "integrations"
  }, {
    "depth": 3,
    "slug": "root",
    "text": "root"
  }, {
    "depth": 4,
    "slug": "examples",
    "text": "Examples"
  }, {
    "depth": 3,
    "slug": "srcdir",
    "text": "srcDir"
  }, {
    "depth": 3,
    "slug": "publicdir",
    "text": "publicDir"
  }, {
    "depth": 3,
    "slug": "outdir",
    "text": "outDir"
  }, {
    "depth": 3,
    "slug": "cachedir",
    "text": "cacheDir"
  }, {
    "depth": 3,
    "slug": "compresshtml",
    "text": "compressHTML"
  }, {
    "depth": 3,
    "slug": "scopedstylestrategy",
    "text": "scopedStyleStrategy"
  }, {
    "depth": 3,
    "slug": "security",
    "text": "security"
  }, {
    "depth": 4,
    "slug": "securitycheckorigin",
    "text": "security.checkOrigin"
  }, {
    "depth": 3,
    "slug": "vite",
    "text": "vite"
  }, {
    "depth": 4,
    "slug": "examples-1",
    "text": "Examples"
  }, {
    "depth": 2,
    "slug": "build-options",
    "text": "Build Options"
  }, {
    "depth": 3,
    "slug": "buildformat",
    "text": "build.format"
  }, {
    "depth": 4,
    "slug": "effect-on-astrourl",
    "text": "Effect on Astro.url"
  }, {
    "depth": 3,
    "slug": "buildclient",
    "text": "build.client"
  }, {
    "depth": 3,
    "slug": "buildserver",
    "text": "build.server"
  }, {
    "depth": 3,
    "slug": "buildassets",
    "text": "build.assets"
  }, {
    "depth": 3,
    "slug": "buildassetsprefix",
    "text": "build.assetsPrefix"
  }, {
    "depth": 3,
    "slug": "buildserverentry",
    "text": "build.serverEntry"
  }, {
    "depth": 3,
    "slug": "buildredirects",
    "text": "build.redirects"
  }, {
    "depth": 3,
    "slug": "buildinlinestylesheets",
    "text": "build.inlineStylesheets"
  }, {
    "depth": 3,
    "slug": "buildconcurrency",
    "text": "build.concurrency"
  }, {
    "depth": 2,
    "slug": "server-options",
    "text": "Server Options"
  }, {
    "depth": 3,
    "slug": "serverhost",
    "text": "server.host"
  }, {
    "depth": 3,
    "slug": "serverport",
    "text": "server.port"
  }, {
    "depth": 3,
    "slug": "serverallowedhosts",
    "text": "server.allowedHosts"
  }, {
    "depth": 3,
    "slug": "serveropen",
    "text": "server.open"
  }, {
    "depth": 3,
    "slug": "serverheaders",
    "text": "server.headers"
  }, {
    "depth": 2,
    "slug": "session-options",
    "text": "Session Options"
  }, {
    "depth": 3,
    "slug": "sessiondriver",
    "text": "session.driver"
  }, {
    "depth": 3,
    "slug": "sessionoptions",
    "text": "session.options"
  }, {
    "depth": 3,
    "slug": "sessioncookie",
    "text": "session.cookie"
  }, {
    "depth": 3,
    "slug": "sessionttl",
    "text": "session.ttl"
  }, {
    "depth": 2,
    "slug": "dev-toolbar-options",
    "text": "Dev Toolbar Options"
  }, {
    "depth": 3,
    "slug": "devtoolbarenabled",
    "text": "devToolbar.enabled"
  }, {
    "depth": 2,
    "slug": "prefetch-options",
    "text": "Prefetch Options"
  }, {
    "depth": 3,
    "slug": "prefetchprefetchall",
    "text": "prefetch.prefetchAll"
  }, {
    "depth": 3,
    "slug": "prefetchdefaultstrategy",
    "text": "prefetch.defaultStrategy"
  }, {
    "depth": 2,
    "slug": "image-options",
    "text": "Image Options"
  }, {
    "depth": 3,
    "slug": "imageendpoint",
    "text": "image.endpoint"
  }, {
    "depth": 3,
    "slug": "imageservice",
    "text": "image.service"
  }, {
    "depth": 4,
    "slug": "imageserviceconfiglimitinputpixels",
    "text": "image.service.config.limitInputPixels"
  }, {
    "depth": 3,
    "slug": "imagedomains",
    "text": "image.domains"
  }, {
    "depth": 3,
    "slug": "imageremotepatterns",
    "text": "image.remotePatterns"
  }, {
    "depth": 3,
    "slug": "imageresponsivestyles",
    "text": "image.responsiveStyles"
  }, {
    "depth": 3,
    "slug": "imagelayout",
    "text": "image.layout"
  }, {
    "depth": 3,
    "slug": "imageobjectfit",
    "text": "image.objectFit"
  }, {
    "depth": 3,
    "slug": "imageobjectposition",
    "text": "image.objectPosition"
  }, {
    "depth": 3,
    "slug": "imagebreakpoints",
    "text": "image.breakpoints"
  }, {
    "depth": 2,
    "slug": "markdown-options",
    "text": "Markdown Options"
  }, {
    "depth": 3,
    "slug": "markdownshikiconfig",
    "text": "markdown.shikiConfig"
  }, {
    "depth": 3,
    "slug": "markdownsyntaxhighlight",
    "text": "markdown.syntaxHighlight"
  }, {
    "depth": 4,
    "slug": "markdownsyntaxhighlighttype",
    "text": "markdown.syntaxHighlight.type"
  }, {
    "depth": 4,
    "slug": "markdownsyntaxhighlightexcludelangs",
    "text": "markdown.syntaxHighlight.excludeLangs"
  }, {
    "depth": 3,
    "slug": "markdownremarkplugins",
    "text": "markdown.remarkPlugins"
  }, {
    "depth": 3,
    "slug": "markdownrehypeplugins",
    "text": "markdown.rehypePlugins"
  }, {
    "depth": 3,
    "slug": "markdowngfm",
    "text": "markdown.gfm"
  }, {
    "depth": 3,
    "slug": "markdownsmartypants",
    "text": "markdown.smartypants"
  }, {
    "depth": 3,
    "slug": "markdownremarkrehype",
    "text": "markdown.remarkRehype"
  }, {
    "depth": 2,
    "slug": "i18n",
    "text": "i18n"
  }, {
    "depth": 3,
    "slug": "i18nlocales",
    "text": "i18n.locales"
  }, {
    "depth": 3,
    "slug": "i18ndefaultlocale",
    "text": "i18n.defaultLocale"
  }, {
    "depth": 3,
    "slug": "i18nfallback",
    "text": "i18n.fallback"
  }, {
    "depth": 5,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 3,
    "slug": "i18nrouting",
    "text": "i18n.routing"
  }, {
    "depth": 4,
    "slug": "i18nroutingprefixdefaultlocale",
    "text": "i18n.routing.prefixDefaultLocale"
  }, {
    "depth": 4,
    "slug": "i18nroutingredirecttodefaultlocale",
    "text": "i18n.routing.redirectToDefaultLocale"
  }, {
    "depth": 4,
    "slug": "i18nroutingfallbacktype",
    "text": "i18n.routing.fallbackType"
  }, {
    "depth": 3,
    "slug": "i18ndomains",
    "text": "i18n.domains"
  }, {
    "depth": 2,
    "slug": "env",
    "text": "env"
  }, {
    "depth": 3,
    "slug": "envschema",
    "text": "env.schema"
  }, {
    "depth": 3,
    "slug": "envvalidatesecrets",
    "text": "env.validateSecrets"
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
    children: [createVNode($$DontEditWarning, {}), "\n", createVNode(Fragment$1, {
      "set:html": `<p>The following reference covers all supported configuration options in Astro. To learn more about configuring Astro, read our guide on <a href="/en/guides/configuring-astro/">Configuring Astro</a>.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.rvnnt.css"><script type="module" src="/_astro/ec.8zarh.js"></script><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#919F9F;--1:#5D6376">// your configuration options here...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;export default defineConfig({  // your configuration options here...})"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="top-level-options">Top-Level Options</h2><a class="sl-anchor-link" href="#top-level-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Top-Level Options”</span></a></div>
<div class="sl-heading-wrapper level-h3"><h3 id="site">site</h3><a class="sl-anchor-link" href="#site"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “site”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code></p></p>
<p>Your final, deployed URL. Astro uses this full URL to generate your sitemap and canonical URLs in your final build. It is strongly recommended that you set this configuration to get the most out of Astro.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">site: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://www.my-site.dev</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  site: &#x27;https://www.my-site.dev&#x27;}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="base">base</h3><a class="sl-anchor-link" href="#base"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “base”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code></p></p>
<p>The base path to deploy to. Astro will use this path as the root for your pages and assets both in development and in production build.</p>
<p>In the example below, <code dir="auto">astro dev</code> will start your server at <code dir="auto">/docs</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">base: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/docs</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  base: &#x27;/docs&#x27;}"><div></div></button></div></figure></div>
<p>When using this option, all of your static asset imports and URLs should add the base as a prefix. You can access this value via <code dir="auto">import.meta.env.BASE_URL</code>.</p>
<p>The value of <code dir="auto">import.meta.env.BASE_URL</code> will be determined by your <code dir="auto">trailingSlash</code> config, no matter what value you have set for <code dir="auto">base</code>.</p>
<p>A trailing slash is always included if <code dir="auto">trailingSlash: "always"</code> is set. If <code dir="auto">trailingSlash: "never"</code> is set, <code dir="auto">BASE_URL</code> will not include a trailing slash, even if <code dir="auto">base</code> includes one.</p>
<p>Additionally, Astro will internally manipulate the configured value of <code dir="auto">config.base</code> before making it available to integrations. The value of <code dir="auto">config.base</code> as read by integrations will also be determined by your <code dir="auto">trailingSlash</code> configuration in the same way.</p>
<p>In the example below, the values of <code dir="auto">import.meta.env.BASE_URL</code> and <code dir="auto">config.base</code> when processed will both be <code dir="auto">/docs</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">base: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/docs/</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">trailingSlash: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">never</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{   base: &#x27;/docs/&#x27;,   trailingSlash: &#x22;never&#x22;}"><div></div></button></div></figure></div>
<p>In the example below, the values of <code dir="auto">import.meta.env.BASE_URL</code> and <code dir="auto">config.base</code> when processed will both be <code dir="auto">/docs/</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">base: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/docs</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">trailingSlash: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">always</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{   base: &#x27;/docs&#x27;,   trailingSlash: &#x22;always&#x22;}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="trailingslash">trailingSlash</h3><a class="sl-anchor-link" href="#trailingslash"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “trailingSlash”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">'always' | 'never' | 'ignore'</code><br>
<strong>Default:</strong> <code dir="auto">'ignore'</code></p></p>
<p>Set the route matching behavior for trailing slashes in the dev server and on-demand rendered pages. Choose from the following options:</p>
<ul>
<li><code dir="auto">'ignore'</code> - Match URLs regardless of whether a trailing ”/” exists. Requests for “/about” and “/about/” will both match the same route.</li>
<li><code dir="auto">'always'</code> - Only match URLs that include a trailing slash (e.g: “/about/”). In production, requests for on-demand rendered URLs without a trailing slash will be redirected to the correct URL for your convenience. However, in development, they will display a warning page reminding you that you have <code dir="auto">always</code> configured.</li>
<li><code dir="auto">'never'</code> - Only match URLs that do not include a trailing slash (e.g: “/about”). In production, requests for on-demand rendered URLs with a trailing slash will be redirected to the correct URL for your convenience. However, in development, they will display a warning page reminding you that you have <code dir="auto">never</code> configured.</li>
</ul>
<p>When redirects occur in production for GET requests, the redirect will be a 301 (permanent) redirect. For all other request methods, it will be a 308 (permanent, and preserve the request method) redirect.</p>
<p>Trailing slashes on prerendered pages are handled by the hosting platform, and may not respect your chosen configuration.
See your hosting platform’s documentation for more information. You cannot use Astro <a href="#redirects">redirects</a> for this use case at this point.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#919F9F;--1:#5D6376">// Example: Require a trailing slash during development</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">trailingSlash: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">always</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  // Example: Require a trailing slash during development  trailingSlash: &#x27;always&#x27;}"><div></div></button></div></figure></div>
<p><strong>See Also:</strong></p>
<ul>
<li>build.format</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="redirects">redirects</h3><a class="sl-anchor-link" href="#redirects"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “redirects”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Record<string, RedirectConfig>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.9.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Specify a mapping of redirects where the key is the route to match
and the value is the path to redirect to.</p>
<p>You can redirect both static and dynamic routes, but only to the same kind of route.
For example, you cannot have a <code dir="auto">'/article': '/blog/[...slug]'</code> redirect.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">redirects: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/old</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/new</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/blog/[...slug]</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/articles/[...slug]</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/about</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://example.com/about</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/news</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">status: </span><span style="--0:#F78C6C;--1:#AA0982">302</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">destination: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://example.com/news</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// '/product1/', '/product1' // Note, this is not supported</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  redirects: {   &#x27;/old&#x27;: &#x27;/new&#x27;,   &#x27;/blog/[...slug]&#x27;: &#x27;/articles/[...slug]&#x27;,   &#x27;/about&#x27;: &#x27;https://example.com/about&#x27;,   &#x27;/news&#x27;: {     status: 302,     destination: &#x27;https://example.com/news&#x27;   },   // &#x27;/product1/&#x27;, &#x27;/product1&#x27; // Note, this is not supported  }})"><div></div></button></div></figure></div>
<p>For statically-generated sites with no adapter installed, this will produce a client redirect using a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#http-equiv"><code dir="auto">&#x3C;meta http-equiv="refresh"></code> tag</a> and does not support status codes.</p>
<p>When using SSR or with a static adapter in <code dir="auto">output: static</code>
mode, status codes are supported.
Astro will serve redirected GET requests with a status of <code dir="auto">301</code>
and use a status of <code dir="auto">308</code> for any other request method.</p>
<p>You can customize the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages">redirection status code</a> using an object in the redirect config:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">redirects: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/other</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">status: </span><span style="--0:#F78C6C;--1:#AA0982">302</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">destination: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/place</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  redirects: {    &#x27;/other&#x27;: {      status: 302,      destination: &#x27;/place&#x27;,    },  }})"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="output">output</h3><a class="sl-anchor-link" href="#output"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “output”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">'static' | 'server'</code><br>
<strong>Default:</strong> <code dir="auto">'static'</code></p></p>
<p>Specifies the output target for builds.</p>
<ul>
<li><code dir="auto">'static'</code> - Prerender all your pages by default, outputting a completely static site if none of your pages opt out of prerendering.</li>
<li><code dir="auto">'server'</code> - Use server-side rendering (SSR) for all pages by default, always outputting a server-rendered site.</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">output: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">static</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;;export default defineConfig({  output: &#x27;static&#x27;})"><div></div></button></div></figure></div>
<p><strong>See Also:</strong></p>
<ul>
<li>adapter</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="adapter">adapter</h3><a class="sl-anchor-link" href="#adapter"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “adapter”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">AstroIntegration</code></p></p>
<p>Deploy to your favorite server, serverless, or edge host with build adapters. Import one of our first-party adapters (<a href="/en/guides/integrations-guide/cloudflare/">Cloudflare</a>, <a href="/en/guides/integrations-guide/netlify/">Netlify</a>, <a href="/en/guides/integrations-guide/node/">Node.js</a>, <a href="/en/guides/integrations-guide/vercel/">Vercel</a>) or explore <a href="https://astro.build/integrations/2/?search=&#x26;categories%5B%5D=adapters">community adapters</a> to enable on-demand rendering in your Astro project.</p>
<p>See our <a href="/en/guides/on-demand-rendering/">on-demand rendering guide</a> for more on Astro’s server rendering options.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> netlify </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">@astrojs/netlify</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#919F9F;--1:#5D6376">// Example: Build for Netlify serverless deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">adapter: </span><span style="--0:#82AAFF;--1:#3B61B0">netlify</span><span style="--0:#D6DEEB;--1:#403F53">(),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import netlify from &#x27;@astrojs/netlify&#x27;;{  // Example: Build for Netlify serverless deployment  adapter: netlify(),}"><div></div></button></div></figure></div>
<p><strong>See Also:</strong></p>
<ul>
<li>output</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="integrations">integrations</h3><a class="sl-anchor-link" href="#integrations"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “integrations”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">AstroIntegration[]</code></p></p>
<p>Extend Astro with custom integrations. Integrations are your one-stop-shop for adding framework support (like Solid.js), new features (like sitemaps), and new libraries (like Partytown).</p>
<p>Read our <a href="/en/guides/integrations-guide/">Integrations Guide</a> for help getting started with Astro Integrations.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> react </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">@astrojs/react</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> mdx </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">@astrojs/mdx</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#919F9F;--1:#5D6376">// Example: Add React + MDX support to Astro</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">integrations: [</span><span style="--0:#82AAFF;--1:#3B61B0">react</span><span style="--0:#D6DEEB;--1:#403F53">(), </span><span style="--0:#82AAFF;--1:#3B61B0">mdx</span><span style="--0:#D6DEEB;--1:#403F53">()]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import react from &#x27;@astrojs/react&#x27;;import mdx from &#x27;@astrojs/mdx&#x27;;{  // Example: Add React + MDX support to Astro  integrations: [react(), mdx()]}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="root">root</h3><a class="sl-anchor-link" href="#root"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “root”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>CLI:</strong> <code dir="auto">--root</code><br>
<strong>Default:</strong> <code dir="auto">"."</code> (current working directory)</p></p>
<p>You should only provide this option if you run the <code dir="auto">astro</code> CLI commands in a directory other than the project root directory. Usually, this option is provided via the CLI instead of the Astro config file, since Astro needs to know your project root before it can locate your config file.</p>
<p>If you provide a relative path (ex: <code dir="auto">--root: './my-project'</code>) Astro will resolve it against your current working directory.</p>
<div class="sl-heading-wrapper level-h4"><h4 id="examples">Examples</h4><a class="sl-anchor-link" href="#examples"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Examples”</span></a></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">root: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./my-project-directory</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  root: &#x27;./my-project-directory&#x27;}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">$</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">astro</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">build</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--root</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">./my-project-directory</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ astro build --root ./my-project-directory"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="srcdir">srcDir</h3><a class="sl-anchor-link" href="#srcdir"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “srcDir”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">"./src"</code></p></p>
<p>Set the directory that Astro will read your site from.</p>
<p>The value can be either an absolute file system path or a path relative to the project root.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">srcDir: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./www</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  srcDir: &#x27;./www&#x27;}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="publicdir">publicDir</h3><a class="sl-anchor-link" href="#publicdir"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “publicDir”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">"./public"</code></p></p>
<p>Set the directory for your static assets. Files in this directory are served at <code dir="auto">/</code> during dev and copied to your build directory during build. These files are always served or copied as-is, without transform or bundling.</p>
<p>The value can be either an absolute file system path or a path relative to the project root.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">publicDir: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./my-custom-publicDir-directory</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  publicDir: &#x27;./my-custom-publicDir-directory&#x27;}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="outdir">outDir</h3><a class="sl-anchor-link" href="#outdir"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “outDir”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">"./dist"</code></p></p>
<p>Set the directory that <code dir="auto">astro build</code> writes your final build to.</p>
<p>The value can be either an absolute file system path or a path relative to the project root.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">outDir: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./my-custom-build-directory</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  outDir: &#x27;./my-custom-build-directory&#x27;}"><div></div></button></div></figure></div>
<p><strong>See Also:</strong></p>
<ul>
<li>build.server</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="cachedir">cacheDir</h3><a class="sl-anchor-link" href="#cachedir"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “cacheDir”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">"./node_modules/.astro"</code></p></p>
<p>Set the directory for caching build artifacts. Files in this directory will be used in subsequent builds to speed up the build time.</p>
<p>The value can be either an absolute file system path or a path relative to the project root.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">cacheDir: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./my-custom-cache-directory</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  cacheDir: &#x27;./my-custom-cache-directory&#x27;}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="compresshtml">compressHTML</h3><a class="sl-anchor-link" href="#compresshtml"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “compressHTML”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean</code><br>
<strong>Default:</strong> <code dir="auto">true</code></p></p>
<p>This is an option to minify your HTML output and reduce the size of your HTML files.</p>
<p>By default, Astro removes whitespace from your HTML, including line breaks, from <code dir="auto">.astro</code> components in a lossless manner.
Some whitespace may be kept as needed to preserve the visual rendering of your HTML. This occurs both in development mode and in the final build.</p>
<p>To disable HTML compression, set <code dir="auto">compressHTML</code> to false.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">compressHTML: </span><span style="--0:#FF6A83;--1:#A24848">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  compressHTML: false}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="scopedstylestrategy">scopedStyleStrategy</h3><a class="sl-anchor-link" href="#scopedstylestrategy"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “scopedStyleStrategy”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'where' | 'class' | 'attribute'"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'attribute'"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.4"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Specify the strategy used for scoping styles within Astro components. Choose from:</p>
<ul>
<li><code dir="auto">'where'</code> 		- Use <code dir="auto">:where</code> selectors, causing no specificity increase.</li>
<li><code dir="auto">'class'</code> 		- Use class-based selectors, causing a +1 specificity increase.</li>
<li><code dir="auto">'attribute'</code> 	- Use <code dir="auto">data-</code> attributes, causing a +1 specificity increase.</li>
</ul>
<p>Using <code dir="auto">'class'</code> is helpful when you want to ensure that element selectors within an Astro component override global style defaults (e.g. from a global stylesheet).
Using <code dir="auto">'where'</code> gives you more control over specificity, but requires that you use higher-specificity selectors, layers, and other tools to control which selectors are applied.
Using <code dir="auto">'attribute'</code> is useful when you are manipulating the <code dir="auto">class</code> attribute of elements and need to avoid conflicts between your own styling logic and Astro’s application of styles.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="security">security</h3><a class="sl-anchor-link" href="#security"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “security”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: 'Record<"checkOrigin", boolean> | undefined'
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{checkOrigin: true}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.9.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Enables security measures for an Astro website.</p>\n<p>These features only exist for pages rendered on demand (SSR) using <code dir="auto">server</code> mode or pages that opt out of prerendering in <code dir="auto">static</code> mode.</p>\n<p>By default, Astro will automatically check that the “origin” header\nmatches the URL sent by each request in on-demand rendered pages. You can\ndisable this behavior by setting <code dir="auto">checkOrigin</code> to <code dir="auto">false</code>:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">output: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">server</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">security: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">checkOrigin: </span><span style="--0:#FF6A83;--1:#A24848">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  output: &#x22;server&#x22;,  security: {    checkOrigin: false  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h4"><h4 id="securitycheckorigin">security.checkOrigin</h4><a class="sl-anchor-link" href="#securitycheckorigin"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “security.checkOrigin”</span></a></div>\n'
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
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.9.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Performs a check that the “origin” header, automatically passed by all modern browsers, matches the URL sent by each <code dir="auto">Request</code>. This is used to provide Cross-Site Request Forgery (CSRF) protection.</p>
<p>The “origin” check is executed only for pages rendered on demand, and only for the requests <code dir="auto">POST</code>, <code dir="auto">PATCH</code>, <code dir="auto">DELETE</code> and <code dir="auto">PUT</code> with
one of the following <code dir="auto">content-type</code> headers: <code dir="auto">'application/x-www-form-urlencoded'</code>, <code dir="auto">'multipart/form-data'</code>, <code dir="auto">'text/plain'</code>.</p>
<p>If the “origin” header doesn’t match the <code dir="auto">pathname</code> of the request, Astro will return a 403 status code and will not render the page.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="vite">vite</h3><a class="sl-anchor-link" href="#vite"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “vite”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">ViteUserConfig</code></p></p>
<p>Pass additional configuration options to Vite. Useful when Astro doesn’t support some advanced configuration that you may need.</p>
<p>View the full <code dir="auto">vite</code> configuration object documentation on <a href="https://vite.dev/config/">vite.dev</a>.</p>
<div class="sl-heading-wrapper level-h4"><h4 id="examples-1">Examples</h4><a class="sl-anchor-link" href="#examples-1"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Examples”</span></a></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">vite: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">ssr: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Example: Force a broken package to skip SSR processing, if needed</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">external: [</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">broken-npm-package</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  vite: {    ssr: {      // Example: Force a broken package to skip SSR processing, if needed      external: [&#x27;broken-npm-package&#x27;],    }  }}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">vite: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Add custom vite plugins directly to your Astro project</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">plugins: [</span><span style="--0:#82AAFF;--1:#3B61B0">myPlugin</span><span style="--0:#D6DEEB;--1:#403F53">()],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  vite: {    // Example: Add custom vite plugins directly to your Astro project    plugins: [myPlugin()],  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="build-options">Build Options</h2><a class="sl-anchor-link" href="#build-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Build Options”</span></a></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildformat">build.format</h3><a class="sl-anchor-link" href="#buildformat"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.format”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">('file' | 'directory' | 'preserve')</code><br>
<strong>Default:</strong> <code dir="auto">'directory'</code></p></p>
<p>Control the output file format of each page. This value may be set by an adapter for you.</p>
<ul>
<li><code dir="auto">'file'</code>: Astro will generate an HTML file named for each page route. (e.g. <code dir="auto">src/pages/about.astro</code> and <code dir="auto">src/pages/about/index.astro</code> both build the file <code dir="auto">/about.html</code>)</li>
<li><code dir="auto">'directory'</code>: Astro will generate a directory with a nested <code dir="auto">index.html</code> file for each page. (e.g. <code dir="auto">src/pages/about.astro</code> and <code dir="auto">src/pages/about/index.astro</code> both build the file <code dir="auto">/about/index.html</code>)</li>
<li><code dir="auto">'preserve'</code>: Astro will generate HTML files exactly as they appear in your source folder. (e.g. <code dir="auto">src/pages/about.astro</code> builds <code dir="auto">/about.html</code> and <code dir="auto">src/pages/about/index.astro</code> builds the file <code dir="auto">/about/index.html</code>)</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Generate \`page.html\` instead of \`page/index.html\` during build.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">format: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">file</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    // Example: Generate &#x60;page.html&#x60; instead of &#x60;page/index.html&#x60; during build.    format: &#x27;file&#x27;  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h4"><h4 id="effect-on-astrourl">Effect on Astro.url</h4><a class="sl-anchor-link" href="#effect-on-astrourl"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Effect on Astro.url”</span></a></div>
<p>Setting <code dir="auto">build.format</code> controls what <code dir="auto">Astro.url</code> is set to during the build. When it is:</p>
<ul>
<li><code dir="auto">directory</code> - The <code dir="auto">Astro.url.pathname</code> will include a trailing slash to mimic folder behavior. (e.g. <code dir="auto">/foo/</code>)</li>
<li><code dir="auto">file</code> - The <code dir="auto">Astro.url.pathname</code> will include <code dir="auto">.html</code>. (e.g. <code dir="auto">/foo.html</code>)</li>
</ul>
<p>This means that when you create relative URLs using <code dir="auto">new URL('./relative', Astro.url)</code>, you will get consistent behavior between dev and build.</p>
<p>To prevent inconsistencies with trailing slash behaviour in dev, you can restrict the <a href="#trailingslash"><code dir="auto">trailingSlash</code> option</a> to <code dir="auto">'always'</code> or <code dir="auto">'never'</code> depending on your build format:</p>
<ul>
<li><code dir="auto">directory</code> - Set <code dir="auto">trailingSlash: 'always'</code></li>
<li><code dir="auto">file</code> - Set <code dir="auto">trailingSlash: 'never'</code></li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="buildclient">build.client</h3><a class="sl-anchor-link" href="#buildclient"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.client”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">'./client'</code></p></p>
<p>Controls the output directory of your client-side CSS and JavaScript when building a website with server-rendered pages.
<code dir="auto">outDir</code> controls where the code is built to.</p>
<p>This value is relative to the <code dir="auto">outDir</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">output: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">server</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">client: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./client</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  output: &#x27;server&#x27;,  build: {    client: &#x27;./client&#x27;  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildserver">build.server</h3><a class="sl-anchor-link" href="#buildserver"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.server”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">'./server'</code></p></p>
<p>Controls the output directory of server JavaScript when building to SSR.</p>
<p>This value is relative to the <code dir="auto">outDir</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">server: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">./server</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    server: &#x27;./server&#x27;  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildassets">build.assets</h3><a class="sl-anchor-link" href="#buildassets"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.assets”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'_astro'"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Specifies the directory in the build output where Astro-generated assets (bundled JS and CSS for example) should live.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">assets: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">_custom</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    assets: &#x27;_custom&#x27;  }}"><div></div></button></div></figure></div>
<p><strong>See Also:</strong></p>
<ul>
<li>outDir</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="buildassetsprefix">build.assetsPrefix</h3><a class="sl-anchor-link" href="#buildassetsprefix"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.assetsPrefix”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string | Record<string, string>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "undefined"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Specifies the prefix for Astro-generated asset links. This can be used if assets are served from a different domain than the current site.</p>
<p>This requires uploading the assets in your local <code dir="auto">./dist/_astro</code> folder to a corresponding <code dir="auto">/_astro/</code> folder on the remote domain.
To rename the <code dir="auto">_astro</code> path, specify a new directory in <code dir="auto">build.assets</code>.</p>
<p>To fetch all assets uploaded to the same domain (e.g. <code dir="auto">https://cdn.example.com/_astro/...</code>), set <code dir="auto">assetsPrefix</code> to the root domain as a string (regardless of your <code dir="auto">base</code> configuration):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">assetsPrefix: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://cdn.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    assetsPrefix: &#x27;https://cdn.example.com&#x27;  }}"><div></div></button></div></figure></div>
<p><strong>Added in:</strong> <code dir="auto">astro@4.5.0</code></p>
<p>You can also pass an object to <code dir="auto">assetsPrefix</code> to specify a different domain for each file type.
In this case, a <code dir="auto">fallback</code> property is required and will be used by default for any other files.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">assetsPrefix: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">js</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://js.cdn.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">mjs</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://js.cdn.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">css</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://css.cdn.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">fallback</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https://cdn.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    assetsPrefix: {      &#x27;js&#x27;: &#x27;https://js.cdn.example.com&#x27;,      &#x27;mjs&#x27;: &#x27;https://js.cdn.example.com&#x27;,      &#x27;css&#x27;: &#x27;https://css.cdn.example.com&#x27;,      &#x27;fallback&#x27;: &#x27;https://cdn.example.com&#x27;    }  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildserverentry">build.serverEntry</h3><a class="sl-anchor-link" href="#buildserverentry"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.serverEntry”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br>
<strong>Default:</strong> <code dir="auto">'entry.mjs'</code></p></p>
<p>Specifies the file name of the server entrypoint when building to SSR.
This entrypoint is usually dependent on which host you are deploying to and
will be set by your adapter for you.</p>
<p>Note that it is recommended that this file ends with <code dir="auto">.mjs</code> so that the runtime
detects that the file is a JavaScript module.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">serverEntry: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">main.mjs</span><span style="--0:#D9F5DD;--1:#111111">'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    serverEntry: &#x27;main.mjs&#x27;  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildredirects">build.redirects</h3><a class="sl-anchor-link" href="#buildredirects"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.redirects”</span></a></div>
`
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
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Specifies whether redirects will be output to HTML during the build.
This option only applies to <code dir="auto">output: 'static'</code> mode; in SSR redirects
are treated the same as all responses.</p>
<p>This option is mostly meant to be used by adapters that have special
configuration files for redirects and do not need/want HTML based redirects.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">redirects: </span><span style="--0:#FF6A83;--1:#A24848">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    redirects: false  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildinlinestylesheets">build.inlineStylesheets</h3><a class="sl-anchor-link" href="#buildinlinestylesheets"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.inlineStylesheets”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'always' | 'auto' | 'never'"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "auto"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Control whether project styles are sent to the browser in a separate css file or inlined into <code dir="auto">&#x3C;style></code> tags. Choose from the following options:</p>
<ul>
<li><code dir="auto">'always'</code> - project styles are inlined into <code dir="auto">&#x3C;style></code> tags</li>
<li><code dir="auto">'auto'</code> - only stylesheets smaller than <code dir="auto">ViteConfig.build.assetsInlineLimit</code> (default: 4kb) are inlined. Otherwise, project styles are sent in external stylesheets.</li>
<li><code dir="auto">'never'</code> - project styles are sent in external stylesheets</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">inlineStylesheets: </span><span style="--0:#D6DEEB;--1:#403F53">\`</span><span style="--0:#ECC48D;--1:#3B61B0">never</span><span style="--0:#D6DEEB;--1:#403F53">\`</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    inlineStylesheets: &#x60;never&#x60;,  },}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="buildconcurrency">build.concurrency</h3><a class="sl-anchor-link" href="#buildconcurrency"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “build.concurrency”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "number"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "1"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.16.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>The number of pages to build in parallel.</p>
<p><strong>In most cases, you should not change the default value of <code dir="auto">1</code>.</strong></p>
<p>Use this option only when other attempts to reduce the overall rendering time (e.g. batch or cache long running tasks like fetch calls or data access) are not possible or are insufficient.
If the number is set too high, page rendering may slow down due to insufficient memory resources and because JS is single-threaded.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">build: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">concurrency: </span><span style="--0:#F78C6C;--1:#AA0982">2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  build: {    concurrency: 2  }}"><div></div></button></div></figure></div>
<aside aria-label="Breaking changes possible" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z"></path></svg>Breaking changes possible</p><div class="starlight-aside__content"><p>This feature is stable and is not considered experimental. However, this feature is only intended to address difficult performance issues, and breaking changes may occur in a <a href="/en/upgrade-astro/#semantic-versioning">minor release</a> to keep this option as performant as possible. Please check the <a href="https://github.com/withastro/astro/blob/refs/heads/next/packages/astro/CHANGELOG.md">Astro CHANGELOG</a> for every minor release if you are using this feature.</p></div></aside>
<div class="sl-heading-wrapper level-h2"><h2 id="server-options">Server Options</h2><a class="sl-anchor-link" href="#server-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Server Options”</span></a></div>
<p>Customize the Astro dev server, used by both <code dir="auto">astro dev</code> and <code dir="auto">astro preview</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">server: { port: </span><span style="--0:#F78C6C;--1:#AA0982">1234</span><span style="--0:#D6DEEB;--1:#403F53">, host: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  server: { port: 1234, host: true}}"><div></div></button></div></figure></div>
<p>To set different configuration based on the command run (“dev”, “preview”) a function can also be passed to this configuration option.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#919F9F;--1:#5D6376">// Example: Use the function syntax to customize based on command</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">server: </span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D6DEEB">{ </span><span style="--0:#D7DBE0">command</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--1:#403F53"><span style="--0:#D6DEEB"> ({ port: </span><span style="--0:#D7DBE0">command</span><span style="--0:#D6DEEB"> </span></span><span style="--0:#C792EA;--1:#8844AE">===</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">dev</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">?</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">4321</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">4000</span><span style="--0:#D6DEEB;--1:#403F53"> })</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  // Example: Use the function syntax to customize based on command  server: ({ command }) => ({ port: command === &#x27;dev&#x27; ? 4321 : 4000 })}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="serverhost">server.host</h3><a class="sl-anchor-link" href="#serverhost"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “server.host”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string | boolean"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "false"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "0.24.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Set which network IP addresses the server should listen on (i.e. non-localhost IPs).</p>\n<ul>\n<li><code dir="auto">false</code> - do not expose on a network IP address</li>\n<li><code dir="auto">true</code> - listen on all addresses, including LAN and public addresses</li>\n<li><code dir="auto">[custom-address]</code> - expose on a network IP address at <code dir="auto">[custom-address]</code> (ex: <code dir="auto">192.168.0.1</code>)</li>\n</ul>\n<div class="sl-heading-wrapper level-h3"><h3 id="serverport">server.port</h3><a class="sl-anchor-link" href="#serverport"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “server.port”</span></a></div>\n<p><p><strong>Type:</strong> <code dir="auto">number</code><br>\n<strong>Default:</strong> <code dir="auto">4321</code></p></p>\n<p>Set which port the server should listen on.</p>\n<p>If the given port is already in use, Astro will automatically try the next available port.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">server: { port: </span><span style="--0:#F78C6C;--1:#AA0982">8080</span><span style="--0:#D6DEEB;--1:#403F53"> }</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  server: { port: 8080 }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="serverallowedhosts">server.allowedHosts</h3><a class="sl-anchor-link" href="#serverallowedhosts"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “server.allowedHosts”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Array<string> | true"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "[]"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.4.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>A list of hostnames that Astro is allowed to respond to. When the value is set to <code dir="auto">true</code>, any
hostname is allowed.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">server: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">allowedHosts: [</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">staging.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">qa.example.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  server: {    allowedHosts: [&#x27;staging.example.com&#x27;, &#x27;qa.example.com&#x27;]  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="serveropen">server.open</h3><a class="sl-anchor-link" href="#serveropen"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “server.open”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string | boolean"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "false"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.1.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Controls whether the dev server should open in your browser window on startup.</p>\n<p>Pass a full URL string (e.g. “<a href="http://example.com">http://example.com</a>”) or a pathname (e.g. “/about”) to specify the URL to open.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">server: { open: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">/about</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53"> }</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  server: { open: &#x22;/about&#x22; }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="serverheaders">server.headers</h3><a class="sl-anchor-link" href="#serverheaders"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “server.headers”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "OutgoingHttpHeaders"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "1.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Set custom HTTP response headers to be sent in <code dir="auto">astro dev</code> and <code dir="auto">astro preview</code>.</p>\n<div class="sl-heading-wrapper level-h2"><h2 id="session-options">Session Options</h2><a class="sl-anchor-link" href="#session-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Session Options”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "5.7.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Configures session storage for your Astro project. This is used to store session data in a persistent way, so that it can be accessed across different requests.
Some adapters may provide a default session driver, but you can override it with your own configuration.</p>
<p>See <a href="/en/guides/sessions/">the sessions guide</a> for more information.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// The name of the Unstorage driver</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">driver: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">redis</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// The required options depend on the driver</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">options: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">url: </span><span style="--0:#7FDBCA;--1:#096E72">process</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">REDIS_URL</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">ttl: </span><span style="--0:#F78C6C;--1:#AA0982">3600</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#919F9F;--1:#5D6376">// 1 hour</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  {    session: {      // The name of the Unstorage driver      driver: &#x27;redis&#x27;,      // The required options depend on the driver      options: {        url: process.env.REDIS_URL,      },      ttl: 3600, // 1 hour    }  }"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="sessiondriver">session.driver</h3><a class="sl-anchor-link" href="#sessiondriver"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “session.driver”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string | undefined"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The Unstorage driver to use for session storage.  The <a href="/en/guides/integrations-guide/node/#sessions">Node</a>,\n<a href="/en/guides/integrations-guide/cloudflare/#sessions">Cloudflare</a>, and\n<a href="/en/guides/integrations-guide/netlify/#sessions">Netlify</a> adapters automatically configure a default driver for you,\nbut you can specify your own if you would prefer or if you are using an adapter that does not provide one.</p>\n<p>The value is the “Driver name” from the <a href="https://unstorage.unjs.io/drivers">Unstorage driver documentation</a>.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">adapter: </span><span style="--0:#82AAFF;--1:#3B61B0">vercel</span><span style="--0:#D6DEEB;--1:#403F53">(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">driver: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">redis</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  adapter: vercel(),  session: {    driver: &#x22;redis&#x22;,  },}"><div></div></button></div></figure></div>\n<aside aria-label="Note" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Note</p><div class="starlight-aside__content"><p>Some drivers may need extra packages to be installed. Some drivers may also require environment variables or credentials to be set. See the <a href="https://unstorage.unjs.io/drivers">Unstorage documentation</a> for more information.</p></div></aside>\n<div class="sl-heading-wrapper level-h3"><h3 id="sessionoptions">session.options</h3><a class="sl-anchor-link" href="#sessionoptions"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “session.options”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Record<string, unknown> | undefined"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The driver-specific options to use for session storage. The options depend on the driver you are using. See the <a href="https://unstorage.unjs.io/drivers">Unstorage documentation</a>\nfor more information on the options available for each driver.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">driver: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">redis</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">options: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">       </span></span><span style="--0:#D6DEEB;--1:#403F53">url: </span><span style="--0:#7FDBCA;--1:#075457">process</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">REDIS_URL</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{   session: {     driver: &#x22;redis&#x22;,     options: {       url: process.env.REDIS_URL     },   }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="sessioncookie">session.cookie</h3><a class="sl-anchor-link" href="#sessioncookie"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “session.cookie”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string | AstroCookieSetOptions | undefined"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: '{ name: "astro-session", sameSite: "lax", httpOnly: true, secure: true }'
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The session cookie configuration. If set to a string, it will be used as the cookie name.\nAlternatively, you can pass an object with additional options. These will be merged with the defaults.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">   </span><span style="--0:#aeb8b8;--1:#474c5a">// If set to a string, it will be used as the cookie name.</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">cookie: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">my-session-cookie</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{ session: {   // If set to a string, it will be used as the cookie name.   cookie: &#x22;my-session-cookie&#x22;, }}"><div></div></button></div></figure></div>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// If set to an object, it will be used as the cookie options.</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">cookie: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">name: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">my-session-cookie</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">sameSite: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">lax</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">secure: </span><span style="--0:#ff99aa;--1:#7a3636">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{ session: {   // If set to an object, it will be used as the cookie options.   cookie: {     name: &#x22;my-session-cookie&#x22;,     sameSite: &#x22;lax&#x22;,     secure: true,   } }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="sessionttl">session.ttl</h3><a class="sl-anchor-link" href="#sessionttl"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “session.ttl”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "number | undefined"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", Infinity, createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>An optional default time-to-live expiration period for session values, in seconds.</p>
<p>By default, session values persist until they are deleted or the session is destroyed, and do not automatically expire because a particular amount of time has passed.
Set <code dir="auto">session.ttl</code> to add a default expiration period for your session values. Passing a <code dir="auto">ttl</code> option to <a href="/en/reference/api-reference/#set"><code dir="auto">session.set()</code></a> will override the global default
for that individual entry.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">session: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">   </span><span style="--0:#aeb8b8;--1:#474c5a">// Set a default expiration period of 1 hour (3600 seconds)</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">ttl: </span><span style="--0:#f8a186;--1:#8f086e">3600</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{ session: {   // Set a default expiration period of 1 hour (3600 seconds)   ttl: 3600, }}"><div></div></button></div></figure></div>
<aside aria-label="Note" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Note</p><div class="starlight-aside__content"><p>Setting a value for <code dir="auto">ttl</code> does not automatically delete the value from storage after the time limit has passed.</p><p>Values from storage will only be deleted when there is an attempt to access them after the <code dir="auto">ttl</code> period has expired. At this time, the session value will be undefined and only then will the value be deleted.</p><p>Individual drivers may also support a <code dir="auto">ttl</code> option that will automatically delete sessions after the specified time. See your chosen driver’s documentation for more information.</p></div></aside>
<div class="sl-heading-wrapper level-h2"><h2 id="dev-toolbar-options">Dev Toolbar Options</h2><a class="sl-anchor-link" href="#dev-toolbar-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Dev Toolbar Options”</span></a></div>
<div class="sl-heading-wrapper level-h3"><h3 id="devtoolbarenabled">devToolbar.enabled</h3><a class="sl-anchor-link" href="#devtoolbarenabled"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “devToolbar.enabled”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean</code><br>
<strong>Default:</strong> <code dir="auto">true</code></p></p>
<p>Whether to enable the Astro Dev Toolbar. This toolbar allows you to inspect your page islands, see helpful audits on performance and accessibility, and more.</p>
<p>This option is scoped to the entire project, to only disable the toolbar for yourself, run <code dir="auto">npm run astro preferences disable devToolbar</code>. To disable the toolbar for all your Astro projects, run <code dir="auto">npm run astro preferences disable devToolbar --global</code>.</p>
<div class="sl-heading-wrapper level-h2"><h2 id="prefetch-options">Prefetch Options</h2><a class="sl-anchor-link" href="#prefetch-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Prefetch Options”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean | object</code></p></p>
<p>Enable prefetching for links on your site to provide faster page transitions.
(Enabled by default on pages using the <code dir="auto">&#x3C;ClientRouter /></code> router. Set <code dir="auto">prefetch: false</code> to opt out of this behaviour.)</p>
<p>This configuration automatically adds a prefetch script to every page in the project
giving you access to the <code dir="auto">data-astro-prefetch</code> attribute.
Add this attribute to any <code dir="auto">&#x3C;a /></code> link on your page to enable prefetching for that page.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="html"><code><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">href</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">/about</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">data-astro-prefetch</span><span style="--0:#7FDBCA;--1:#8844AE">></span><span style="--0:#D6DEEB;--1:#403F53">About</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<a href=&#x22;/about&#x22; data-astro-prefetch>About</a>"><div></div></button></div></figure></div>
<p>Further customize the default prefetching behavior using the <a href="#prefetchdefaultstrategy"><code dir="auto">prefetch.defaultStrategy</code></a> and <a href="#prefetchprefetchall"><code dir="auto">prefetch.prefetchAll</code></a> options.</p>
<p>See the <a href="/en/guides/prefetch/">Prefetch guide</a> for more information.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="prefetchprefetchall">prefetch.prefetchAll</h3><a class="sl-anchor-link" href="#prefetchprefetchall"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “prefetch.prefetchAll”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean</code></p></p>
<p>Enable prefetching for all links, including those without the <code dir="auto">data-astro-prefetch</code> attribute.
This value defaults to <code dir="auto">true</code> when using the <code dir="auto">&#x3C;ClientRouter /></code> router. Otherwise, the default value is <code dir="auto">false</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">prefetch: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">prefetchAll: </span><span style="--0:#FF6A83;--1:#A24848">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prefetch: {  prefetchAll: true}"><div></div></button></div></figure></div>
<p>When set to <code dir="auto">true</code>, you can disable prefetching individually by setting <code dir="auto">data-astro-prefetch="false"</code> on any individual links.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="html"><code><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">href</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">/about</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">data-astro-prefetch</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">false</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8844AE">></span><span style="--0:#D6DEEB;--1:#403F53">About</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<a href=&#x22;/about&#x22; data-astro-prefetch=&#x22;false&#x22;>About</a>"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="prefetchdefaultstrategy">prefetch.defaultStrategy</h3><a class="sl-anchor-link" href="#prefetchdefaultstrategy"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “prefetch.defaultStrategy”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">'tap' | 'hover' | 'viewport' | 'load'</code><br>
<strong>Default:</strong> <code dir="auto">'hover'</code></p></p>
<p>The default prefetch strategy to use when the <code dir="auto">data-astro-prefetch</code> attribute is set on a link with no value.</p>
<ul>
<li><code dir="auto">'tap'</code>: Prefetch just before you click on the link.</li>
<li><code dir="auto">'hover'</code>: Prefetch when you hover over or focus on the link. (default)</li>
<li><code dir="auto">'viewport'</code>: Prefetch as the links enter the viewport.</li>
<li><code dir="auto">'load'</code>: Prefetch all links on the page after the page is loaded.</li>
</ul>
<p>You can override this default value and select a different strategy for any individual link by setting a value on the attribute.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="html"><code><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">href</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">/about</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">data-astro-prefetch</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">viewport</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8844AE">></span><span style="--0:#D6DEEB;--1:#403F53">About</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<a href=&#x22;/about&#x22; data-astro-prefetch=&#x22;viewport&#x22;>About</a>"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="image-options">Image Options</h2><a class="sl-anchor-link" href="#image-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Image Options”</span></a></div>
<div class="sl-heading-wrapper level-h3"><h3 id="imageendpoint">image.endpoint</h3><a class="sl-anchor-link" href="#imageendpoint"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.endpoint”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Object"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{route: '/_image', entrypoint: undefined}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.1.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Set the endpoint to use for image optimization in dev and SSR. The <code dir="auto">entrypoint</code> property can be set to <code dir="auto">undefined</code> to use the default image endpoint.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">image: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Use a custom image endpoint at \`/custom_endpoint\`</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">endpoint: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">       </span></span><span style="--0:#D6DEEB;--1:#403F53">route: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/custom_endpoint</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">       </span></span><span style="--0:#D6DEEB;--1:#403F53">entrypoint: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">src/my_endpoint.ts</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  image: {    // Example: Use a custom image endpoint at &#x60;/custom_endpoint&#x60;    endpoint: {       route: &#x27;/custom_endpoint&#x27;,       entrypoint: &#x27;src/my_endpoint.ts&#x27;,    },  },}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="imageservice">image.service</h3><a class="sl-anchor-link" href="#imageservice"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.service”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Object"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{entrypoint: 'astro/assets/services/sharp', config?: {}}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.1.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Set which image service is used for Astro’s assets support.</p>
<p>The value should be an object with an entrypoint for the image service to use and optionally, a config object to pass to the service.</p>
<p>The service entrypoint can be either one of the included services, or a third-party package.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">image: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Enable the Sharp-based image service with a custom config</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">service: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">       </span></span><span style="--0:#D6DEEB;--1:#403F53">entrypoint: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro/assets/services/sharp</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">       </span></span><span style="--0:#D6DEEB;--1:#403F53">config: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">         </span></span><span style="--0:#D6DEEB;--1:#403F53">limitInputPixels: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  image: {    // Example: Enable the Sharp-based image service with a custom config    service: {       entrypoint: &#x27;astro/assets/services/sharp&#x27;,       config: {         limitInputPixels: false,      },     },  },}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h4"><h4 id="imageserviceconfiglimitinputpixels">image.service.config.limitInputPixels</h4><a class="sl-anchor-link" href="#imageserviceconfiglimitinputpixels"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.service.config.limitInputPixels”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "number | boolean"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.1.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Whether or not to limit the size of images that the Sharp image service will process.</p>\n<p>Set <code dir="auto">false</code> to bypass the default image size limit for the Sharp image service and process large images.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="imagedomains">image.domains</h3><a class="sl-anchor-link" href="#imagedomains"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.domains”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Array<string>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "[]"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.10.10"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Defines a list of permitted image source domains for remote image optimization. No other remote images will be optimized by Astro.</p>
<p>This option requires an array of individual domain names as strings. Wildcards are not permitted. Instead, use <a href="#imageremotepatterns"><code dir="auto">image.remotePatterns</code></a> to define a list of allowed source URL patterns.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">image: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Allow remote image optimization from a single domain</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">domains: [</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro.build</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  image: {    // Example: Allow remote image optimization from a single domain    domains: [&#x27;astro.build&#x27;],  },}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="imageremotepatterns">image.remotePatterns</h3><a class="sl-anchor-link" href="#imageremotepatterns"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.remotePatterns”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Array<RemotePattern>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "[]"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.10.10"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Defines a list of permitted image source URL patterns for remote image optimization.</p>
<p><code dir="auto">remotePatterns</code> can be configured with four properties:</p>
<ol>
<li>protocol</li>
<li>hostname</li>
<li>port</li>
<li>pathname</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">image: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: allow processing all images from your aws s3 bucket</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">remotePatterns: [{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">protocol: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">https</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">hostname: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">**.amazonaws.com</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  image: {    // Example: allow processing all images from your aws s3 bucket    remotePatterns: [{      protocol: &#x27;https&#x27;,      hostname: &#x27;**.amazonaws.com&#x27;,    }],  },}"><div></div></button></div></figure></div>
<p>You can use wildcards to define the permitted <code dir="auto">hostname</code> and <code dir="auto">pathname</code> values as described below. Otherwise, only the exact values provided will be configured:
<code dir="auto">hostname</code>:</p>
<ul>
<li>Start with ’**.’ to allow all subdomains (‘endsWith’).</li>
<li>Start with ’*.’ to allow only one level of subdomain.</li>
</ul>
<p><code dir="auto">pathname</code>:</p>
<ul>
<li>End with ’/**’ to allow all sub-routes (‘startsWith’).</li>
<li>End with ’/*’ to allow only one level of sub-route.</li>
</ul>
<div class="sl-heading-wrapper level-h3"><h3 id="imageresponsivestyles">image.responsiveStyles</h3><a class="sl-anchor-link" href="#imageresponsivestyles"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.responsiveStyles”</span></a></div>
`
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
        v: "5.10.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Whether to automatically add global styles for responsive images. You should enable this option unless you are styling the images yourself.</p>\n<p>This option is only used when <code dir="auto">layout</code> is set to <code dir="auto">constrained</code>, <code dir="auto">full-width</code>, or <code dir="auto">fixed</code> using the configuration or the <code dir="auto">layout</code> prop on the image component.</p>\n<p>See <a href="/en/guides/images/#responsive-image-styles">the images docs</a> for more information.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="imagelayout">image.layout</h3><a class="sl-anchor-link" href="#imagelayout"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.layout”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "ImageLayout"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "undefined"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.10.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The default layout type for responsive images. Can be overridden by the <code dir="auto">layout</code> prop on the image component.</p>\n<ul>\n<li><code dir="auto">constrained</code> - The image will scale to fit the container, maintaining its aspect ratio, but will not exceed the specified dimensions.</li>\n<li><code dir="auto">fixed</code> - The image will maintain its original dimensions.</li>\n<li><code dir="auto">full-width</code> - The image will scale to fit the container, maintaining its aspect ratio.</li>\n</ul>\n<p>See <a href="/en/reference/modules/astro-assets/#layout">the <code dir="auto">layout</code> component property</a> for more details.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="imageobjectfit">image.objectFit</h3><a class="sl-anchor-link" href="#imageobjectfit"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.objectFit”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "ImageFit"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: '"cover"'
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.10.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code dir="auto">object-fit</code> CSS property value</a> for responsive images. Can be overridden by the <code dir="auto">fit</code> prop on the image component.\nRequires a value for <code dir="auto">layout</code> to be set.</p>\n<p>See <a href="/en/reference/modules/astro-assets/#fit">the <code dir="auto">fit</code> component property</a> for more details.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="imageobjectposition">image.objectPosition</h3><a class="sl-anchor-link" href="#imageobjectposition"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.objectPosition”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: '"center"'
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.10.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The default <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"><code dir="auto">object-position</code> CSS property value</a> for responsive images. Can be overridden by the <code dir="auto">position</code> prop on the image component.\nRequires a value for <code dir="auto">layout</code> to be set.</p>\n<p>See <a href="/en/reference/modules/astro-assets/#position">the <code dir="auto">position</code> component property</a> for more details.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="imagebreakpoints">image.breakpoints</h3><a class="sl-anchor-link" href="#imagebreakpoints"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “image.breakpoints”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Array<number>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "[640, 750, 828, 1080, 1280, 1668, 2048, 2560] | [640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016]"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.10.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>The breakpoints used to generate responsive images. Requires a value for <code dir="auto">layout</code> to be set. The full list is not normally used,
but is filtered according to the source and output size. The defaults used depend on whether a local or remote image service is used. For remote services
the more comprehensive list is used, because only the required sizes are generated. For local services, the list is shorter to reduce the number of images generated.</p>
<div class="sl-heading-wrapper level-h2"><h2 id="markdown-options">Markdown Options</h2><a class="sl-anchor-link" href="#markdown-options"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Markdown Options”</span></a></div>
<div class="sl-heading-wrapper level-h3"><h3 id="markdownshikiconfig">markdown.shikiConfig</h3><a class="sl-anchor-link" href="#markdownshikiconfig"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.shikiConfig”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">Partial&#x3C;ShikiConfig></code></p></p>
<p>Shiki is our default syntax highlighter. You can configure all options via the <code dir="auto">markdown.shikiConfig</code> object:</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">shikiConfig: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Choose from Shiki's built-in themes (or add your own)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// https://shiki.style/themes</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">theme: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">dracula</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Alternatively, provide multiple themes</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// See note below for using dual light/dark themes</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">themes: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">light: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">github-light</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">dark: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">github-dark</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Disable the default colors</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// https://shiki.style/guide/dual-themes#without-default-color</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// (Added in v4.12.0)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultColor: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Add custom languages</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Note: Shiki has countless langs built-in, including .astro!</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// https://shiki.style/languages</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">langs: [],</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Add custom aliases for languages</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// https://shiki.style/guide/load-lang#custom-language-aliases</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">langAlias: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">cjs: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">javascript</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Enable word wrap to prevent horizontal scrolling</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">wrap: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Add custom transformers: https://shiki.style/guide/transformers</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// Find common transformers: https://shiki.style/packages/transformers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">transformers: [],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;;export default defineConfig({  markdown: {    shikiConfig: {      // Choose from Shiki&#x27;s built-in themes (or add your own)      // https://shiki.style/themes      theme: &#x27;dracula&#x27;,      // Alternatively, provide multiple themes      // See note below for using dual light/dark themes      themes: {        light: &#x27;github-light&#x27;,        dark: &#x27;github-dark&#x27;,      },      // Disable the default colors      // https://shiki.style/guide/dual-themes#without-default-color      // (Added in v4.12.0)      defaultColor: false,      // Add custom languages      // Note: Shiki has countless langs built-in, including .astro!      // https://shiki.style/languages      langs: [],      // Add custom aliases for languages      // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages      // https://shiki.style/guide/load-lang#custom-language-aliases      langAlias: {        cjs: &#x22;javascript&#x22;      },      // Enable word wrap to prevent horizontal scrolling      wrap: true,      // Add custom transformers: https://shiki.style/guide/transformers      // Find common transformers: https://shiki.style/packages/transformers      transformers: [],    },  },});"><div></div></button></div></figure></div>
<p>See the <a href="/en/guides/syntax-highlighting/">code syntax highlighting guide</a> for usage and examples.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="markdownsyntaxhighlight">markdown.syntaxHighlight</h3><a class="sl-anchor-link" href="#markdownsyntaxhighlight"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.syntaxHighlight”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">SyntaxHighlightConfig | SyntaxHighlightConfigType | false</code><br>
<strong>Default:</strong> <code dir="auto">{ type: 'shiki', excludeLangs: ['math'] }</code></p></p>
<p>Which syntax highlighter to use for Markdown code blocks (\`\`\`), if any. This determines the CSS classes that Astro will apply to your Markdown code blocks.</p>
<ul>
<li><code dir="auto">shiki</code> - use the <a href="https://shiki.style">Shiki</a> highlighter (<code dir="auto">github-dark</code> theme configured by default)</li>
<li><code dir="auto">prism</code> - use the <a href="https://prismjs.com/">Prism</a> highlighter and <a href="/en/guides/syntax-highlighting/#add-a-prism-stylesheet">provide your own Prism stylesheet</a></li>
<li><code dir="auto">false</code> - do not apply syntax highlighting.</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Switch to use prism for syntax highlighting in Markdown</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">syntaxHighlight: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">prism</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  markdown: {    // Example: Switch to use prism for syntax highlighting in Markdown    syntaxHighlight: &#x27;prism&#x27;,  }}"><div></div></button></div></figure></div>
<p>For more control over syntax highlighting, you can instead specify a configuration object with the properties listed below.</p>
<div class="sl-heading-wrapper level-h4"><h4 id="markdownsyntaxhighlighttype">markdown.syntaxHighlight.type</h4><a class="sl-anchor-link" href="#markdownsyntaxhighlighttype"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.syntaxHighlight.type”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'shiki' | 'prism'"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'shiki'"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The default CSS classes to apply to Markdown code blocks.\n(If no other syntax highlighting configuration is needed, you can instead set <code dir="auto">markdown.syntaxHighlight</code> directly to <code dir="auto">shiki</code>, <code dir="auto">prism</code>, or <code dir="auto">false</code>.)</p>\n<div class="sl-heading-wrapper level-h4"><h4 id="markdownsyntaxhighlightexcludelangs">markdown.syntaxHighlight.excludeLangs</h4><a class="sl-anchor-link" href="#markdownsyntaxhighlightexcludelangs"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.syntaxHighlight.excludeLangs”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Array<string>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "['math']"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>An array of languages to exclude from the default syntax highlighting specified in <code dir="auto">markdown.syntaxHighlight.type</code>.
This can be useful when using tools that create diagrams from Markdown code blocks, such as Mermaid.js and D2.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">syntaxHighlight: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">type: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">shiki</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">excludeLangs: [</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">mermaid</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">math</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;;export default defineConfig({  markdown: {    syntaxHighlight: {      type: &#x27;shiki&#x27;,      excludeLangs: [&#x27;mermaid&#x27;, &#x27;math&#x27;],    },  },});"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="markdownremarkplugins">markdown.remarkPlugins</h3><a class="sl-anchor-link" href="#markdownremarkplugins"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.remarkPlugins”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">RemarkPlugins</code></p></p>
<p>Pass <a href="https://github.com/remarkjs/remark">remark plugins</a> to customize how your Markdown is built. You can import and apply the plugin function (recommended), or pass the plugin name as a string.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> remarkToc </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">remark-toc</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">remarkPlugins: [ [</span><span style="--0:#D7DBE0;--1:#403F53">remarkToc</span><span style="--0:#D6DEEB;--1:#403F53">, { heading: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">contents</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">} ] ]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import remarkToc from &#x27;remark-toc&#x27;;{  markdown: {    remarkPlugins: [ [remarkToc, { heading: &#x22;contents&#x22;} ] ]  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="markdownrehypeplugins">markdown.rehypePlugins</h3><a class="sl-anchor-link" href="#markdownrehypeplugins"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.rehypePlugins”</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">RehypePlugins</code></p></p>
<p>Pass <a href="https://github.com/remarkjs/remark-rehype">rehype plugins</a> to customize how your Markdown’s output HTML is processed. You can import and apply the plugin function (recommended), or pass the plugin name as a string.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { rehypeAccessibleEmojis } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">rehype-accessible-emojis</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">rehypePlugins: [</span><span style="--0:#D7DBE0;--1:#403F53">rehypeAccessibleEmojis</span><span style="--0:#D6DEEB;--1:#403F53">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { rehypeAccessibleEmojis } from &#x27;rehype-accessible-emojis&#x27;;{  markdown: {    rehypePlugins: [rehypeAccessibleEmojis]  }}"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="markdowngfm">markdown.gfm</h3><a class="sl-anchor-link" href="#markdowngfm"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.gfm”</span></a></div>
`
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
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Astro uses <a href="https://github.com/remarkjs/remark-gfm">GitHub-flavored Markdown</a> by default. To disable this, set the <code dir="auto">gfm</code> flag to <code dir="auto">false</code>:</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">gfm: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  markdown: {    gfm: false,  }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="markdownsmartypants">markdown.smartypants</h3><a class="sl-anchor-link" href="#markdownsmartypants"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.smartypants”</span></a></div>\n'
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
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "2.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Astro uses the <a href="https://daringfireball.net/projects/smartypants/">SmartyPants formatter</a> by default. To disable this, set the <code dir="auto">smartypants</code> flag to <code dir="auto">false</code>:</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">smartypants: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  markdown: {    smartypants: false,  }}"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="markdownremarkrehype">markdown.remarkRehype</h3><a class="sl-anchor-link" href="#markdownremarkrehype"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “markdown.remarkRehype”</span></a></div>\n<p><p><strong>Type:</strong> <code dir="auto">RemarkRehype</code></p></p>\n<p>Pass options to <a href="https://github.com/remarkjs/remark-rehype#api">remark-rehype</a>.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">markdown: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// Example: Translate the footnotes text to another language, here are the default English values</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">remarkRehype: { footnoteLabel: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">Footnotes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, footnoteBackLabel: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">Back to reference 1</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">};</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{  markdown: {    // Example: Translate the footnotes text to another language, here are the default English values    remarkRehype: { footnoteLabel: &#x22;Footnotes&#x22;, footnoteBackLabel: &#x22;Back to reference 1&#x22;},  },};"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h2"><h2 id="i18n">i18n</h2><a class="sl-anchor-link" href="#i18n"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "object"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Configures i18n routing and allows you to specify some customization options.</p>\n<p>See our guide for more information on <a href="/en/guides/internationalization/">internationalization in Astro</a></p>\n<div class="sl-heading-wrapper level-h3"><h3 id="i18nlocales">i18n.locales</h3><a class="sl-anchor-link" href="#i18nlocales"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.locales”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Locales"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>A list of all locales supported by the website. This is a required field.</p>
<p>Languages can be listed either as individual codes (e.g. <code dir="auto">['en', 'es', 'pt-br']</code>) or mapped to a shared <code dir="auto">path</code> of codes (e.g.  <code dir="auto">{ path: "english", codes: ["en", "en-US"]}</code>). These codes will be used to determine the URL structure of your deployed site.</p>
<p>No particular language code format or syntax is enforced, but your project folders containing your content files must match exactly the <code dir="auto">locales</code> items in the list. In the case of multiple <code dir="auto">codes</code> pointing to a custom URL path prefix, store your content files in a folder with the same name as the <code dir="auto">path</code> configured.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="i18ndefaultlocale">i18n.defaultLocale</h3><a class="sl-anchor-link" href="#i18ndefaultlocale"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.defaultLocale”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "string"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The default locale of your website/application, that is one of the specified <code dir="auto">locales</code>. This is a required field.</p>\n<p>No particular language format or syntax is enforced, but we suggest using lower-case and hyphens as needed (e.g. “es”, “pt-br”) for greatest compatibility.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="i18nfallback">i18n.fallback</h3><a class="sl-anchor-link" href="#i18nfallback"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.fallback”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Record<string, string>"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>The fallback strategy when navigating to pages that do not exist (e.g. a translated page has not been created).</p>\n<p>Use this object to declare a fallback <code dir="auto">locale</code> route for each language you support. If no fallback is specified, then unavailable pages will return a 404.</p>\n<div class="sl-heading-wrapper level-h5"><h5 id="example">Example</h5><a class="sl-anchor-link" href="#example"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Example”</span></a></div>\n<p>The following example configures your content fallback strategy to redirect unavailable pages in <code dir="auto">/pt-br/</code> to their <code dir="auto">es</code> version, and unavailable pages in <code dir="auto">/fr/</code> to their <code dir="auto">en</code> version. Unavailable <code dir="auto">/es/</code> pages will return a 404.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">pt-br</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">es</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">fallback: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">pt: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">es</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">fr: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;, &#x22;pt-br&#x22;, &#x22;es&#x22;],    fallback: {      pt: &#x22;es&#x22;,      fr: &#x22;en&#x22;    }  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="i18nrouting">i18n.routing</h3><a class="sl-anchor-link" href="#i18nrouting"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.routing”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: 'object | "manual"'
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "object"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Controls the routing strategy to determine your site URLs. Set this based on your folder/URL path configuration for your default language.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">routing: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">prefixDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">redirectToDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">fallbackType: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">redirect</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;],    routing: {      prefixDefaultLocale: false,      redirectToDefaultLocale: true,      fallbackType: &#x22;redirect&#x22;,    }  }})"><div></div></button></div></figure></div>\n<p>Since 4.6.0, this option can also be set to <code dir="auto">manual</code>. When this routing strategy is enabled, Astro will <strong>disable</strong> its i18n middleware and no other <code dir="auto">routing</code> options (e.g. <code dir="auto">prefixDefaultLocale</code>) may be configured. You will be responsible for writing your own routing logic, or executing Astro’s i18n middleware manually alongside your own.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">routing: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">manual</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;],    routing: &#x22;manual&#x22;  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h4"><h4 id="i18nroutingprefixdefaultlocale">i18n.routing.prefixDefaultLocale</h4><a class="sl-anchor-link" href="#i18nroutingprefixdefaultlocale"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.routing.prefixDefaultLocale”</span></a></div>\n'
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
        v: "3.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>When <code dir="auto">false</code>, only non-default languages will display a language prefix.\nThe <code dir="auto">defaultLocale</code> will not show a language prefix and content files do not exist in a localized folder.\nURLs will be of the form <code dir="auto">example.com/[locale]/content/</code> for all non-default languages, but <code dir="auto">example.com/content/</code> for the default locale.</p>\n<p>When <code dir="auto">true</code>, all URLs will display a language prefix.\nURLs will be of the form <code dir="auto">example.com/[locale]/content/</code> for every route, including the default language.\nLocalized folders are used for every language, including the default.</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">pt-br</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">es</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">routing: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">prefixDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;, &#x22;pt-br&#x22;, &#x22;es&#x22;],    routing: {      prefixDefaultLocale: true,    }  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h4"><h4 id="i18nroutingredirecttodefaultlocale">i18n.routing.redirectToDefaultLocale</h4><a class="sl-anchor-link" href="#i18nroutingredirecttodefaultlocale"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.routing.redirectToDefaultLocale”</span></a></div>\n'
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
          children: "true"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Configures whether or not the home URL (<code dir="auto">/</code>) generated by <code dir="auto">src/pages/index.astro</code>\nwill redirect to <code dir="auto">/[defaultLocale]</code> when <code dir="auto">prefixDefaultLocale: true</code> is set.</p>\n<p>Set <code dir="auto">redirectToDefaultLocale: false</code> to disable this automatic redirection at the root of your site:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n:{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">routing: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">prefixDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">redirectToDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({  i18n:{    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;],    routing: {      prefixDefaultLocale: true,      redirectToDefaultLocale: false    }  }})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h4"><h4 id="i18nroutingfallbacktype">i18n.routing.fallbackType</h4><a class="sl-anchor-link" href="#i18nroutingfallbacktype"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.routing.fallbackType”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: '"redirect" | "rewrite"'
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: '"redirect"'
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.15.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>When <a href="#i18nfallback"><code dir="auto">i18n.fallback</code></a> is configured to avoid showing a 404 page for missing page routes, this option controls whether to <a href="/en/guides/routing/#redirects">redirect</a> to the fallback page, or to <a href="/en/guides/routing/#rewrites">rewrite</a> the fallback page’s content in place.</p>\n<p>By default, Astro’s i18n routing creates pages that redirect your visitors to a new destination based on your fallback configuration. The browser will refresh and show the destination address in the URL bar.</p>\n<p>When <code dir="auto">i18n.routing.fallback: "rewrite"</code> is configured, Astro will create pages that render the contents of the fallback page on the original, requested URL.</p>\n<p>With the following configuration, if you have the file <code dir="auto">src/pages/en/about.astro</code> but not <code dir="auto">src/pages/fr/about.astro</code>, the <code dir="auto">astro build</code> command will generate <code dir="auto">dist/fr/about.html</code> with the same content as the <code dir="auto">dist/en/about.html</code> page.\nYour site visitor will see the English version of the page at <code dir="auto">https://example.com/fr/about/</code> and will not be redirected.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">routing: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">prefixDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">fallbackType: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">rewrite</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">fallback: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">fr: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({   i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;],    routing: {      prefixDefaultLocale: false,      fallbackType: &#x22;rewrite&#x22;,    },    fallback: {      fr: &#x22;en&#x22;,    }  },})"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="i18ndomains">i18n.domains</h3><a class="sl-anchor-link" href="#i18ndomains"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “i18n.domains”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Record<string, string>"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "4.3.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>Configures the URL pattern of one or more supported languages to use a custom domain (or sub-domain).</p>
<p>When a locale is mapped to a domain, a <code dir="auto">/[locale]/</code> path prefix will not be used.
However, localized folders within <code dir="auto">src/pages/</code> are still required, including for your configured <code dir="auto">defaultLocale</code>.</p>
<p>Any other locale not configured will default to a localized path-based URL according to your <code dir="auto">prefixDefaultLocale</code> strategy (e.g. <code dir="auto">https://example.com/[locale]/blog</code>).</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">site: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">https://example.com</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">output: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">server</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#919F9F;--1:#5D6376">// required, with no prerendered pages</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">adapter: </span><span style="--0:#82AAFF;--1:#3B61B0">node</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">     </span></span><span style="--0:#D6DEEB;--1:#403F53">mode: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">standalone</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">i18n: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLocale: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">locales: [</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">fr</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">pt-br</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">es</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">prefixDefaultLocale: </span><span style="--0:#FF6A83;--1:#A24848">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">domains: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">fr: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">https://fr.example.com</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">es: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">https://example.es</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export default defineConfig({   site: &#x22;https://example.com&#x22;,   output: &#x22;server&#x22;, // required, with no prerendered pages   adapter: node({     mode: &#x27;standalone&#x27;,   }),   i18n: {    defaultLocale: &#x22;en&#x22;,    locales: [&#x22;en&#x22;, &#x22;fr&#x22;, &#x22;pt-br&#x22;, &#x22;es&#x22;],    prefixDefaultLocale: false,    domains: {      fr: &#x22;https://fr.example.com&#x22;,      es: &#x22;https://example.es&#x22;    }  },})"><div></div></button></div></figure></div>
<p>Both page routes built and URLs returned by the <code dir="auto">astro:i18n</code> helper functions <a href="/en/reference/modules/astro-i18n/#getabsolutelocaleurl"><code dir="auto">getAbsoluteLocaleUrl()</code></a> and <a href="/en/reference/modules/astro-i18n/#getabsolutelocaleurllist"><code dir="auto">getAbsoluteLocaleUrlList()</code></a> will use the options set in <code dir="auto">i18n.domains</code>.</p>
<p>See the <a href="/en/guides/internationalization/#domains">Internationalization Guide</a> for more details, including the limitations of this feature.</p>
<div class="sl-heading-wrapper level-h2"><h2 id="env">env</h2><a class="sl-anchor-link" href="#env"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “env”</span></a></div>
`
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "object"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p>Configuration options for type-safe environment variables.</p>\n<p>See our guide for more information on <a href="/en/guides/environment-variables/">environment variables in Astro</a>.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="envschema">env.schema</h3><a class="sl-anchor-link" href="#envschema"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “env.schema”</span></a></div>\n'
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "EnvSchema"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "{}"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<p>An object that uses <code dir="auto">envField</code> to define the data type and properties of your environment variables: <code dir="auto">context</code> (client or server), <code dir="auto">access</code> (public or secret), a <code dir="auto">default</code> value to use, and whether or not this environment variable is <code dir="auto">optional</code> (defaults to <code dir="auto">false</code>).</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig, envField } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">env: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">schema: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">API_URL: </span><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">({ context: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">client</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, access: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">public</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, optional: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53"> }),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">PORT: </span><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">number</span><span style="--0:#D6DEEB;--1:#403F53">({ context: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">server</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, access: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">public</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, default: </span><span style="--0:#F78C6C;--1:#AA0982">4321</span><span style="--0:#D6DEEB;--1:#403F53"> }),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">API_SECRET: </span><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">({ context: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">server</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, access: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">secret</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53"> }),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig, envField } from &#x22;astro/config&#x22;export default defineConfig({  env: {    schema: {      API_URL: envField.string({ context: &#x22;client&#x22;, access: &#x22;public&#x22;, optional: true }),      PORT: envField.number({ context: &#x22;server&#x22;, access: &#x22;public&#x22;, default: 4321 }),      API_SECRET: envField.string({ context: &#x22;server&#x22;, access: &#x22;secret&#x22; }),    }  }})"><div></div></button></div></figure></div>
<p><code dir="auto">envField</code> supports four data types: string, number, enum, and boolean. <code dir="auto">context</code> and <code dir="auto">access</code> are required properties for all data types. The following shows the complete list of properties available for each data type:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { envField } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// context &#x26; access</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">optional: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">default: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">foo</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">max: </span><span style="--0:#F78C6C;--1:#AA0982">20</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">min: </span><span style="--0:#F78C6C;--1:#AA0982">1</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">length: </span><span style="--0:#F78C6C;--1:#AA0982">13</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">url: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">includes: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">oo</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">startsWith: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">f</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">endsWith: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">o</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">number</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// context &#x26; access</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">optional: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">default: </span><span style="--0:#F78C6C;--1:#AA0982">15</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">gt: </span><span style="--0:#F78C6C;--1:#AA0982">2</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">min: </span><span style="--0:#F78C6C;--1:#AA0982">1</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">lt: </span><span style="--0:#F78C6C;--1:#AA0982">3</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">max: </span><span style="--0:#F78C6C;--1:#AA0982">4</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">int: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">boolean</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// context &#x26; access</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">optional: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">default: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">envField</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">enum</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#919F9F;--1:#5D6376">// context &#x26; access</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">values: [</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">foo</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">bar</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">baz</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">], </span><span style="--0:#919F9F;--1:#5D6376">// required</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">optional: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">   </span></span><span style="--0:#D6DEEB;--1:#403F53">default: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">baz</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { envField } from &#x22;astro/config&#x22;envField.string({   // context &#x26; access   optional: true,   default: &#x22;foo&#x22;,   max: 20,   min: 1,   length: 13,   url: true,   includes: &#x22;oo&#x22;,   startsWith: &#x22;f&#x22;,   endsWith: &#x22;o&#x22;,})envField.number({   // context &#x26; access   optional: true,   default: 15,   gt: 2,   min: 1,   lt: 3,   max: 4,   int: true,})envField.boolean({   // context &#x26; access   optional: true,   default: true,})envField.enum({   // context &#x26; access   values: [&#x27;foo&#x27;, &#x27;bar&#x27;, &#x27;baz&#x27;], // required   optional: true,   default: &#x27;baz&#x27;,})"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="envvalidatesecrets">env.validateSecrets</h3><a class="sl-anchor-link" href="#envvalidatesecrets"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “env.validateSecrets”</span></a></div>
`
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
      "set:html": '<p>Whether or not to validate secrets on the server when starting the dev server or running a build.</p>\n<p>By default, only public variables are validated on the server when starting the dev server or a build, and private variables are validated at runtime only. If enabled, private variables will also be checked on start. This is useful in some continuous integration (CI) pipelines to make sure all your secrets are correctly set before deploying.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { defineConfig, envField } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">astro/config</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">default</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineConfig</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">env: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">schema: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#919F9F;--1:#5D6376">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">validateSecrets: </span><span style="--0:#FF6A83;--1:#A24848">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig, envField } from &#x22;astro/config&#x22;export default defineConfig({  env: {    schema: {      // ...    },    validateSecrets: true  }})"><div></div></button></div></figure></div>'
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
const url = "src/content/docs/en/reference/configuration-reference.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/configuration-reference.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/configuration-reference.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
