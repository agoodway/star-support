import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$DontEditWarning } from './DontEditWarning_BZonRkvX.mjs';

const frontmatter = {
  "title": "The endpoint did not return a Response.",
  "i18nReady": true,
  "githubURL": "https://github.com/withastro/astro/blob/main/packages/astro/src/core/errors/errors-data.ts"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-went-wrong",
    "text": "What went wrong?"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$DontEditWarning, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p><strong>EndpointDidNotReturnAResponse</strong>: An endpoint must return either a <code dir=\"auto\">Response</code>, or a <code dir=\"auto\">Promise</code> that resolves with a <code dir=\"auto\">Response</code>.</p>\n</blockquote>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"what-went-wrong\">What went wrong?</h2><a class=\"sl-anchor-link\" href=\"#what-went-wrong\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “What went wrong?”</span></a></div>\n<p>Thrown when an endpoint does not return anything or returns an object that is not a <code dir=\"auto\">Response</code> object.</p>\n<p>An endpoint must return either a <code dir=\"auto\">Response</code>, or a <code dir=\"auto\">Promise</code> that resolves with a <code dir=\"auto\">Response</code>. For example:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">type</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { APIContext } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">GET</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">{ </span><span style=\"--0:#D7DBE0\">request</span></span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">url</span></span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">cookies</span><span style=\"--0:#D6DEEB\"> }</span></span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">APIContext</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FFCB8B;--1:#111111\">Promise</span><span style=\"--0:#D6DEEB;--1:#403F53\">&#x3C;</span><span style=\"--0:#FFCB8B;--1:#111111\">Response</span><span style=\"--0:#D6DEEB;--1:#403F53\">> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Response</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">success: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">result: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">Data from Astro Endpoint!</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">})</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import type { APIContext } from &#x27;astro&#x27;;export async function GET({ request, url, cookies }: APIContext): Promise<Response> {    return Response.json({        success: true,        result: &#x27;Data from Astro Endpoint!&#x27;    })}\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/en/reference/errors/endpoint-did-not-return-aresponse.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/errors/endpoint-did-not-return-aresponse.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/errors/endpoint-did-not-return-aresponse.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
