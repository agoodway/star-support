import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import { $ as $$MultipleChoice, a as $$Option } from './Option_C93QaHFu.mjs';
import { $ as $$PreCheck } from './PreCheck_BzWyGivz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "type": "tutorial",
  "title": "Create a blog post archive",
  "description": "Tutorial: Build your first Astro blog —\nUse import.meta.glob() to access data from files in your project",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "dynamically-display-a-list-of-posts",
    "text": "Dynamically display a list of posts"
  }, {
    "depth": 2,
    "slug": "challenge-create-a-blogpost-component",
    "text": "Challenge: Create a BlogPost component"
  }, {
    "depth": 3,
    "slug": "test-your-knowledge",
    "text": "Test your knowledge"
  }, {
    "depth": 2,
    "slug": "checklist",
    "text": "Checklist"
  }, {
    "depth": 3,
    "slug": "resources",
    "text": "Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    summary: "summary",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Now that you have a few blog posts to link to, it’s time to configure the Blog page to create a list of them automatically!</p>\n"
    }), createVNode($$PreCheck, {
      "set:html": "<ul>\n<li>Access data from all your posts at once using <code dir=\"auto\">import.meta.glob()</code></li>\n<li>Display a dynamically generated list of posts on your Blog page</li>\n<li>Refactor to use a <code dir=\"auto\">&#x3C;BlogPost /></code> component for each list item</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"dynamically-display-a-list-of-posts\">Dynamically display a list of posts</h2><a class=\"sl-anchor-link\" href=\"#dynamically-display-a-list-of-posts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Dynamically display a list of posts”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Add the following code to <code dir=\"auto\">blog.astro</code> to return information about all your Markdown files. <code dir=\"auto\">import.meta.glob()</code> will return an array of objects, one for each blog post.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/blog.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">allPosts</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Object</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">values</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d2a6ee;--1:#6a3588\">import.</span><span style=\"--0:#7FDBCA;--1:#075457\">meta</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">./posts/*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#d2a6ee;--1:#6a3588\">, { eager: </span><span style=\"--0:#ff99aa;--1:#7a3636\">true</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">My Astro Learning Blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">pageTitle</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">This is where I will post about my journey learning Astro.</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">/posts/post-1/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 1</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">/posts/post-2/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 2</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">/posts/post-3/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 3</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;../layouts/BaseLayout.astro&#x27;const allPosts = Object.values(import.meta.glob(&#x27;./posts/*.md&#x27;, { eager: true }));const pageTitle = &#x22;My Astro Learning Blog&#x22;;---<BaseLayout pageTitle={pageTitle}>  <p>This is where I will post about my journey learning Astro.</p>  <ul>    <li><a href=&#x22;/posts/post-1/&#x22;>Post 1</a></li>    <li><a href=&#x22;/posts/post-2/&#x22;>Post 2</a></li>    <li><a href=&#x22;/posts/post-3/&#x22;>Post 3</a></li>  </ul></BaseLayout>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>To generate the entire list of posts dynamically, using the post titles and URLs, replace your individual <code dir=\"auto\">&#x3C;li></code> tags with the following Astro code:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/blog.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">allPosts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Object</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">values</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">./posts/*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, { eager: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">My Astro Learning Blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">pageTitle</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">This is where I will post about my journey learning Astro.</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2c4984\">href</span><span style=\"--0:#7FDBCA;--1:#663383\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">/posts/post-1/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#663383\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 1</span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2c4984\">href</span><span style=\"--0:#7FDBCA;--1:#663383\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">/posts/post-2/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#663383\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 2</span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2c4984\">href</span><span style=\"--0:#7FDBCA;--1:#663383\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">/posts/post-3/</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#663383\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Post 3</span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">allPosts</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">map</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">post</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">any</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2d4a87\">href</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">url</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">frontmatter</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">title</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;../layouts/BaseLayout.astro&#x27;const allPosts = Object.values(import.meta.glob(&#x27;./posts/*.md&#x27;, { eager: true }));const pageTitle = &#x22;My Astro Learning Blog&#x22;;---<BaseLayout pageTitle={pageTitle}>  <p>This is where I will post about my journey learning Astro.</p>  <ul>    <li><a href=&#x22;/posts/post-1/&#x22;>Post 1</a></li>    <li><a href=&#x22;/posts/post-2/&#x22;>Post 2</a></li>    <li><a href=&#x22;/posts/post-3/&#x22;>Post 3</a></li>    {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}  </ul></BaseLayout>\"><div></div></button></div></figure></div>\n<p>Your entire list of blog posts is now being generated dynamically using Astro’s built-in TypeScript support, by mapping over the array returned by <code dir=\"auto\">import.meta.glob()</code>.</p>\n</li>\n<li>\n<p>Add a new blog post by creating a new <code dir=\"auto\">post-4.md</code> file in <code dir=\"auto\">src/pages/posts/</code> and adding some Markdown content. Be sure to include at least the frontmatter properties used below.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"markdown\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">layout</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#ECC48D;--1:#3B61B0\">../../layouts/MarkdownPostLayout.astro</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">title</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#ECC48D;--1:#3B61B0\">My Fourth Blog Post</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">author</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#ECC48D;--1:#3B61B0\">Astro Learner</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">description</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">This post will show up on its own!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">image</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#111111\">url</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">https://docs.astro.build/default-og-image.png</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#111111\">alt</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">The word astro against an illustration of planets and stars.</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">pubDate</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">2022-08-08</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#111111\">tags</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">successes</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">This post should show up with my other blog posts, because </span><span style=\"--0:#C5E478;--1:#3B61B0\">`import.meta.glob()`</span><span style=\"--0:#D6DEEB;--1:#403F53\"> is returning a list of all my posts in order to create my list.</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---layout: ../../layouts/MarkdownPostLayout.astrotitle: My Fourth Blog Postauthor: Astro Learnerdescription: &#x22;This post will show up on its own!&#x22;image:    url: &#x22;https://docs.astro.build/default-og-image.png&#x22;    alt: &#x22;The word astro against an illustration of planets and stars.&#x22;pubDate: 2022-08-08tags: [&#x22;astro&#x22;, &#x22;successes&#x22;]---This post should show up with my other blog posts, because &#x60;import.meta.glob()&#x60; is returning a list of all my posts in order to create my list.\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Revisit your blog page in your browser preview at <code dir=\"auto\">http://localhost:4321/blog</code> and look for an updated list with four items, including your new blog post!</p>\n</li>\n</ol>"
    }), "\n", createVNode($$Box, {
      icon: "puzzle-piece",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h2",
        children: [createVNode(_components.h2, {
          id: "challenge-create-a-blogpost-component",
          children: "Challenge: Create a BlogPost component"
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#challenge-create-a-blogpost-component",
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
            children: "Section titled “Challenge: Create a BlogPost component”"
          })]
        })]
      }), createVNode(_components.p, {
        children: "Try on your own to make all the necessary changes to your Astro project so that you can instead use the following code to generate your list of blog posts:"
      }), createVNode(_components.div, {
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
                  })
                })
              }), createVNode(_components.div, {
                class: "ec-line highlight del",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
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
                    children: "allPosts"
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
                      "--0": "#7FDBCA",
                      "--1": "#075356"
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
                      "--1": "#2c4984"
                    },
                    children: "any"
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
                      "--0": "#d0a3ed",
                      "--1": "#663383"
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
                      "--1": "#663383"
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
                      children: "li"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "><"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "a"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: " "
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#2c4984"
                    },
                    children: "href"
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
                    children: ">"
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
                      "--1": "#663383"
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
                      children: "a"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "></"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "li"
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
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#eaa2a1",
                      "--1": "#862a27"
                    },
                    children: "}"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line highlight ins",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
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
                    children: "allPosts"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#d2a6ee",
                      "--1": "#6a3588"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#94b6ff",
                      "--1": "#2d4a87"
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
                      "--0": "#7FDBCA",
                      "--1": "#075457"
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
                      "--1": "#2d4a87"
                    },
                    children: "any"
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
                      "--0": "#d2a6ee",
                      "--1": "#6a3588"
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
                    children: "post"
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
                    children: "url"
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
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FAF39F",
                      "--1": "#111111"
                    },
                    children: "frontmatter"
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
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#eaa5a4",
                      "--1": "#882b28"
                    },
                    children: "}"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: createVNode(_components.span, {
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
                  })
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "<ul>  {allPosts.map((post: any) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}  {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}</ul>",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.details, {
        children: [createVNode(_components.summary, {
          children: "Expand to see the steps"
        }), createVNode($$Steps, {
          "set:html": "<ol>\n<li>\n<p>Create a new component in <code dir=\"auto\">src/components/</code>.</p>\n<details><summary>Show the filename</summary><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">BlogPost.astro</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"BlogPost.astro\"><div></div></button></div></figure></div></details>\n</li>\n<li>\n<p>Write the line of code in your component so that it will be able to receive a <code dir=\"auto\">title</code> and <code dir=\"auto\">url</code> as <code dir=\"auto\">Astro.props</code>.</p>\n<details><summary>Show the code</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/BlogPost.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">title</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">url</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---const { title, url } = Astro.props;---\"><div></div></button></div></figure></div></details>\n</li>\n<li>\n<p>Add the templating used to create each item in your blog post list.</p>\n<details><summary>Show the code</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/BlogPost.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<li><a href={url}>{title}</a></li>\"><div></div></button></div></figure></div></details>\n</li>\n<li>\n<p>Import the new component into your Blog page.</p>\n<details><summary>Show the code</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/blog.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BlogPost </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">../components/BlogPost.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">allPosts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Object</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">values</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../pages/posts/*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, { eager: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">My Astro Learning Blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;../layouts/BaseLayout.astro&#x27;;import BlogPost from &#x27;../components/BlogPost.astro&#x27;;const allPosts = Object.values(import.meta.glob(&#x27;../pages/posts/*.md&#x27;, { eager: true }));const pageTitle = &#x22;My Astro Learning Blog&#x22;;---\"><div></div></button></div></figure></div></details>\n</li>\n<li>\n<p>Check Yourself: see the finished component code.</p>\n<details><summary>Show the code</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/BlogPost.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">title</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">url</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---const { title, url } = Astro.props---<li><a href={url}>{title}</a></li>\"><div></div></button></div></figure></div><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/blog.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BlogPost </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">../components/BlogPost.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">allPosts</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Object</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">values</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">glob</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">../pages/posts/*.md</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, { eager: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">My Astro Learning Blog</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">pageTitle</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">This is where I will post about my journey learning Astro.</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">allPosts</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">map</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">post</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">any</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#f8a186;--1:#8f086e\">BlogPost</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">url</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">url</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">title</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">post</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">frontmatter</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">title</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> /></span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;../layouts/BaseLayout.astro&#x27;;import BlogPost from &#x27;../components/BlogPost.astro&#x27;;const allPosts = Object.values(import.meta.glob(&#x27;../pages/posts/*.md&#x27;, { eager: true }));const pageTitle = &#x22;My Astro Learning Blog&#x22;---<BaseLayout pageTitle={pageTitle}>  <p>This is where I will post about my journey learning Astro.</p>  <ul>    {allPosts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title} />)}  </ul></BaseLayout>\"><div></div></button></div></figure></div></details>\n</li>\n</ol>"
        })]
      })]
    }), "\n", createVNode($$Box, {
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
      }), createVNode(_components.p, {
        children: "If your Astro component contains the following line of code:"
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
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
                    children: "const "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "myPosts"
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
                    children: "Object"
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
                    children: "values"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "import."
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
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
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
                    children: "'"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "./posts/*.md"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "'"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: ", { eager:  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FF6A83",
                      "--1": "#A24848"
                    },
                    children: "true"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
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
              "data-code": "---const myPosts = Object.values(import.meta.glob('./posts/*.md', { eager:  true }));---",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: "Choose the syntax you could write to represent:"
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "The title of your third blog post."
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">myPosts.map((post) => &#x3C;LastUpdated date={post.frontmatter.pubDate} />)</code></p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p><code dir=\"auto\">myPosts[2].frontmatter.title</code></p>"
            }), createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">&#x3C;a href={myPosts[0].url}>First Post!!&#x3C;/a></code></p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "A link to the URL of your first blog post."
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">myPosts.map((post) => &#x3C;LastUpdated date={post.frontmatter.pubDate} />)</code></p>"
            }), createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">myPosts[2].frontmatter.title</code></p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p><code dir=\"auto\">&#x3C;a href={myPosts[0].url}>First Post!!&#x3C;/a></code></p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "A component for each post, displaying the date that it was last updated."
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p><code dir=\"auto\">myPosts.map((post) => &#x3C;LastUpdated date={post.frontmatter.pubDate} />)</code></p>"
            }), createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">myPosts[2].frontmatter.title</code></p>"
            }), createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">&#x3C;a href={myPosts[0].url}>First Post!!&#x3C;/a></code></p>"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"checklist\">Checklist</h2><a class=\"sl-anchor-link\" href=\"#checklist\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Checklist”</span></a></div>\n"
    }), createVNode($$Box, {
      icon: "check-list",
      children: createVNode($$Checklist, {
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can query for data from my local files.</span></label></li>\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can display a list of all my blog posts.</span></label></li>\n</ul>"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"resources\">Resources</h3><a class=\"sl-anchor-link\" href=\"#resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Resources”</span></a></div>\n<ul>\n<li><a href=\"/en/guides/imports/#importmetaglob\">Importing glob patterns in Astro</a></li>\n</ul>"
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

const url = "src/content/docs/en/tutorial/5-astro-api/1.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/5-astro-api/1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/5-astro-api/1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
