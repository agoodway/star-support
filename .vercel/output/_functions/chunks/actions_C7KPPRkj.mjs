import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "Actions",
  "description": "Learn how to create type-safe server functions you can call from anywhere.",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "basic-usage",
    "text": "Basic usage"
  }, {
    "depth": 3,
    "slug": "write-your-first-action",
    "text": "Write your first action"
  }, {
    "depth": 2,
    "slug": "organizing-actions",
    "text": "Organizing actions"
  }, {
    "depth": 2,
    "slug": "handling-returned-data",
    "text": "Handling returned data"
  }, {
    "depth": 3,
    "slug": "checking-for-errors",
    "text": "Checking for errors"
  }, {
    "depth": 3,
    "slug": "accessing-data-directly-without-an-error-check",
    "text": "Accessing data directly without an error check"
  }, {
    "depth": 3,
    "slug": "handling-backend-errors-in-your-action",
    "text": "Handling backend errors in your action"
  }, {
    "depth": 4,
    "slug": "creating-an-actionerror",
    "text": "Creating an ActionError"
  }, {
    "depth": 4,
    "slug": "handling-an-actionerror",
    "text": "Handling an ActionError"
  }, {
    "depth": 3,
    "slug": "handling-client-redirects",
    "text": "Handling client redirects"
  }, {
    "depth": 2,
    "slug": "accepting-form-data-from-an-action",
    "text": "Accepting form data from an action"
  }, {
    "depth": 3,
    "slug": "validating-form-data",
    "text": "Validating form data"
  }, {
    "depth": 3,
    "slug": "displaying-form-input-errors",
    "text": "Displaying form input errors"
  }, {
    "depth": 2,
    "slug": "call-actions-from-an-html-form-action",
    "text": "Call actions from an HTML form action"
  }, {
    "depth": 3,
    "slug": "redirect-on-action-success",
    "text": "Redirect on action success"
  }, {
    "depth": 3,
    "slug": "handle-form-action-errors",
    "text": "Handle form action errors"
  }, {
    "depth": 4,
    "slug": "preserve-input-values-on-error",
    "text": "Preserve input values on error"
  }, {
    "depth": 3,
    "slug": "update-the-ui-with-a-form-action-result",
    "text": "Update the UI with a form action result"
  }, {
    "depth": 3,
    "slug": "advanced-persist-action-results-with-a-session",
    "text": "Advanced: Persist action results with a session"
  }, {
    "depth": 2,
    "slug": "security-when-using-actions",
    "text": "Security when using actions"
  }, {
    "depth": 3,
    "slug": "authorize-users-from-an-action-handler",
    "text": "Authorize users from an action handler"
  }, {
    "depth": 3,
    "slug": "gate-actions-from-middleware",
    "text": "Gate actions from middleware"
  }, {
    "depth": 2,
    "slug": "call-actions-from-astro-components-and-server-endpoints",
    "text": "Call actions from Astro components and server endpoints"
  }];
}
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    li: "li",
    mark: "mark",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    summary: "summary",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "4.15"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Astro Actions allow you to define and call backend functions with type-safety. Actions perform data fetching, JSON parsing, and input validation for you. This can greatly reduce the amount of boilerplate needed compared to using an <a href=\"/en/guides/endpoints/\">API endpoint</a>.</p>\n<p>Use actions instead of API endpoints for seamless communication between your client and server code and to:</p>\n<ul>\n<li>Automatically validate JSON and form data inputs using <a href=\"https://zod.dev/?id=primitives\">Zod validation</a>.</li>\n<li>Generate type-safe functions to call your backend from the client and even <a href=\"#call-actions-from-an-html-form-action\">from HTML form actions</a>. No need for manual <code dir=\"auto\">fetch()</code> calls.</li>\n<li>Standardize backend errors with the <a href=\"/en/reference/modules/astro-actions/#actionerror\"><code dir=\"auto\">ActionError</code></a> object.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"basic-usage\">Basic usage</h2><a class=\"sl-anchor-link\" href=\"#basic-usage\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Basic usage”</span></a></div>\n<p>Actions are defined in a <code dir=\"auto\">server</code> object exported from <code dir=\"auto\">src/actions/index.ts</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">myAction: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;import { z } from &#x27;astro:schema&#x27;;export const server = {  myAction: defineAction({ /* ... */ })}\"><div></div></button></div></figure></div>\n<p>Your actions are available as functions from the <code dir=\"auto\">astro:actions</code> module. Import <code dir=\"auto\">actions</code> and call them client-side within a <a href=\"/en/guides/framework-components/\">UI framework component</a>, <a href=\"#call-actions-from-an-html-form-action\">a form POST request</a>, or by using a <code dir=\"auto\">&#x3C;script></code> tag in an Astro component.</p>\n<p>When you call an action, it returns an object with either <code dir=\"auto\">data</code> containing the JSON-serialized result, or <code dir=\"auto\">error</code> containing thrown errors.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">error</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = await </span><span style=\"--0:#7FDBCA;--1:#096E72\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">myAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"------<script>import { actions } from &#x27;astro:actions&#x27;;async () => {  const { data, error } = await actions.myAction({ /* ... */ });}</script>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"write-your-first-action\">Write your first action</h3><a class=\"sl-anchor-link\" href=\"#write-your-first-action\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Write your first action”</span></a></div>\n<p>Follow these steps to define an action and call it in a <code dir=\"auto\">script</code> tag in your Astro page.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Create a <code dir=\"auto\">src/actions/index.ts</code> file and export a <code dir=\"auto\">server</code> object.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// action declarations</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export const server = {  // action declarations}\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Import the <code dir=\"auto\">defineAction()</code> utility from <code dir=\"auto\">astro:actions</code>, and the <code dir=\"auto\">z</code> object from <code dir=\"auto\">astro:schema</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// action declarations</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;import { z } from &#x27;astro:schema&#x27;;export const server = {  // action declarations}\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Use the <code dir=\"auto\">defineAction()</code> utility to define a <code dir=\"auto\">getGreeting</code> action. The <code dir=\"auto\">input</code> property will be used to validate input parameters with a <a href=\"https://zod.dev\">Zod</a> schema and the <code dir=\"auto\">handler()</code> function includes the backend logic to run on the server.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">  </span>getGreeting: </span><span style=\"--0:#94b6ff;--1:#2d4a87\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d2a6ee;--1:#6a3588\">{</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>input: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d2a6ee;--1:#6a3588\">{</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>name: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#94b6ff;--1:#2d4a87\">handler</span><span style=\"--0:#d2a6ee;--1:#6a3588\">: async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">input</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> => {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>return </span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#2d4a87\">Hello, </span><span style=\"--0:#eaa5a4;--1:#882b28\">${</span><span style=\"--0:#D6DEEB;--1:#403F53\">input</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">name</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#ECC48D;--1:#2d4a87\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">  </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;import { z } from &#x27;astro:schema&#x27;;export const server = {  getGreeting: defineAction({    input: z.object({      name: z.string(),    }),    handler: async (input) => {      return &#x60;Hello, ${input.name}!&#x60;    }  })}\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Create an Astro component with a button that will fetch a greeting using your <code dir=\"auto\">getGreeting</code> action when clicked.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Get greeting</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">button</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">button</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">button</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">addEventListener</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">click</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Show alert pop-up with greeting from action</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"------<button>Get greeting</button><script>const button = document.querySelector(&#x27;button&#x27;);button?.addEventListener(&#x27;click&#x27;, async () => {  // Show alert pop-up with greeting from action});</script>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>To use your action, import <code dir=\"auto\">actions</code> from <code dir=\"auto\">astro:actions</code> and then call <code dir=\"auto\">actions.getGreeting()</code> in the click handler. The <code dir=\"auto\">name</code> option will be sent to your action’s <code dir=\"auto\">handler()</code> on the server and, if there are no errors, the result will be available as the <code dir=\"auto\">data</code> property.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Get greeting</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">button</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">button</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">button</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">addEventListener</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">click</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Show alert pop-up with greeting from action</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const { </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">, </span><span style=\"--0:#94b6ff;--1:#2d4a87\">error</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> } = await </span><span style=\"--0:#7FDBCA;--1:#075457\">actions</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">getGreeting</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d2a6ee;--1:#6a3588\">{ name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">Houston</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#d2a6ee;--1:#6a3588\">!</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">error</span><span style=\"--0:#D6DEEB\">) </span></span><span style=\"--0:#94b6ff;--1:#2d4a87\">alert</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">data</span><span style=\"--0:#D6DEEB\">);</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">})</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"------<button>Get greeting</button><script>import { actions } from &#x27;astro:actions&#x27;;const button = document.querySelector(&#x27;button&#x27;);button?.addEventListener(&#x27;click&#x27;, async () => {  // Show alert pop-up with greeting from action  const { data, error } = await actions.getGreeting({ name: &#x22;Houston&#x22; });  if (!error) alert(data);})</script>\"><div></div></button></div></figure></div>\n</li>\n</ol>"
    }), "\n", createVNode($$ReadMore, {
      "set:html": "See the full Actions API documentation for details on <a href=\"/en/reference/modules/astro-actions/#defineaction\"><code dir=\"auto\">defineAction()</code></a> and its properties."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"organizing-actions\">Organizing actions</h2><a class=\"sl-anchor-link\" href=\"#organizing-actions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Organizing actions”</span></a></div>\n<p>All actions in your project must be exported from the <code dir=\"auto\">server</code> object in the <code dir=\"auto\">src/actions/index.ts</code> file. You can define actions inline or you can move action definitions to separate files and import them. You can even group related functions in nested objects.</p>\n<p>For example, to colocate all of your user actions, you can create a <code dir=\"auto\">src/actions/user.ts</code> file and nest the definitions of both <code dir=\"auto\">getUser</code> and <code dir=\"auto\">createUser</code> inside a single <code dir=\"auto\">user</code> object.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/user.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">user</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">getUser: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">createUser: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;export const user = {  getUser: defineAction(/* ... */),  createUser: defineAction(/* ... */),}\"><div></div></button></div></figure></div>\n<p>Then, you can import this <code dir=\"auto\">user</code> object into your <code dir=\"auto\">src/actions/index.ts</code> file and add it as a top-level key to the <code dir=\"auto\">server</code> object alongside any other actions:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { user } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">./user</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">myAction: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#D6DEEB;--1:#403F53\">user</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { user } from &#x27;./user&#x27;;export const server = {  myAction: defineAction({ /* ... */ }),  user,}\"><div></div></button></div></figure></div>\n<p>Now, all of your user actions are callable from the <code dir=\"auto\">actions.user</code> object:</p>\n<ul>\n<li><code dir=\"auto\">actions.user.getUser()</code></li>\n<li><code dir=\"auto\">actions.user.createUser()</code></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"handling-returned-data\">Handling returned data</h2><a class=\"sl-anchor-link\" href=\"#handling-returned-data\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Handling returned data”</span></a></div>\n<p>Actions return an object containing either <code dir=\"auto\">data</code> with the type-safe return value of your <code dir=\"auto\">handler()</code>, or an <code dir=\"auto\">error</code> with any backend errors. Errors may come from validation errors on the <code dir=\"auto\">input</code> property or thrown errors within the <code dir=\"auto\">handler()</code>.</p>\n<p>Actions return a custom data format that can handle Dates, Maps, Sets, and URLs <a href=\"https://github.com/Rich-Harris/devalue\">using the Devalue library</a>. Therefore, you can’t easily inspect the response from the network like you can with regular JSON. For debugging, you can instead inspect the <code dir=\"auto\">data</code> object returned by actions.</p>\n"
    }), createVNode($$ReadMore, {
      "set:html": "<a href=\"/en/reference/modules/astro-actions/#handler-property\">See the <code dir=\"auto\">handler()</code> API reference</a> for full details."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"checking-for-errors\">Checking for errors</h3><a class=\"sl-anchor-link\" href=\"#checking-for-errors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Checking for errors”</span></a></div>\n<p>It’s best to check if an <code dir=\"auto\">error</code> is present before using the <code dir=\"auto\">data</code> property. This allows you to handle errors in advance and ensures <code dir=\"auto\">data</code> is defined without an <code dir=\"auto\">undefined</code> check.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">error</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">example</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (error) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// handle error cases</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// use `data`</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const { data, error } = await actions.example();if (error) {  // handle error cases  return;}// use &#x60;data&#x60;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"accessing-data-directly-without-an-error-check\">Accessing <code dir=\"auto\">data</code> directly without an error check</h3><a class=\"sl-anchor-link\" href=\"#accessing-data-directly-without-an-error-check\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Accessing data directly without an error check”</span></a></div>\n<p>To skip error handling, for example while prototyping or using a library that will catch errors for you, use the <code dir=\"auto\">.orThrow()</code> property on your action call to throw errors instead of returning an <code dir=\"auto\">error</code>. This will return the action’s <code dir=\"auto\">data</code> directly.</p>\n<p>This example calls a <code dir=\"auto\">likePost()</code> action that returns the updated number of likes as a <code dir=\"auto\">number</code> from the action <code dir=\"auto\">handler</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">updatedLikes</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">likePost</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><ins><span style=\"--0:#94b6ff;--1:#2d4a87\">orThrow</span></ins><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ postId: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">example</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">//    ^ type: number</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const updatedLikes = await actions.likePost.orThrow({ postId: &#x27;example&#x27; });//    ^ type: number\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"handling-backend-errors-in-your-action\">Handling backend errors in your action</h3><a class=\"sl-anchor-link\" href=\"#handling-backend-errors-in-your-action\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Handling backend errors in your action”</span></a></div>\n<p>You can use the provided <code dir=\"auto\">ActionError</code> to throw an error from your action <code dir=\"auto\">handler()</code>, such as “not found” when a database entry is missing, or “unauthorized” when a user is not logged in. This has two main benefits over returning <code dir=\"auto\">undefined</code>:</p>\n<ul>\n<li>\n<p>You can set a status code like <code dir=\"auto\">404 - Not found</code> or <code dir=\"auto\">401 - Unauthorized</code>. This improves debugging errors in both development and in production by letting you see the status code of each request.</p>\n</li>\n<li>\n<p>In your application code, all errors are passed to the <code dir=\"auto\">error</code> object on an action result. This avoids the need for <code dir=\"auto\">undefined</code> checks on data, and allows you to display targeted feedback to the user depending on what went wrong.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"creating-an-actionerror\">Creating an <code dir=\"auto\">ActionError</code></h4><a class=\"sl-anchor-link\" href=\"#creating-an-actionerror\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Creating an ActionError”</span></a></div>\n<p>To throw an error, import the <code dir=\"auto\">ActionError()</code> class from the <code dir=\"auto\">astro:actions</code> module. Pass it a human-readable status <code dir=\"auto\">code</code> (e.g. <code dir=\"auto\">\"NOT_FOUND\"</code> or <code dir=\"auto\">\"BAD_REQUEST\"</code>), and an optional <code dir=\"auto\">message</code> to provide further information about the error.</p>\n<p>This example throws an error from a <code dir=\"auto\">likePost</code> action when a user is not logged in, after checking a hypothetical “user-session” cookie for authentication:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction, </span><ins><span style=\"--0:#D6DEEB;--1:#403F53\">ActionError</span></ins><span style=\"--0:#D6DEEB;--1:#403F53\"> } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">likePost: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">input: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ postId: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#C792EA;--1:#8844AE\">: async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">input</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">ctx</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">ctx</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">has</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">user-session</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">))</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">        </span>throw </span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">ActionError</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d2a6ee;--1:#6a3588\">{</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">          </span>code: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">UNAUTHORIZED</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">          </span>message: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">User must be logged in.</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">        </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#d2a6ee;--1:#6a3588\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// Otherwise, like the post</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction, ActionError } from &#x22;astro:actions&#x22;;import { z } from &#x22;astro:schema&#x22;;export const server = {  likePost: defineAction({    input: z.object({ postId: z.string() }),    handler: async (input, ctx) => {      if (!ctx.cookies.has(&#x27;user-session&#x27;)) {        throw new ActionError({          code: &#x22;UNAUTHORIZED&#x22;,          message: &#x22;User must be logged in.&#x22;,        });      }      // Otherwise, like the post    },  }),};\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"handling-an-actionerror\">Handling an <code dir=\"auto\">ActionError</code></h4><a class=\"sl-anchor-link\" href=\"#handling-an-actionerror\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Handling an ActionError”</span></a></div>\n<p>To handle this error, you can call the action from your application and check whether an <code dir=\"auto\">error</code> property is present. This property will be of type <code dir=\"auto\">ActionError</code> and will contain your <code dir=\"auto\">code</code> and <code dir=\"auto\">message</code>.</p>\n<p>In the following example, a <code dir=\"auto\">LikeButton.tsx</code> component calls the <code dir=\"auto\">likePost()</code> action when clicked. If an authentication error occurs, the <code dir=\"auto\">error.code</code> attribute is used to determine whether to display a login link:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/LikeButton.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { useState } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">preact/hooks</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">LikeButton</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">{ </span><span style=\"--0:#D7DBE0\">postId</span><span style=\"--0:#D6DEEB\"> }</span></span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { postId</span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">const [</span><span style=\"--0:#82AAFF;--1:#3B61B0\">showLogin</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setShowLogin</span><span style=\"--0:#C792EA;--1:#8844AE\">] = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">useState</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#E2817F;--1:#B23834\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">showLogin </span><span style=\"--0:#C792EA;--1:#8844AE\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">/signin</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Log in to like a post.</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">a</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#E2817F;--1:#B23834\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">onClick</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--1:#8844AE\"><span style=\"--0:#C792EA\">async</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#C792EA\">=></span><span style=\"--0:#7FDBCA\"> {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">error</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">likePost</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#D6DEEB;--1:#403F53\">postId</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#7FDBCA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#8844AE\">        </span></span><ins><span style=\"--1:#6a3588\"><span style=\"--0:#d2a6ee\">if</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">(error</span><span style=\"--0:#d2a6ee;--1:#6a3588\">?.</span><span style=\"--0:#7FDBCA;--1:#075457\">code</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#d2a6ee\">===</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">UNAUTHORIZED</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setShowLogin</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#ff99aa;--1:#7a3636\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#7FDBCA;--1:#6a3588\">;</span></ins></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Early return for unexpected errors</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">else</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#D6DEEB;--1:#403F53\">(error)</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#C792EA\">return</span><span style=\"--0:#7FDBCA\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// update likes</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">      </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">}</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Like</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { actions } from &#x27;astro:actions&#x27;;import { useState } from &#x27;preact/hooks&#x27;;export function LikeButton({ postId }: { postId: string }) {  const [showLogin, setShowLogin] = useState(false);  return (    <>      {        showLogin &#x26;&#x26; <a href=&#x22;/signin&#x22;>Log in to like a post.</a>      }      <button onClick={async () => {        const { data, error } = await actions.likePost({ postId });        if (error?.code === &#x27;UNAUTHORIZED&#x27;) setShowLogin(true);        // Early return for unexpected errors        else if (error) return;        // update likes      }}>        Like      </button>    </>  )}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"handling-client-redirects\">Handling client redirects</h3><a class=\"sl-anchor-link\" href=\"#handling-client-redirects\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Handling client redirects”</span></a></div>\n<p>When calling actions from the client, you can integrate with a client-side library like <code dir=\"auto\">react-router</code>, or you can use Astro’s <a href=\"/en/guides/view-transitions/#trigger-navigation\"><code dir=\"auto\">navigate()</code> function</a> to redirect to a new page when an action succeeds.</p>\n<p>This example navigates to the homepage after a <code dir=\"auto\">logout</code> action returns successfully:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/LogoutButton.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { navigate } </span><span style=\"--0:#d0a4ed;--1:#753a96\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">astro:transitions/client</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">LogoutButton</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">onClick</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--1:#8844AE\"><span style=\"--0:#C792EA\">async</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#C792EA\">=></span><span style=\"--0:#7FDBCA\"> {</span></span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--1:#753a96\"><span class=\"indent\">      </span><span style=\"--0:#d0a4ed\">const { </span></span><span style=\"--0:#91b4ff;--1:#325295\">error</span><span style=\"--0:#d0a4ed;--1:#753a96\"> } = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">logout</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#7FDBCA;--1:#753a96\">;</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--1:#753a96\"><span class=\"indent\">      </span><span style=\"--0:#d0a4ed\">if</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d0a4ed;--1:#753a96\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">error)</span><span style=\"--0:#7FDBCA;--1:#753a96\"> </span><span style=\"--0:#91b4ff;--1:#325295\">navigate</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">/</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#7FDBCA;--1:#753a96\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">    </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">}</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Logout</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { actions } from &#x27;astro:actions&#x27;;import { navigate } from &#x27;astro:transitions/client&#x27;;export function LogoutButton() {  return (    <button onClick={async () => {      const { error } = await actions.logout();      if (!error) navigate(&#x27;/&#x27;);    }}>      Logout    </button>  );}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"accepting-form-data-from-an-action\">Accepting form data from an action</h2><a class=\"sl-anchor-link\" href=\"#accepting-form-data-from-an-action\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Accepting form data from an action”</span></a></div>\n<p>Actions accept JSON data by default. To accept form data from an HTML form, set <code dir=\"auto\">accept: 'form'</code> in your <code dir=\"auto\">defineAction()</code> call:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">comment: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>accept: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">form</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#d2a6ee;--1:#6a3588\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">input: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#C792EA;--1:#8844AE\">: async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">input</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => { </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#C792EA;--1:#8844AE\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;import { z } from &#x27;astro:schema&#x27;;export const server = {  comment: defineAction({    accept: &#x27;form&#x27;,    input: z.object(/* ... */),    handler: async (input) => { /* ... */ },  })}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"validating-form-data\">Validating form data</h3><a class=\"sl-anchor-link\" href=\"#validating-form-data\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Validating form data”</span></a></div>\n<p>Actions will parse submitted form data to an object, using the value of each input’s <code dir=\"auto\">name</code> attribute as the object keys. For example, a form containing <code dir=\"auto\">&#x3C;input name=\"search\"></code> will be parsed to an object like <code dir=\"auto\">{ search: 'user input' }</code>. Your action’s <code dir=\"auto\">input</code> schema will be used to validate this object.</p>\n<p>To receive the raw <code dir=\"auto\">FormData</code> object in your action handler instead of a parsed object, omit the <code dir=\"auto\">input</code> property in your action definition.</p>\n<p>The following example shows a validated newsletter registration form that accepts a user’s email and requires a “terms of service” agreement checkbox.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create an HTML form component with unique ", createVNode(_components.code, {
              dir: "auto",
              children: "name"
            }), " attributes on each input:"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/components/Newsletter.astro"
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
                          children: "form"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })
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
                          children: "label"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: " "
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "for"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
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
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: ">"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "E-mail"
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
                          children: "label"
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
                          children: "input"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: " "
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "id"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
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
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "required"
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
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
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
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#C5E478",
                            "--1": "#325295"
                          },
                          children: "name"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#753a96"
                          },
                          children: "="
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
                          children: "email"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
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
                          children: "label"
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
                          children: "input"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: " "
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#3B61B0"
                        },
                        children: "required"
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
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: "="
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
                        children: "checkbox"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#C5E478",
                            "--1": "#325295"
                          },
                          children: "name"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#753a96"
                          },
                          children: "="
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
                          children: "terms"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        })]
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
                        children: "I agree to the terms of service"
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
                          children: "label"
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
                          children: "button"
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
                        children: "Sign up"
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
                          children: "button"
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
                          children: "form"
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
                  "data-code": "<form>  <label for=\"email\">E-mail</label>  <input id=\"email\" required type=\"email\" name=\"email\" />  <label>    <input required type=\"checkbox\" name=\"terms\">    I agree to the terms of service  </label>  <button>Sign up</button></form>",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Define a ", createVNode(_components.code, {
              dir: "auto",
              children: "newsletter"
            }), " action to handle the submitted form. Validate the ", createVNode(_components.code, {
              dir: "auto",
              children: "email"
            }), " field using the ", createVNode(_components.code, {
              dir: "auto",
              children: "z.string().email()"
            }), " validator, and the ", createVNode(_components.code, {
              dir: "auto",
              children: "terms"
            }), " checkbox using ", createVNode(_components.code, {
              dir: "auto",
              children: "z.boolean()"
            }), ":"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/actions/index.ts"
                })
              }), createVNode(_components.pre, {
                "data-language": "ts",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
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
                        children: " { defineAction } "
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
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "astro:actions"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
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
                        children: " { z } "
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
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#984E4D"
                        },
                        children: "astro:schema"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
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
                        children: "export const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "server"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = {"
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "  "
                        }), "newsletter: "]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "defineAction"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "{"
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "    "
                        }), "accept: "]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "form"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ","
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "    "
                        }), "input: "]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "z"
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
                        children: "object"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "{"
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "      "
                        }), "email: "]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "z"
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
                        children: "string"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "()"
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
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "()"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ","
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "      "
                        }), "terms: "]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "z"
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
                        children: "boolean"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "()"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ","
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "    "
                        }), "}"]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ")"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ","
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "handler"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ": async "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "{ "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: ", "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "terms"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " }"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: ")"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " => { "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#aeb8b8",
                          "--1": "#494c55"
                        },
                        children: "/* ... */"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " },"
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
                        children: [createVNode(_components.span, {
                          class: "indent",
                          children: "  "
                        }), "}"]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ")"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "}"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "import { defineAction } from 'astro:actions';import { z } from 'astro:schema';export const server = {  newsletter: defineAction({    accept: 'form',    input: z.object({      email: z.string().email(),      terms: z.boolean(),    }),    handler: async ({ email, terms }) => { /* ... */ },  })}",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$ReadMore, {
            "set:html": "See the <a href=\"/en/reference/modules/astro-actions/#input-validator\"><code dir=\"auto\">input</code> API reference</a> for all available form validators."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Add a ", createVNode(_components.code, {
              dir: "auto",
              children: "<script>"
            }), " to the HTML form to submit the user input. This example overrides the form’s default submit behavior to call ", createVNode(_components.code, {
              dir: "auto",
              children: "actions.newsletter()"
            }), ", and redirects to ", createVNode(_components.code, {
              dir: "auto",
              children: "/confirmation"
            }), " using the ", createVNode(_components.code, {
              dir: "auto",
              children: "navigate()"
            }), " function:"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/components/Newsletter.astro"
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
                          children: "form"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })
                    })
                  }), createVNode(_components.details, {
                    class: "ec-section github",
                    children: [createVNode(_components.summary, {
                      children: createVNode(_components.div, {
                        class: "ec-line",
                        style: {
                          "--ecIndent": "2ch"
                        },
                        children: createVNode(_components.div, {
                          class: "code",
                          children: [createVNode(_components.span, {
                            class: "expand"
                          }), createVNode(_components.span, {
                            class: "collapse"
                          }), createVNode(_components.span, {
                            class: "text",
                            children: "7 collapsed lines"
                          })]
                        })
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
                            children: "label"
                          }), createVNode(_components.span, {
                            style: {
                              "--0": "#7FDBCA"
                            },
                            children: " "
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#C5E478",
                            "--1": "#3B61B0"
                          },
                          children: "for"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "email"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: ">"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "E-mail"
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
                            children: "label"
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
                            children: "input"
                          }), createVNode(_components.span, {
                            style: {
                              "--0": "#7FDBCA"
                            },
                            children: " "
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#C5E478",
                            "--1": "#3B61B0"
                          },
                          children: "id"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "email"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
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
                          children: "required"
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
                          children: "type"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "email"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
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
                          children: "name"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "email"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
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
                            children: "label"
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
                            children: "input"
                          }), createVNode(_components.span, {
                            style: {
                              "--0": "#7FDBCA"
                            },
                            children: " "
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#C5E478",
                            "--1": "#3B61B0"
                          },
                          children: "required"
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
                          children: "type"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "checkbox"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
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
                          children: "name"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#8844AE"
                          },
                          children: "="
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
                          children: "terms"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D9F5DD",
                            "--1": "#111111"
                          },
                          children: "\""
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
                          children: "I agree to the terms of service"
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
                            children: "label"
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
                            children: "button"
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
                          children: "Sign up"
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
                            children: "button"
                          }), createVNode(_components.span, {
                            style: {
                              "--0": "#7FDBCA"
                            },
                            children: ">"
                          })]
                        })]
                      })
                    })]
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
                          children: "form"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--1": "#6a3588"
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
                          children: "script"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })
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
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { actions } "
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
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "astro:actions"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
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
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "import"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { navigate } "
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
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#723b3a"
                        },
                        children: "astro:transitions/client"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: "\n"
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
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "form"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "document"
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
                        children: "querySelector"
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
                          "--1": "#723b3a"
                        },
                        children: "form"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ");"
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
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "form"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "?."
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "addEventListener"
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
                          "--1": "#723b3a"
                        },
                        children: "submit"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ", "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
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
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "event"
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
                        children: " {"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "event"
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
                        children: "preventDefault"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "();"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
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
                        children: "formData"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "new"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "FormData"
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#403F53"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB"
                          },
                          children: "("
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D7DBE0"
                          },
                          children: "form"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB"
                          },
                          children: ");"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "const { "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "error"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: " } = await "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "actions"
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
                        children: "newsletter"
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#403F53"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB"
                          },
                          children: "("
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D7DBE0"
                          },
                          children: "formData"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB"
                          },
                          children: ");"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "    "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "if"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " ("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#d2a6ee",
                          "--1": "#6a3588"
                        },
                        children: "!"
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#403F53"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D7DBE0"
                          },
                          children: "error"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB"
                          },
                          children: ") "
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#94b6ff",
                          "--1": "#2d4a87"
                        },
                        children: "navigate"
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
                          "--1": "#723b3a"
                        },
                        children: "/confirmation"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "'"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ");"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
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
                        children: "})"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--1": "#6a3588"
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
                          children: "script"
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
                  "data-code": "<form>  <label for=\"email\">E-mail</label>  <input id=\"email\" required type=\"email\" name=\"email\" />  <label>    <input required type=\"checkbox\" name=\"terms\">    I agree to the terms of service  </label>  <button>Sign up</button></form><script>  import { actions } from 'astro:actions';  import { navigate } from 'astro:transitions/client';  const form = document.querySelector('form');  form?.addEventListener('submit', async (event) => {    event.preventDefault();    const formData = new FormData(form);    const { error } = await actions.newsletter(formData);    if (!error) navigate('/confirmation');  })</script>",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$ReadMore, {
            "set:html": "See <a href=\"#call-actions-from-an-html-form-action\">“Call actions from an HTML form action”</a> for an alternative way to submit form data."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"displaying-form-input-errors\">Displaying form input errors</h3><a class=\"sl-anchor-link\" href=\"#displaying-form-input-errors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Displaying form input errors”</span></a></div>\n<p>You can validate form inputs before submission using <a href=\"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation\">native HTML form validation attributes</a> like <code dir=\"auto\">required</code>, <code dir=\"auto\">type=\"email\"</code>, and <code dir=\"auto\">pattern</code>. For more complex <code dir=\"auto\">input</code> validation on the backend, you can use the provided <a href=\"/en/reference/modules/astro-actions/#isinputerror\"><code dir=\"auto\">isInputError()</code></a> utility function.</p>\n<p>To retrieve input errors, use the <code dir=\"auto\">isInputError()</code> utility to check whether an error was caused by invalid input. Input errors contain a <code dir=\"auto\">fields</code> object with messages for each input name that failed to validate. You can use these messages to prompt your user to correct their submission.</p>\n<p>The following example checks the error with <code dir=\"auto\">isInputError()</code>, then checks whether the error is in the email field, before finally creating a message from the errors. You can use JavaScript DOM manipulation or your preferred UI framework to display this message to users.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions, </span><mark><span style=\"--0:#D6DEEB;--1:#403F53\">isInputError</span></mark><span style=\"--0:#D6DEEB;--1:#403F53\"> } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">form</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">document</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">form</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">formData</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">FormData</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">form</span><span style=\"--0:#D6DEEB\">);</span></span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">const { </span><span style=\"--0:#91b4ff;--1:#325295\">error</span><span style=\"--0:#d0a4ed;--1:#753a96\"> } = await </span><span style=\"--0:#7FDBCA;--1:#085f62\">actions</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">newsletter</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">formData</span><span style=\"--0:#D6DEEB\">);</span></span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#91b4ff;--1:#325295\">isInputError</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">error</span><span style=\"--0:#D6DEEB\">)) {</span></span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#adb7b7;--1:#4e5464\">// Handle input errors.</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d0a4ed;--1:#753a96\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#7FDBCA;--1:#085f62\">error</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">fields</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">email</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d0a4ed;--1:#753a96\">const </span><span style=\"--0:#91b4ff;--1:#325295\">message</span><span style=\"--0:#d0a4ed;--1:#753a96\"> = </span><span style=\"--0:#7FDBCA;--1:#085f62\">error</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">fields</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">email</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">join</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { actions, isInputError } from &#x27;astro:actions&#x27;;const form = document.querySelector(&#x27;form&#x27;);const formData = new FormData(form);const { error } = await actions.newsletter(formData);if (isInputError(error)) {  // Handle input errors.  if (error.fields.email) {    const message = error.fields.email.join(&#x27;, &#x27;);  }}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"call-actions-from-an-html-form-action\">Call actions from an HTML form action</h2><a class=\"sl-anchor-link\" href=\"#call-actions-from-an-html-form-action\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Call actions from an HTML form action”</span></a></div>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>Pages must be on-demand rendered when calling actions using a form action. <a href=\"/en/guides/on-demand-rendering/#enabling-on-demand-rendering\">Ensure prerendering is disabled on the page</a> before using this API.</p></div></aside>\n<p>You can enable zero-JS form submissions with standard attributes on any <code dir=\"auto\">&#x3C;form></code> element.  Form submissions without client-side JavaScript may be useful both as a fallback for when JavaScript fails to load, or if you prefer to handle forms entirely from the server.</p>\n<p>Calling <a href=\"/en/reference/api-reference/#getactionresult\">Astro.getActionResult()</a> on the server returns the result of your form submission (<code dir=\"auto\">data</code> or <code dir=\"auto\">error</code>), and can be used to dynamically redirect, handle form errors, update the UI, and more.</p>\n<p>To call an action from an HTML form, add <code dir=\"auto\">method=\"POST\"</code> to your <code dir=\"auto\">&#x3C;form></code>, then set the form’s <code dir=\"auto\">action</code> attribute using your action, for example <code dir=\"auto\">action={actions.logout}</code>. This will set the <code dir=\"auto\">action</code> attribute to use a query string that is handled by the server automatically.</p>\n<p>For example, this Astro component calls the <code dir=\"auto\">logout</code> action when the button is clicked and reloads the current page:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/LogoutButton.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">logout</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Log out</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;---<form method=&#x22;POST&#x22; action={actions.logout}>  <button>Log out</button></form>\"><div></div></button></div></figure></div>\n<p>Additional attributes on the <code dir=\"auto\">&#x3C;form></code> element may be necessary for proper schema validation with Zod. For example, to include file uploads, add <code dir=\"auto\">enctype=\"multipart/form-data\"</code> to ensure that files are sent in a format correctly recognized by <code dir=\"auto\">z.instanceof(File)</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FileUploadForm.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">upload</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">enctype</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">multipart/form-data</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> ></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">file</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Upload File</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">file</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">file</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">file</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Submit</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;---<form method=&#x22;POST&#x22; action={actions.upload} enctype=&#x22;multipart/form-data&#x22; >  <label for=&#x22;file&#x22;>Upload File</label>  <input type=&#x22;file&#x22; id=&#x22;file&#x22; name=&#x22;file&#x22; />  <button type=&#x22;submit&#x22;>Submit</button></form>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"redirect-on-action-success\">Redirect on action success</h3><a class=\"sl-anchor-link\" href=\"#redirect-on-action-success\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Redirect on action success”</span></a></div>\n<p>If you need to redirect to a new route on success, you can use an action’s result on the server. A common example is creating a product record and redirecting to the new product’s page, e.g. <code dir=\"auto\">/products/[id]</code>.</p>\n<p>For example, say you have a <code dir=\"auto\">createProduct</code> action that returns the generated product id:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { z } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:schema</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">createProduct: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">accept: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">form</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">input: </span><span style=\"--0:#D6DEEB;--1:#403F53\">z</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#919F9F;--1:#5F636F\">/* ... */</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#C792EA;--1:#8844AE\">: async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">input</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">product</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#82AAFF;--1:#3B61B0\">persistToDatabase</span><span style=\"--0:#D6DEEB;--1:#403F53\">(input)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\"><span class=\"indent\">      </span>return { id: </span><span style=\"--0:#D6DEEB;--1:#403F53\">product</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">id</span><span style=\"--0:#d0a4ed;--1:#753a96\"> };</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction } from &#x27;astro:actions&#x27;;import { z } from &#x27;astro:schema&#x27;;export const server = {  createProduct: defineAction({    accept: &#x27;form&#x27;,    input: z.object({ /* ... */ }),    handler: async (input) => {      const product = await persistToDatabase(input);      return { id: product.id };    },  })}\"><div></div></button></div></figure></div>\n<p>You can retrieve the action result from your Astro component by calling <code dir=\"auto\">Astro.getActionResult()</code>. This returns an object containing <code dir=\"auto\">data</code> or <code dir=\"auto\">error</code> properties when an action is called, or <code dir=\"auto\">undefined</code> if the action was not called during this request.</p>\n<p>Use the <code dir=\"auto\">data</code> property to construct a URL to use with <code dir=\"auto\">Astro.redirect()</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/products/create.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">const </span><span style=\"--0:#91b4ff;--1:#325295\">result</span><span style=\"--0:#d0a4ed;--1:#753a96\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">getActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actions</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">createProduct</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (result </span><span style=\"--0:#d0a4ed;--1:#753a96\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d0a4ed;--1:#753a96\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">error</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d0a4ed;--1:#753a96\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Astro</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">redirect</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#ECC48D;--1:#325295\">/products/</span><span style=\"--0:#eaa2a1;--1:#99302d\">${</span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">id</span><span style=\"--0:#eaa2a1;--1:#99302d\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">`</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">createProduct</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!--...--></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;const result = Astro.getActionResult(actions.createProduct);if (result &#x26;&#x26; !result.error) {  return Astro.redirect(&#x60;/products/${result.data.id}&#x60;);}---<form method=&#x22;POST&#x22; action={actions.createProduct}>  <!--...--></form>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"handle-form-action-errors\">Handle form action errors</h3><a class=\"sl-anchor-link\" href=\"#handle-form-action-errors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Handle form action errors”</span></a></div>\n<p>Calling <code dir=\"auto\">Astro.getActionResult()</code> in the Astro component containing your form gives you access to the <code dir=\"auto\">data</code> and <code dir=\"auto\">error</code> objects for custom error handling.</p>\n<p>The following example displays a general failure message when a <code dir=\"auto\">newsletter</code> action fails:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">const </span><span style=\"--0:#91b4ff;--1:#325295\">result</span><span style=\"--0:#d0a4ed;--1:#753a96\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">getActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actions</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">newsletter</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#eaa2a1;--1:#99302d\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#d0a4ed;--1:#753a96\">?.</span><span style=\"--0:#7FDBCA;--1:#085f62\">error</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d0a4ed;--1:#753a96\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#753a96\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#325295\">class</span><span style=\"--0:#d0a4ed;--1:#753a96\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#804241\">error</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#753a96\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Unable to sign up. Please try again later.</span><span style=\"--1:#753a96\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#eaa2a1;--1:#99302d\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">newsletter</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">E-mail</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Sign up</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;const result = Astro.getActionResult(actions.newsletter);---{result?.error &#x26;&#x26; (  <p class=&#x22;error&#x22;>Unable to sign up. Please try again later.</p>)}<form method=&#x22;POST&#x22; action={actions.newsletter}>  <label>    E-mail    <input required type=&#x22;email&#x22; name=&#x22;email&#x22; />  </label>  <button>Sign up</button></form>\"><div></div></button></div></figure></div>\n<p>For more customization, you can <a href=\"#displaying-form-input-errors\">use the <code dir=\"auto\">isInputError()</code> utility</a> to check whether an error is caused by invalid input.</p>\n<p>The following example renders an error banner under the <code dir=\"auto\">email</code> input field when an invalid email is submitted:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions, isInputError } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">result</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">getActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">newsletter</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">inputErrors</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">isInputError</span><span style=\"--0:#D6DEEB;--1:#403F53\">(result</span><span style=\"--0:#d2a6ee;--1:#6a3588\">?.</span><span style=\"--0:#7FDBCA;--1:#075457\">error</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> ? </span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">error</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">fields</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> : {}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">method</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">action</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">newsletter</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">E-mail</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><ins><span style=\"--0:#C5E478;--1:#2d4a87\">aria-describedby</span><span style=\"--0:#7FDBCA;--1:#6a3588\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">error</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">inputErrors</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">email</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2d4a87\">id</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">error</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">inputErrors</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#FAF39F;--1:#111111\">email</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">join</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">,</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Sign up</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions, isInputError } from &#x27;astro:actions&#x27;;const result = Astro.getActionResult(actions.newsletter);const inputErrors = isInputError(result?.error) ? result.error.fields : {};---<form method=&#x22;POST&#x22; action={actions.newsletter}>  <label>    E-mail    <input required type=&#x22;email&#x22; name=&#x22;email&#x22; aria-describedby=&#x22;error&#x22; />  </label>  {inputErrors.email &#x26;&#x26; <p id=&#x22;error&#x22;>{inputErrors.email.join(&#x27;,&#x27;)}</p>}  <button>Sign up</button></form>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"preserve-input-values-on-error\">Preserve input values on error</h4><a class=\"sl-anchor-link\" href=\"#preserve-input-values-on-error\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Preserve input values on error”</span></a></div>\n<p>Inputs will be cleared whenever a form is submitted. To persist input values, you can <a href=\"/en/guides/view-transitions/#enabling-view-transitions-spa-mode\">enable view transitions</a> and apply the <code dir=\"auto\">transition:persist</code> directive to each input:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><ins><span style=\"--0:#C5E478;--1:#2d4a87\">transition:persist</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<input transition:persist required type=&#x22;email&#x22; name=&#x22;email&#x22; />\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"update-the-ui-with-a-form-action-result\">Update the UI with a form action result</h3><a class=\"sl-anchor-link\" href=\"#update-the-ui-with-a-form-action-result\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Update the UI with a form action result”</span></a></div>\n<p>To use an action’s return value to display a notification to the user on success, pass the action to <code dir=\"auto\">Astro.getActionResult()</code>. Use the returned <code dir=\"auto\">data</code> property to render the UI you want to display.</p>\n<p>This example uses the <code dir=\"auto\">productName</code> property returned by an <code dir=\"auto\">addToCart</code> action to show a success message.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/products/[slug].astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">result</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">getActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actions</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">addToCart</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">result </span><span style=\"--0:#C792EA;--1:#8844AE\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">error</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">class</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">success</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Added </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">result</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">data</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">productName</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\"> to cart</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#E2817F;--1:#B23834\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!--...--></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;const result = Astro.getActionResult(actions.addToCart);---{result &#x26;&#x26; !result.error &#x26;&#x26; (  <p class=&#x22;success&#x22;>Added {result.data.productName} to cart</p>)}<!--...-->\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"advanced-persist-action-results-with-a-session\">Advanced: Persist action results with a session</h3><a class=\"sl-anchor-link\" href=\"#advanced-persist-action-results-with-a-session\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Advanced: Persist action results with a session”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "5.0.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Action results are displayed as a POST submission. This means that the result will be reset to <code dir=\"auto\">undefined</code> when a user closes and revisits the page. The user will also see a “confirm form resubmission?” dialog if they attempt to refresh the page.</p>\n<p>To customize this behavior, you can add middleware to handle the result of the action manually. You may choose to persist the action result using a cookie or session storage.</p>\n<p>Start by <a href=\"/en/guides/middleware/\">creating a middleware file</a> and importing <a href=\"/en/reference/modules/astro-actions/#getactioncontext\">the <code dir=\"auto\">getActionContext()</code> utility</a> from <code dir=\"auto\">astro:actions</code>. This function returns an <code dir=\"auto\">action</code> object with information about the incoming action request, including the action handler and whether the action was called from an HTML form. <code dir=\"auto\">getActionContext()</code> also returns the <code dir=\"auto\">setActionResult()</code> and <code dir=\"auto\">serializeActionResult()</code> functions to programmatically set the value returned by <code dir=\"auto\">Astro.getActionResult()</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/middleware.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineMiddleware } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:middleware</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getActionContext } </span><span style=\"--0:#d0a4ed;--1:#753a96\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">onRequest</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineMiddleware</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">next</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\"><span class=\"indent\">  </span>const { </span><span style=\"--0:#91b4ff;--1:#325295\">action</span><span style=\"--0:#d0a4ed;--1:#753a96\">, </span><span style=\"--0:#91b4ff;--1:#325295\">setActionResult</span><span style=\"--0:#d0a4ed;--1:#753a96\">, </span><span style=\"--0:#91b4ff;--1:#325295\">serializeActionResult</span><span style=\"--0:#d0a4ed;--1:#753a96\"> } = </span><span style=\"--0:#91b4ff;--1:#325295\">getActionContext</span><span style=\"--0:#D6DEEB;--1:#403F53\">(context)</span><span style=\"--0:#d0a4ed;--1:#753a96\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(action</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#7FDBCA;--1:#096E72\">calledFrom</span><span style=\"--0:#C792EA;--1:#8844AE\"> === </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">form</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">result</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">action</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// ... handle the action result</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(action</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">serializeActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(result))</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#82AAFF;--1:#3B61B0\">next</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineMiddleware } from &#x27;astro:middleware&#x27;;import { getActionContext } from &#x27;astro:actions&#x27;;export const onRequest = defineMiddleware(async (context, next) => {  const { action, setActionResult, serializeActionResult } = getActionContext(context);  if (action?.calledFrom === &#x27;form&#x27;) {    const result = await action.handler();    // ... handle the action result    setActionResult(action.name, serializeActionResult(result));  }  return next();});\"><div></div></button></div></figure></div>\n<p>A common practice to persist HTML form results is the <a href=\"https://en.wikipedia.org/wiki/Post/Redirect/Get\">POST / Redirect / GET pattern</a>. This redirect removes the “confirm form resubmission?” dialog when the page is refreshed, and allows action results to be persisted throughout the user’s session.</p>\n<p>This example applies the POST / Redirect / GET pattern to all form submissions using session storage with the <a href=\"/en/guides/integrations-guide/netlify/\">Netlify server adapter</a> installed. Action results are written to a session store using <a href=\"https://docs.netlify.com/blobs/overview/\">Netlify Blob</a>, and retrieved after a redirect using a session ID:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/middleware.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineMiddleware } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:middleware</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getActionContext } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { randomUUID } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">node:crypto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getStore } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">@netlify/blobs</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">onRequest</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineMiddleware</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">next</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Skip requests for prerendered pages</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">isPrerendered</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> return </span><span style=\"--0:#82AAFF;--1:#3B61B0\">next</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">action</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setActionResult</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">serializeActionResult</span><span style=\"--0:#C792EA;--1:#8844AE\"> } =</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getActionContext</span><span style=\"--0:#D6DEEB;--1:#403F53\">(context)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Create a Blob store to persist action results with Netlify Blob</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">actionStore</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getStore</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">action-session</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// If an action result was forwarded as a cookie, set the result</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// to be accessible from `Astro.getActionResult()`</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">sessionId</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">action-session-id</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">session</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">sessionId</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">? await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actionStore</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D6DEEB;--1:#403F53\">(sessionId</span><span style=\"--0:#C792EA;--1:#8844AE\">, {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">type: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">json</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">undefined</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(session)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(session</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">actionName</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D6DEEB;--1:#403F53\">session</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">actionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Optional: delete the session after the page is rendered.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Feel free to implement your own persistence strategy</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actionStore</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">delete</span><span style=\"--0:#D6DEEB;--1:#403F53\">(sessionId)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">delete</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">action-session-id</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#82AAFF;--1:#3B61B0\">next</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// If an action was called from an HTML form action,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// call the action handler and redirect to the destination page</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(action</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#7FDBCA;--1:#096E72\">calledFrom</span><span style=\"--0:#C792EA;--1:#8844AE\"> === </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">form</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">actionResult</span><span style=\"--0:#C792EA;--1:#8844AE\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">action</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Persist the action result using session storage</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">sessionId</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">randomUUID</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">await </span><span style=\"--0:#D6DEEB;--1:#403F53\">actionStore</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">setJSON</span><span style=\"--0:#D6DEEB;--1:#403F53\">(sessionId</span><span style=\"--0:#C792EA;--1:#8844AE\">, {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">actionName: </span><span style=\"--0:#D6DEEB;--1:#403F53\">action</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">actionResult: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">serializeActionResult</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actionResult)</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Pass the session ID as a cookie</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// to be retrieved after redirecting to the page</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">action-session-id</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D6DEEB;--1:#403F53\">sessionId)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Redirect back to the previous page on error</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(actionResult</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">error</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">referer</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">request</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">headers</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Referer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">referer)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">        </span></span><span style=\"--0:#C792EA;--1:#8844AE\">throw </span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Error</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">          </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Internal: Referer unexpectedly missing from Action POST request.</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">redirect</span><span style=\"--0:#D6DEEB;--1:#403F53\">(referer)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Redirect to the destination page on success</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">redirect</span><span style=\"--0:#D6DEEB;--1:#403F53\">(context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">originPathname</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#82AAFF;--1:#3B61B0\">next</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineMiddleware } from &#x27;astro:middleware&#x27;;import { getActionContext } from &#x27;astro:actions&#x27;;import { randomUUID } from &#x22;node:crypto&#x22;;import { getStore } from &#x22;@netlify/blobs&#x22;;export const onRequest = defineMiddleware(async (context, next) => {  // Skip requests for prerendered pages  if (context.isPrerendered) return next();  const { action, setActionResult, serializeActionResult } =    getActionContext(context);  // Create a Blob store to persist action results with Netlify Blob  const actionStore = getStore(&#x22;action-session&#x22;);  // If an action result was forwarded as a cookie, set the result  // to be accessible from &#x60;Astro.getActionResult()&#x60;  const sessionId = context.cookies.get(&#x22;action-session-id&#x22;)?.value;  const session = sessionId    ? await actionStore.get(sessionId, {        type: &#x22;json&#x22;,      })    : undefined;  if (session) {    setActionResult(session.actionName, session.actionResult);    // Optional: delete the session after the page is rendered.    // Feel free to implement your own persistence strategy    await actionStore.delete(sessionId);    context.cookies.delete(&#x22;action-session-id&#x22;);    return next();  }  // If an action was called from an HTML form action,  // call the action handler and redirect to the destination page  if (action?.calledFrom === &#x22;form&#x22;) {    const actionResult = await action.handler();    // Persist the action result using session storage    const sessionId = randomUUID();    await actionStore.setJSON(sessionId, {      actionName: action.name,      actionResult: serializeActionResult(actionResult),    });    // Pass the session ID as a cookie    // to be retrieved after redirecting to the page    context.cookies.set(&#x22;action-session-id&#x22;, sessionId);    // Redirect back to the previous page on error    if (actionResult.error) {      const referer = context.request.headers.get(&#x22;Referer&#x22;);      if (!referer) {        throw new Error(          &#x22;Internal: Referer unexpectedly missing from Action POST request.&#x22;,        );      }      return context.redirect(referer);    }    // Redirect to the destination page on success    return context.redirect(context.originPathname);  }  return next();});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"security-when-using-actions\">Security when using actions</h2><a class=\"sl-anchor-link\" href=\"#security-when-using-actions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Security when using actions”</span></a></div>\n<p>Actions are accessible as public endpoints based on the name of the action. For example, the action <code dir=\"auto\">blog.like()</code> will be accessible from <code dir=\"auto\">/_actions/blog.like</code>. This is useful for unit testing action results and debugging production errors. However, this means you <strong>must</strong> use same authorization checks that you would consider for API endpoints and on-demand rendered pages.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"authorize-users-from-an-action-handler\">Authorize users from an action handler</h3><a class=\"sl-anchor-link\" href=\"#authorize-users-from-an-action-handler\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Authorize users from an action handler”</span></a></div>\n<p>To authorize action requests, add an authentication check to your action handler. You may want to use <a href=\"/en/guides/authentication/\">an authentication library</a> to handle session management and user information.</p>\n<p>Actions expose the full <code dir=\"auto\">APIContext</code> object to access properties passed from middleware using <code dir=\"auto\">context.locals</code>. When a user is not authorized, you can raise an <code dir=\"auto\">ActionError</code> with the <code dir=\"auto\">UNAUTHORIZED</code> code:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/actions/index.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAction, ActionError } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">server</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">getUserSettings: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">handler</span><span style=\"--0:#C792EA;--1:#8844AE\">: async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">_input</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">context</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\"><span class=\"indent\">      </span>if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d0a4ed;--1:#753a96\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#FAF39F;--1:#111111\">locals</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">user</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#d0a4ed;--1:#753a96\"> {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\"><span class=\"indent\">        </span>throw </span><span style=\"--0:#7FDBCA;--1:#085f62\">new</span><span style=\"--0:#d0a4ed;--1:#753a96\"> </span><span style=\"--0:#91b4ff;--1:#325295\">ActionError</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#d0a4ed;--1:#753a96\">{ code: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">UNAUTHORIZED</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#d0a4ed;--1:#753a96\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#d0a4ed;--1:#753a96\">;</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\"><span class=\"indent\">      </span>}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return { </span><span style=\"--0:#919F9F;--1:#5F636F\">/* data on success */</span><span style=\"--0:#C792EA;--1:#8844AE\"> };</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAction, ActionError } from &#x27;astro:actions&#x27;;export const server = {  getUserSettings: defineAction({    handler: async (_input, context) => {      if (!context.locals.user) {        throw new ActionError({ code: &#x27;UNAUTHORIZED&#x27; });      }      return { /* data on success */ };    }  })}\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"gate-actions-from-middleware\">Gate actions from middleware</h3><a class=\"sl-anchor-link\" href=\"#gate-actions-from-middleware\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Gate actions from middleware”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "5.0.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Astro recommends authorizing user sessions from your action handler to respect permission levels and rate-limiting on a per-action basis. However, you can also gate requests to all actions (or a subset of actions) from middleware.</p>\n<p>Use the <code dir=\"auto\">getActionContext()</code> function from your middleware to retrieve information about any inbound action requests. This includes the action name and whether that action was called using a client-side remote procedure call (RPC) function (e.g. <code dir=\"auto\">actions.blog.like()</code>) or an HTML form.</p>\n<p>The following example rejects all action requests that do not have a valid session token. If the check fails, a “Forbidden” response is returned. Note: this method ensures that actions are only accessible when a session is present, but is <em>not</em> a substitute for secure authorization.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/middleware.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineMiddleware } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:middleware</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { getActionContext } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">onRequest</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineMiddleware</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">next</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">action</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">getActionContext</span><span style=\"--0:#D6DEEB;--1:#403F53\">(context)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Check if the action was called from a client-side function</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(action</span><span style=\"--0:#C792EA;--1:#8844AE\">?.</span><span style=\"--0:#7FDBCA;--1:#096E72\">calledFrom</span><span style=\"--0:#C792EA;--1:#8844AE\"> === </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">rpc</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// If so, check for a user session token</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">has</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">user-session</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">))</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Response</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">Forbidden</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, { status: </span><span style=\"--0:#F78C6C;--1:#AA0982\">403</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#D6DEEB;--1:#403F53\">context</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">cookies</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">user-session</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#919F9F;--1:#5F636F\">/* session token */</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#82AAFF;--1:#3B61B0\">next</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineMiddleware } from &#x27;astro:middleware&#x27;;import { getActionContext } from &#x27;astro:actions&#x27;;export const onRequest = defineMiddleware(async (context, next) => {  const { action } = getActionContext(context);  // Check if the action was called from a client-side function  if (action?.calledFrom === &#x27;rpc&#x27;) {    // If so, check for a user session token    if (!context.cookies.has(&#x27;user-session&#x27;)) {      return new Response(&#x27;Forbidden&#x27;, { status: 403 });    }  }  context.cookies.set(&#x27;user-session&#x27;, /* session token */);  return next();});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"call-actions-from-astro-components-and-server-endpoints\">Call actions from Astro components and server endpoints</h2><a class=\"sl-anchor-link\" href=\"#call-actions-from-astro-components-and-server-endpoints\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Call actions from Astro components and server endpoints”</span></a></div>\n<p>You can call actions directly from Astro component scripts using the <code dir=\"auto\">Astro.callAction()</code> wrapper (or <code dir=\"auto\">context.callAction()</code> when using a <a href=\"/en/guides/endpoints/#server-endpoints-api-routes\">server endpoint</a>). This is common to reuse logic from your actions in other server code.</p>\n<p>Pass the action as the first argument and any input parameters as the second argument. This returns the same <code dir=\"auto\">data</code> and <code dir=\"auto\">error</code> objects you receive when calling actions on the client:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/products.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { actions } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:actions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">searchQuery</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">url</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">searchParams</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">search</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (searchQuery) {</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d0a4ed;--1:#753a96\">const { </span><span style=\"--0:#91b4ff;--1:#325295\">data</span><span style=\"--0:#d0a4ed;--1:#753a96\">, </span><span style=\"--0:#91b4ff;--1:#325295\">error</span><span style=\"--0:#d0a4ed;--1:#753a96\"> } = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">callAction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(actions</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#7FDBCA;--1:#085f62\">findProduct</span><span style=\"--0:#d0a4ed;--1:#753a96\">, { query: </span><span style=\"--0:#D6DEEB;--1:#403F53\">searchQuery</span><span style=\"--0:#d0a4ed;--1:#753a96\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// handle result</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { actions } from &#x27;astro:actions&#x27;;const searchQuery = Astro.url.searchParams.get(&#x27;search&#x27;);if (searchQuery) {  const { data, error } = await Astro.callAction(actions.findProduct, { query: searchQuery });  // handle result}---\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/en/guides/actions.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/actions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/actions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
