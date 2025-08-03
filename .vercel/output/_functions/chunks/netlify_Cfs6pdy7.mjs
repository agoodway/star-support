import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to Netlify",
  "description": "How to deploy your Astro site to the web on Netlify.",
  "sidebar": {
    "label": "Netlify"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "project-configuration",
    "text": "Project configuration"
  }, {
    "depth": 3,
    "slug": "static-site",
    "text": "Static site"
  }, {
    "depth": 3,
    "slug": "adapter-for-on-demand-rendering",
    "text": "Adapter for on-demand rendering"
  }, {
    "depth": 2,
    "slug": "how-to-deploy",
    "text": "How to deploy"
  }, {
    "depth": 3,
    "slug": "website-ui-deployment",
    "text": "Website UI deployment"
  }, {
    "depth": 4,
    "slug": "netlifytoml-file",
    "text": "netlify.toml file"
  }, {
    "depth": 3,
    "slug": "cli-deployment",
    "text": "CLI deployment"
  }, {
    "depth": 3,
    "slug": "set-a-nodejs-version",
    "text": "Set a Node.js version"
  }, {
    "depth": 2,
    "slug": "using-netlify-functions",
    "text": "Using Netlify Functions"
  }, {
    "depth": 2,
    "slug": "examples",
    "text": "Examples"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><a href=\"https://netlify.com\">Netlify</a> offers hosting and serverless backend services for web applications and static websites. Any Astro site can be hosted on Netlify!</p>\n<p>This guide includes instructions for deploying to Netlify through the website UI or Netlify’s CLI.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"project-configuration\">Project configuration</h2><a class=\"sl-anchor-link\" href=\"#project-configuration\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Project configuration”</span></a></div>\n<p>Your Astro project can be deployed to Netlify in three different ways: as a static site, a server-rendered site, or an edge-rendered site.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"static-site\">Static site</h3><a class=\"sl-anchor-link\" href=\"#static-site\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Static site”</span></a></div>\n<p>Your Astro project is a static site by default. You don’t need any extra configuration to deploy a static Astro site to Netlify.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"adapter-for-on-demand-rendering\">Adapter for on-demand rendering</h3><a class=\"sl-anchor-link\" href=\"#adapter-for-on-demand-rendering\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Adapter for on-demand rendering”</span></a></div>\n<p>Add <a href=\"/en/guides/integrations-guide/netlify/\">the Netlify adapter</a> to enable on-demand rendering in your Astro project and deploy to Netlify with the following <code dir=\"auto\">astro add</code> command. This will install the adapter and make the appropriate changes to your <code dir=\"auto\">astro.config.mjs</code> file in one step.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">netlify</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx astro add netlify\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ReadMore, {
      "set:html": "See the <a href=\"/en/guides/integrations-guide/netlify/\">Netlify adapter guide</a> to install manually instead, or for more configuration options, such as deploying your project’s Astro middleware using Netlify’s Edge Functions."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"how-to-deploy\">How to deploy</h2><a class=\"sl-anchor-link\" href=\"#how-to-deploy\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy”</span></a></div>\n<p>You can deploy to Netlify through the website UI or using Netlify’s CLI (command line interface). The process is the same for both static and on-demand rendered Astro sites.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"website-ui-deployment\">Website UI deployment</h3><a class=\"sl-anchor-link\" href=\"#website-ui-deployment\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Website UI deployment”</span></a></div>\n<p>If your project is stored in GitHub, GitLab, BitBucket, or Azure DevOps, you can use the Netlify website UI to deploy your Astro site.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Click <kbd>Add a new site</kbd> in your <a href=\"https://app.netlify.com/\">Netlify dashboard</a></p>\n</li>\n<li>\n<p>Choose <kbd>Import an existing project</kbd></p>\n<p>When you import your Astro repository from your Git provider, Netlify should automatically detect and pre-fill the correct configuration settings for you.</p>\n</li>\n<li>\n<p>Make sure that the following settings are entered, then press the <kbd>Deploy</kbd> button:</p>\n<ul>\n<li><strong>Build Command:</strong> <code dir=\"auto\">astro build</code> or <code dir=\"auto\">npm run build</code></li>\n<li><strong>Publish directory:</strong> <code dir=\"auto\">dist</code></li>\n</ul>\n<p>After deploying, you will be redirected to the site overview page. There, you can edit the details of your site.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Any future changes to your source repository will trigger preview and production deploys based on your deployment configuration.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"netlifytoml-file\"><code dir=\"auto\">netlify.toml</code> file</h4><a class=\"sl-anchor-link\" href=\"#netlifytoml-file\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “netlify.toml file”</span></a></div>\n<p>You can optionally create a new <code dir=\"auto\">netlify.toml</code> file at the top level of your project repository to configure your build command and publish directory, as well as other project settings including environment variables and redirects. Netlify will read this file and automatically configure your deployment.</p>\n<p>To configure the default settings, create a <code dir=\"auto\">netlify.toml</code> file with the following contents:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"toml\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">[build]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">command</span><span style=\"--0:#D6DEEB;--1:#403F53\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">npm run build</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">publish</span><span style=\"--0:#D6DEEB;--1:#403F53\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">dist</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"[build]  command = &#x22;npm run build&#x22;  publish = &#x22;dist&#x22;\"><div></div></button></div></figure></div>\n"
    }), createVNode($$ReadMore, {
      "set:html": "More info at <a href=\"https://www.netlify.com/blog/how-to-deploy-astro/#deploy-an-existing-git-repository-to-netlify\">“Deploying an existing Astro Git repository”</a> on Netlify’s blog"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cli-deployment\">CLI deployment</h3><a class=\"sl-anchor-link\" href=\"#cli-deployment\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CLI deployment”</span></a></div>\n<p>You can also create a new site on Netlify and link up your Git repository by installing and using the <a href=\"https://cli.netlify.com/\">Netlify CLI</a>.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Install Netlify’s CLI globally</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--global</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">netlify-cli</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm install --global netlify-cli\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Run <code dir=\"auto\">netlify login</code> and follow the instructions to log in and authorize Netlify</p>\n</li>\n<li>\n<p>Run <code dir=\"auto\">netlify init</code> and follow the instructions</p>\n</li>\n<li>\n<p>Confirm your build command (<code dir=\"auto\">astro build</code>)</p>\n<p>The CLI will automatically detect the build settings (<code dir=\"auto\">astro build</code>) and deploy directory (<code dir=\"auto\">dist</code>), and will offer to automatically generate <a href=\"#netlifytoml-file\">a <code dir=\"auto\">netlify.toml</code> file</a> with those settings.</p>\n</li>\n<li>\n<p>Build and deploy by pushing to Git</p>\n<p>The CLI will add a deploy key to the repository, which means your site will be automatically rebuilt on Netlify every time you <code dir=\"auto\">git push</code>.</p>\n</li>\n</ol>"
    }), "\n", createVNode($$ReadMore, {
      "set:html": "More details from Netlify on <a href=\"https://www.netlify.com/blog/how-to-deploy-astro/#link-your-astro-project-and-deploy-using-the-netlify-cli\">Deploy an Astro site using the Netlify CLI</a>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"set-a-nodejs-version\">Set a Node.js version</h3><a class=\"sl-anchor-link\" href=\"#set-a-nodejs-version\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Set a Node.js version”</span></a></div>\n<p>If you are using a legacy <a href=\"https://docs.netlify.com/configure-builds/get-started/#build-image-selection\">build image</a> (Xenial) on Netlify, make sure that your Node.js version is set. Astro requires <code dir=\"auto\">v18.20.8</code> or <code dir=\"auto\">v20.3.0</code> or higher.</p>\n<p>You can <a href=\"https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript\">specify your Node.js version in Netlify</a> using:</p>\n<ul>\n<li>a <a href=\"https://github.com/nvm-sh/nvm#nvmrc\"><code dir=\"auto\">.nvmrc</code></a> file in your base directory.</li>\n<li>a <code dir=\"auto\">NODE_VERSION</code> environment variable in your site’s settings using the Netlify project dashboard.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"using-netlify-functions\">Using Netlify Functions</h2><a class=\"sl-anchor-link\" href=\"#using-netlify-functions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Using Netlify Functions”</span></a></div>\n<p>No special configuration is required to use Netlify Functions with Astro. Add a <code dir=\"auto\">netlify/functions</code> directory to your project root and follow <a href=\"https://docs.netlify.com/functions/overview/\">the Netlify Functions documentation</a> to get started!</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"examples\">Examples</h2><a class=\"sl-anchor-link\" href=\"#examples\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Examples”</span></a></div>\n<ul>\n<li><a href=\"https://www.netlify.com/blog/deploy-an-astro-site-with-forms-serverless-functions-and-redirects/\">Deploy An Astro site with Forms, Serverless Functions, and Redirects</a> — Netlify Blog</li>\n<li><a href=\"https://youtu.be/GrSLYq6ZTes\">Deployment Walkthrough Video</a> — Netlify YouTube channel</li>\n</ul>"
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

const url = "src/content/docs/en/guides/deploy/netlify.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/netlify.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/netlify.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
