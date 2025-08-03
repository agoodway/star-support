import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { k as $$CardGrid, l as $$LinkCard } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Migrating from Gridsome",
  "description": "Tips for migrating an existing Gridsome project to Astro",
  "sidebar": {
    "label": "Gridsome"
  },
  "type": "migration",
  "stub": true,
  "framework": "Gridsome",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-similarities-between-gridsome-and-astro",
    "text": "Key Similarities between Gridsome and Astro"
  }, {
    "depth": 2,
    "slug": "key-differences-between-gridsome-and-astro",
    "text": "Key Differences between Gridsome and Astro"
  }, {
    "depth": 2,
    "slug": "switch-from-gridsome-to-astro",
    "text": "Switch from Gridsome to Astro"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    aside: "aside",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><a href=\"https://gridsome.org\">Gridsome</a> is an open-source static site generator built on Vue and GraphQL.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-similarities-between-gridsome-and-astro\">Key Similarities between Gridsome and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-similarities-between-gridsome-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Similarities between Gridsome and Astro”</span></a></div>\n<p>Gridsome and Astro share some similarities that will help you migrate your project:</p>\n<ul>\n<li>\n<p>Both Gridsome and Astro are modern JavaScript static-site generators with similar <a href=\"/en/basics/project-structure/#directories-and-files\">project file structures</a>.</p>\n</li>\n<li>\n<p>Both Gridsome and Astro use a <code dir=\"auto\">src/</code> folder for your project files and a <a href=\"/en/basics/astro-pages/\">special <code dir=\"auto\">src/pages/</code> folder for file-based routing</a>. Creating and managing pages for your site should feel familiar.</p>\n</li>\n<li>\n<p>Astro has <a href=\"/en/guides/integrations-guide/vue/\">an official integration for using Vue components</a> and supports <a href=\"/en/guides/imports/#npm-packages\">installing NPM packages</a>, including several for Vue. You will be able to write Vue UI components, and may be able to keep some or all of your existing Gridsome Vue components and dependencies.</p>\n</li>\n<li>\n<p>Astro and Gridsome both allow you to use a <a href=\"/en/guides/data-fetching/\">headless CMS, APIs or Markdown files for data</a>. You can continue to use your preferred content authoring system, and will be able to keep your existing content.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-differences-between-gridsome-and-astro\">Key Differences between Gridsome and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-differences-between-gridsome-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Differences between Gridsome and Astro”</span></a></div>\n<p>When you rebuild your Gridsome site in Astro, you will notice some important differences:</p>\n<ul>\n<li>\n<p>Gridsome is a Vue-based single-page application (SPA). Astro sites are multi-page apps built using <a href=\"/en/basics/astro-components/\"><code dir=\"auto\">.astro</code> components</a>, but can also support <a href=\"/en/guides/framework-components/\">React, Preact, Vue.js, Svelte, SolidJS, AlpineJS</a> and raw HTML templating.</p>\n</li>\n<li>\n<p>As an SPA, Gridsome uses <code dir=\"auto\">vue-router</code> for SPA routing, and <code dir=\"auto\">vue-meta</code> for managing <code dir=\"auto\">&#x3C;head></code>. In Astro, you will create separate HTML pages and control your page <code dir=\"auto\">&#x3C;head></code> directly, or in a <a href=\"/en/basics/layouts/\">layout component</a>.</p>\n</li>\n<li>\n<p><a href=\"/en/guides/imports/\">Local file data</a>: Gridsome uses GraphQL to retrieve data from your project files. Astro uses ESM imports and <a href=\"/en/guides/imports/#importmetaglob\"><code dir=\"auto\">import.meta.glob()</code></a> to import data from local project files. Remote resources can be loaded using the standard <code dir=\"auto\">fetch()</code> API. GraphQL may be optionally added to your project, but is not included by default.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"switch-from-gridsome-to-astro\">Switch from Gridsome to Astro</h2><a class=\"sl-anchor-link\" href=\"#switch-from-gridsome-to-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Switch from Gridsome to Astro”</span></a></div>\n<p>To convert a Gridsome blog to Astro, start with our blog theme starter template, or explore more community blog themes in our <a href=\"https://astro.build/themes/\">theme showcase</a>.</p>\n<p>You can pass a <code dir=\"auto\">--template</code> argument to the <code dir=\"auto\">create astro</code> command to start a new Astro project with one of our official starters. Or, you can <a href=\"/en/install-and-setup/#install-from-the-cli-wizard\">start a new project from any existing Astro repository on GitHub</a>.</p>\n"
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest -- --template blog\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm create astro@latest --template blog\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn create astro --template blog\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Bring your existing Markdown (or MDX, with our optional integration) files as content to <a href=\"/en/guides/markdown-content/\">create Markdown or MDX pages</a>.</p>\n<p>Since Gridsome’s project structure is similar to Astro’s, you may be able to copy several existing files from your project into the same location in your new Astro project. However, the two project structures are not identical. You may want to examine <a href=\"/en/basics/project-structure/\">Astro’s project structure</a> to see what the differences are.</p>\n<p>Since Astro queries and imports your local files differently than Gridsome, you may want to read about how to load files using <a href=\"/en/guides/imports/#importmetaglob\"><code dir=\"auto\">import.meta.glob()</code></a> to understand how to work with your local files.</p>\n<p>To convert other types of sites, such as a portfolio or documentation site, see more official starter templates on <a href=\"https://astro.new\">astro.new</a>. You’ll find a link to each project’s GitHub repository, as well as one-click links to open a working project in IDX, StackBlitz, CodeSandbox and Gitpod online development environments.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"community-resources\">Community Resources</h2><a class=\"sl-anchor-link\" href=\"#community-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Community Resources”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Migration from Gridsome to Astro",
        href: "https://fyodor.io/migration-from-gridsome-to-astro/"
      }), createVNode($$LinkCard, {
        title: "Hello Astro!",
        href: "https://thamas.hu/astro-hello"
      })]
    }), "\n", createVNode(_components.aside, {
      "aria-label": "Have a resource to share?",
      class: "starlight-aside starlight-aside--note",
      "set:html": "<p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Have a resource to share?</p><div class=\"starlight-aside__content\"><p>If you found (or made!) a helpful video or blog post about converting a Gridsome site to Astro, <a href=\"https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/migrate-to-astro/from-gridsome.mdx\">add it to this list</a>!</p></div>"
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

const url = "src/content/docs/en/guides/migrate-to-astro/from-gridsome.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-gridsome.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-gridsome.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
