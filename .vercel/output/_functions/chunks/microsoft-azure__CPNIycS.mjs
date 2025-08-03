import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to Microsoft Azure",
  "description": "How to deploy your Astro site to the web using Microsoft Azure.",
  "sidebar": {
    "label": "Microsoft Azure"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "how-to-deploy",
    "text": "How to deploy"
  }, {
    "depth": 2,
    "slug": "known-issues",
    "text": "Known Issues"
  }, {
    "depth": 2,
    "slug": "official-resources",
    "text": "Official Resources"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><a href=\"https://azure.microsoft.com/\">Azure</a> is a cloud platform from Microsoft. You can deploy your Astro site with Microsoft Azure’s <a href=\"https://aka.ms/staticwebapps\">Static Web Apps</a> service.</p>\n<p>This guide takes you through deploying your Astro site stored in GitHub using Visual Studio Code. Please see Microsoft guides for using an <a href=\"https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-static-web-app-v0?view=azure-pipelines\">Azure Pipelines Task</a> for other setups.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"prerequisites\">Prerequisites</h2><a class=\"sl-anchor-link\" href=\"#prerequisites\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prerequisites”</span></a></div>\n<p>To follow this guide, you will need:</p>\n<ul>\n<li>An Azure account and a subscription key. You can create a <a href=\"https://azure.microsoft.com/free\">free Azure account here</a>.</li>\n<li>Your app code pushed to <a href=\"https://github.com/\">GitHub</a>.</li>\n<li>The <a href=\"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps\">SWA Extension</a> in <a href=\"https://code.visualstudio.com/\">Visual Studio Code</a>.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"how-to-deploy\">How to deploy</h2><a class=\"sl-anchor-link\" href=\"#how-to-deploy\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Open your project in VS Code.</p>\n</li>\n<li>\n<p>Open the Static Web Apps extension, sign in to Azure, and click the <strong>+</strong> button to create a new Static Web App. You will be prompted to designate which subscription key to use.</p>\n</li>\n<li>\n<p>Follow the wizard started by the extension to give your app a name, choose a framework preset, and designate the app root (usually <code dir=\"auto\">/</code>) and built file location (use <code dir=\"auto\">/dist</code>). Astro is not listed in the built-in templates in Azure so you will need to select <code dir=\"auto\">custom</code>. The wizard will run and will create a <a href=\"https://github.com/features/actions\">GitHub Action</a> in the <code dir=\"auto\">.github</code> folder of your repo. (This folder will be automatically created if it does not already exist.)</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The GitHub Action will deploy your app (you can see its progress in your repo’s Actions tab on GitHub). When successfully completed, you can view your app at the address shown in the SWA Extension’s progress window by clicking the <strong>Browse Website</strong> button (this will appear after the GitHub Action has run).</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"known-issues\">Known Issues</h2><a class=\"sl-anchor-link\" href=\"#known-issues\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Known Issues”</span></a></div>\n<p>The GitHub action yaml that is created for you assumes the use of node 14. This means the Astro build fails. To resolve this update your projects package.json file with this snippet.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">  </span></span><span style=\"--0:#d6deeb;--1:#403f53\">\"engines\": {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">\"node\": \">=18.0.0\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">  </span></span><span style=\"--0:#d6deeb;--1:#403f53\">},</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"  &#x22;engines&#x22;: {    &#x22;node&#x22;: &#x22;>=18.0.0&#x22;  },\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"official-resources\">Official Resources</h2><a class=\"sl-anchor-link\" href=\"#official-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Official Resources”</span></a></div>\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/static-web-apps/\">Microsoft Azure Static Web Apps documentation</a></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"community-resources\">Community Resources</h2><a class=\"sl-anchor-link\" href=\"#community-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Community Resources”</span></a></div>\n<ul>\n<li><a href=\"https://www.blueboxes.co.uk/deploying-an-astro-website-to-azure-static-web-apps\">Deploying an Astro Website to Azure Static Web Apps</a></li>\n<li><a href=\"https://agramont.net/blog/create-static-site-astro-azure-ssg/#automate-deployment-with-github-actions\">Deploying a Static Astro Site to Azure Static Web Apps using GitHub Actions</a></li>\n<li><a href=\"https://www.eliostruyf.com/deploy-astro-azure-static-web-apps-github-cli/\">Astro site deployment to Azure Static Web Apps with the CLI from GitHub Actions</a></li>\n</ul>"
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

const url = "src/content/docs/en/guides/deploy/microsoft-azure.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/microsoft-azure.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/microsoft-azure.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
