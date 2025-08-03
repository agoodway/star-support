import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import { $ as $$MultipleChoice, a as $$Option } from './Option_C93QaHFu.mjs';
import { $ as $$PreCheck } from './PreCheck_BzWyGivz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "type": "tutorial",
  "title": "Optional: Make a content collection",
  "description": "Tutorial: Build your first Astro blog —\nConvert your blog from file-based routing to content collections",
  "i18nReady": true,
  "head": [{
    "tag": "title",
    "content": "Build a blog tutorial: Make a content collection | Docs"
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "learn-pages-vs-collections",
    "text": "Learn: Pages vs Collections"
  }, {
    "depth": 3,
    "slug": "test-your-knowledge",
    "text": "Test your knowledge"
  }, {
    "depth": 2,
    "slug": "upgrade-dependencies",
    "text": "Upgrade dependencies"
  }, {
    "depth": 2,
    "slug": "create-a-collection-for-your-posts",
    "text": "Create a collection for your posts"
  }, {
    "depth": 2,
    "slug": "generate-pages-from-a-collection",
    "text": "Generate pages from a collection"
  }, {
    "depth": 2,
    "slug": "replace-importmetaglob-with-getcollection",
    "text": "Replace import.meta.glob() with getCollection()"
  }, {
    "depth": 3,
    "slug": "try-it-yourself---update-the-query-in-the-tag-index-page",
    "text": "Try it yourself - Update the query in the Tag Index page"
  }, {
    "depth": 2,
    "slug": "update-any-frontmatter-values-to-match-your-schema",
    "text": "Update any frontmatter values to match your schema"
  }, {
    "depth": 2,
    "slug": "update-the-rss-function",
    "text": "Update the RSS function"
  }, {
    "depth": 2,
    "slug": "checklist",
    "text": "Checklist"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    mark: "mark",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Now that you have a blog using Astro’s <a href=\"/en/guides/routing/#static-routes\">built-in file-based routing</a>, you will update it to use a <a href=\"/en/guides/content-collections/\">content collection</a>. Content collections are a powerful way to manage groups of similar content, such as blog posts.</p>\n"
    }), createVNode($$PreCheck, {
      "set:html": "<ul>\n<li>Move your folder of blog posts into <code dir=\"auto\">src/blog/</code></li>\n<li>Create a schema to define your blog post frontmatter</li>\n<li>Use <code dir=\"auto\">getCollection()</code> to get blog post content and metadata</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"learn-pages-vs-collections\">Learn: Pages vs Collections</h2><a class=\"sl-anchor-link\" href=\"#learn-pages-vs-collections\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Learn: Pages vs Collections”</span></a></div>\n<p>Even when using content collections, you will still use the <code dir=\"auto\">src/pages/</code> folder for individual pages, such as your About Me page. But, moving your blog posts outside of this special folder will allow you to use more powerful and performant APIs to generate your blog post index and display your individual blog posts.</p>\n<p>At the same time, you’ll receive better guidance and autocompletion in your code editor because you will have a <strong><a href=\"/en/guides/content-collections/#defining-the-collection-schema\">schema</a></strong> to define a common structure for each post that Astro will help you enforce through <a href=\"https://zod.dev/\">Zod</a>, a schema declaration and validation library for TypeScript. In your schema, you can specify when frontmatter properties are required, such as a description or an author, and which data type each property must be, such as a string or an array. This leads to catching many mistakes sooner, with descriptive error messages telling you exactly what the problem is.</p>\n<p>Read more about <a href=\"/en/guides/content-collections/\">Astro’s content collections</a> in our guide, or get started with the instructions below to convert a basic blog from <code dir=\"auto\">src/pages/posts/</code> to <code dir=\"auto\">src/blog/</code>.</p>\n"
    }), createVNode($$Box, {
      icon: "question-mark",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h3",
        children: [createVNode(_components.h3, {
          id: "test-your-knowledge",
          children: "Test your knowledge"
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#test-your-knowledge",
          children: [createVNode(_components.span, {
            "aria-hidden": "true",
            class: "sl-anchor-icon",
            children: createVNode(_components.svg, {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              children: createVNode(_components.path, {
                fill: "currentcolor",
                d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
              })
            })
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Section titled “Test your knowledge”"
          })]
        })]
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Which type of page would you probably keep in ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/"
            }), "?"]
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p>Blog posts that all contain the same basic structure and metadata</p>"
            }), createVNode($$Option, {
              "set:html": "<p>Product pages in an eCommerce site</p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p>A contact page, because you do not have multiple similar pages of this type</p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Which is ", createVNode(_components.strong, {
              children: "not"
            }), " a benefit of moving blog posts to a content collection?"]
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p>Pages are automatically created for each file</p>"
            }), createVNode($$Option, {
              "set:html": "<p>Better error messages, because Astro knows more about each file</p>"
            }), createVNode($$Option, {
              "set:html": "<p>Better data fetching, with a more performant function</p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Content collections uses TypeScript …"
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p>To make me feel bad</p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p>To understand and validate my collections, and to provide editor tooling</p>"
            }), createVNode($$Option, {
              "set:html": "<p>Only if I have the <code dir=\"auto\">strictest</code> configuration set in <code dir=\"auto\">tsconfig.json</code></p>"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The steps below show you how to extend the final product of the Build a Blog tutorial by creating a content collection for the blog posts.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"upgrade-dependencies\">Upgrade dependencies</h2><a class=\"sl-anchor-link\" href=\"#upgrade-dependencies\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Upgrade dependencies”</span></a></div>\n<p>Upgrade to the latest version of Astro, and upgrade all integrations to their latest versions by running the following commands in your terminal:</p>\n"
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Upgrade Astro and official integrations together</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">@astrojs/upgrade</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx @astrojs/upgrade\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Upgrade Astro and official integrations together</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">dlx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">@astrojs/upgrade</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm dlx @astrojs/upgrade\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\"># Upgrade Astro and official integrations together</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">dlx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">@astrojs/upgrade</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn dlx @astrojs/upgrade\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"create-a-collection-for-your-posts\">Create a collection for your posts</h2><a class=\"sl-anchor-link\" href=\"#create-a-collection-for-your-posts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Create a collection for your posts”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Create a new <strong>collection</strong> (folder) called <code dir=\"auto\">src/blog/</code>.</p>\n</li>\n<li>\n<p>Move all your existing blog posts (<code dir=\"auto\">.md</code> files) from <code dir=\"auto\">src/pages/posts/</code> into this new collection.</p>\n</li>\n<li>\n<p>Create a <code dir=\"auto\">src/content.config.ts</code> file to <a href=\"/en/guides/content-collections/#defining-the-collection-schema\">define a schema</a> for your <code dir=\"auto\">postsCollection</code>. For the existing blog tutorial code, add the following contents to the file to define all the frontmatter properties used in its blog posts:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/content.config.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Import the glob loader</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { glob } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/loaders</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Import utilities from `astro:content`</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z, defineCollection } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Define a `loader` and `schema` for each collection</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">blog</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">loader: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ pattern: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">**/[^_]*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, base: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">schema: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">title: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">pubDate: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">date</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">description: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">author: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">image: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">url: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">alt: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">tags: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">array</span><span style=\"--0:#D6DEEB;--1:#403F53\">(z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">())</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// Export a single `collections` object to register your collection(s)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">collections</span><span style=\"--0:#C792EA;--1:#8844AE\"> = { </span><span style=\"--0:#D6DEEB;--1:#403F53\">blog</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Import the glob loaderimport { glob } from &#x22;astro/loaders&#x22;;// Import utilities from &#x60;astro:content&#x60;import { z, defineCollection } from &#x22;astro:content&#x22;;// Define a &#x60;loader&#x60; and &#x60;schema&#x60; for each collectionconst blog = defineCollection({    loader: glob({ pattern: &#x27;**/[^_]*.md&#x27;, base: &#x22;./src/blog&#x22; }),    schema: z.object({      title: z.string(),      pubDate: z.date(),      description: z.string(),      author: z.string(),      image: z.object({        url: z.string(),        alt: z.string()      }),      tags: z.array(z.string())    })});// Export a single &#x60;collections&#x60; object to register your collection(s)export const collections = { blog };\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>In order for Astro to recognize your schema, quit (<code dir=\"auto\">CTRL + C</code>) and restart the dev server to continue with the tutorial. This will define the <code dir=\"auto\">astro:content</code> module.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"generate-pages-from-a-collection\">Generate pages from a collection</h2><a class=\"sl-anchor-link\" href=\"#generate-pages-from-a-collection\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Generate pages from a collection”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Create a page file called <code dir=\"auto\">src/pages/posts/[...slug].astro</code>. Your Markdown and MDX files no longer automatically become pages using Astro’s file-based routing when they are inside a collection, so you must create a page responsible for generating each individual blog post.</p>\n</li>\n<li>\n<p>Add the following code to <a href=\"/en/guides/content-collections/#querying-collections\">query your collection</a> to make each blog post’s slug and page content available to each page it will generate:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/posts/[...slug].astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getCollection, render } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getStaticPaths</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">posts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">blog</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> posts</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">map</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">post</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> ({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">params: { slug: post</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">id</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> props: { post }</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">post</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Content</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = await </span><span style=\"--0:#82AAFF;--1:#3B61B0\">render</span><span style=\"--0:#D6DEEB;--1:#403F53\">(post);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { getCollection, render } from &#x27;astro:content&#x27;;export async function getStaticPaths() {  const posts = await getCollection(&#x27;blog&#x27;);  return posts.map(post => ({    params: { slug: post.id }, props: { post },  }));}const { post } = Astro.props;const { Content } = await render(post);---\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Render your post <code dir=\"auto\">&#x3C;Content /></code> within the layout for Markdown pages. This allows you to specify a common layout for all of your posts.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/posts/[...slug].astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getCollection, render } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> MarkdownPostLayout </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">../../layouts/MarkdownPostLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getStaticPaths</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">posts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">blog</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> posts</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">map</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">post</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> ({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">params: { slug: post</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">id</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> props: { post }</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">post</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Content</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = await </span><span style=\"--0:#82AAFF;--1:#3B61B0\">render</span><span style=\"--0:#D6DEEB;--1:#403F53\">(post);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">MarkdownPostLayout</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">frontmatter</span><span style=\"--0:#7FDBCA;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">data</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">Content</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> /></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#2d4a87\">MarkdownPostLayout</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { getCollection, render } from &#x27;astro:content&#x27;;import MarkdownPostLayout from &#x27;../../layouts/MarkdownPostLayout.astro&#x27;;export async function getStaticPaths() {  const posts = await getCollection(&#x27;blog&#x27;);  return posts.map(post => ({    params: { slug: post.id }, props: { post },  }));}const { post } = Astro.props;const { Content } = await render(post);---<MarkdownPostLayout frontmatter={post.data}>  <Content /></MarkdownPostLayout>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Remove the <code dir=\"auto\">layout</code> definition in each individual post’s frontmatter. Your content is now wrapped in a layout when rendered, and this property is no longer needed.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/content/posts/post-1.md</span></figcaption><pre data-language=\"md\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">---</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">layout</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#ECC48D;--1:#2c4984\">../../layouts/MarkdownPostLayout.astro</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">title</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">My First Blog Post</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">pubDate</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">2022-07-01</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---layout: ../../layouts/MarkdownPostLayout.astrotitle: &#x27;My First Blog Post&#x27;pubDate: 2022-07-01...---\"><div></div></button></div></figure></div>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"replace-importmetaglob-with-getcollection\">Replace <code dir=\"auto\">import.meta.glob()</code> with <code dir=\"auto\">getCollection()</code></h2><a class=\"sl-anchor-link\" href=\"#replace-importmetaglob-with-getcollection\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Replace import.meta.glob() with getCollection()”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        start: "5",
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Anywhere you have a list of blog posts, like the tutorial’s Blog page (", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/blog.astro/"
            }), "), you will need to replace ", createVNode(_components.code, {
              dir: "auto",
              children: "import.meta.glob()"
            }), " with ", createVNode(_components.a, {
              href: "/en/reference/modules/astro-content/#getcollection",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "getCollection()"
              })
            }), " as the way to fetch content and metadata from your Markdown files."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/blog.astro"
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
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { getCollection } "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "astro:content"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BaseLayout "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../layouts/BaseLayout.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BlogPost "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../components/BlogPost.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "pageTitle"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "My Astro Learning Blog"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight del",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#91b4ff",
                          "--1": "#2c4984"
                        },
                        children: "allPosts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "Object"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#91b4ff",
                          "--1": "#2c4984"
                        },
                        children: "values"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "import."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075356"
                        },
                        children: "meta"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#91b4ff",
                          "--1": "#2c4984"
                        },
                        children: "glob"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "../pages/posts/*.md"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: ", { eager: "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ff96a8",
                          "--1": "#7a3636"
                        },
                        children: "true"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: " }"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "));"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "allPosts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " = await "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#bad0ff",
                            "--1": "#253d6e"
                          },
                          children: "getCollection"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#3c3b4e"
                          },
                          children: "("
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#eeca99",
                            "--1": "#5f3130"
                          },
                          children: "blog"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#3c3b4e"
                          },
                          children: ")"
                        })]
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
                  "data-code": "---import { getCollection } from \"astro:content\";import BaseLayout from \"../layouts/BaseLayout.astro\";import BlogPost from \"../components/BlogPost.astro\";const pageTitle = \"My Astro Learning Blog\";const allPosts = Object.values(import.meta.glob(\"../pages/posts/*.md\", { eager: true }));const allPosts = await getCollection(\"blog\");---",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["You will also need to update references to the data returned for each ", createVNode(_components.code, {
              dir: "auto",
              children: "post"
            }), ". You will now find your frontmatter values on the ", createVNode(_components.code, {
              dir: "auto",
              children: "data"
            }), " property of each object. Also, when using collections each ", createVNode(_components.code, {
              dir: "auto",
              children: "post"
            }), " object will have a page ", createVNode(_components.code, {
              dir: "auto",
              children: "slug"
            }), ", not a full URL."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/blog.astro"
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
                        children: " { getCollection } "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "astro:content"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BaseLayout "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../layouts/BaseLayout.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BlogPost "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../components/BlogPost.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "pageTitle"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "My Astro Learning Blog"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "allPosts"
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
                        children: "getCollection"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "blog"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ");"
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
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "BaseLayout"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "pageTitle"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "pageTitle"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: ">"
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "<"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "p"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "This is where I will post about my journey learning Astro."
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "</"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "p"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "<"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "ul"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "allPosts"
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
                        children: "map"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
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
                        children: "=>"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " ("
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight del",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "        "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#663383"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#f89d82",
                          "--1": "#8d076c"
                        },
                        children: "BlogPost"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#663383"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#2c4984"
                        },
                        children: "url"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa2a1",
                          "--1": "#862a27"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075356"
                        },
                        children: "url"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa2a1",
                          "--1": "#862a27"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#663383"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#2c4984"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa2a1",
                          "--1": "#862a27"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#FAF39F",
                          "--1": "#111111"
                        },
                        children: "frontmatter"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d0a3ed",
                          "--1": "#663383"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075356"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa2a1",
                          "--1": "#862a27"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#663383"
                        },
                        children: " />"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ")}"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "        "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#f8a186",
                          "--1": "#8f086e"
                        },
                        children: "BlogPost"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#2d4a87"
                        },
                        children: "url"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa5a4",
                          "--1": "#882b28"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "`"
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#eeca99",
                            "--1": "#253d6e"
                          },
                          children: "/posts/"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#f2c5c4",
                            "--1": "#6f2321"
                          },
                          children: "${"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#3c3b4e"
                          },
                          children: "post"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#e2c6f4",
                            "--1": "#552b6d"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#8ddfd0",
                            "--1": "#064547"
                          },
                          children: "id"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#f2c5c4",
                            "--1": "#6f2321"
                          },
                          children: "}"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#eeca99",
                            "--1": "#253d6e"
                          },
                          children: "/"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "`"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa5a4",
                          "--1": "#882b28"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#2d4a87"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa5a4",
                          "--1": "#882b28"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "."
                      }), createVNode(_components.mark, {
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#FAF39F",
                            "--1": "#111111"
                          },
                          children: "data"
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#eaa5a4",
                          "--1": "#882b28"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: " />"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "))"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "</"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "ul"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "</"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "BaseLayout"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: ">"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "---import { getCollection } from \"astro:content\";import BaseLayout from \"../layouts/BaseLayout.astro\";import BlogPost from \"../components/BlogPost.astro\";const pageTitle = \"My Astro Learning Blog\";const allPosts = await getCollection(\"blog\");---<BaseLayout pageTitle={pageTitle}>  <p>This is where I will post about my journey learning Astro.</p>  <ul>    {      allPosts.map((post) => (        <BlogPost url={post.url} title={post.frontmatter.title} />)}        <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />      ))    }  </ul></BaseLayout>",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["The tutorial blog project also dynamically generates a page for each tag using ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/tags/[tag].astro"
            }), " and displays a list of tags at ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/tags/index.astro"
            }), "."]
          }), "\n", createVNode(_components.p, {
            children: "Apply the same changes as above to these two files:"
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["fetch data about all your blog posts using ", createVNode(_components.code, {
                dir: "auto",
                children: "getCollection(\"blog\")"
              }), " instead of using ", createVNode(_components.code, {
                dir: "auto",
                children: "import.meta.glob()"
              })]
            }), "\n", createVNode(_components.li, {
              children: ["access all frontmatter values using ", createVNode(_components.code, {
                dir: "auto",
                children: "data"
              }), " instead of ", createVNode(_components.code, {
                dir: "auto",
                children: "frontmatter"
              })]
            }), "\n", createVNode(_components.li, {
              children: ["create a page URL by adding the post’s ", createVNode(_components.code, {
                dir: "auto",
                children: "slug"
              }), " to the ", createVNode(_components.code, {
                dir: "auto",
                children: "/posts/"
              }), " path"]
            }), "\n"]
          }), "\n", createVNode(_components.p, {
            children: "The page that generates individual tag pages now becomes:"
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/tags/[tag].astro"
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
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { getCollection } "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "astro:content"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BaseLayout "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../layouts/BaseLayout.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: " BlogPost "
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
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "../../components/BlogPost.astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "allPosts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = await "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#91b4ff",
                            "--1": "#325295"
                          },
                          children: "getCollection"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "("
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#ECC48D",
                            "--1": "#804241"
                          },
                          children: "blog"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: ")"
                        })]
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
                        children: "uniqueTags"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " ="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " ["
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "...new"
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
                        children: "Set"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "(allPosts"
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
                        children: "map"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
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
                        children: "=>"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "post"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#FAF39F",
                            "--1": "#111111"
                          },
                          children: "data"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#085f62"
                          },
                          children: "tags"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ")"
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
                        children: "flat"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "())];"
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
                        class: "indent",
                        children: "  "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "return"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " uniqueTags"
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
                        children: "map"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "tag"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
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
                        children: "=>"
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
                        children: "    "
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
                        children: "filteredPosts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "allPosts"
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
                        children: "filter"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " =>"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "      "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "post"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#FAF39F",
                            "--1": "#111111"
                          },
                          children: "data"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#FAF39F",
                            "--1": "#111111"
                          },
                          children: "tags"
                        })]
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
                        children: "includes"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "(tag)"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ");"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "return"
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
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "params: { tag }"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#889FB2",
                          "--1": "#4D667B"
                        },
                        children: ","
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "props: { posts: filteredPosts }"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#889FB2",
                          "--1": "#4D667B"
                        },
                        children: ","
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
                        children: "};"
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
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "});"
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
                        children: "const { "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "tag"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " } = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "Astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "params"
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
                        children: "const { "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "posts"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " } = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "Astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "props"
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
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "BaseLayout"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "pageTitle"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "tag"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: ">"
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "<"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "p"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "Posts tagged with "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "tag"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "</"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "p"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "<"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "ul"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " posts"
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
                        children: "map"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "post"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
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
                        children: "=>"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#F78C6C",
                          "--1": "#AA0982"
                        },
                        children: "BlogPost"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "url"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "`"
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#ECC48D",
                            "--1": "#325295"
                          },
                          children: "/posts/"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#eaa2a1",
                            "--1": "#99302d"
                          },
                          children: "${"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "post"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#085f62"
                          },
                          children: "id"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#eaa2a1",
                            "--1": "#99302d"
                          },
                          children: "}"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#ECC48D",
                            "--1": "#325295"
                          },
                          children: "/"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "`"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "title"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "="
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "{"
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "post"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#FAF39F",
                            "--1": "#111111"
                          },
                          children: "data"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#085f62"
                          },
                          children: "title"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " />"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ") "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#E2817F",
                          "--1": "#B23834"
                        },
                        children: "}"
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
                          "--1": "#8844AE"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: "</"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "ul"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "</"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "BaseLayout"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: ">"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "---import { getCollection } from \"astro:content\";import BaseLayout from \"../../layouts/BaseLayout.astro\";import BlogPost from \"../../components/BlogPost.astro\";export async function getStaticPaths() {  const allPosts = await getCollection(\"blog\");  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];  return uniqueTags.map((tag) => {    const filteredPosts = allPosts.filter((post) =>      post.data.tags.includes(tag)    );    return {      params: { tag },      props: { posts: filteredPosts },    };  });}const { tag } = Astro.params;const { posts } = Astro.props;---<BaseLayout pageTitle={tag}>  <p>Posts tagged with {tag}</p>  <ul>    { posts.map((post) => <BlogPost url={`/posts/${post.id}/`} title={post.data.title} />) }  </ul></BaseLayout>",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$Box, {
            icon: "puzzle-piece",
            "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"try-it-yourself---update-the-query-in-the-tag-index-page\">Try it yourself - Update the query in the Tag Index page</h3><a class=\"sl-anchor-link\" href=\"#try-it-yourself---update-the-query-in-the-tag-index-page\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Try it yourself - Update the query in the Tag Index page”</span></a></div><p>Import and use <code dir=\"auto\">getCollection</code> to fetch the tags used in the blog posts on <code dir=\"auto\">src/pages/tags/index.astro</code>, following the <a href=\"#replace-importmetaglob-with-getcollection\">same steps as above</a>.</p><details><summary>Show me the code.</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/tags/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getCollection } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">allPosts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><mark><span style=\"--0:#91b4ff;--1:#325295\">getCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#804241\">blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></mark><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">tags</span><span style=\"--0:#C792EA;--1:#8844AE\"> =</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#7FDBCA;--1:#096E72\">...new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Set</span><span style=\"--0:#D6DEEB;--1:#403F53\">(allPosts</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">map</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">post</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><mark><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span></mark><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">tags</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">flat</span><span style=\"--0:#D6DEEB;--1:#403F53\">())];</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Tag Index</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- ... --></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { getCollection } from &#x22;astro:content&#x22;;import BaseLayout from &#x22;../../layouts/BaseLayout.astro&#x22;;const allPosts = await getCollection(&#x22;blog&#x22;);const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];const pageTitle = &#x22;Tag Index&#x22;;---<!-- ... -->\"><div></div></button></div></figure></div></details>"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"update-any-frontmatter-values-to-match-your-schema\">Update any frontmatter values to match your schema</h2><a class=\"sl-anchor-link\" href=\"#update-any-frontmatter-values-to-match-your-schema\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Update any frontmatter values to match your schema”</span></a></div>\n<p>If necessary, update any frontmatter values throughout your project, such as in your layout, that do not match your collections schema.</p>\n<p>In the blog tutorial example, <code dir=\"auto\">pubDate</code> was a string. Now, according to the schema that defines types for the post frontmatter, <code dir=\"auto\">pubDate</code> will be a <code dir=\"auto\">Date</code>\nobject. You can now take advantage of this to use the methods available for any <code dir=\"auto\">Date</code> object to format the date.</p>\n<p>To render the date in the blog post layout, convert it to a string using <code dir=\"auto\">toLocaleDateString()</code> method:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/layouts/MarkdownPostLayout.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- ... --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">pubDate</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">toLocaleDateString</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">description</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Written by: </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">author</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">img</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">src</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">width</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">300</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">alt</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">alt</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- ... --></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<!-- ... --><BaseLayout pageTitle={frontmatter.title}>    <p>{frontmatter.pubDate.toLocaleDateString()}</p>    <p><em>{frontmatter.description}</em></p>    <p>Written by: {frontmatter.author}</p>    <img src={frontmatter.image.url} width=&#x22;300&#x22; alt={frontmatter.image.alt} /><!-- ... -->\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"update-the-rss-function\">Update the RSS function</h2><a class=\"sl-anchor-link\" href=\"#update-the-rss-function\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Update the RSS function”</span></a></div>\n<p>The tutorial blog project includes an RSS feed. This function must also use <code dir=\"auto\">getCollection()</code> to return information from your blog posts. You will then generate the RSS items using the <code dir=\"auto\">data</code> object returned.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/rss.xml.js</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> rss </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">@astrojs/rss</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#d0a3ed;--1:#663383\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { pagesGlobToRssItems } </span><span style=\"--0:#d0a3ed;--1:#663383\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">@astrojs/rss</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getCollection } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:content</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GET</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">context</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">posts</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">getCollection</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">rss</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">title: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">Astro Learner | Blog</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">description: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">My journey learning Astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">site: </span><span style=\"--0:#7FDBCA;--1:#096E72\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">site</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">items: </span><span style=\"--0:#d0a3ed;--1:#663383\">await</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#91b4ff;--1:#2c4984\">pagesGlobToRssItems</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d0a3ed;--1:#663383\">import.</span><span style=\"--0:#7FDBCA;--1:#075356\">meta</span><span style=\"--0:#d0a3ed;--1:#663383\">.</span><span style=\"--0:#91b4ff;--1:#2c4984\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">./**/*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">))</span><span style=\"--0:#a5b7c5;--1:#3a4d5c\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">items: </span><span style=\"--0:#7FDBCA;--1:#075457\">posts</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">map</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">post</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> ({</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">title: </span><span style=\"--0:#7FDBCA;--1:#075457\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">title</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">pubDate: </span><span style=\"--0:#7FDBCA;--1:#075457\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">pubDate</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">description: </span><span style=\"--0:#7FDBCA;--1:#075457\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">description</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">link: </span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#2d4a87\">/posts/</span><span style=\"--0:#eaa5a4;--1:#882b28\">${</span><span style=\"--0:#7FDBCA;--1:#075457\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">id</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#ECC48D;--1:#2d4a87\">/</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}))</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">customData: </span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#3B61B0\">&#x3C;language>en-us&#x3C;/language></span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">})</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import rss from &#x27;@astrojs/rss&#x27;;import { pagesGlobToRssItems } from &#x27;@astrojs/rss&#x27;;import { getCollection } from &#x27;astro:content&#x27;;export async function GET(context) {  const posts = await getCollection(&#x22;blog&#x22;);  return rss({    title: &#x27;Astro Learner | Blog&#x27;,    description: &#x27;My journey learning Astro&#x27;,    site: context.site,    items: await pagesGlobToRssItems(import.meta.glob(&#x27;./**/*.md&#x27;)),    items: posts.map((post) => ({      title: post.data.title,      pubDate: post.data.pubDate,      description: post.data.description,      link: &#x60;/posts/${post.id}/&#x60;,    })),    customData: &#x60;<language>en-us</language>&#x60;,  })}\"><div></div></button></div></figure></div>\n<p>For the full example of the blog tutorial using content collections, see the <a href=\"https://github.com/withastro/blog-tutorial-demo/tree/content-collections\">Content Collections branch</a> of the tutorial repo.</p>\n"
    }), createVNode($$Box, {
      icon: "check-list",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h2",
        children: [createVNode(_components.h2, {
          id: "checklist",
          children: "Checklist"
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#checklist",
          children: [createVNode(_components.span, {
            "aria-hidden": "true",
            class: "sl-anchor-icon",
            children: createVNode(_components.svg, {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              children: createVNode(_components.path, {
                fill: "currentcolor",
                d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
              })
            })
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Section titled “Checklist”"
          })]
        })]
      }), createVNode($$Checklist, {
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can use content collections to manage groups of similar content for better performance and organization.</span></label></li>\n</ul>"
      })]
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

const url = "src/content/docs/en/tutorial/6-islands/4.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/6-islands/4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/6-islands/4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
