import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { g as $$FileTree, f as $$Steps, k as $$CardGrid, l as $$LinkCard } from './Code_CLJ7HHbi.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "Drupal & Astro",
  "description": "Add content to your Astro project using Drupal as a CMS",
  "sidebar": {
    "label": "Drupal"
  },
  "type": "cms",
  "service": "Drupal",
  "i18nReady": true,
  "stub": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "integrating-drupal-with-astro",
    "text": "Integrating Drupal with Astro"
  }, {
    "depth": 3,
    "slug": "installing-the-jsonapi-drupal-module",
    "text": "Installing the JSON:API Drupal module"
  }, {
    "depth": 3,
    "slug": "adding-the-drupal-url-in-env",
    "text": "Adding the Drupal URL in .env"
  }, {
    "depth": 3,
    "slug": "setting-up-credentials",
    "text": "Setting up Credentials"
  }, {
    "depth": 3,
    "slug": "installing-dependencies",
    "text": "Installing dependencies"
  }, {
    "depth": 2,
    "slug": "fetching-data-from-drupal",
    "text": "Fetching data from Drupal"
  }, {
    "depth": 3,
    "slug": "drupal-jsonapi-url-structure",
    "text": "Drupal JSON:API URL structure"
  }, {
    "depth": 4,
    "slug": "retrieving-only-certain-fields",
    "text": "Retrieving only certain fields"
  }, {
    "depth": 4,
    "slug": "filtering",
    "text": "Filtering"
  }, {
    "depth": 3,
    "slug": "building-a-drupal-query",
    "text": "Building a Drupal query"
  }, {
    "depth": 2,
    "slug": "making-a-blog-with-astro-and-drupal",
    "text": "Making a blog with Astro and Drupal"
  }, {
    "depth": 3,
    "slug": "prerequisites-1",
    "text": "Prerequisites"
  }, {
    "depth": 3,
    "slug": "displaying-a-list-of-articles",
    "text": "Displaying a list of articles"
  }, {
    "depth": 3,
    "slug": "generating-individual-blog-posts",
    "text": "Generating individual blog posts"
  }, {
    "depth": 3,
    "slug": "publishing-your-site",
    "text": "Publishing your site"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    aside: "aside",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  }, { Fragment: Fragment$1 } = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": '<p><a href="https://www.drupal.org/">Drupal</a> is an open-source content management tool.</p>\n<div class="sl-heading-wrapper level-h2"><h2 id="prerequisites">Prerequisites</h2><a class="sl-anchor-link" href="#prerequisites"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Prerequisites”</span></a></div>\n<p>To get started, you will need to have the following:</p>\n<ol>\n<li>\n<p><strong>An Astro project</strong> - If you don’t have an Astro project yet, our <a href="/en/install-and-setup/">Installation guide</a> will get you up and running in no time.</p>\n</li>\n<li>\n<p><strong>A Drupal site</strong> - If you haven’t set up a Drupal site, you can follow the official guidelines <a href="https://www.drupal.org/docs/getting-started/installing-drupal">Installing Drupal</a>.</p>\n</li>\n</ol>\n<div class="sl-heading-wrapper level-h2"><h2 id="integrating-drupal-with-astro">Integrating Drupal with Astro</h2><a class="sl-anchor-link" href="#integrating-drupal-with-astro"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Integrating Drupal with Astro”</span></a></div>\n<div class="sl-heading-wrapper level-h3"><h3 id="installing-the-jsonapi-drupal-module">Installing the JSON:API Drupal module</h3><a class="sl-anchor-link" href="#installing-the-jsonapi-drupal-module"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Installing the JSON:API Drupal module”</span></a></div>\n<p>To be able to get content from Drupal you need to enable the <a href="https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module">Drupal JSON:API module</a>.</p>\n<ol>\n<li>Navigate to the Extend page <code dir="auto">admin/modules</code> via the Manage administrative menu</li>\n<li>Locate the JSON:API module and check the box next to it</li>\n<li>Click Install to install the new module</li>\n</ol>\n<p>Now you can make <code dir="auto">GET</code> requests to your Drupal application through JSON:API.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="adding-the-drupal-url-in-env">Adding the Drupal URL in <code dir="auto">.env</code></h3><a class="sl-anchor-link" href="#adding-the-drupal-url-in-env"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Adding the Drupal URL in .env”</span></a></div>\n<p>To add your Drupal URL to Astro, create a <code dir="auto">.env</code> file in the root of your project (if one does not already exist) and add the following variable:</p>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.rvnnt.css"><script type="module" src="/_astro/ec.8zarh.js"></script><figure class="frame has-title not-content"><figcaption class="header"><span class="title">.env</span></figcaption><pre data-language="ini"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">DRUPAL_BASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">https://drupal.ddev.site/</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="DRUPAL_BASE_URL=&#x22;https://drupal.ddev.site/&#x22;"><div></div></button></div></figure></div>\n<p>Restart the dev server to use this environment variable in your Astro project.</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="setting-up-credentials">Setting up Credentials</h3><a class="sl-anchor-link" href="#setting-up-credentials"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Setting up Credentials”</span></a></div>\n<p>By default, the Drupal JSON:API endpoint is accessible for external data-fetching requests without requiring authentication. This allows you to fetch data for your Astro project without credentials but it does not permit users to modify your data or site settings.</p>\n<p>However, if you wish to restrict access and require authentication, Drupal provides <a href="https://www.drupal.org/docs/contributed-modules/api-authentication">several authentication methods</a> including:</p>\n<ul>\n<li><a href="https://www.drupal.org/docs/contributed-modules/api-authentication/setup-basic-authentication">Basic Authentication</a></li>\n<li><a href="https://www.drupal.org/docs/contributed-modules/api-authentication/api-key-authentication">API Key-based authentication</a></li>\n<li><a href="https://www.drupal.org/docs/contributed-modules/api-authentication/setup-access-token-oauth-based-authentication">Access Token/OAuth-based authentication</a></li>\n<li><a href="https://www.drupal.org/docs/contributed-modules/api-authentication/jwt-authentication">JWT Token-based authentication</a></li>\n<li><a href="https://www.drupal.org/docs/contributed-modules/api-authentication/rest-api-authentication-using-external-identity-provider">Third-Party Provider token authentication</a></li>\n</ul>\n<p>You can add your credentials to your <code dir="auto">.env</code> file.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">.env</span></figcaption><pre data-language="ini"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">DRUPAL_BASIC_USERNAME</span><span style="--0:#D6DEEB;--1:#403F53">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">editor</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">DRUPAL_BASIC_PASSWORD</span><span style="--0:#D6DEEB;--1:#403F53">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">editor</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">DRUPAL_JWT_TOKEN</span><span style="--0:#D6DEEB;--1:#403F53">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">abc123</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="DRUPAL_BASIC_USERNAME=&#x22;editor&#x22;DRUPAL_BASIC_PASSWORD=&#x22;editor&#x22;DRUPAL_JWT_TOKEN=&#x22;abc123&#x22;..."><div></div></button></div></figure></div>\n'
    }), createVNode($$ReadMore, {
      "set:html": 'Read more about <a href="/en/guides/environment-variables/">using environment variables</a> and <code dir="auto">.env</code> files in Astro.'
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Your root directory should now include this new files:</p>\n"
    }), createVNode($$FileTree, {
      title: "Project Structure",
      "set:html": "<ul>\n<li><strong>.env</strong></li>\n<li>astro.config.mjs</li>\n<li>package.json</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<div class="sl-heading-wrapper level-h3"><h3 id="installing-dependencies">Installing dependencies</h3><a class="sl-anchor-link" href="#installing-dependencies"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Installing dependencies”</span></a></div>\n<p>JSON:API requests and responses can often be complex and deeply nested. To simplify working with them, you can use two npm packages that streamline both the requests and the handling of responses:</p>\n<ul>\n<li><a href="https://www.npmjs.com/package/jsona"><code dir="auto">JSONA</code></a>: JSON API v1.0 specification serializer and deserializer for use on the server and in the browser.</li>\n<li><a href="https://www.npmjs.com/package/drupal-jsonapi-params"><code dir="auto">Drupal JSON-API Params</code></a>: This module provides a helper Class to create the required query. While doing so, it also tries to optimise the query by using the short form, whenever possible.</li>\n</ul>\n'
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">jsona</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">drupal-jsonapi-params</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install jsona drupal-jsonapi-params"><div></div></button></div></figure></div>'
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">pnpm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">add</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">jsona</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">drupal-jsonapi-params</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="pnpm add jsona drupal-jsonapi-params"><div></div></button></div></figure></div>'
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">yarn</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">add</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">jsona</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">drupal-jsonapi-params</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="yarn add jsona drupal-jsonapi-params"><div></div></button></div></figure></div>'
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": `<div class="sl-heading-wrapper level-h2"><h2 id="fetching-data-from-drupal">Fetching data from Drupal</h2><a class="sl-anchor-link" href="#fetching-data-from-drupal"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Fetching data from Drupal”</span></a></div>
<p>Your content is fetched from a JSON:API URL.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="drupal-jsonapi-url-structure">Drupal JSON:API URL structure</h3><a class="sl-anchor-link" href="#drupal-jsonapi-url-structure"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Drupal JSON:API URL structure”</span></a></div>
<p>The basic URL structure is: <code dir="auto">/jsonapi/{entity_type_id}/{bundle_id}</code></p>
<p>The URL is always prefixed by <code dir="auto">jsonapi</code>.</p>
<ul>
<li>The <code dir="auto">entity_type_id</code> refers to the Entity Type, such as node, block, user, etc.</li>
<li>The <code dir="auto">bundle_id</code> refers to the Entity Bundles. In the case of a Node entity type, the bundle could be article.</li>
<li>In this case, to get the list of all articles, the URL will be <code dir="auto">[DRUPAL_BASE_URL]/jsonapi/node/article</code>.</li>
</ul>
<p>To retrieve an individual entity, the URL structure will be <code dir="auto">/jsonapi/{entity_type_id}/{bundle_id}/{uuid}</code>, where the uuid is the UUID of the entity. For example the URL to get a specific article will be of the form <code dir="auto">/jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e</code>.</p>
<div class="sl-heading-wrapper level-h4"><h4 id="retrieving-only-certain-fields">Retrieving only certain fields</h4><a class="sl-anchor-link" href="#retrieving-only-certain-fields"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Retrieving only certain fields”</span></a></div>
<p>Retrieve only certain field by adding the Query String field to the request.</p>
<p>GET: <code dir="auto">/jsonapi/{entity_type_id}/{bundle_id}?field[entity_type]=field_list</code></p>
<p>Examples:</p>
<ul>
<li><code dir="auto">/jsonapi/node/article?fields[node--article]=title,created</code></li>
<li><code dir="auto">/jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e?fields[node--article]=title,created,body</code></li>
</ul>
<div class="sl-heading-wrapper level-h4"><h4 id="filtering">Filtering</h4><a class="sl-anchor-link" href="#filtering"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Filtering”</span></a></div>
<p>Add a filter to your request by adding the filter Query String.</p>
<p>The simplest, most common filter is a key-value filter:</p>
<p>GET: <code dir="auto">/jsonapi/{entity_type_id}/{bundle_id}?filter[field_name]=value&#x26;filter[field_other]=value</code></p>
<p>Examples:</p>
<ul>
<li><code dir="auto">/jsonapi/node/article?filter[title]=Testing JSON:API&#x26;filter[status]=1</code></li>
<li><code dir="auto">/jsonapi/node/article/2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e?fields[node--article]=title&#x26;filter[title]=Testing JSON:API</code></li>
</ul>
<p>You can find more query options in the <a href="https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module">JSON:API Documentation</a>.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="building-a-drupal-query">Building a Drupal query</h3><a class="sl-anchor-link" href="#building-a-drupal-query"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Building a Drupal query”</span></a></div>
<p>Astro components can fetch data from your Drupal site by using <code dir="auto">drupal-jsonapi-params</code> package to build the query.</p>
<p>The following example shows a component with a query for an “article” content type that has a text field for a title and a rich text field for content:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get the Drupal base URL</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">baseUrl</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> = import.</span><span style="--0:#7FDBCA;--1:#096E72">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">DRUPAL_BASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Generate the JSON:API Query. Get all title and body from published articles.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">params</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">DrupalJsonApiParams</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#82AAFF;--1:#3B61B0">DrupalJsonApiParams</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">params</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">addFields</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">node--article</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">title</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">body</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">])</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">addFilter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">status</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">1</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Generates the query string.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">path</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">params</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">getQueryString</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">url</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">baseUrl</span><span style="--0:#C792EA;--1:#8844AE"> + </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/jsonapi/node/article?</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#C792EA;--1:#8844AE"> + </span><span style="--0:#D6DEEB;--1:#403F53">path;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get the articles</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">request</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">Response</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#82AAFF;--1:#3B61B0">fetch</span><span style="--0:#D6DEEB;--1:#403F53">(url);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">json</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#7FDBCA;--1:#096E72">|</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">TJsonApiBody</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#D6DEEB;--1:#403F53">request</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">json</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Initiate Jsona.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">dataFormatter</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">Jsona</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#82AAFF;--1:#3B61B0">Jsona</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Deserialise the response.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">articles</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">dataFormatter</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">deserialize</span><span style="--0:#D6DEEB;--1:#403F53">(json);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">articles</span><span style="--0:#C792EA;--1:#8844AE">?.</span><span style="--0:#7FDBCA;--1:#096E72">length</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">?</span><span style="--0:#D6DEEB;--1:#403F53"> articles</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">map</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">article</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">any</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--0:#D6DEEB;--1:#403F53"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">section</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">title</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">article</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">set</span><span style="--0:#7FDBCA;--1:#8844AE">:</span><span style="--0:#C5E478;--1:#3B61B0">html</span><span style="--0:#C792EA;--1:#8844AE">=</span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">body</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">value</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">article</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">section</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53"> </span></span><span style="--0:#D6DEEB;--1:#403F53">))</span><span style="--0:#C792EA;--1:#8844AE">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">>&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">No Content found</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#E2817F;--1:#B23834">}</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;// Get the Drupal base URLexport const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;// Generate the JSON:API Query. Get all title and body from published articles.const params: DrupalJsonApiParams = new DrupalJsonApiParams();params.addFields(&#x22;node--article&#x22;, [        &#x22;title&#x22;,        &#x22;body&#x22;,    ])    .addFilter(&#x22;status&#x22;, &#x22;1&#x22;);// Generates the query string.const path: string = params.getQueryString();const url: string = baseUrl + &#x27;/jsonapi/node/article?&#x27; + path;// Get the articlesconst request: Response = await fetch(url);const json: string | TJsonApiBody = await request.json();// Initiate Jsona.const dataFormatter: Jsona = new Jsona();// Deserialise the response.const articles = dataFormatter.deserialize(json);---<body> {articles?.length ? articles.map((article: any) => (    <section>      <h2>{article.title}</h2>      <article set:html={article.body.value}></article>    </section> )): <div><h1>No Content found</h1></div> }</body>"><div></div></button></div></figure></div>
<p>You can find more querying options in the <a href="https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi">Drupal JSON:API Documentation</a></p>
<div class="sl-heading-wrapper level-h2"><h2 id="making-a-blog-with-astro-and-drupal">Making a blog with Astro and Drupal</h2><a class="sl-anchor-link" href="#making-a-blog-with-astro-and-drupal"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Making a blog with Astro and Drupal”</span></a></div>
<p>With the setup above, you are now able to create a blog that uses Drupal as the CMS.</p>
<div class="sl-heading-wrapper level-h3"><h3 id="prerequisites-1">Prerequisites</h3><a class="sl-anchor-link" href="#prerequisites-1"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Prerequisites”</span></a></div>
<ol>
<li>
<p><strong>An Astro project</strong> with <a href="https://www.npmjs.com/package/jsona"><code dir="auto">JSONA</code></a> and <a href="https://www.npmjs.com/package/drupal-jsonapi-params"><code dir="auto">Drupal JSON-API Params</code></a> installed.</p>
</li>
<li>
<p><strong>A Drupal site with at least one entry</strong> - For this tutorial we recommend starting with a new Drupal site with Standard installation.</p>
<p>In the <strong>Content</strong> section of your Drupal site, create a new entry by clicking the <strong>Add</strong> button. Then, choose Article and fill in the fields:</p>
<ul>
<li><strong>Title:</strong> <code dir="auto">My first article for Astro!</code></li>
<li><strong>Alias:</strong> <code dir="auto">/articles/first-article-for astro</code></li>
<li><strong>Description:</strong> <code dir="auto">This is my first Astro article! Let's see what it will look like!</code></li>
</ul>
<p>Click <strong>Save</strong> to create your first Article. Feel free to add as many articles as you want.</p>
</li>
</ol>
<div class="sl-heading-wrapper level-h3"><h3 id="displaying-a-list-of-articles">Displaying a list of articles</h3><a class="sl-anchor-link" href="#displaying-a-list-of-articles"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Displaying a list of articles”</span></a></div>
`
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create ", createVNode(_components.code, {
              dir: "auto",
              children: "src/types.ts"
            }), " if it does not already exist and add two new interfaces called ", createVNode(_components.code, {
              dir: "auto",
              children: "DrupalNode"
            }), " and ", createVNode(_components.code, {
              dir: "auto",
              children: "Path"
            }), " with the following code. These interfaces will match the fields of your article content type in Drupal and the Path fields. You will use it to type your article entries response."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/types.ts"
                })
              }), createVNode(_components.pre, {
                "data-language": "ts",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "export"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "interface"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " Path {"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "alias"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "pid"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "number"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "langcode"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "}"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "export"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "interface"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " DrupalNode "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "extends"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "Record"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ", "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "any"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "> {"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "id"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "langcode"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "status"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "boolean"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "drupal_internal__nid"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "number"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "drupal_internal__vid"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "number"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "changed"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "created"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "default_langcode"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "boolean"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "sticky"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "boolean"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "path"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#FFCB8B",
                          "--1": "#111111"
                        },
                        children: "Path"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "}"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "export interface Path {    alias: string    pid: number    langcode: string}export interface DrupalNode extends Record<string, any> {    id: string    type: string    langcode: string    status: boolean    drupal_internal__nid: number    drupal_internal__vid: number    changed: string    created: string    title: string    default_langcode: boolean    sticky: boolean    path: Path}",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: "Your src directory should now include the new file:"
          }), "\n", createVNode($$FileTree, {
            title: "Project Structure",
            "set:html": "<ul>\n<li>.env</li>\n<li>astro.config.mjs</li>\n<li>package.json</li>\n<li>src/\n<ul>\n<li><strong>types.ts</strong></li>\n</ul>\n</li>\n</ul>"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a new file called ", createVNode(_components.code, {
              dir: "auto",
              children: "drupal.ts"
            }), " under ", createVNode(_components.code, {
              dir: "auto",
              children: "src/api"
            }), " and add the following code:"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/api/drupal.ts"
                })
              }), createVNode(_components.pre, {
                "data-language": "ts",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {Jsona} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {DrupalJsonApiParams} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "drupal-jsonapi-params"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {DrupalNode} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../types.ts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {TJsonApiBody} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona/lib/JsonaTypes"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Get the Drupal Base Url."
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "export const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "baseUrl"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "string"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = import."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "meta"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#FAF39F",
                          "--1": "#111111"
                        },
                        children: "env"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "DRUPAL_BASE_URL"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": 'import {Jsona} from "jsona";import {DrupalJsonApiParams} from "drupal-jsonapi-params";import type {DrupalNode} from "../types.ts";import type {TJsonApiBody} from "jsona/lib/JsonaTypes";// Get the Drupal Base Url.export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;',
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: ["This will import the required libraries such as ", createVNode(_components.code, {
              dir: "auto",
              children: "Jsona"
            }), " to deserialize the response, ", createVNode(_components.code, {
              dir: "auto",
              children: "DrupalJsonApiParams"
            }), " to format the request url and the Node and Jsona types. It will also get the ", createVNode(_components.code, {
              dir: "auto",
              children: "baseUrl"
            }), " from the ", createVNode(_components.code, {
              dir: "auto",
              children: ".env"
            }), " file."]
          }), "\n", createVNode(_components.p, {
            children: "Your src/api directory should now include the new file:"
          }), "\n", createVNode($$FileTree, {
            title: "Project Structure",
            "set:html": "<ul>\n<li>.env</li>\n<li>astro.config.mjs</li>\n<li>package.json</li>\n<li>src/\n<ul>\n<li>api/\n<ul>\n<li><strong>drupal.ts</strong></li>\n</ul>\n</li>\n<li>types.ts</li>\n</ul>\n</li>\n</ul>"
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": `<li>
<p>In that same file, create the <code dir="auto">fetchUrl</code> function to make the fetch request and deserialize the response.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/api/drupal.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalNode} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../types.ts</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get the Drupal Base Url.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">baseUrl</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> = import.</span><span style="--0:#7FDBCA;--1:#096E72">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">DRUPAL_BASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55">/**</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>* Fetch url from Drupal.</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>*</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>* </span><span style="--0:#d2a6ee;--1:#6a3588">@param</span><span style="--0:#aeb8b8;--1:#494c55"> </span><span style="--0:#78CCF0;--1:#2f505f">url</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>*</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>* </span><span style="--0:#d2a6ee;--1:#6a3588">@return</span><span style="--0:#aeb8b8;--1:#494c55"> Promise&#x3C;TJsonaModel | TJsonaModel[]> as Promise&#x3C;any></span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>*/</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">export const </span><span style="--0:#94b6ff;--1:#2d4a87">fetchUrl</span><span style="--0:#d2a6ee;--1:#6a3588"> = async </span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">url</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#C5E478;--1:#2d4a87">string</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">Promise</span><span style="--0:#d2a6ee;--1:#6a3588">&#x3C;</span><span style="--0:#C5E478;--1:#2d4a87">any</span><span style="--0:#d2a6ee;--1:#6a3588">> => {</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>const </span><span style="--0:#94b6ff;--1:#2d4a87">request</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">Response</span><span style="--0:#d2a6ee;--1:#6a3588"> = await </span><span style="--0:#94b6ff;--1:#2d4a87">fetch</span><span style="--0:#D6DEEB;--1:#403F53">(url)</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>const </span><span style="--0:#94b6ff;--1:#2d4a87">json</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#C5E478;--1:#2d4a87">string</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#7FDBCA;--1:#075457">|</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">TJsonApiBody</span><span style="--0:#d2a6ee;--1:#6a3588"> = await </span><span style="--0:#D6DEEB;--1:#403F53">request</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">json</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>const </span><span style="--0:#94b6ff;--1:#2d4a87">dataFormatter</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">Jsona</span><span style="--0:#d2a6ee;--1:#6a3588"> = </span><span style="--0:#7FDBCA;--1:#075457">new</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#94b6ff;--1:#2d4a87">Jsona</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>return </span><span style="--0:#D6DEEB;--1:#403F53">dataFormatter</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">deserialize</span><span style="--0:#D6DEEB;--1:#403F53">(json)</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {DrupalNode} from &#x22;../types.ts&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;// Get the Drupal Base Url.export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;/** * Fetch url from Drupal. * * @param url * * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any> */export const fetchUrl = async (url: string): Promise<any> => {    const request: Response = await fetch(url);    const json: string | TJsonApiBody = await request.json();    const dataFormatter: Jsona = new Jsona();    return dataFormatter.deserialize(json);}"><div></div></button></div></figure></div>
</li>
<li>
<p>Create the <code dir="auto">getArticles()</code> function to get all published articles.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/api/drupal.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalNode} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../types.ts</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get the Drupal Base Url.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">baseUrl</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> = import.</span><span style="--0:#7FDBCA;--1:#096E72">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">DRUPAL_BASE_URL</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">/**</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">* Fetch url from Drupal.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">*</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">* </span><span style="--0:#C792EA;--1:#8844AE">@param</span><span style="--0:#919F9F;--1:#5F636F"> </span><span style="--0:#78CCF0;--1:#3E697C">url</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">*</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">* </span><span style="--0:#C792EA;--1:#8844AE">@return</span><span style="--0:#919F9F;--1:#5F636F"> Promise&#x3C;TJsonaModel | TJsonaModel[]> as Promise&#x3C;any></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#919F9F;--1:#5F636F"> </span></span><span style="--0:#919F9F;--1:#5F636F">*/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">fetchUrl</span><span style="--0:#C792EA;--1:#8844AE"> = async </span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">url</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">Promise</span><span style="--0:#C792EA;--1:#8844AE">&#x3C;</span><span style="--0:#C5E478;--1:#3B61B0">any</span><span style="--0:#C792EA;--1:#8844AE">> => {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">    </span></span><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">request</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">Response</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#82AAFF;--1:#3B61B0">fetch</span><span style="--0:#D6DEEB;--1:#403F53">(url)</span><span style="--0:#C792EA;--1:#8844AE">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">    </span></span><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">json</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#7FDBCA;--1:#096E72">|</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">TJsonApiBody</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#D6DEEB;--1:#403F53">request</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">json</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8844AE">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">    </span></span><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">dataFormatter</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#FFCB8B;--1:#111111">Jsona</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#C792EA;--1:#8844AE"> </span><span style="--0:#82AAFF;--1:#3B61B0">Jsona</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8844AE">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">    </span></span><span style="--0:#C792EA;--1:#8844AE">return </span><span style="--0:#D6DEEB;--1:#403F53">dataFormatter</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">deserialize</span><span style="--0:#D6DEEB;--1:#403F53">(json)</span><span style="--0:#C792EA;--1:#8844AE">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55">/**</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>* Get all published articles.</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>*</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>* </span><span style="--0:#d2a6ee;--1:#6a3588">@return</span><span style="--0:#aeb8b8;--1:#494c55"> Promise&#x3C;DrupalNode[]></span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55"><span class="indent"> </span>*/</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">export const </span><span style="--0:#94b6ff;--1:#2d4a87">getArticles</span><span style="--0:#d2a6ee;--1:#6a3588"> = async </span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">Promise</span><span style="--0:#d2a6ee;--1:#6a3588">&#x3C;</span><span style="--0:#FFCB8B;--1:#111111">DrupalNode</span><span style="--0:#D6DEEB;--1:#403F53">[]</span><span style="--0:#d2a6ee;--1:#6a3588">> => {</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>const </span><span style="--0:#94b6ff;--1:#2d4a87">params</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#FFCB8B;--1:#111111">DrupalJsonApiParams</span><span style="--0:#d2a6ee;--1:#6a3588"> = </span><span style="--0:#7FDBCA;--1:#075457">new</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#94b6ff;--1:#2d4a87">DrupalJsonApiParams</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--0:#D6DEEB;--1:#403F53">params</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">        </span>.</span><span style="--0:#94b6ff;--1:#2d4a87">addFields</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">node--article</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#d2a6ee;--1:#6a3588">,</span><span style="--0:#D6DEEB;--1:#403F53"> [</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">title</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">path</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">body</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">created</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">])</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">        </span>.</span><span style="--0:#94b6ff;--1:#2d4a87">addFilter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">status</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#d2a6ee;--1:#6a3588">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">1</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>const </span><span style="--0:#94b6ff;--1:#2d4a87">path</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#d2a6ee;--1:#6a3588"> </span><span style="--0:#C5E478;--1:#2d4a87">string</span><span style="--0:#d2a6ee;--1:#6a3588"> = </span><span style="--0:#D6DEEB;--1:#403F53">params</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">getQueryString</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588"><span class="indent">    </span>return await </span><span style="--0:#94b6ff;--1:#2d4a87">fetchUrl</span><span style="--0:#D6DEEB;--1:#403F53">(baseUrl</span><span style="--0:#d2a6ee;--1:#6a3588"> + </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#723b3a">/jsonapi/node/article?</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#d2a6ee;--1:#6a3588"> + </span><span style="--0:#D6DEEB;--1:#403F53">path)</span><span style="--0:#d2a6ee;--1:#6a3588">;</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {DrupalNode} from &#x22;../types.ts&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;// Get the Drupal Base Url.export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;/** * Fetch url from Drupal. * * @param url * * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any> */export const fetchUrl = async (url: string): Promise<any> => {    const request: Response = await fetch(url);    const json: string | TJsonApiBody = await request.json();    const dataFormatter: Jsona = new Jsona();    return dataFormatter.deserialize(json);}/** * Get all published articles. * * @return Promise<DrupalNode[]> */export const getArticles = async (): Promise<DrupalNode[]> => {    const params: DrupalJsonApiParams = new DrupalJsonApiParams();    params        .addFields(&#x22;node--article&#x22;, [            &#x22;title&#x22;,            &#x22;path&#x22;,            &#x22;body&#x22;,            &#x22;created&#x22;,        ])        .addFilter(&#x22;status&#x22;, &#x22;1&#x22;);    const path: string = params.getQueryString();    return await fetchUrl(baseUrl + &#x27;/jsonapi/node/article?&#x27; + path);}"><div></div></button></div></figure></div>
<p>Now you can use the function <code dir="auto">getArticles()</code> in an <code dir="auto">.astro</code> component to get all published articles with data for each title, body, path and creation date.</p>
</li>
`
        }), createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Go to the Astro page where you will fetch data from Drupal. The following example creates an articles landing page at ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/articles/index.astro"
            }), "."]
          }), "\n", createVNode(_components.p, {
            children: ["Import the necessary dependencies and fetch all the entries from Drupal with a content type of ", createVNode(_components.code, {
              dir: "auto",
              children: "article"
            }), " using ", createVNode(_components.code, {
              dir: "auto",
              children: "getArticles()"
            }), " while passing the ", createVNode(_components.code, {
              dir: "auto",
              children: "DrupalNode"
            }), " interface to type your response."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/articles/index.astro"
                })
              }), createVNode(_components.pre, {
                "data-language": "astro",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5F636F"
                        },
                        children: "---"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {Jsona} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {DrupalJsonApiParams} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "drupal-jsonapi-params"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {TJsonApiBody} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona/lib/JsonaTypes"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { DrupalNode } "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../types"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {getArticles} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../api/drupal"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Get all published articles."
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "articles"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = await "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "getArticles"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "();"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5F636F"
                        },
                        children: "---"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": '---import {Jsona} from "jsona";import {DrupalJsonApiParams} from "drupal-jsonapi-params";import type {TJsonApiBody} from "jsona/lib/JsonaTypes";import type { DrupalNode } from "../../types";import {getArticles} from "../../api/drupal";// Get all published articles.const articles = await getArticles();---',
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: "This fetch call using getArticles() will return a typed array of entries that can be used in your page template."
          }), "\n", createVNode(_components.p, {
            children: ["Your ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/"
            }), " directory should now include the new file, if you used the same page file:"]
          }), "\n", createVNode($$FileTree, {
            title: "Project Structure",
            "set:html": "<ul>\n<li>.env</li>\n<li>astro.config.mjs</li>\n<li>package.json</li>\n<li>src/\n<ul>\n<li>api/\n<ul>\n<li>drupal.ts</li>\n</ul>\n</li>\n<li>pages/\n<ul>\n<li>articles/\n<ul>\n<li><strong>index.astro</strong></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>types.ts</li>\n</ul>\n</li>\n</ul>"
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": '<li>\n<p>Add content to your page, such as a title. Use <code dir="auto">articles.map()</code> to show your Drupal entries as line items in a list.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/articles/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> { DrupalNode } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../types</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {getArticles} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../api/drupal</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get all published articles.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">articles</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#82AAFF;--1:#3B61B0">getArticles</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#2d4a87">lang</span><span style="--0:#7FDBCA;--1:#6a3588">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#6a3588">></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">My news site</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">My news site</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">ul</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">      </span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">articles</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">map</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">article</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">DrupalNode</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#d2a6ee;--1:#6a3588">=></span><span style="--0:#D6DEEB;--1:#403F53"> (</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">        </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">li</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">          </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#2d4a87">href</span><span style="--0:#d2a6ee;--1:#6a3588">=</span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">path</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">alias</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">replace</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">internal:en/</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#6a3588">, </span><span style="--0:#D9F5DD;--1:#111111">""</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--0:#7FDBCA;--1:#6a3588">></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">title</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">            </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Published on </span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">created</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">          </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">        </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">li</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">))</span><span style="--0:#eaa5a4;--1:#882b28">}</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">ul</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;import type { DrupalNode } from &#x22;../types&#x22;;import {getArticles} from &#x22;../api/drupal&#x22;;// Get all published articles.const articles = await getArticles();---<html lang=&#x22;en&#x22;>  <head>    <title>My news site</title>  </head>  <body>    <h1>My news site</h1>    <ul>      {articles.map((article: DrupalNode) => (        <li>          <a href={article.path.alias.replace(&#x22;internal:en/&#x22;, &#x22;&#x22;)}>            <h2>{article.title}</h2>            <p>Published on {article.created}</p>          </a>        </li>      ))}    </ul>  </body></html>"><div></div></button></div></figure></div>\n</li>\n'
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<div class="sl-heading-wrapper level-h3"><h3 id="generating-individual-blog-posts">Generating individual blog posts</h3><a class="sl-anchor-link" href="#generating-individual-blog-posts"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Generating individual blog posts”</span></a></div>\n<p>Use the same method to fetch your data from Drupal as above, but this time, on a page that will create a unique page route for each article.</p>\n<p>This example uses Astro’s default static mode, and creates <a href="/en/guides/routing/#dynamic-routes">a dynamic routing page file</a> with the <code dir="auto">getStaticPaths()</code> function. This function will be called at build time to generate the list of paths that become pages.</p>\n'
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a new file ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/articles/[path].astro"
            }), " and import the ", createVNode(_components.code, {
              dir: "auto",
              children: "DrupalNode"
            }), " interface and ", createVNode(_components.code, {
              dir: "auto",
              children: "getArticle()"
            }), " from ", createVNode(_components.code, {
              dir: "auto",
              children: "src/api/drupal.ts"
            }), ". Fetch your data inside a ", createVNode(_components.code, {
              dir: "auto",
              children: "getStaticPaths()"
            }), " function to create routes for your blog."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/articles/[path].astro"
                })
              }), createVNode(_components.pre, {
                "data-language": "astro",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5F636F"
                        },
                        children: "---"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {Jsona} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {DrupalJsonApiParams} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "drupal-jsonapi-params"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {TJsonApiBody} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "jsona/lib/JsonaTypes"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { DrupalNode } "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../types"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {getArticles} "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "from"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../api/drupal"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: '"'
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Get all published articles."
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "export"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "async"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "function"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "getStaticPaths"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "()"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " {"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "  "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "articles"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = await "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "getArticles"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "();"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "}"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5F636F"
                        },
                        children: "---"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": '---import {Jsona} from "jsona";import {DrupalJsonApiParams} from "drupal-jsonapi-params";import type {TJsonApiBody} from "jsona/lib/JsonaTypes";import type { DrupalNode } from "../../types";import {getArticles} from "../../api/drupal";// Get all published articles.export async function getStaticPaths() {  const articles = await getArticles();}---',
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: "Your src/pages/articles directory should now include the new file:"
          }), "\n", createVNode($$FileTree, {
            title: "Project Structure",
            "set:html": "<ul>\n<li>.env</li>\n<li>astro.config.mjs</li>\n<li>package.json</li>\n<li>src/\n<ul>\n<li>api/\n<ul>\n<li>drupal.ts</li>\n</ul>\n</li>\n<li>pages/\n<ul>\n<li>articles/\n<ul>\n<li>index.astro</li>\n<li><strong>[path].astro</strong></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>types.ts</li>\n</ul>\n</li>\n</ul>"
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": `<li>
<p>In the same file, map each Drupal entry to an object with a <code dir="auto">params</code> and <code dir="auto">props</code> property. The <code dir="auto">params</code> property will be used to generate the URL of the page and the <code dir="auto">props</code> values will be passed to the page component as props.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/articles/[path].astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> { DrupalNode } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../../types</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {getArticles} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../../api/drupal</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get all published articles.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">async</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">articles</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#82AAFF;--1:#3B61B0">getArticles</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--0:#d2a6ee;--1:#6a3588">return</span><span style="--0:#D6DEEB;--1:#403F53"> articles</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">map</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">article</span><span style="--0:#7FDBCA;--1:#075457">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">DrupalNode</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#d2a6ee;--1:#6a3588">=></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">        </span><span style="--0:#d2a6ee;--1:#6a3588">return</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">params: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">                </span><span style="--0:#aeb8b8;--1:#474c5a">// Choose \`path\` to match the \`[path]\` routing value</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">path: article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">path</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#FAF39F;--1:#111111">alias</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">split</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#723b3a">/</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">)[</span><span style="--0:#f8a186;--1:#8f086e">2</span><span style="--0:#D6DEEB;--1:#403F53">]</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">props: {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">title: article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">title</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">body: article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">body</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">date: </span><span style="--0:#7FDBCA;--1:#075457">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#94b6ff;--1:#2d4a87">Date</span><span style="--0:#D6DEEB;--1:#403F53">(article</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">created</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#94b6ff;--1:#2d4a87">toLocaleDateString</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#723b3a">en-EN</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">day: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">numeric</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">month: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">long</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#a8b9c6;--1:#3b4e5e">,</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">year: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">numeric</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#aeb8b8;--1:#494c55">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;import type { DrupalNode } from &#x22;../../types&#x22;;import {getArticles} from &#x22;../../api/drupal&#x22;;// Get all published articles.export async function getStaticPaths() {    const articles = await getArticles();    return articles.map((article: DrupalNode) => {        return {            params: {                // Choose &#x60;path&#x60; to match the &#x60;[path]&#x60; routing value                path: article.path.alias.split(&#x27;/&#x27;)[2]            },            props: {                title: article.title,                body: article.body,                date: new Date(article.created).toLocaleDateString(&#x27;en-EN&#x27;, {                    day: &#x22;numeric&#x22;,                    month: &#x22;long&#x22;,                    year: &#x22;numeric&#x22;                })            }        }    });}---"><div></div></button></div></figure></div>
<p>The property inside <code dir="auto">params</code> must match the name of the dynamic route. Since the filename is <code dir="auto">[path].astro</code>, the property name passed to <code dir="auto">params</code> must be <code dir="auto">path</code>.</p>
<p>In our example, the <code dir="auto">props</code> object passes three properties to the page:</p>
<ul>
<li><code dir="auto">title</code>: a string, representing the title of your post.</li>
<li><code dir="auto">body</code>: a string, representing the content of your entry.</li>
<li><code dir="auto">date</code>: a timestamp, based on your file creation date.</li>
</ul>
</li>
<li>
<p>Use the page <code dir="auto">props</code> to display your blog post.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/articles/[path].astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {Jsona} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {DrupalJsonApiParams} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">drupal-jsonapi-params</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> {TJsonApiBody} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">jsona/lib/JsonaTypes</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">type</span><span style="--0:#D6DEEB;--1:#403F53"> { DrupalNode } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../../types</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> {getArticles} </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../../api/drupal</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// Get all published articles.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">async</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">articles</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#82AAFF;--1:#3B61B0">getArticles</span><span style="--0:#D6DEEB;--1:#403F53">();</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> articles</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">map</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">article</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">DrupalNode</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">params: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">path: article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">path</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">alias</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">split</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">/</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">)[</span><span style="--0:#F78C6C;--1:#AA0982">2</span><span style="--0:#D6DEEB;--1:#403F53">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">props: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">title: article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">title</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">body: article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">body</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">date: </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">Date</span><span style="--0:#D6DEEB;--1:#403F53">(article</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">created</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">toLocaleDateString</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#984E4D">en-EN</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#889FB2;--1:#4D667B">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">day: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">numeric</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">month: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">long</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                    </span></span><span style="--0:#D6DEEB;--1:#403F53">year: </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">numeric</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">                </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">            </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight ins"><div class="code"><span style="--0:#d2a6ee;--1:#6a3588">const {</span><span style="--0:#94b6ff;--1:#2d4a87">title</span><span style="--0:#d2a6ee;--1:#6a3588">, </span><span style="--0:#94b6ff;--1:#2d4a87">date</span><span style="--0:#d2a6ee;--1:#6a3588">, </span><span style="--0:#94b6ff;--1:#2d4a87">body</span><span style="--0:#d2a6ee;--1:#6a3588">} = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">props</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#2d4a87">lang</span><span style="--0:#7FDBCA;--1:#6a3588">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#723b3a">en</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#6a3588">></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">title</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">title</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">time</span><span style="--0:#7FDBCA">></span></span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">date</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">time</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">    </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">article</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#2d4a87">set:html</span><span style="--0:#7FDBCA;--1:#6a3588">=</span><span style="--0:#eaa5a4;--1:#882b28">{</span><span style="--0:#D6DEEB;--1:#403F53">body</span><span style="--0:#d2a6ee;--1:#6a3588">.</span><span style="--0:#7FDBCA;--1:#075457">value</span><span style="--0:#eaa5a4;--1:#882b28">}</span><span style="--0:#7FDBCA;--1:#6a3588"> /></span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line highlight ins"><div class="code"><span style="--1:#6a3588"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import {Jsona} from &#x22;jsona&#x22;;import {DrupalJsonApiParams} from &#x22;drupal-jsonapi-params&#x22;;import type {TJsonApiBody} from &#x22;jsona/lib/JsonaTypes&#x22;;import type { DrupalNode } from &#x22;../../types&#x22;;import {getArticles} from &#x22;../../api/drupal&#x22;;// Get all published articles.export async function getStaticPaths() {    const articles = await getArticles();    return articles.map((article: DrupalNode) => {        return {            params: {                path: article.path.alias.split(&#x27;/&#x27;)[2]            },            props: {                title: article.title,                body: article.body,                date: new Date(article.created).toLocaleDateString(&#x27;en-EN&#x27;, {                    day: &#x22;numeric&#x22;,                    month: &#x22;long&#x22;,                    year: &#x22;numeric&#x22;                })            }        }    });}const {title, date, body} = Astro.props;---<html lang=&#x22;en&#x22;>  <head>    <title>{title}</title>  </head>  <body>    <h1>{title}</h1>    <time>{date}</time>    <article set:html={body.value} />  </body></html>"><div></div></button></div></figure></div>
</li>
<li>
<p>Navigate to your dev server preview and click on one of your posts to make sure your dynamic route is working.</p>
</li>
`
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<div class="sl-heading-wrapper level-h3"><h3 id="publishing-your-site">Publishing your site</h3><a class="sl-anchor-link" href="#publishing-your-site"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Publishing your site”</span></a></div>\n<p>To deploy your website, visit our <a href="/en/guides/deploy/">deployment guides</a> and follow the instructions for your preferred hosting provider.</p>\n<div class="sl-heading-wrapper level-h2"><h2 id="community-resources">Community Resources</h2><a class="sl-anchor-link" href="#community-resources"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Community Resources”</span></a></div>\n'
    }), createVNode($$CardGrid, {
      children: createVNode($$LinkCard, {
        title: "Create a web application with Astro and Drupal",
        href: "https://www.linkedin.com/pulse/create-web-application-astrojs-website-generator-using-gambino-kx6cf"
      })
    }), "\n", createVNode(_components.aside, {
      "aria-label": "Have a resource to share?",
      class: "starlight-aside starlight-aside--note",
      "set:html": '<p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Have a resource to share?</p><div class="starlight-aside__content"><p>If you found (or made!) a helpful video or blog post about using Drupal with Astro, <a href="https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/cms/drupal.mdx">add it to this list</a>!</p></div>'
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
const url = "src/content/docs/en/guides/cms/drupal.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/drupal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/drupal.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
