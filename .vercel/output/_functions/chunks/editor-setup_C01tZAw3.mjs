import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';
import { $ as $$Badge } from './Badge_CO0sZYx-.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "Editor setup",
  "description": "Set up your code editor to build with Astro.",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "vs-code",
    "text": "VS Code"
  }, {
    "depth": 2,
    "slug": "zed",
    "text": "Zed"
  }, {
    "depth": 2,
    "slug": "jetbrains-ides",
    "text": "JetBrains IDEs"
  }, {
    "depth": 2,
    "slug": "other-code-editors",
    "text": "Other Code Editors"
  }, {
    "depth": 2,
    "slug": "in-browser-editors",
    "text": "In-Browser Editors"
  }, {
    "depth": 2,
    "slug": "other-tools",
    "text": "Other tools"
  }, {
    "depth": 3,
    "slug": "eslint",
    "text": "ESLint"
  }, {
    "depth": 3,
    "slug": "stylelint",
    "text": "Stylelint"
  }, {
    "depth": 3,
    "slug": "prettier",
    "text": "Prettier"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Customize your code editor to improve the Astro developer experience and unlock new features.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"vs-code\">VS Code</h2><a class=\"sl-anchor-link\" href=\"#vs-code\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “VS Code”</span></a></div>\n<p><a href=\"https://code.visualstudio.com/\">VS Code</a> is a popular code editor for web developers, built by Microsoft. The VS Code engine also powers popular in-browser code editors like <a href=\"https://github.com/features/codespaces\">GitHub Codespaces</a> and <a href=\"https://gitpod.io/\">Gitpod</a>.</p>\n<p>Astro works with any code editor. However, VS Code is our recommended editor for Astro projects. We maintain an official <a href=\"https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode\">Astro VS Code Extension</a> that unlocks several key features and developer experience improvements for Astro projects.</p>\n<ul>\n<li>Syntax highlighting for <code dir=\"auto\">.astro</code> files.</li>\n<li>TypeScript type information for <code dir=\"auto\">.astro</code> files.</li>\n<li><a href=\"https://code.visualstudio.com/docs/editor/intellisense\">VS Code Intellisense</a> for code completion, hints and more.</li>\n</ul>\n<p>To get started, install the <a href=\"https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode\">Astro VS Code Extension</a> today.</p>\n"
    }), "\n", createVNode($$ReadMore, {
      "set:html": "See how to <a href=\"/en/guides/typescript/\">set up TypeScript</a> in your Astro project."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"zed\">Zed</h2><a class=\"sl-anchor-link\" href=\"#zed\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Zed”</span></a></div>\n<p><a href=\"https://zed.dev/\">Zed</a> is an open-source code editor that added support for Astro in version 0.123.2. You can install the <a href=\"https://github.com/zed-extensions/astro\">Astro extension</a> in the IDE’s Extensions tab. This extension includes features like syntax highlighting, code completion, and formatting.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"jetbrains-ides\">JetBrains IDEs</h2><a class=\"sl-anchor-link\" href=\"#jetbrains-ides\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “JetBrains IDEs”</span></a></div>\n<p><a href=\"https://www.jetbrains.com/webstorm/\">Webstorm</a> is a JavaScript and TypeScript IDE that added support for the Astro Language Server in version 2024.2. This update brings features like syntax highlighting, code completion, and formatting.</p>\n<p>Install the official plugin through <a href=\"https://plugins.jetbrains.com/plugin/20959-astro\">JetBrains Marketplace</a> or by searching for “Astro” in the IDE’s Plugins tab. You can toggle the language server in <code dir=\"auto\">Settings | Languages &#x26; Frameworks | TypeScript | Astro</code>.</p>\n<p>For more information on Astro support in Webstorm, check out <a href=\"https://www.jetbrains.com/help/webstorm/astro.html\">the official Webstorm Astro Documentation</a>.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"other-code-editors\">Other Code Editors</h2><a class=\"sl-anchor-link\" href=\"#other-code-editors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Other Code Editors”</span></a></div>\n<p>Our amazing community maintains several extensions for other popular editors, including:</p>\n"
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://open-vsx.org/extension/astro-build/astro-vscode",
          children: "VS Code Extension on Open VSX"
        }), " ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            text: "Official"
          })
        }), " - The official Astro VS Code Extension, available on the Open VSX registry for open platforms like ", createVNode(_components.a, {
          href: "https://vscodium.com/",
          "set:html": "VSCodium"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://extensions.panic.com/extensions/sciencefidelity/sciencefidelity.astro/",
          children: "Nova Extension"
        }), " ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            class: "neutral-badge",
            text: "Community"
          })
        }), " - Provides syntax highlighting and code completion for Astro inside of Nova"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://github.com/wuelnerdotexe/vim-astro",
          children: "Vim Plugin"
        }), " ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            class: "neutral-badge",
            text: "Community"
          })
        }), " - Provides syntax highlighting, indentation, and code folding support for Astro inside of Vim or Neovim"]
      }), "\n", createVNode(_components.li, {
        children: ["Neovim ", createVNode(_components.a, {
          href: "https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md#astro",
          children: "LSP"
        }), " and ", createVNode(_components.a, {
          href: "https://github.com/virchau13/tree-sitter-astro",
          children: "TreeSitter"
        }), " Plugins ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            class: "neutral-badge",
            text: "Community"
          })
        }), " - Provides syntax highlighting, treesitter parsing, and code completion for Astro inside of Neovim"]
      }), "\n", createVNode(_components.li, {
        children: ["Emacs - See instructions for ", createVNode(_components.a, {
          href: "https://medium.com/@jrmjrm/configuring-emacs-and-eglot-to-work-with-astro-language-server-9408eb709ab0",
          children: "Configuring Emacs and Eglot"
        }), " ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            class: "neutral-badge",
            text: "Community"
          })
        }), " to work with Astro"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://packagecontrol.io/packages/Astro",
          children: "Astro syntax highlighting for Sublime Text"
        }), " ", createVNode("span", {
          style: "margin: 0.25em;",
          children: createVNode($$Badge, {
            class: "neutral-badge",
            text: "Community"
          })
        }), " - The Astro package for Sublime Text, available on the Sublime Text package manager."]
      }), "\n"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"in-browser-editors\">In-Browser Editors</h2><a class=\"sl-anchor-link\" href=\"#in-browser-editors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “In-Browser Editors”</span></a></div>\n<p>In addition to local editors, Astro also runs well on in-browser hosted editors, including:</p>\n<ul>\n<li><a href=\"https://stackblitz.com/\">StackBlitz</a> and <a href=\"https://codesandbox.io/\">CodeSandbox</a> - online editors that run in your browser, with built-in syntax highlighting support for <code dir=\"auto\">.astro</code> files. No installation or configuration required!</li>\n<li><a href=\"https://github.dev/\">GitHub.dev</a> - allows you to install the Astro VS Code extension as a <a href=\"https://code.visualstudio.com/api/extension-guides/web-extensions\">web extension</a>, which gives you access to only some of the full extension features. Currently, only syntax highlighting is supported.</li>\n<li><a href=\"https://idx.dev\">IDX</a> and <a href=\"https://gitpod.io/\">Gitpod</a> - a full dev environment in the cloud that can install the official Astro VS Code Extension from Open VSX.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"other-tools\">Other tools</h2><a class=\"sl-anchor-link\" href=\"#other-tools\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Other tools”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"eslint\">ESLint</h3><a class=\"sl-anchor-link\" href=\"#eslint\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “ESLint”</span></a></div>\n<p><a href=\"https://eslint.org/\">ESLint</a> is a popular linter for JavaScript and JSX. For Astro support, <a href=\"https://github.com/ota-meshi/eslint-plugin-astro\">a community maintained plugin</a> can be installed.</p>\n<p>See <a href=\"https://ota-meshi.github.io/eslint-plugin-astro/user-guide/\">the project’s User Guide</a> for more information on how to install and set up ESLint for your project.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"stylelint\">Stylelint</h3><a class=\"sl-anchor-link\" href=\"#stylelint\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Stylelint”</span></a></div>\n<p><a href=\"https://stylelint.io/\">Stylelint</a> is a popular linter for CSS. <a href=\"https://github.com/ota-meshi/stylelint-config-html\">A community maintained Stylelint configuration</a> provides Astro support.</p>\n<p>Installation instructions, editor integration, and additional information can be found in the project’s README.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"prettier\">Prettier</h3><a class=\"sl-anchor-link\" href=\"#prettier\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prettier”</span></a></div>\n<p><a href=\"https://prettier.io/\">Prettier</a> is a popular formatter for JavaScript, HTML, CSS, and more. If you’re using the <a href=\"https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode\">Astro VS Code Extension</a> or <a href=\"#other-code-editors\">the Astro language server within another editor</a>, code formatting with Prettier is included.</p>\n<p>To add support for formatting <code dir=\"auto\">.astro</code> files outside of the editor (e.g. CLI) or inside editors that don’t support our editor tooling, install <a href=\"https://github.com/withastro/prettier-plugin-astro\">the official Astro Prettier plugin</a>.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Install ", createVNode(_components.code, {
              dir: "auto",
              children: "prettier"
            }), " and ", createVNode(_components.code, {
              dir: "auto",
              children: "prettier-plugin-astro"
            }), "."]
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">install</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--save-dev</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--save-exact</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier-plugin-astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm install --save-dev --save-exact prettier prettier-plugin-astro\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--save-dev</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--save-exact</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier-plugin-astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm add --save-dev --save-exact prettier prettier-plugin-astro\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--dev</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--exact</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier-plugin-astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn add --dev --exact prettier prettier-plugin-astro\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Create a <code dir=\"auto\">.prettierrc</code> configuration file (or <code dir=\"auto\">.prettierrc.json</code>, <code dir=\"auto\">.prettierrc.mjs</code>, or <a href=\"https://prettier.io/docs/configuration\">other supported formats</a>) in the root of your project and add <code dir=\"auto\">prettier-plugin-astro</code> to it.</p>\n<p>In this file, also manually specify the parser for Astro files.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">.prettierrc</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"plugins\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">prettier-plugin-astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"overrides\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"files\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">*.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"options\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"parser\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;plugins&#x22;: [&#x22;prettier-plugin-astro&#x22;],  &#x22;overrides&#x22;: [    {      &#x22;files&#x22;: &#x22;*.astro&#x22;,      &#x22;options&#x22;: {        &#x22;parser&#x22;: &#x22;astro&#x22;,      }    }  ]}\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Optionally, install other Prettier plugins for your project, and add them to the configuration file. These additional plugins may need to be listed in a specific order. For example, if you use Tailwind, <code dir=\"auto\">prettier-plugin-tailwindcss</code> must be <a href=\"https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins\">the last Prettier plugin in the plugins array</a>.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">.prettierrc</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"plugins\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">prettier-plugin-astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">prettier-plugin-tailwindcss</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#919F9F;--1:#5D6376\">// needs to be last</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"overrides\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"files\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">*.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"options\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"parser\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;plugins&#x22;: [    &#x22;prettier-plugin-astro&#x22;,    &#x22;prettier-plugin-tailwindcss&#x22; // needs to be last  ],  &#x22;overrides&#x22;: [    {      &#x22;files&#x22;: &#x22;*.astro&#x22;,      &#x22;options&#x22;: {        &#x22;parser&#x22;: &#x22;astro&#x22;      }    }  ]}\"><div></div></button></div></figure></div>\n</li>\n"
        }), createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Run the following command in your terminal to format your files."
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">.</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--write</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx prettier . --write\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">exec</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">.</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--write</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm exec prettier . --write\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">exec</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">prettier</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">.</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--write</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn exec prettier . --write\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      "set:html": "See the <a href=\"https://github.com/withastro/prettier-plugin-astro/blob/main/README.md\">Prettier plugin’s README</a> for more information about its supported options, how to set up Prettier inside VS Code, and more."
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

const url = "src/content/docs/en/editor-setup.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/editor-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/editor-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
