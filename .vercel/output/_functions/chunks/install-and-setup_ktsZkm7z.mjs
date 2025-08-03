import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps, g as $$FileTree } from './Code_CLJ7HHbi.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "Install Astro",
  "sidebar": {
    "label": "Installation"
  },
  "description": "How to install Astro and start a new project.",
  "i18nReady": true,
  "banner": {
    "content": "Astro v5 is here! <a href=\"/en/guides/upgrade-to/v5/\">Learn how to upgrade your site</a>\n"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "browser-compatibility",
    "text": "Browser compatibility"
  }, {
    "depth": 2,
    "slug": "install-from-the-cli-wizard",
    "text": "Install from the CLI wizard"
  }, {
    "depth": 2,
    "slug": "cli-installation-flags",
    "text": "CLI installation flags"
  }, {
    "depth": 3,
    "slug": "add-integrations",
    "text": "Add integrations"
  }, {
    "depth": 3,
    "slug": "use-a-theme-or-starter-template",
    "text": "Use a theme or starter template"
  }, {
    "depth": 2,
    "slug": "manual-setup",
    "text": "Manual Setup"
  }];
}
function _createMdxContent(props) {
  const _components = {
    aside: "aside",
    button: "button",
    code: "code",
    div: "div",
    em: "em",
    figcaption: "figcaption",
    figure: "figure",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>The <a href=\"#install-from-the-cli-wizard\"><code dir=\"auto\">create astro</code> CLI command</a> is the fastest way to start a new Astro project from scratch. It will walk you through every step of setting up your new Astro project and allow you to choose from a few different official starter templates.</p>\n<p>You can also run the CLI command with the <code dir=\"auto\">template</code> flag to begin your project using any existing theme or starter template. Explore our <a href=\"https://astro.build/themes/\">themes and starters showcase</a> where you can browse themes for blogs, portfolios, documentation sites, landing pages, and more!</p>\n<p>To install Astro manually instead, see our <a href=\"#manual-setup\">step-by-step manual installation guide</a>.</p>\n<aside aria-label=\"Online previews\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Online previews</p><div class=\"starlight-aside__content\"><p>Prefer to try Astro in your browser? Visit <a href=\"https://astro.new/\">astro.new</a> to browse our starter templates and spin up a new Astro project without ever leaving your browser.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"prerequisites\">Prerequisites</h2><a class=\"sl-anchor-link\" href=\"#prerequisites\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prerequisites”</span></a></div>\n<ul>\n<li><strong>Node.js</strong> - <code dir=\"auto\">v18.20.8</code> or <code dir=\"auto\">v20.3.0</code>, <code dir=\"auto\">v22.0.0</code> or higher. ( <code dir=\"auto\">v19</code> and <code dir=\"auto\">v21</code> are not supported.)</li>\n<li><strong>Text editor</strong> - We recommend <a href=\"https://code.visualstudio.com/\">VS Code</a> with our <a href=\"https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode\">Official Astro extension</a>.</li>\n<li><strong>Terminal</strong> - Astro is accessed through its command-line interface (CLI).</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"browser-compatibility\">Browser compatibility</h2><a class=\"sl-anchor-link\" href=\"#browser-compatibility\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Browser compatibility”</span></a></div>\n<p>Astro is built with Vite which targets browsers with modern JavaScript support by default. For a complete reference, you can see the <a href=\"https://vite.dev/guide/build.html#browser-compatibility\">list of currently supported browser versions in Vite</a>.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"install-from-the-cli-wizard\">Install from the CLI wizard</h2><a class=\"sl-anchor-link\" href=\"#install-from-the-cli-wizard\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Install from the CLI wizard”</span></a></div>\n<p>You can run <code dir=\"auto\">create astro</code> anywhere on your machine, so there’s no need to create a new empty directory for your project before you begin. If you don’t have an empty directory yet for your new project, the wizard will help create one for you automatically.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Run the following command in your terminal to start the install wizard:"
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with npm</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with pnpm</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm create astro@latest\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with yarn</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn create astro\"><div></div></button></div></figure></div>"
            })]
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<p>If all goes well, you will see a success message followed by some recommended next steps.</p>\n"
          })]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Now that your project has been created, you can <code dir=\"auto\">cd</code> into your new project directory to begin using Astro.</p>\n</li>\n"
        }), createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "If you skipped the “Install dependencies?” step during the CLI wizard, then be sure to install your dependencies before continuing."
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm install\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm install\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn install\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>You can now <a href=\"/en/develop-and-build/#start-the-astro-dev-server\">start the Astro dev server</a> and see a live preview of your project while you build!</p>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"cli-installation-flags\">CLI installation flags</h2><a class=\"sl-anchor-link\" href=\"#cli-installation-flags\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “CLI installation flags”</span></a></div>\n<p>You can run the <code dir=\"auto\">create astro</code> command with additional flags to customize the setup process (e.g. answering “yes” to all questions, skipping the Houston animation) or your new project (e.g. install git or not, add integrations).</p>\n"
    }), createVNode($$ReadMore, {
      "set:html": "See <a href=\"https://github.com/withastro/astro/blob/main/packages/create-astro/README.md\">all the available <code dir=\"auto\">create astro</code> command flags</a>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"add-integrations\">Add integrations</h3><a class=\"sl-anchor-link\" href=\"#add-integrations\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Add integrations”</span></a></div>\n<p>You can start a new Astro project and install any <a href=\"/en/guides/integrations-guide/\">official integrations</a> or community integrations that support the <code dir=\"auto\">astro add</code> command at the same time by passing the <code dir=\"auto\">--add</code> argument to the <code dir=\"auto\">create astro</code> command.</p>\n<p>Run the following command in your terminal, substituting any integration that supports the <code dir=\"auto\">astro add</code> command:</p>\n"
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with React and Partytown</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">react</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">partytown</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest -- --add react --add partytown\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with React and Partytown</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">react</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">partytown</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm create astro@latest --add react --add partytown\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with React and Partytown</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">react</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">partytown</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn create astro --add react --add partytown\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"use-a-theme-or-starter-template\">Use a theme or starter template</h3><a class=\"sl-anchor-link\" href=\"#use-a-theme-or-starter-template\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Use a theme or starter template”</span></a></div>\n<p>You can start a new Astro project based on an <a href=\"https://github.com/withastro/astro/tree/main/examples\">official example</a> or the <code dir=\"auto\">main</code> branch of any GitHub repository by passing a <code dir=\"auto\">--template</code> argument to the <code dir=\"auto\">create astro</code> command.</p>\n<p>Run the following command in your terminal, substituting the official Astro starter template name, or the GitHub username and repository of the theme you want to use:</p>\n"
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with an official example</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;example-name></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project based on a GitHub repository’s main branch</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;github-username>/&#x3C;github-repo></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest -- --template <example-name>npm create astro@latest -- --template <github-username>/<github-repo>\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with an official example</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;example-name></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project based on a GitHub repository’s main branch</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;github-username>/&#x3C;github-repo></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm create astro@latest --template <example-name>pnpm create astro@latest --template <github-username>/<github-repo>\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project with an official example</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;example-name></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># create a new project based on a GitHub repository’s main branch</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;github-username>/&#x3C;github-repo></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn create astro --template <example-name>yarn create astro --template <github-username>/<github-repo>\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>By default, this command will use the template repository’s <code dir=\"auto\">main</code> branch. To use a different branch name, pass it as part of the <code dir=\"auto\">--template</code> argument: <code dir=\"auto\">&#x3C;github-username>/&#x3C;github-repo>#&#x3C;branch></code>.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"manual-setup\">Manual Setup</h2><a class=\"sl-anchor-link\" href=\"#manual-setup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Manual Setup”</span></a></div>\n<p>This guide will walk you through the steps to manually install and configure a new Astro project.</p>\n<p>If you prefer not to use our automatic <code dir=\"auto\">create astro</code> CLI tool, you can set up your project yourself by following the guide below.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Create your directory"
          }), "\n", createVNode(_components.p, {
            children: "Create an empty directory with the name of your project, and then navigate into it."
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                "data-language": "bash",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "mkdir"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "my-astro-project"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "cd"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "my-astro-project"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "mkdir my-astro-projectcd my-astro-project",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: ["Once you are in your new directory, create your project ", createVNode(_components.code, {
              dir: "auto",
              children: "package.json"
            }), " file. This is how you will manage your project dependencies, including Astro. If you aren’t familiar with this file format, run the following command to create one."]
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">init</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--yes</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm init --yes\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">init</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm init\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">init</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--yes</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn init --yes\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Install Astro"
          }), "\n", createVNode(_components.p, {
            children: "First, install the Astro project dependencies inside your project."
          }), "\n", createVNode(_components.aside, {
            "aria-label": "Important",
            class: "starlight-aside starlight-aside--note",
            children: [createVNode(_components.p, {
              class: "starlight-aside__title",
              "aria-hidden": "true",
              children: [createVNode(_components.svg, {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                fill: "currentColor",
                class: "starlight-aside__icon",
                children: createVNode(_components.path, {
                  d: "M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                })
              }), "Important"]
            }), createVNode(_components.div, {
              class: "starlight-aside__content",
              children: createVNode(_components.p, {
                children: ["Astro must be installed locally, not globally. Make sure you are ", createVNode(_components.em, {
                  children: "not"
                }), " running ", createVNode(_components.code, {
                  dir: "auto",
                  children: "npm install -g astro"
                }), " ", createVNode(_components.code, {
                  dir: "auto",
                  children: "pnpm add -g astro"
                }), " or ", createVNode(_components.code, {
                  dir: "auto",
                  children: "yarn add global astro"
                }), "."]
              })
            })]
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm install astro\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm add astro\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn add astro\"><div></div></button></div></figure></div>"
            })]
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<p>Then, replace any placeholder “scripts” section of your <code dir=\"auto\">package.json</code> with the following:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">package.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"scripts\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#075356\">\"test\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d4a4df;--1:#5d4165\">echo </span><span style=\"--0:#f89d82;--1:#8d076c\">\\\"</span><span style=\"--0:#d4a4df;--1:#5d4165\">Error: no test specified</span><span style=\"--0:#f89d82;--1:#8d076c\">\\\"</span><span style=\"--0:#d4a4df;--1:#5d4165\"> &#x26;&#x26; exit 1</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#075457\">\"dev\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d5a7e0;--1:#5d4165\">astro dev</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#075457\">\"build\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d5a7e0;--1:#5d4165\">astro build</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#075457\">\"preview\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d5a7e0;--1:#5d4165\">astro preview</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;scripts&#x22;: {    &#x22;test&#x22;: &#x22;echo \\&#x22;Error: no test specified\\&#x22; &#x26;&#x26; exit 1&#x22;,    &#x22;dev&#x22;: &#x22;astro dev&#x22;,    &#x22;build&#x22;: &#x22;astro build&#x22;,    &#x22;preview&#x22;: &#x22;astro preview&#x22;  },}\"><div></div></button></div></figure></div>\n<p>You’ll use these scripts later in the guide to start Astro and run its different commands.</p>\n"
          })]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Create your first page</p>\n<p>In your text editor, create a new file in your directory at <code dir=\"auto\">src/pages/index.astro</code>. This will be your first Astro page in the project.</p>\n<p>For this guide, copy and paste the following code snippet (including <code dir=\"auto\">---</code> dashes) into your new file:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Welcome to Astro! Everything between these triple-dash code fences</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// is your \"component frontmatter\". It never runs in the browser.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">This runs in your terminal, not the browser!</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Below is your \"component template.\" It's just HTML, but with</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5F636F\">    </span></span><span style=\"--0:#919F9F;--1:#5F636F\">some magic sprinkled in to help you build great templates. --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Hello, World!</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">orange</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---// Welcome to Astro! Everything between these triple-dash code fences// is your &#x22;component frontmatter&#x22;. It never runs in the browser.console.log(&#x27;This runs in your terminal, not the browser!&#x27;);---<!-- Below is your &#x22;component template.&#x22; It&#x27;s just HTML, but with    some magic sprinkled in to help you build great templates. --><html>  <body>    <h1>Hello, World!</h1>  </body></html><style>  h1 {    color: orange;  }</style>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Create your first static asset</p>\n<p>You will also want to create a <code dir=\"auto\">public/</code> directory to store your static assets. Astro will always include these assets in your final build, so you can safely reference them from inside your component templates.</p>\n<p>In your text editor, create a new file in your directory at <code dir=\"auto\">public/robots.txt</code>. <code dir=\"auto\">robots.txt</code> is a simple file that most sites will include to tell search bots like Google how to treat your site.</p>\n<p>For this guide, copy and paste the following code snippet into your new file:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">public/robots.txt</span></figcaption><pre data-language=\"diff\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Example: Allow all bots to scan and index your site.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">User-agent: *</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Allow: /</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"# Example: Allow all bots to scan and index your site.# Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txtUser-agent: *Allow: /\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Create <code dir=\"auto\">astro.config.mjs</code></p>\n<p>Astro is configured using <code dir=\"auto\">astro.config.mjs</code>. This file is optional if you do not need to configure Astro, but you may wish to create it now.</p>\n<p>Create <code dir=\"auto\">astro.config.mjs</code> at the root of your project, and copy the code below into it:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// https://astro.build/config</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig } from &#x22;astro/config&#x22;;// https://astro.build/configexport default defineConfig({});\"><div></div></button></div></figure></div>\n<p>If you want to include <a href=\"/en/guides/framework-components/\">UI framework components</a> such as React, Svelte, etc. or use other tools such as MDX or Partytown in your project, here is where you will <a href=\"/en/guides/integrations-guide/\">manually import and configure integrations</a>.</p>\n<p>Read Astro’s <a href=\"/en/reference/configuration-reference/\">API configuration reference</a> for more information.</p>\n</li>\n<li>\n<p>Add TypeScript support</p>\n<p>TypeScript is configured using <code dir=\"auto\">tsconfig.json</code>. Even if you don’t write TypeScript code, this file is important so that tools like Astro and VS Code know how to understand your project. Some features (like npm package imports) aren’t fully supported in the editor without a <code dir=\"auto\">tsconfig.json</code> file.</p>\n<p>If you do intend to write TypeScript code, using Astro’s <code dir=\"auto\">strict</code> or <code dir=\"auto\">strictest</code> template is recommended. You can view and compare the three template configurations at <a href=\"https://github.com/withastro/astro/blob/main/packages/astro/tsconfigs/\">astro/tsconfigs/</a>.</p>\n<p>Create <code dir=\"auto\">tsconfig.json</code> at the root of your project, and copy the code below into it. (You can use <code dir=\"auto\">base</code>, <code dir=\"auto\">strict</code>, or <code dir=\"auto\">strictest</code> for your TypeScript template):</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">tsconfig.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"extends\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">astro/tsconfigs/</span><mark><span style=\"--0:#d4a4df;--1:#694971\">base</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;extends&#x22;: &#x22;astro/tsconfigs/base&#x22;}\"><div></div></button></div></figure></div>\n<p>Read Astro’s <a href=\"/en/guides/typescript/#setup\">TypeScript setup guide</a> for more information.</p>\n</li>\n"
        }), createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Next Steps"
          }), "\n", createVNode(_components.p, {
            children: "If you have followed the steps above, your project directory should now look like this:"
          }), "\n", createVNode($$FileTree, {
            "set:html": "<ul>\n<li>node_modules/</li>\n<li>public/\n<ul>\n<li>robots.txt</li>\n</ul>\n</li>\n<li>src/\n<ul>\n<li>pages/\n<ul>\n<li>index.astro</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>astro.config.mjs</li>\n<li>package-lock.json or <code dir=\"auto\">yarn.lock</code>, <code dir=\"auto\">pnpm-lock.yaml</code>, etc.</li>\n<li>package.json</li>\n<li>tsconfig.json</li>\n</ul>"
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>You can now <a href=\"/en/develop-and-build/#start-the-astro-dev-server\">start the Astro dev server</a> and see a live preview of your project while you build!</p>\n</li>\n"
        })]
      })
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

const url = "src/content/docs/en/install-and-setup.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/install-and-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/install-and-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
