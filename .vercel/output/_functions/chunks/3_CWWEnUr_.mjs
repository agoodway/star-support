import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import './Blanks_D2xTZtL_.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import { $ as $$MultipleChoice, a as $$Option } from './Option_C93QaHFu.mjs';
import { $ as $$PreCheck } from './PreCheck_BzWyGivz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "type": "tutorial",
  "title": "Combine layouts to get the best of both worlds",
  "description": "Tutorial: Build your first Astro blog —\nAdd your basic page layout to the layout that formats your blog posts",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nest-your-two-layouts",
    "text": "Nest your two layouts"
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
    div: "div",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
    span: "span",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Now that you have added a layout to each blog post, it’s time to make your posts look like the rest of the pages on your website!</p>\n"
    }), createVNode($$PreCheck, {
      "set:html": "<ul>\n<li>Nest your blog post layout inside your main page layout</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"nest-your-two-layouts\">Nest your two layouts</h2><a class=\"sl-anchor-link\" href=\"#nest-your-two-layouts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Nest your two layouts”</span></a></div>\n<p>You already have a <code dir=\"auto\">BaseLayout.astro</code> for defining the overall layout of your pages.</p>\n<p><code dir=\"auto\">MarkdownPostLayout.astro</code> gives you some additional templating for common blog post properties such as <code dir=\"auto\">title</code> and <code dir=\"auto\">date</code>, but your blog posts don’t look like the other pages on your site. You can match the look of your blog posts to the rest of your site by <strong>nesting layouts</strong>.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>In <code dir=\"auto\">src/layouts/MarkdownPostLayout.astro</code>, import <code dir=\"auto\">BaseLayout.astro</code> and use it to wrap the entire template content. Don’t forget to pass the <code dir=\"auto\">pageTitle</code> prop:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/layouts/MarkdownPostLayout.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">./BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">title</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">charset</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">utf-8</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">pubDate</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">toString</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">slice</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">description</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Written by: </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">author</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">img</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">src</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">width</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">300</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">alt</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">alt</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">slot</span><span style=\"--0:#7FDBCA\"> /></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#2d4a87\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;./BaseLayout.astro&#x27;;const { frontmatter } = Astro.props;---<BaseLayout pageTitle={frontmatter.title}>  <meta charset=&#x22;utf-8&#x22; />  <h1>{frontmatter.title}</h1>  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>  <p><em>{frontmatter.description}</em></p>  <p>Written by: {frontmatter.author}</p>  <img src={frontmatter.image.url} width=&#x22;300&#x22; alt={frontmatter.image.alt} />  <slot /></BaseLayout>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>In <code dir=\"auto\">src/layouts/MarkdownPostLayout.astro</code>, you can now remove the <code dir=\"auto\">meta</code> tag as it is already included in your <code dir=\"auto\">BaseLayout</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/layouts/MarkdownPostLayout.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">./BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">props</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2c4984\">charset</span><span style=\"--0:#7FDBCA;--1:#663383\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">utf-8</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#663383\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">pubDate</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">toString</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">slice</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">description</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Written by: </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">author</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">img</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">src</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">width</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">300</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">alt</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">alt</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">slot</span><span style=\"--0:#7FDBCA\"> /></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x27;./BaseLayout.astro&#x27;;const { frontmatter } = Astro.props;---<BaseLayout pageTitle={frontmatter.title}>  <meta charset=&#x22;utf-8&#x22; />  <h1>{frontmatter.title}</h1>  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>  <p><em>{frontmatter.description}</em></p>  <p>Written by: {frontmatter.author}</p>  <img src={frontmatter.image.url} width=&#x22;300&#x22; alt={frontmatter.image.alt} />  <slot /></BaseLayout>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Check your browser preview at <code dir=\"auto\">http://localhost:4321/posts/post-1</code>. Now you should see content rendered by:</p>\n<ul>\n<li>Your <strong>main page layout</strong>, including your styles, navigation links, and social footer.</li>\n<li>Your <strong>blog post layout</strong>, including frontmatter properties like the description, date, title, and image.</li>\n<li>Your <strong>individual blog post Markdown content</strong>, including just the text written in this post.</li>\n</ul>\n</li>\n<li>\n<p>Notice that your page title is now displayed twice, once by each layout.</p>\n<p>Remove the line that displays your page title from <code dir=\"auto\">MarkdownPostLayout.astro</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/layouts/MarkdownPostLayout.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">pageTitle</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">title</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa2a1;--1:#862a27\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#d0a3ed;--1:#663383\">.</span><span style=\"--0:#7FDBCA;--1:#075356\">title</span><span style=\"--0:#eaa2a1;--1:#862a27\">}</span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">pubDate</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">toString</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">slice</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">>&#x3C;</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">description</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">em</span><span style=\"--0:#7FDBCA\">>&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Written by: </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">author</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">img</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">src</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">width</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">300</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">alt</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">frontmatter</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">image</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">alt</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">slot</span><span style=\"--0:#7FDBCA\"> /></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">BaseLayout</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<BaseLayout pageTitle={frontmatter.title}>  <h1>{frontmatter.title}</h1>  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>  <p><em>{frontmatter.description}</em></p>  <p>Written by: {frontmatter.author}</p>  <img src={frontmatter.image.url} width=&#x22;300&#x22; alt={frontmatter.image.alt} />  <slot /></BaseLayout>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Check your browser preview again at <code dir=\"auto\">http://localhost:4321/posts/post-1</code> and verify that this line is no longer displayed and that your title is only displayed once. Make any other adjustments necessary to ensure that you do not have any duplicated content.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Make sure that:</p>\n<ul>\n<li>\n<p>Each blog post shows the same page template, and no content is missing. (If one of your blog posts is missing content, check its frontmatter properties.)</p>\n</li>\n<li>\n<p>No content is duplicated on a page. (If something is being rendered twice, then be sure to remove it from <code dir=\"auto\">MarkdownPostLayout.astro</code>.)</p>\n</li>\n</ul>\n<p>If you’d like to customize your page template, you can.</p>\n"
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
            children: "This allows you to nest one layout inside another and take advantage of working with modular pieces."
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p>continuous deployment</p>"
            }), createVNode($$Option, {
              "set:html": "<p>responsive design</p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p>component-based design</p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Multiple layouts are particularly useful for projects that contain Markdown pages, like a…"
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p>blog</p>"
            }), createVNode($$Option, {
              "set:html": "<p>dashboard</p>"
            }), createVNode($$Option, {
              "set:html": "<p>chat app</p>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Which of these provides templating for all your pages?"
          }), "\n", createVNode($$MultipleChoice, {
            children: [createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">index.astro</code></p>"
            }), createVNode($$Option, {
              isCorrect: true,
              "set:html": "<p><code dir=\"auto\">BaseLayout.astro</code></p>"
            }), createVNode($$Option, {
              "set:html": "<p><code dir=\"auto\">post-1.md</code></p>"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", createVNode($$Box, {
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can nest layouts, checking for any duplicated elements.</span></label></li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"resources\">Resources</h3><a class=\"sl-anchor-link\" href=\"#resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Resources”</span></a></div>\n<ul>\n<li><a href=\"/en/basics/layouts/#nesting-layouts\">Nesting Layouts in Astro</a></li>\n</ul>"
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

const url = "src/content/docs/en/tutorial/4-layouts/3.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/4-layouts/3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/4-layouts/3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
