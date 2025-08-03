import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { k as $$CardGrid, l as $$LinkCard } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Migrating from Jekyll",
  "description": "Tips for migrating an existing Jekyll project to Astro",
  "sidebar": {
    "label": "Jekyll"
  },
  "type": "migration",
  "stub": true,
  "framework": "Jekyll",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-similarities-between-jekyll-and-astro",
    "text": "Key Similarities between Jekyll and Astro"
  }, {
    "depth": 2,
    "slug": "key-differences-between-jekyll-and-astro",
    "text": "Key Differences between Jekyll and Astro"
  }, {
    "depth": 2,
    "slug": "switch-from-jekyll-to-astro",
    "text": "Switch from Jekyll to Astro"
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
      "set:html": "<p><a href=\"https://jekyllrb.com\">Jekyll</a> is a static site generator built on Ruby.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-similarities-between-jekyll-and-astro\">Key Similarities between Jekyll and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-similarities-between-jekyll-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Similarities between Jekyll and Astro”</span></a></div>\n<p>Jekyll and Astro share some similarities that will help you migrate your project:</p>\n<ul>\n<li>\n<p>Both Jekyll and Astro are static-site generators, commonly used to create blogs.</p>\n</li>\n<li>\n<p>Both Jekyll and Astro allow you to write your content in Markdown and HTML. Jekyll and Astro both provide some special frontmatter YAML properties for page layout and unpublished draft posts. You can continue to use your existing Markdown files in Astro.</p>\n</li>\n<li>\n<p>Both Jekyll and Astro use <a href=\"/en/guides/routing/\">file-based routing</a> for creating pages from your blog posts. Astro provides a <a href=\"/en/basics/project-structure/#srcpages\">special <code dir=\"auto\">src/pages/</code> directory for all pages and posts</a>. Jekyll uses a similar special folder called <code dir=\"auto\">_posts/</code> for your Markdown blog posts, however your site pages can exist elsewhere. Creating new blog posts should feel familiar.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-differences-between-jekyll-and-astro\">Key Differences between Jekyll and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-differences-between-jekyll-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Differences between Jekyll and Astro”</span></a></div>\n<p>When you rebuild your Jekyll site in Astro, you will notice some important differences:</p>\n<ul>\n<li>\n<p>As Jekyll is primarily a blogging platform, several blog features are built-in that you may have to build yourself in Astro. Or, choose a <a href=\"https://astro.build/themes?search=&#x26;categories%5B%5D=blog\">blog starter template theme</a> that includes these features. For example, Jekyll has built-in support for tags and categories which you will find in several Astro blog themes, but is not included in a minimal Astro project.</p>\n</li>\n<li>\n<p>Jekyll uses Liquid templates for reusable layout elements and templating. Astro uses JSX-like <a href=\"/en/basics/astro-components/\"><code dir=\"auto\">.astro</code> files for templating and components</a>. Any <code dir=\"auto\">.astro</code> file can be a component, a layout or an entire page, and can import and render any other Astro components. You can also build using <a href=\"/en/guides/framework-components/\">other UI framework components (e.g. React, Svelte, Vue, Solid)</a> as well as content or metadata from <a href=\"/en/guides/imports/\">other files in your project</a>, such as Markdown or MDX.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"switch-from-jekyll-to-astro\">Switch from Jekyll to Astro</h2><a class=\"sl-anchor-link\" href=\"#switch-from-jekyll-to-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Switch from Jekyll to Astro”</span></a></div>\n<p>To convert a Jekyll blog to Astro, start with our blog theme starter template, or explore more community blog themes in our <a href=\"https://astro.build/themes/\">theme showcase</a>.</p>\n<p>You can pass a <code dir=\"auto\">--template</code> argument to the <code dir=\"auto\">create astro</code> command to start a new Astro project with one of our official starters. Or, you can <a href=\"/en/install-and-setup/#install-from-the-cli-wizard\">start a new project from any existing Astro repository on GitHub</a>.</p>\n"
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
      "set:html": "<p>Bring your existing Markdown files as content to <a href=\"/en/guides/markdown-content/\">create Markdown pages</a>, using an <a href=\"/en/basics/layouts/#markdown-layouts\">Astro Markdown layout</a> instead of a Liquid template.</p>\n<p>Much of your existing HTML page content can be converted into <a href=\"/en/basics/astro-pages/\">Astro pages</a>, and you will additionally be able to <a href=\"/en/reference/astro-syntax/#jsx-like-expressions\">use variables, JSX-like expressions and component imports directly in your HTML templating</a>.</p>\n<p>Astro does not have a <code dir=\"auto\">permalink</code> property that accepts placeholders. You may need to read more about <a href=\"/en/guides/routing/\">Astro’s page routing</a> if you want to keep your existing URL structure. Or, consider <a href=\"https://docs.netlify.com/routing/redirects/\">setting redirects at a host like Netlify</a>.</p>\n<p>To convert other types of sites, such as a portfolio or documentation site, see more official starter templates on <a href=\"https://astro.new\">astro.new</a>. You’ll find a link to each project’s GitHub repository, as well as one-click links to open a working project in IDX, StackBlitz, CodeSandbox and Gitpod online development environments.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"community-resources\">Community Resources</h2><a class=\"sl-anchor-link\" href=\"#community-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Community Resources”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "From Jekyll to Astro",
        href: "https://jackcarey.co.uk/posts/astro-rewrite/"
      }), createVNode($$LinkCard, {
        title: "Goodbye Jekyll, Hello Astro",
        href: "https://kiranrao.in/blog/bye-jekyll-hello-astro/"
      }), createVNode($$LinkCard, {
        title: "Back to the Future: Our Tech Blog's Transition from Jekyll to Astro",
        href: "https://alasco.tech/2023/09/06/migrating-to-astro"
      })]
    }), "\n", createVNode(_components.aside, {
      "aria-label": "Have a resource to share?",
      class: "starlight-aside starlight-aside--note",
      "set:html": "<p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Have a resource to share?</p><div class=\"starlight-aside__content\"><p>If you found (or made!) a helpful video or blog post about converting a Jekyll site to Astro, <a href=\"https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/migrate-to-astro/from-jekyll.mdx\">add it to this list</a>!</p></div>"
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

const url = "src/content/docs/en/guides/migrate-to-astro/from-jekyll.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-jekyll.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-jekyll.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
