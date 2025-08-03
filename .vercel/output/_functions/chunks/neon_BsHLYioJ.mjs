import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "Neon Postgres & Astro",
  "description": "Add a serverless Postgres database to your Astro project with Neon",
  "sidebar": {
    "label": "Neon"
  },
  "type": "backend",
  "service": "Neon",
  "stub": false,
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "adding-neon-to-your-astro-project",
    "text": "Adding Neon to your Astro project"
  }, {
    "depth": 3,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 3,
    "slug": "environment-configuration",
    "text": "Environment configuration"
  }, {
    "depth": 3,
    "slug": "installing-dependencies",
    "text": "Installing dependencies"
  }, {
    "depth": 3,
    "slug": "creating-a-neon-client",
    "text": "Creating a Neon client"
  }, {
    "depth": 2,
    "slug": "querying-your-neon-database",
    "text": "Querying your Neon database"
  }, {
    "depth": 2,
    "slug": "database-branching-with-neon",
    "text": "Database branching with Neon"
  }, {
    "depth": 2,
    "slug": "resources",
    "text": "Resources"
  }];
}
function _createMdxContent(props) {
  const { Fragment: Fragment$1 } = props.components || {};
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": '<p><a href="https://neon.tech">Neon</a> is a fully managed serverless Postgres database. It separates storage and compute to offer autoscaling, branching, and bottomless storage.</p>\n<div class="sl-heading-wrapper level-h2"><h2 id="adding-neon-to-your-astro-project">Adding Neon to your Astro project</h2><a class="sl-anchor-link" href="#adding-neon-to-your-astro-project"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Adding Neon to your Astro project”</span></a></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="prerequisites">Prerequisites</h3><a class="sl-anchor-link" href="#prerequisites"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Prerequisites”</span></a></div>\n<ul>\n<li>A <a href="https://console.neon.tech/signup">Neon</a> account with a created project</li>\n<li>Neon database connection string</li>\n<li>An Astro project with <a href="/en/guides/on-demand-rendering/">on-demand rendering (SSR)</a> enabled</li>\n</ul>\n<div class="sl-heading-wrapper level-h3"><h3 id="environment-configuration">Environment configuration</h3><a class="sl-anchor-link" href="#environment-configuration"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Environment configuration”</span></a></div>\n<p>To use Neon with Astro, you will need to set a Neon environment variable. Create or edit the <code dir="auto">.env</code> file in your project root, and add the following code, replacing your own project details:</p>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.rvnnt.css"><script type="module" src="/_astro/ec.8zarh.js"></script><figure class="frame has-title not-content"><figcaption class="header"><span class="title">.env</span></figcaption><pre data-language="ini"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">NEON_DATABASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">postgresql://&#x3C;user>:&#x3C;password>@&#x3C;endpoint_hostname>.neon.tech:&#x3C;port>/&#x3C;dbname>?sslmode=require</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="NEON_DATABASE_URL=&#x22;postgresql://<user>:<password>@<endpoint_hostname>.neon.tech:<port>/<dbname>?sslmode=require&#x22;"><div></div></button></div></figure></div>\n<p>For better TypeScript support, define environment variables in a <code dir="auto">src/env.d.ts</code> file:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/env.d.ts</span></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">interface</span><span style="--0:#D6DEEB;--1:#403F53"> ImportMetaEnv {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">readonly</span><span style="--0:#D6DEEB;--1:#403F53"> NEON_DATABASE_URL</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">interface</span><span style="--0:#D6DEEB;--1:#403F53"> ImportMeta {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">readonly</span><span style="--0:#D6DEEB;--1:#403F53"> env</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">ImportMetaEnv</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="interface ImportMetaEnv {  readonly NEON_DATABASE_URL: string;}interface ImportMeta {  readonly env: ImportMetaEnv;}"><div></div></button></div></figure></div>\n'
    }), createVNode($$ReadMore, {
      "set:html": 'Learn more about <a href="/en/guides/environment-variables/">environment variables</a> and <code dir="auto">.env</code> files in Astro.'
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<div class="sl-heading-wrapper level-h3"><h3 id="installing-dependencies">Installing dependencies</h3><a class="sl-anchor-link" href="#installing-dependencies"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Installing dependencies”</span></a></div>
<p>Install the <code dir="auto">@neondatabase/serverless</code> package to connect to Neon:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@neondatabase/serverless</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install @neondatabase/serverless"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h3"><h3 id="creating-a-neon-client">Creating a Neon client</h3><a class="sl-anchor-link" href="#creating-a-neon-client"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Creating a Neon client”</span></a></div>
<p>Create a new file <code dir="auto">src/lib/neon.ts</code> with the following code to initialize your Neon client:</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/lib/neon.ts</span></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { neon } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">@neondatabase/serverless</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">sql</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#82AAFF;--1:#3B61B0">neon</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#C792EA;--1:#8844AE">import.</span><span style="--0:#7FDBCA;--1:#096E72">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">NEON_DATABASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { neon } from &#x27;@neondatabase/serverless&#x27;;export const sql = neon(import.meta.env.NEON_DATABASE_URL);"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="querying-your-neon-database">Querying your Neon database</h2><a class="sl-anchor-link" href="#querying-your-neon-database"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Querying your Neon database”</span></a></div>
<p>You can now use the Neon client to query your database from any <code dir="auto">.astro</code> component. The following example fetches the current time from the Postgres database:</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { sql } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">../lib/neon</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">response</span><span style="--0:#C792EA;--1:#8844AE"> =  await  </span><span style="--0:#82AAFF;--1:#3B61B0">sql</span><span style="--0:#D6DEEB;--1:#403F53">\`</span><span style="--0:#ECC48D;--1:#3B61B0">SELECT NOW() as current_time</span><span style="--0:#D6DEEB;--1:#403F53">\`</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">currentTime</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">response[</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">]</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">current_time</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Current Time</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">The time is: </span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">currentTime</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { sql } from &#x27;../lib/neon&#x27;;const response =  await  sql&#x60;SELECT NOW() as current_time&#x60;;const currentTime = response[0].current_time;---<h1>Current Time</h1><p>The time is: {currentTime}</p>"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="database-branching-with-neon">Database branching with Neon</h2><a class="sl-anchor-link" href="#database-branching-with-neon"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Database branching with Neon”</span></a></div>
<p>Neon’s branching feature lets you create copies of your database for development or testing. Use this in your Astro project by creating different environment variables for each branch:</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">.env.development</span></figcaption><pre data-language="ini"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">NEON_DATABASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">=your_development_branch_url</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="NEON_DATABASE_URL=your_development_branch_url"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">.env.production</span></figcaption><pre data-language="ini"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">NEON_DATABASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">=your_production_branch_url</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="NEON_DATABASE_URL=your_production_branch_url"><div></div></button></div></figure></div>
<div class="sl-heading-wrapper level-h2"><h2 id="resources">Resources</h2><a class="sl-anchor-link" href="#resources"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Resources”</span></a></div>
<ul>
<li><a href="https://neon.tech/docs/introduction">Neon documentation</a></li>
<li><a href="https://github.com/neondatabase/serverless">Neon serverless driver GitHub</a></li>
<li><a href="https://neon.tech/docs/guides/astro">Connect an Astro site or application to Neon Postgres</a></li>
</ul>`
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
const url = "src/content/docs/en/guides/backend/neon.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/backend/neon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/backend/neon.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
