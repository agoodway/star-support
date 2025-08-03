import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';
import './ReadMore_CcGJl1uo.mjs';

const frontmatter = {
  "title": "View Transitions Router API Reference",
  "sidebar": {
    "label": "astro:transitions"
  },
  "i18nReady": true,
  "tableOfContents": {
    "minHeadingLevel": 2,
    "maxHeadingLevel": 6
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "imports-from-astrotransitions",
    "text": "Imports from astro:transitions"
  }, {
    "depth": 3,
    "slug": "clientrouter-",
    "text": "<ClientRouter />"
  }, {
    "depth": 3,
    "slug": "fade",
    "text": "fade"
  }, {
    "depth": 3,
    "slug": "slide",
    "text": "slide"
  }, {
    "depth": 2,
    "slug": "imports-from-astrotransitionsclient",
    "text": "Imports from astro:transitions/client"
  }, {
    "depth": 3,
    "slug": "navigate",
    "text": "navigate()"
  }, {
    "depth": 4,
    "slug": "history-option",
    "text": "history option"
  }, {
    "depth": 4,
    "slug": "formdata-option",
    "text": "formData option"
  }, {
    "depth": 4,
    "slug": "info-option",
    "text": "info option"
  }, {
    "depth": 4,
    "slug": "state-option",
    "text": "state option"
  }, {
    "depth": 4,
    "slug": "sourceelement-option",
    "text": "sourceElement option"
  }, {
    "depth": 3,
    "slug": "supportsviewtransitions",
    "text": "supportsViewTransitions"
  }, {
    "depth": 3,
    "slug": "transitionenabledonthispage",
    "text": "transitionEnabledOnThisPage"
  }, {
    "depth": 3,
    "slug": "getfallback",
    "text": "getFallback()"
  }, {
    "depth": 3,
    "slug": "swapfunctions",
    "text": "swapFunctions"
  }, {
    "depth": 4,
    "slug": "deselectscripts",
    "text": "deselectScripts()"
  }, {
    "depth": 4,
    "slug": "swaprootattributes",
    "text": "swapRootAttributes()"
  }, {
    "depth": 4,
    "slug": "swapheadelements",
    "text": "swapHeadElements()"
  }, {
    "depth": 4,
    "slug": "savefocus",
    "text": "saveFocus()"
  }, {
    "depth": 4,
    "slug": "swapbodyelement",
    "text": "swapBodyElement()"
  }, {
    "depth": 2,
    "slug": "lifecycle-events",
    "text": "Lifecycle events"
  }, {
    "depth": 3,
    "slug": "astrobefore-preparation-event",
    "text": "astro:before-preparation event"
  }, {
    "depth": 3,
    "slug": "astroafter-preparation-event",
    "text": "astro:after-preparation event"
  }, {
    "depth": 3,
    "slug": "astrobefore-swap-event",
    "text": "astro:before-swap event"
  }, {
    "depth": 3,
    "slug": "astroafter-swap-event",
    "text": "astro:after-swap event"
  }, {
    "depth": 3,
    "slug": "astropage-load-event",
    "text": "astro:page-load event"
  }, {
    "depth": 3,
    "slug": "lifecycle-events-attributes",
    "text": "Lifecycle events attributes"
  }, {
    "depth": 4,
    "slug": "info",
    "text": "info"
  }, {
    "depth": 4,
    "slug": "sourceelement",
    "text": "sourceElement"
  }, {
    "depth": 4,
    "slug": "newdocument",
    "text": "newDocument"
  }, {
    "depth": 4,
    "slug": "navigationtype",
    "text": "navigationType"
  }, {
    "depth": 4,
    "slug": "direction",
    "text": "direction"
  }, {
    "depth": 4,
    "slug": "from",
    "text": "from"
  }, {
    "depth": 4,
    "slug": "to",
    "text": "to"
  }, {
    "depth": 4,
    "slug": "formdata",
    "text": "formData"
  }, {
    "depth": 4,
    "slug": "loader",
    "text": "loader()"
  }, {
    "depth": 4,
    "slug": "viewtransition",
    "text": "viewTransition"
  }, {
    "depth": 4,
    "slug": "swap",
    "text": "swap()"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    p: "p",
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "3.0.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>These modules provide functions to control and interact with the View Transitions API and client-side router.</p>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>This API is compatible with the <code dir=\"auto\">&#x3C;ClientRouter /></code> included in <code dir=\"auto\">astro:transitions</code>, but can’t be used with native browser MPA routing.</p></div></aside>\n<p>For features and usage examples, <a href=\"/en/guides/view-transitions/\">see our View Transitions guide</a>.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"imports-from-astrotransitions\">Imports from <code dir=\"auto\">astro:transitions</code></h2><a class=\"sl-anchor-link\" href=\"#imports-from-astrotransitions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Imports from astro:transitions”</span></a></div>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ClientRouter, fade, slide } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:transitions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { ClientRouter, fade, slide } from &#x27;astro:transitions&#x27;;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"clientrouter-\"><code dir=\"auto\">&#x3C;ClientRouter /></code></h3><a class=\"sl-anchor-link\" href=\"#clientrouter-\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “&#x3C;ClientRouter />”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "3.0.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Opt in to using view transitions on individual pages by importing and adding the <code dir=\"auto\">&#x3C;ClientRouter /></code> routing component to <code dir=\"auto\">&#x3C;head></code> on every desired page.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ClientRouter } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:transitions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">lang</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">en</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">head</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">title</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">My Homepage</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">title</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">ClientRouter</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">head</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Welcome to my website!</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { ClientRouter } from &#x27;astro:transitions&#x27;;---<html lang=&#x22;en&#x22;>  <head>    <title>My Homepage</title>    <ClientRouter />  </head>  <body>    <h1>Welcome to my website!</h1>  </body></html>\"><div></div></button></div></figure></div>\n<p>See more about how to <a href=\"/en/guides/view-transitions/#router-control\">control the router</a> and <a href=\"/en/guides/view-transitions/#transition-directives\">add transition directives</a> to page elements and components.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"fade\"><code dir=\"auto\">fade</code></h3><a class=\"sl-anchor-link\" href=\"#fade\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “fade”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "(opts: { duration?: string | number }) => TransitionDirectionalAnimations"
        })]
      }), createVNode($$Since, {
        v: "3.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Utility function to support customizing the duration of the built-in <code dir=\"auto\">fade</code> animation.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { fade } </span><span style=\"--0:#d0a4ed;--1:#753a96\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">astro:transitions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Fade transition with the default duration --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">transition:animate</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">fade</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Fade transition with a duration of 400 milliseconds --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">transition:animate</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><mark><span style=\"--0:#91b4ff;--1:#325295\">fade</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#753a96\">{ duration: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">0.4s</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#7FDBCA;--1:#753a96\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></mark><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { fade } from &#x27;astro:transitions&#x27;;---<!-- Fade transition with the default duration --><div transition:animate=&#x22;fade&#x22; /><!-- Fade transition with a duration of 400 milliseconds --><div transition:animate={fade({ duration: &#x27;0.4s&#x27; })} />\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"slide\"><code dir=\"auto\">slide</code></h3><a class=\"sl-anchor-link\" href=\"#slide\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “slide”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "(opts: { duration?: string | number }) => TransitionDirectionalAnimations"
        })]
      }), createVNode($$Since, {
        v: "3.0.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Utility function to support customizing the duration of the built-in <code dir=\"auto\">slide</code> animation.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#d0a4ed;--1:#753a96\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { slide } </span><span style=\"--0:#d0a4ed;--1:#753a96\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">astro:transitions</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Slide transition with the default duration --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">transition:animate</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">slide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- Slide transition with a duration of 400 milliseconds --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">transition:animate</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><mark><span style=\"--0:#91b4ff;--1:#325295\">slide</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#753a96\">{ duration: </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#804241\">0.4s</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#7FDBCA;--1:#753a96\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></mark><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { slide } from &#x27;astro:transitions&#x27;;---<!-- Slide transition with the default duration --><div transition:animate=&#x22;slide&#x22; /><!-- Slide transition with a duration of 400 milliseconds --><div transition:animate={slide({ duration: &#x27;0.4s&#x27; })} />\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"imports-from-astrotransitionsclient\">Imports from <code dir=\"auto\">astro:transitions/client</code></h2><a class=\"sl-anchor-link\" href=\"#imports-from-astrotransitionsclient\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Imports from astro:transitions/client”</span></a></div>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">navigate,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">supportsViewTransitions,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">transitionEnabledOnThisPage,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">getFallback,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">swapFunctions,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">} </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:transitions/client</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script>  import {    navigate,    supportsViewTransitions,    transitionEnabledOnThisPage,    getFallback,    swapFunctions,  } from &#x27;astro:transitions/client&#x27;;</script>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"navigate\"><code dir=\"auto\">navigate()</code></h3><a class=\"sl-anchor-link\" href=\"#navigate\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “navigate()”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "(href: string, options?: Options) => void"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>A function that executes a navigation to the given <code dir=\"auto\">href</code> using the View Transitions API.</p>\n<p>This function signature is based on the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate\"><code dir=\"auto\">navigate</code> function from the browser Navigation API</a>. Although based on the Navigation API, this function is implemented on top of the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/History_API\">History API</a> to allow for navigation without reloading the page.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"history-option\"><code dir=\"auto\">history</code> option</h4><a class=\"sl-anchor-link\" href=\"#history-option\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “history option”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'auto' | 'push' | 'replace'"
        }), createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "Default:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "'auto'"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Defines how this navigation should be added to the browser history.</p>\n<ul>\n<li><code dir=\"auto\">'push'</code>: the router will use <code dir=\"auto\">history.pushState</code> to create a new entry in the browser history.</li>\n<li><code dir=\"auto\">'replace'</code>: the router will use <code dir=\"auto\">history.replaceState</code> to update the URL without adding a new entry into navigation.</li>\n<li><code dir=\"auto\">'auto'</code> (default): the router will attempt <code dir=\"auto\">history.pushState</code>, but if the URL cannot be transitioned to, the current URL will remain with no changes to the browser history.</li>\n</ul>\n<p>This option follows the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#history\"><code dir=\"auto\">history</code> option</a> from the browser Navigation API but simplified for the cases that can happen on an Astro project.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"formdata-option\"><code dir=\"auto\">formData</code> option</h4><a class=\"sl-anchor-link\" href=\"#formdata-option\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “formData option”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "FormData"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.5.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>A <code dir=\"auto\">FormData</code> object for <code dir=\"auto\">POST</code> requests.</p>\n<p>When this option is provided, the requests to the navigation target page will be sent as a <code dir=\"auto\">POST</code> request with the form data object as the content.</p>\n<p>Submitting an HTML form with view transitions enabled will use this method instead of the default navigation with page reload. Calling this method allows triggering the same behavior programmatically.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"info-option\"><code dir=\"auto\">info</code> option</h4><a class=\"sl-anchor-link\" href=\"#info-option\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “info option”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "any"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Arbitrary data to be included in the <code dir=\"auto\">astro:before-preparation</code> and <code dir=\"auto\">astro:before-swap</code> events caused by this navigation.</p>\n<p>This option mimics the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#info\"><code dir=\"auto\">info</code> option</a> from the browser Navigation API.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"state-option\"><code dir=\"auto\">state</code> option</h4><a class=\"sl-anchor-link\" href=\"#state-option\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “state option”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "any"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Arbitrary data to be associated with the <code dir=\"auto\">NavitationHistoryEntry</code> object created by this navigation. This data can then be retrieved using the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/NavigationHistoryEntry/getState\"><code dir=\"auto\">history.getState</code> function</a> from the History API.</p>\n<p>This option mimics the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#state\"><code dir=\"auto\">state</code> option</a> from the browser Navigation API.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"sourceelement-option\"><code dir=\"auto\">sourceElement</code> option</h4><a class=\"sl-anchor-link\" href=\"#sourceelement-option\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “sourceElement option”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "Element"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The element that triggered this navigation, if any. This element will be available in the following events:</p>\n<ul>\n<li><code dir=\"auto\">astro:before-preparation</code></li>\n<li><code dir=\"auto\">astro:before-swap</code></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"supportsviewtransitions\"><code dir=\"auto\">supportsViewTransitions</code></h3><a class=\"sl-anchor-link\" href=\"#supportsviewtransitions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “supportsViewTransitions”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "boolean"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Whether or not view transitions are supported and enabled in the current browser.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"transitionenabledonthispage\"><code dir=\"auto\">transitionEnabledOnThisPage</code></h3><a class=\"sl-anchor-link\" href=\"#transitionenabledonthispage\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “transitionEnabledOnThisPage”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "boolean"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.2.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Whether or not the current page has view transitions enabled for client-side navigation. This can be used to make components that behave differently when they are used on pages with view transitions.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"getfallback\"><code dir=\"auto\">getFallback()</code></h3><a class=\"sl-anchor-link\" href=\"#getfallback\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “getFallback()”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "() => 'none' | 'animate' | 'swap'"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "3.6.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Returns the fallback strategy to use in browsers that do not support view transitions.</p>\n<p>See the guide on <a href=\"/en/guides/view-transitions/#fallback-control\">Fallback control</a> for how to choose and configure the fallback behavior.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"swapfunctions\"><code dir=\"auto\">swapFunctions</code></h3><a class=\"sl-anchor-link\" href=\"#swapfunctions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “swapFunctions”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "4.15.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>An object containing the utility functions used to build Astro’s default swap function.\nThese can be useful when <a href=\"/en/guides/view-transitions/#building-a-custom-swap-function\">building a custom swap function</a>.</p>\n<p><code dir=\"auto\">swapFunctions</code> provides the following methods:</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"deselectscripts\"><code dir=\"auto\">deselectScripts()</code></h4><a class=\"sl-anchor-link\" href=\"#deselectscripts\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “deselectScripts()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(newDocument: Document) => void</code></p></p>\n<p>Marks scripts in the new document that should not be executed. Those scripts are already in the current document and are not flagged for re-execution using <a href=\"/en/guides/view-transitions/#data-astro-rerun\"><code dir=\"auto\">data-astro-rerun</code></a>.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"swaprootattributes\"><code dir=\"auto\">swapRootAttributes()</code></h4><a class=\"sl-anchor-link\" href=\"#swaprootattributes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “swapRootAttributes()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(newDocument: Document) => void</code></p></p>\n<p>Swaps the attributes between the document roots, like the <code dir=\"auto\">lang</code> attribute. This also includes Astro-injected internal attributes like <code dir=\"auto\">data-astro-transition</code>, which makes the transition direction available to Astro-generated CSS rules.</p>\n<p>When making a custom swap function, it is important to call this function so as not to break the view transition’s animations.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"swapheadelements\"><code dir=\"auto\">swapHeadElements()</code></h4><a class=\"sl-anchor-link\" href=\"#swapheadelements\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “swapHeadElements()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(newDocument: Document) => void</code></p></p>\n<p>Removes every element from the current document’s <code dir=\"auto\">&#x3C;head></code> that is not persisted to the new document. Then appends all new elements from the new document’s <code dir=\"auto\">&#x3C;head></code> to the current document’s <code dir=\"auto\">&#x3C;head></code>.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"savefocus\"><code dir=\"auto\">saveFocus()</code></h4><a class=\"sl-anchor-link\" href=\"#savefocus\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “saveFocus()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">() => () => void</code></p></p>\n<p>Stores the element in focus on the current page and returns a function that when called, if the focused element was persisted, returns the focus to it.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"swapbodyelement\"><code dir=\"auto\">swapBodyElement()</code></h4><a class=\"sl-anchor-link\" href=\"#swapbodyelement\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “swapBodyElement()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(newBody: Element, oldBody: Element) => void</code></p></p>\n<p>Replaces the old body with the new body. Then, goes through every element in the old body that should be persisted and have a matching element in the new body and swaps the old element back in place.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"lifecycle-events\">Lifecycle events</h2><a class=\"sl-anchor-link\" href=\"#lifecycle-events\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Lifecycle events”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"astrobefore-preparation-event\"><code dir=\"auto\">astro:before-preparation</code> event</h3><a class=\"sl-anchor-link\" href=\"#astrobefore-preparation-event\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “astro:before-preparation event”</span></a></div>\n<p>An event dispatched at the beginning of a navigation using the View Transitions router. This event happens before any request is made and any browser state is changed.</p>\n<p>This event has the attributes:</p>\n<ul>\n<li><a href=\"#info\"><code dir=\"auto\">info</code></a></li>\n<li><a href=\"#sourceelement\"><code dir=\"auto\">sourceElement</code></a></li>\n<li><a href=\"#navigationtype\"><code dir=\"auto\">navigationType</code></a></li>\n<li><a href=\"#direction\"><code dir=\"auto\">direction</code></a></li>\n<li><a href=\"#from\"><code dir=\"auto\">from</code></a></li>\n<li><a href=\"#to\"><code dir=\"auto\">to</code></a></li>\n<li><a href=\"#formdata\"><code dir=\"auto\">formData</code></a></li>\n<li><a href=\"#loader\"><code dir=\"auto\">loader()</code></a></li>\n</ul>\n<p>Read more about how to use this event on the <a href=\"/en/guides/view-transitions/#astrobefore-preparation\">View Transitions guide</a>.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"astroafter-preparation-event\"><code dir=\"auto\">astro:after-preparation</code> event</h3><a class=\"sl-anchor-link\" href=\"#astroafter-preparation-event\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “astro:after-preparation event”</span></a></div>\n<p>An event dispatched after the next page in a navigation using View Transitions router is loaded.</p>\n<p>This event has no attributes.</p>\n<p>Read more about how to use this event on the <a href=\"/en/guides/view-transitions/#astroafter-preparation\">View Transitions guide</a>.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"astrobefore-swap-event\"><code dir=\"auto\">astro:before-swap</code> event</h3><a class=\"sl-anchor-link\" href=\"#astrobefore-swap-event\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “astro:before-swap event”</span></a></div>\n<p>An event dispatched after the next page is parsed, prepared, and linked into a document in preparation for the transition but before any content is swapped between the documents.</p>\n<p>This event can’t be canceled. Calling <code dir=\"auto\">preventDefault()</code> is a no-op.</p>\n<p>This event has the attributes:</p>\n<ul>\n<li><a href=\"#info\"><code dir=\"auto\">info</code></a></li>\n<li><a href=\"#sourceelement\"><code dir=\"auto\">sourceElement</code></a></li>\n<li><a href=\"#navigationtype\"><code dir=\"auto\">navigationType</code></a></li>\n<li><a href=\"#direction\"><code dir=\"auto\">direction</code></a></li>\n<li><a href=\"#from\"><code dir=\"auto\">from</code></a></li>\n<li><a href=\"#to\"><code dir=\"auto\">to</code></a></li>\n<li><a href=\"#viewtransition\"><code dir=\"auto\">viewTransition</code></a></li>\n<li><a href=\"#swap\"><code dir=\"auto\">swap()</code></a></li>\n</ul>\n<p>Read more about how to use this event on the <a href=\"/en/guides/view-transitions/#astrobefore-swap\">View Transitions guide</a>.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"astroafter-swap-event\"><code dir=\"auto\">astro:after-swap</code> event</h3><a class=\"sl-anchor-link\" href=\"#astroafter-swap-event\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “astro:after-swap event”</span></a></div>\n<p>An event dispatched after the contents of the page have been swapped but before the view transition ends.</p>\n<p>The history entry and scroll position have already been updated when this event is triggered.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"astropage-load-event\"><code dir=\"auto\">astro:page-load</code> event</h3><a class=\"sl-anchor-link\" href=\"#astropage-load-event\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “astro:page-load event”</span></a></div>\n<p>An event dispatched after a page completes loading, whether from a navigation using view transitions or native to the browser.</p>\n<p>When view transitions is enabled on the page, code that would normally execute on <code dir=\"auto\">DOMContentLoaded</code> should be changed to execute on this event.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"lifecycle-events-attributes\">Lifecycle events attributes</h3><a class=\"sl-anchor-link\" href=\"#lifecycle-events-attributes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Lifecycle events attributes”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: createVNode($$Since, {
        v: "3.6.0"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"info\"><code dir=\"auto\">info</code></h4><a class=\"sl-anchor-link\" href=\"#info\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “info”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">URL</code></p></p>\n<p>Arbitrary data defined during navigation.</p>\n<p>This is the literal value passed on the <a href=\"#info-option\"><code dir=\"auto\">info</code> option</a> of the <a href=\"#navigate\"><code dir=\"auto\">navigate()</code> function</a>.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"sourceelement\"><code dir=\"auto\">sourceElement</code></h4><a class=\"sl-anchor-link\" href=\"#sourceelement\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “sourceElement”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">Element | undefined</code></p></p>\n<p>The element that triggered the navigation. This can be, for example, an <code dir=\"auto\">&#x3C;a></code> element that was clicked.</p>\n<p>When using the <a href=\"#navigate\"><code dir=\"auto\">navigate()</code> function</a>, this will be the element specified in the call.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"newdocument\"><code dir=\"auto\">newDocument</code></h4><a class=\"sl-anchor-link\" href=\"#newdocument\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “newDocument”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">Document</code></p></p>\n<p>The document for the next page in the navigation. The contents of this document will be swapped in place of the contents of the current document.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"navigationtype\"><code dir=\"auto\">navigationType</code></h4><a class=\"sl-anchor-link\" href=\"#navigationtype\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “navigationType”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">'push' | 'replace' | 'traverse'</code></p></p>\n<p>Which kind of history navigation is happening.</p>\n<ul>\n<li><code dir=\"auto\">push</code>: a new <code dir=\"auto\">NavigationHistoryEntry</code> is being created for the new page.</li>\n<li><code dir=\"auto\">replace</code>: the current <code dir=\"auto\">NavigationHistoryEntry</code> is being replaced with an entry for the new page.</li>\n<li><code dir=\"auto\">traverse</code>: no <code dir=\"auto\">NavigationHistoryEntry</code> is created. The position in the history is changing.\nThe direction of the traversal is given on the <a href=\"#direction\"><code dir=\"auto\">direction</code> attribute</a></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"direction\"><code dir=\"auto\">direction</code></h4><a class=\"sl-anchor-link\" href=\"#direction\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “direction”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">Direction</code></p></p>\n<p>The direction of the transition.</p>\n<ul>\n<li><code dir=\"auto\">forward</code>: navigating to the next page in the history or to a new page.</li>\n<li><code dir=\"auto\">back</code>: navigating to the previous page in the history.</li>\n<li>Anything else some other listener might have set.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"from\"><code dir=\"auto\">from</code></h4><a class=\"sl-anchor-link\" href=\"#from\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “from”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">URL</code></p></p>\n<p>The URL of the page initiating the navigation.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"to\"><code dir=\"auto\">to</code></h4><a class=\"sl-anchor-link\" href=\"#to\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “to”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">URL</code></p></p>\n<p>The URL of the page being navigated to. This property can be modified, the value at the end of the lifecycle will be used in the <code dir=\"auto\">NavigationHistoryEntry</code> for the next page.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"formdata\"><code dir=\"auto\">formData</code></h4><a class=\"sl-anchor-link\" href=\"#formdata\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “formData”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">FormData | undefined</code></p></p>\n<p>A <code dir=\"auto\">FormData</code> object for <code dir=\"auto\">POST</code> requests.</p>\n<p>When this attribute is set, a <code dir=\"auto\">POST</code> request will be sent to the <a href=\"#to\"><code dir=\"auto\">to</code> URL</a> with the given form data object as the content instead of the normal <code dir=\"auto\">GET</code> request.</p>\n<p>When submitting an HTML form with view transitions enabled, this field is automatically set to the data in the form. When using the <a href=\"#navigate\"><code dir=\"auto\">navigate()</code> function</a>, this value is the same as given in the options.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"loader\"><code dir=\"auto\">loader()</code></h4><a class=\"sl-anchor-link\" href=\"#loader\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “loader()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">() => Promise&#x3C;void></code></p></p>\n<p>Implementation of the following phase in the navigation (loading the next page). This implementation can be overridden to add extra behavior.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"viewtransition\"><code dir=\"auto\">viewTransition</code></h4><a class=\"sl-anchor-link\" href=\"#viewtransition\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “viewTransition”</span></a></div>\n<p><p><strong>Type:</strong> <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition\"><code dir=\"auto\">ViewTransition</code></a></p></p>\n<p>The view transition object used in this navigation. On browsers that do not support the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API\">View Transitions API</a>, this is an object implementing the same API for convenience but without the DOM integration.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"swap\"><code dir=\"auto\">swap()</code></h4><a class=\"sl-anchor-link\" href=\"#swap\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “swap()”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">() => void</code></p></p>\n<p>Implementation of the document swap logic.</p>\n<p>Read more about <a href=\"/en/guides/view-transitions/#building-a-custom-swap-function\">building a custom swap function</a> in the View Transitions guide.</p>\n<p>By default, this implementation will call the following functions in order:</p>\n<ol>\n<li><a href=\"#deselectscripts\"><code dir=\"auto\">deselectScripts()</code></a></li>\n<li><a href=\"#swaprootattributes\"><code dir=\"auto\">swapRootAttributes()</code></a></li>\n<li><a href=\"#swapheadelements\"><code dir=\"auto\">swapHeadElements()</code></a></li>\n<li><a href=\"#savefocus\"><code dir=\"auto\">saveFocus()</code></a></li>\n<li><a href=\"#swapbodyelement\"><code dir=\"auto\">swapBodyElement()</code></a></li>\n</ol>"
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

const url = "src/content/docs/en/reference/modules/astro-transitions.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/modules/astro-transitions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/modules/astro-transitions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
