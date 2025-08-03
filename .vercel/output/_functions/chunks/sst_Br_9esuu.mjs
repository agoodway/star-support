import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to AWS with SST",
  "description": "How to deploy your Astro site to AWS with SST",
  "sidebar": {
    "label": "SST"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quickstart",
    "text": "Quickstart"
  }, {
    "depth": 3,
    "slug": "sst-components",
    "text": "SST components"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>You can deploy an Astro site to AWS using <a href=\"https://sst.dev\">SST</a>, an open-source framework for deploying modern full-stack applications with SSG and SSR support.</p>\n<p>You can also use any additional SST components like cron jobs, Buckets, Queues, etc while maintaining type-safety.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"quickstart\">Quickstart</h2><a class=\"sl-anchor-link\" href=\"#quickstart\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Quickstart”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Create an astro project.</p>\n</li>\n<li>\n<p>Run <code dir=\"auto\">npx sst@latest init</code>.</p>\n</li>\n<li>\n<p>It should detect that you are using Astro and ask you to confirm.</p>\n</li>\n<li>\n<p>Once you’re ready for deployment you can run <code dir=\"auto\">npx sst deploy --stage production</code>.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>You can also read <a href=\"https://sst.dev/docs/start/aws/astro\">the full Astro on AWS with SST tutorial</a> that will guide you through the steps.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"sst-components\">SST components</h3><a class=\"sl-anchor-link\" href=\"#sst-components\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “SST components”</span></a></div>\n<p>To use any <a href=\"https://sst.dev/docs/\">additional SST components</a>, add them to <code dir=\"auto\">sst.config.ts</code>.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sst.config.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">const </span><span style=\"--0:#91b4ff;--1:#325295\">bucket</span><span style=\"--0:#d0a4ed;--1:#753a96\"> = </span><span style=\"--0:#7FDBCA;--1:#085f62\">new</span><span style=\"--0:#d0a4ed;--1:#753a96\"> </span><span style=\"--0:#D6DEEB;--1:#403F53\">sst</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">aws</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">Bucket</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#804241\">MyBucket</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d0a4ed;--1:#753a96\">, {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">access: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">public</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> sst</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">aws</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">Astro</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">MyWeb</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">link: [bucket],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const bucket = new sst.aws.Bucket(&#x22;MyBucket&#x22;, {  access: &#x22;public&#x22;,});new sst.aws.Astro(&#x22;MyWeb&#x22;, {  link: [bucket],});\"><div></div></button></div></figure></div>\n<p>And then access them in your <code dir=\"auto\">.astro</code> file.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { Resource } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">sst</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(Resource</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">MyBucket</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">name</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { Resource } from &#x22;sst&#x22;console.log(Resource.MyBucket.name)---\"><div></div></button></div></figure></div>\n<p>Consult the <a href=\"https://sst.dev/docs/linking\">SST docs on linking resources</a> to learn more.</p>\n<p>If you have any questions, you can <a href=\"https://discord.gg/sst\">ask in the SST Discord</a>.</p>"
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

const url = "src/content/docs/en/guides/deploy/sst.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/sst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/sst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
