import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Since } from './Since_BJvBqJyZ.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';
import { f as $$Steps, h as $$Tabs, i as $$TabItem } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Experimental fonts API",
  "sidebar": {
    "label": "Fonts"
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
    "slug": "usage",
    "text": "Usage"
  }, {
    "depth": 2,
    "slug": "available-remote-font-providers",
    "text": "Available remote font providers"
  }, {
    "depth": 2,
    "slug": "usage-examples",
    "text": "Usage examples"
  }, {
    "depth": 2,
    "slug": "font--component-reference",
    "text": "<Font /> component reference"
  }, {
    "depth": 3,
    "slug": "cssvariable",
    "text": "cssVariable"
  }, {
    "depth": 3,
    "slug": "preload",
    "text": "preload"
  }, {
    "depth": 2,
    "slug": "font-configuration-reference",
    "text": "Font configuration reference"
  }, {
    "depth": 3,
    "slug": "common-properties",
    "text": "Common properties"
  }, {
    "depth": 4,
    "slug": "provider",
    "text": "provider"
  }, {
    "depth": 4,
    "slug": "name",
    "text": "name"
  }, {
    "depth": 4,
    "slug": "cssvariable-1",
    "text": "cssVariable"
  }, {
    "depth": 4,
    "slug": "fallbacks",
    "text": "fallbacks"
  }, {
    "depth": 4,
    "slug": "optimizedfallbacks",
    "text": "optimizedFallbacks"
  }, {
    "depth": 3,
    "slug": "remote-font-properties",
    "text": "Remote font properties"
  }, {
    "depth": 4,
    "slug": "weights",
    "text": "weights"
  }, {
    "depth": 4,
    "slug": "styles",
    "text": "styles"
  }, {
    "depth": 4,
    "slug": "subsets",
    "text": "subsets"
  }, {
    "depth": 4,
    "slug": "display",
    "text": "display"
  }, {
    "depth": 4,
    "slug": "unicoderange",
    "text": "unicodeRange"
  }, {
    "depth": 4,
    "slug": "stretch",
    "text": "stretch"
  }, {
    "depth": 4,
    "slug": "featuresettings",
    "text": "featureSettings"
  }, {
    "depth": 4,
    "slug": "variationsettings",
    "text": "variationSettings"
  }, {
    "depth": 3,
    "slug": "local-font-variants",
    "text": "Local font variants"
  }, {
    "depth": 4,
    "slug": "weight",
    "text": "weight"
  }, {
    "depth": 4,
    "slug": "style",
    "text": "style"
  }, {
    "depth": 4,
    "slug": "src",
    "text": "src"
  }, {
    "depth": 4,
    "slug": "other-properties",
    "text": "Other properties"
  }, {
    "depth": 2,
    "slug": "build-your-own-font-provider",
    "text": "Build your own font provider"
  }, {
    "depth": 2,
    "slug": "caching",
    "text": "Caching"
  }, {
    "depth": 2,
    "slug": "further-reading",
    "text": "Further reading"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    ins: "ins",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Type:"
        }), " ", createVNode(_components.code, {
          dir: "auto",
          children: "FontFamily[]"
        }), createVNode(_components.br, {})]
      }), createVNode($$Since, {
        v: "5.7.0"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>This experimental feature allows you to use fonts from your filesystem and various font providers (eg. Google, Fontsource, Bunny) through a unified, fully customizable, and type-safe API.</p>\n<p>Web fonts can impact page performance at both load time and rendering time. This API helps you keep your site performant with automatic <a href=\"https://web.dev/learn/performance/optimize-web-fonts\">web font optimizations</a> including preload links, optimized fallbacks, and opinionated defaults. <a href=\"#usage-examples\">See common usage examples</a>.</p>\n<p>To enable this feature, configure an <code dir=\"auto\">experimental.fonts</code> object with at least one font:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig,</span><ins><span style=\"--0:#D6DEEB;--1:#403F53\"> fontProviders </span></ins><span style=\"--0:#D6DEEB;--1:#403F53\">} </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#075457\">fontProviders</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">Roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig, fontProviders } from &#x22;astro/config&#x22;;export default defineConfig({    experimental: {        fonts: [{            provider: fontProviders.google(),            name: &#x22;Roboto&#x22;,            cssVariable: &#x22;--font-roboto&#x22;        }]    }});\"><div></div></button></div></figure></div>\n<p>Then, add the <code dir=\"auto\">&#x3C;Font /></code> component and site-wide styling in your <code dir=\"auto\">&#x3C;head></code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/Head.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { Font } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">astro:assets</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">Font</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">cssVariable</span><span style=\"--0:#7FDBCA;--1:#6a3588\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#723b3a\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">preload</span><span style=\"--0:#7FDBCA;--1:#6a3588\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#ff9b9b;--1:#723b3a\">body</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075457\">font-family</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#2d4a87\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#2d4a87\">--font-roboto</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { Font } from &#x27;astro:assets&#x27;;---<Font cssVariable=&#x27;--font-roboto&#x27; preload /><style>body {    font-family: var(--font-roboto);}</style>\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"usage\">Usage</h2><a class=\"sl-anchor-link\" href=\"#usage\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Usage”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "experimental.fonts"
            }), " accepts an array of font objects. For each font, you must specify a ", createVNode(_components.code, {
              dir: "auto",
              children: "provider"
            }), ", the family ", createVNode(_components.code, {
              dir: "auto",
              children: "name"
            }), ", and define a ", createVNode(_components.code, {
              dir: "auto",
              children: "cssVariable"
            }), " to refer to your font."]
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: [createVNode(_components.a, {
                href: "#provider",
                children: createVNode(_components.code, {
                  dir: "auto",
                  children: "provider"
                })
              }), ": You can choose from the list of ", createVNode(_components.a, {
                href: "#available-remote-font-providers",
                children: "built-in remote providers"
              }), ", build your own ", createVNode(_components.a, {
                href: "#build-your-own-font-provider",
                children: "custom font provider"
              }), ", or use the ", createVNode(_components.a, {
                href: "#local-font-variants",
                children: "local provider"
              }), " to register local font files."]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.a, {
                href: "#name",
                children: createVNode(_components.code, {
                  dir: "auto",
                  children: "name"
                })
              }), ": Choose a font family supported by your provider."]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.a, {
                href: "#cssvariable-1",
                children: createVNode(_components.code, {
                  dir: "auto",
                  children: "cssVariable"
                })
              }), ": Must be a valid ", createVNode(_components.a, {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/ident",
                children: "ident"
              }), " in the form of a CSS variable."]
            }), "\n"]
          }), "\n", createVNode(_components.p, {
            children: ["The following example configures the ", createVNode(_components.a, {
              href: "https://fonts.google.com/specimen/Roboto",
              children: "“Roboto” family from Google Fonts"
            }), ":"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "astro.config.mjs"
                })
              }), createVNode(_components.pre, {
                "data-language": "js",
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
                        children: " { defineConfig, "
                      }), createVNode(_components.ins, {
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "fontProviders"
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " } "
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
                        children: "astro/config"
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
                        children: "default"
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
                        children: "defineConfig"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "({"
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
                        children: "experimental: {"
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
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "fonts: [{"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "provider: "
                      }), createVNode(_components.ins, {
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA",
                            "--1": "#064a4d"
                          },
                          children: "fontProviders"
                        })
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
                        children: "google"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "(),"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "name: "
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
                        children: "Roboto"
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
                        children: ","
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "cssVariable: "
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
                        children: "--font-roboto"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "}]"
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
                        children: "}"
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
                        children: "});"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "import { defineConfig, fontProviders } from \"astro/config\";export default defineConfig({  experimental: {    fonts: [{      provider: fontProviders.google(),      name: \"Roboto\",      cssVariable: \"--font-roboto\"    }]  }});",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: ["More configuration options, such as defining ", createVNode(_components.a, {
              href: "#fallbacks",
              children: "fallback font families"
            }), " and which ", createVNode(_components.a, {
              href: "#weights",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "weights"
              })
            }), " and ", createVNode(_components.a, {
              href: "#styles",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "styles"
              })
            }), " to download, are available and some will depend on your chosen provider."]
          }), "\n", createVNode(_components.p, {
            children: ["See the full ", createVNode(_components.a, {
              href: "#font-configuration-reference",
              children: "configuration reference"
            }), " to learn more."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Apply styles using the ", createVNode(_components.code, {
              dir: "auto",
              children: "<Font />"
            }), " component. It must be imported and added to your page ", createVNode(_components.code, {
              dir: "auto",
              children: "<head>"
            }), ". Providing the font’s ", createVNode(_components.a, {
              href: "#cssvariable",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "cssVariable"
              })
            }), " is required, and you can optionally ", createVNode(_components.a, {
              href: "#preload",
              children: "output preload links"
            }), ":"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/components/Head.astro"
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
                        children: " { Font } "
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
                        children: "astro:assets"
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
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: "<"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C5E478",
                          "--1": "#2d4a87"
                        },
                        children: "Font"
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
                        children: "cssVariable"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
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
                          "--1": "#723b3a"
                        },
                        children: "--font-roboto"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                        children: "preload"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#6a3588"
                        },
                        children: " />"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "---import { Font } from 'astro:assets';---<Font cssVariable=\"--font-roboto\" preload />",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: ["This is commonly done in a component such as ", createVNode(_components.code, {
              dir: "auto",
              children: "Head.astro"
            }), " that is used in a common site layout."]
          }), "\n", createVNode($$ReadMore, {
            "set:html": "See the full <a href=\"#font--component-reference\"><code dir=\"auto\">&#x3C;Font></code> component reference</a> for more information."
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<p>Since the <code dir=\"auto\">&#x3C;Font /></code> component generates CSS with font declarations, you can reference the font family using the <code dir=\"auto\">cssVariable</code>:</p>\n"
          }), createVNode($$Tabs, {
            children: [createVNode($$TabItem, {
              label: "CSS",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">&#x3C;</span><span style=\"--0:#FF6D6D;--1:#984E4D\">style</span><span style=\"--0:#7FDBCA;--1:#096E72\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#FF6D6D;--1:#984E4D\">body</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075457\">font-family</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#2d4a87\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#2d4a87\">--font-roboto</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">&#x3C;/</span><span style=\"--0:#FF6D6D;--1:#984E4D\">style</span><span style=\"--0:#7FDBCA;--1:#096E72\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<style>body {    font-family: var(--font-roboto);}</style>\"><div></div></button></div></figure></div>"
            }), createVNode($$TabItem, {
              label: "Tailwind CSS 4.0",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/styles/global.css</span></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">tailwindcss</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">@theme</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><ins><span style=\"--0:#D6DEEB;--1:#403F53\">inline</span></ins><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">--font-sans: var(--font-roboto</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"@import &#x27;tailwindcss&#x27;;@theme inline {    --font-sans: var(--font-roboto);}\"><div></div></button></div></figure></div>"
            }), createVNode($$TabItem, {
              label: "Tailwind CSS 3.0",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">tailwind.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/** </span><span style=\"--0:#C792EA;--1:#8844AE\">@type</span><span style=\"--0:#919F9F;--1:#5F636F\"> </span><span style=\"--0:#889FB2;--1:#4D667B\">{import(\"tailwindcss\").Config}</span><span style=\"--0:#919F9F;--1:#5F636F\"> */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">content: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">theme: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">extend: {},</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fontFamily: {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">sans: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">var(--font-roboto)</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">plugins: []</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/** @type {import(&#x22;tailwindcss&#x22;).Config} */export default {content: [&#x22;./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}&#x22;],theme: {    extend: {},    fontFamily: {        sans: [&#x22;var(--font-roboto)&#x22;]    }},plugins: []};\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"available-remote-font-providers\">Available remote font providers</h2><a class=\"sl-anchor-link\" href=\"#available-remote-font-providers\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Available remote font providers”</span></a></div>\n<p>Astro re-exports most <a href=\"https://github.com/unjs/unifont/\">unifont</a> providers. The following have built-in support:</p>\n<ul>\n<li><a href=\"https://fonts.adobe.com/\">Adobe</a></li>\n<li><a href=\"https://fonts.bunny.net/\">Bunny</a></li>\n<li><a href=\"https://www.fontshare.com/\">Fontshare</a></li>\n<li><a href=\"https://fontsource.org/\">Fontsource</a></li>\n<li><a href=\"https://fonts.google.com/\">Google</a></li>\n</ul>\n<p>To use a built-in remote provider, configure <code dir=\"auto\">provider</code> with the appropriate value for your chosen font provider:</p>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Adobe",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">adobe</span><span style=\"--0:#D6DEEB;--1:#403F53\">({ id: </span><span style=\"--0:#7FDBCA;--1:#096E72\">process</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">env</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">ADOBE_ID</span><span style=\"--0:#D6DEEB;--1:#403F53\"> })</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.adobe({ id: process.env.ADOBE_ID })\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "Bunny",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">bunny</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.bunny()\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "Fontshare",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">fontshare</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.fontshare()\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "Fontsource",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">fontsource</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.fontsource()\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "Google",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.google()\"><div></div></button></div></figure></div><p>Additionally, the <code dir=\"auto\">google()</code> font provider accepts all options available for the <a href=\"https://github.com/unjs/unifont/blob/main/src/providers/google.ts#L10-L26\">unifont Google <code dir=\"auto\">ProviderOption</code></a>:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">glyphs: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Roboto: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">a</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">})</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"provider: fontProviders.google({  glyphs: {    Roboto: [&#x22;a&#x22;]  }})\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>You can also <a href=\"#build-your-own-font-provider\">make a custom Astro font provider</a> for any unifont provider.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"usage-examples\">Usage examples</h2><a class=\"sl-anchor-link\" href=\"#usage-examples\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Usage examples”</span></a></div>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig, fontProviders } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#403F53\">        </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">provider</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Default included:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// weights: [400] ,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// styles: [\"normal\", \"italics\"],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// subsets: [\"cyrillic-ext\", \"cyrillic\", \"greek-ext\", \"greek\", \"vietnamese\", \"latin-ext\", \"latin\"],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// fallbacks: [\"sans-serif\"],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Inter</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-inter</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">fontsource</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Specify weights that are actually used</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">weights: [</span><span style=\"--0:#F78C6C;--1:#AA0982\">400</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">500</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">600</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">700</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Specify styles that are actually used</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">styles: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Download only font files for characters used on the page</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">subsets: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">cyrillic</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">JetBrains Mono</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-jetbrains-mono</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">fontsource</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Download only font files for characters used on the page</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">subsets: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">latin</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Use a fallback font family matching the intended appearance</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fallbacks: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">monospace</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Poppins</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-poppins</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">local</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Weight and style are not specified so Astro</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// will try to infer them for each variant</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">variants: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">          </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">              </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/Poppins-regular.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">              </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/Poppins-regular.woff</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">          </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">          </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">              </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/Poppins-bold.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">              </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/Poppins-bold.woff</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">          </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig, fontProviders } from &#x22;astro/config&#x22;;export default defineConfig({  experimental: {    fonts: [      {        name: &#x22;Roboto&#x22;,        cssVariable: &#x22;--font-roboto&#x22;        provider: fontProviders.google(),        // Default included:        // weights: [400] ,        // styles: [&#x22;normal&#x22;, &#x22;italics&#x22;],        // subsets: [&#x22;cyrillic-ext&#x22;, &#x22;cyrillic&#x22;, &#x22;greek-ext&#x22;, &#x22;greek&#x22;, &#x22;vietnamese&#x22;, &#x22;latin-ext&#x22;, &#x22;latin&#x22;],        // fallbacks: [&#x22;sans-serif&#x22;],      },      {        name: &#x22;Inter&#x22;,        cssVariable: &#x22;--font-inter&#x22;,        provider: fontProviders.fontsource(),        // Specify weights that are actually used        weights: [400, 500, 600, 700],        // Specify styles that are actually used        styles: [&#x22;normal&#x22;],        // Download only font files for characters used on the page        subsets: [&#x22;cyrillic&#x22;],      },      {        name: &#x22;JetBrains Mono&#x22;,        cssVariable: &#x22;--font-jetbrains-mono&#x22;,        provider: fontProviders.fontsource(),        // Download only font files for characters used on the page        subsets: [&#x22;latin&#x22;],        // Use a fallback font family matching the intended appearance        fallbacks: [&#x22;monospace&#x22;],      },      {        name: &#x22;Poppins&#x22;,        cssVariable: &#x22;--font-poppins&#x22;,        provider: &#x22;local&#x22;,        // Weight and style are not specified so Astro        // will try to infer them for each variant        variants: [          {            src: [              &#x22;./src/assets/fonts/Poppins-regular.woff2&#x22;,              &#x22;./src/assets/fonts/Poppins-regular.woff&#x22;,            ]          },          {            src: [              &#x22;./src/assets/fonts/Poppins-bold.woff2&#x22;,              &#x22;./src/assets/fonts/Poppins-bold.woff&#x22;,            ]          },        ]      }    ],  }});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"font--component-reference\"><code dir=\"auto\">&#x3C;Font /></code> component reference</h2><a class=\"sl-anchor-link\" href=\"#font--component-reference\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “&#x3C;Font /> component reference”</span></a></div>\n<p>This component outputs style tags and can optionally output preload links for a given font family.</p>\n<p>It must be imported and added to your page <code dir=\"auto\">&#x3C;head></code>. This is commonly done in a component such as <code dir=\"auto\">Head.astro</code> that is used in a common site layout for global use but may be added to individual pages as needed.</p>\n<p>With this component, you have control over which font family is used on which page, and which fonts are preloaded.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"cssvariable\">cssVariable</h3><a class=\"sl-anchor-link\" href=\"#cssvariable\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “cssVariable”</span></a></div>\n<p><p><strong>Example type:</strong> <code dir=\"auto\">\"--font-roboto\" | \"--font-comic-sans\" | ...</code></p></p>\n<p>The <a href=\"#cssvariable-1\"><code dir=\"auto\">cssVariable</code></a> registered in your Astro configuration:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/Head.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { Font } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:assets</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">Font</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">cssVariable</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { Font } from &#x27;astro:assets&#x27;;---<Font cssVariable=&#x22;--font-roboto&#x22; />\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"preload\">preload</h3><a class=\"sl-anchor-link\" href=\"#preload\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “preload”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">boolean</code><br>\n<strong>Default:</strong> <code dir=\"auto\">false</code></p></p>\n<p>Whether to output <a href=\"https://web.dev/learn/performance/optimize-web-fonts#preload\">preload links</a> or not:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/Head.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { Font } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro:assets</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">Font</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">cssVariable</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">preload</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import { Font } from &#x27;astro:assets&#x27;;---<Font cssVariable=&#x22;--font-roboto&#x22; preload />\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"font-configuration-reference\">Font configuration reference</h2><a class=\"sl-anchor-link\" href=\"#font-configuration-reference\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Font configuration reference”</span></a></div>\n<p>All properties of your fonts must be configured in the Astro config. Some properties are common to both remote and local fonts, and other properties are available depending on your chosen font provider.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"common-properties\">Common properties</h3><a class=\"sl-anchor-link\" href=\"#common-properties\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Common properties”</span></a></div>\n<p>The following properties are available for remote and local fonts. <code dir=\"auto\">provider</code>, <code dir=\"auto\">name</code>, and <code dir=\"auto\">cssVariable</code> are required.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig, fontProviders } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig, fontProviders } from &#x22;astro/config&#x22;;export default defineConfig({  experimental: {    fonts: [{      provider: fontProviders.google(),      name: &#x22;Roboto&#x22;,      cssVariable: &#x22;--font-roboto&#x22;    }]  }});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"provider\">provider</h4><a class=\"sl-anchor-link\" href=\"#provider\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “provider”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">AstroFontProvider | \"local\"</code></p></p>\n<p>The source of your font files. You can use a <a href=\"#available-remote-font-providers\">built-in provider</a>, write your own <a href=\"#build-your-own-font-provider\">custom provider</a>, or set to <code dir=\"auto\">\"local\"</code> to use local font files:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig, fontProviders } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#085f62\">fontProviders</span><span style=\"--0:#d0a4ed;--1:#753a96\">.</span><span style=\"--0:#91b4ff;--1:#325295\">google</span><span style=\"--0:#D6DEEB;--1:#403F53\">(),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig, fontProviders } from &#x22;astro/config&#x22;;export default defineConfig({  experimental: {    fonts: [{      provider: fontProviders.google(),      name: &#x22;Roboto&#x22;,      cssVariable: &#x22;--font-roboto&#x22;    }]  }});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"name\">name</h4><a class=\"sl-anchor-link\" href=\"#name\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “name”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string</code></p></p>\n<p>The font family name, as identified by your font provider:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"name: &#x22;Roboto&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"cssvariable-1\">cssVariable</h4><a class=\"sl-anchor-link\" href=\"#cssvariable-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “cssVariable”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string</code></p></p>\n<p>A valid <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/ident\">ident</a> of your choosing in the form of a CSS variable (i.e. starting with <code dir=\"auto\">--</code>):</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-roboto</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"cssVariable: &#x22;--font-roboto&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"fallbacks\">fallbacks</h4><a class=\"sl-anchor-link\" href=\"#fallbacks\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “fallbacks”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string[]</code><br>\n<strong>Default:</strong> <code dir=\"auto\">[\"sans-serif\"]</code></p></p>\n<p>An array of fonts to use when your chosen font is unavailable, or loading. Fallback fonts will be chosen in the order listed. The first available font will be used:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fallbacks: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">CustomFont</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">serif</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fallbacks: [&#x22;CustomFont&#x22;, &#x22;serif&#x22;]\"><div></div></button></div></figure></div>\n<p>To disable fallback fonts completely, configure an empty array:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fallbacks: []</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fallbacks: []\"><div></div></button></div></figure></div>\n<p>Specify at least a <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name\">generic family name</a> matching the intended appearance of your font. Astro will then attempt to generate <a href=\"https://developer.chrome.com/blog/font-fallbacks\">optimized fallbacks</a> using font metrics. To disable this optimization, set <code dir=\"auto\">optimizedFallbacks</code> to false.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"optimizedfallbacks\">optimizedFallbacks</h4><a class=\"sl-anchor-link\" href=\"#optimizedfallbacks\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “optimizedFallbacks”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">boolean</code><br>\n<strong>Default:</strong> <code dir=\"auto\">true</code></p></p>\n<p>Whether or not to enable Astro’s default optimization when generating fallback fonts. You may disable this default optimization to have full control over how <a href=\"#fallbacks\"><code dir=\"auto\">fallbacks</code></a> are generated:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">optimizedFallbacks: </span><span style=\"--0:#FF6A83;--1:#A24848\">false</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"optimizedFallbacks: false\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"remote-font-properties\">Remote font properties</h3><a class=\"sl-anchor-link\" href=\"#remote-font-properties\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Remote font properties”</span></a></div>\n<p>Further configuration options are available for remote fonts. Set these to customize the data loaded from your <a href=\"#available-remote-font-providers\">font provider</a>, for example to only download certain font weights or styles.</p>\n<p>Under the hood, these options are handled by <a href=\"https://github.com/unjs/unifont/\">unifont</a>. Some properties may not be supported by some providers and may be handled differently by each provider.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"weights\">weights</h4><a class=\"sl-anchor-link\" href=\"#weights\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “weights”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(number | string)[]</code><br>\n<strong>Default:</strong> <code dir=\"auto\">[400]</code></p></p>\n<p>An array of <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight\">font weights</a>. If no value is specified in your configuration, only weight <code dir=\"auto\">400</code> is included by default to prevent unnecessary downloads. You will need to include this property to access any other font weights:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">weights: [</span><span style=\"--0:#F78C6C;--1:#AA0982\">200</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">400</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">bold</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"weights: [200, &#x22;400&#x22;, &#x22;bold&#x22;]\"><div></div></button></div></figure></div>\n<p>If the associated font is a <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide\">variable font</a>, you can specify a range of weights:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">weights: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">100 900</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"weights: [&#x22;100 900&#x22;]\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"styles\">styles</h4><a class=\"sl-anchor-link\" href=\"#styles\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “styles”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(\"normal\" | \"italic\" | \"oblique\")[]</code><br>\n<strong>Default:</strong> <code dir=\"auto\">[\"normal\", \"italic\"]</code></p></p>\n<p>An array of <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-style\">font styles</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">styles: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">oblique</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"styles: [&#x22;normal&#x22;, &#x22;oblique&#x22;]\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"subsets\">subsets</h4><a class=\"sl-anchor-link\" href=\"#subsets\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “subsets”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string[]</code><br>\n<strong>Default:</strong> <code dir=\"auto\">[\"cyrillic-ext\", \"cyrillic\", \"greek-ext\", \"greek\", \"vietnamese\", \"latin-ext\", \"latin\"]</code></p></p>\n<p>Defines a list of <a href=\"https://knaap.dev/posts/font-subsetting/\">font subsets</a> to preload.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">subsets: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">latin</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"subsets: [&#x22;latin&#x22;]\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"display\">display</h4><a class=\"sl-anchor-link\" href=\"#display\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “display”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">\"auto\" | \"block\" | \"swap\" | \"fallback\" | \"optional\"</code><br>\n<strong>Default:</strong> <code dir=\"auto\">\"swap\"</code></p></p>\n<p>Defines <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display\">how a font displays</a> based on when it is downloaded and ready for use:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">display: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">block</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"display: &#x22;block&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"unicoderange\">unicodeRange</h4><a class=\"sl-anchor-link\" href=\"#unicoderange\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “unicodeRange”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string[]</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>Determines when a font must be downloaded and used based on a specific <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range\">range of unicode characters</a>. If a character on the page matches the configured range, the browser will download the font and all characters will be available for use on the page. To configure a subset of characters preloaded for a single font, see the <a href=\"#subsets\">subsets</a> property instead.</p>\n<p>This can be useful for localization to avoid unnecessary font downloads when a specific part of your website uses a different alphabet and will be displayed with a separate font. For example, a website that offers both English and Japanese versions can prevent the browser from downloading the Japanese font on English versions of the page that do not contain any of the Japanese characters provided in <code dir=\"auto\">unicodeRange</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">unicodeRange: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">U+26</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"unicodeRange: [&#x22;U+26&#x22;]\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"stretch\">stretch</h4><a class=\"sl-anchor-link\" href=\"#stretch\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “stretch”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>A <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch\">font stretch</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">stretch: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">condensed</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"stretch: &#x22;condensed&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"featuresettings\">featureSettings</h4><a class=\"sl-anchor-link\" href=\"#featuresettings\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “featureSettings”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>Controls the <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-feature-settings\">typographic font features</a> (e.g. ligatures, small caps, or swashes):</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">featureSettings: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">'smcp' 2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"featureSettings: &#x22;&#x27;smcp&#x27; 2&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"variationsettings\">variationSettings</h4><a class=\"sl-anchor-link\" href=\"#variationsettings\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “variationSettings”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">string</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>Font <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings\">variation settings</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">variationSettings: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">'xhgt' 0.7</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"variationSettings: &#x22;&#x27;xhgt&#x27; 0.7&#x22;\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"local-font-variants\">Local font <code dir=\"auto\">variants</code></h3><a class=\"sl-anchor-link\" href=\"#local-font-variants\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Local font variants”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">LocalFontFamily[\"variants\"]</code></p></p>\n<p>The <code dir=\"auto\">variants</code> property is required when using local font files. Each variant represents a <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/\"><code dir=\"auto\">@font-face</code> declaration</a> and requires a <code dir=\"auto\">weight</code>, <code dir=\"auto\">style</code>, and <code dir=\"auto\">src</code> value.</p>\n<p>Additionally, <a href=\"#other-properties\">some other properties of remote fonts</a> may be specified within each variant.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">local</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Custom</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-custom</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">variants: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">weight: </span><span style=\"--0:#F78C6C;--1:#AA0982\">400</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">style: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/custom-400.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">weight: </span><span style=\"--0:#F78C6C;--1:#AA0982\">700</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">style: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/custom-700.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">                </span><span style=\"--0:#919F9F;--1:#5D6376\">// ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig } from &#x22;astro/config&#x22;;export default defineConfig({    experimental: {        fonts: [{            provider: &#x22;local&#x22;,            name: &#x22;Custom&#x22;,            cssVariable: &#x22;--font-custom&#x22;,            variants: [                {                    weight: 400,                    style: &#x22;normal&#x22;,                    src: [&#x22;./src/assets/fonts/custom-400.woff2&#x22;]                },                {                    weight: 700,                    style: &#x22;normal&#x22;,                    src: [&#x22;./src/assets/fonts/custom-700.woff2&#x22;]                }                // ...            ]        }]    }});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"weight\">weight</h4><a class=\"sl-anchor-link\" href=\"#weight\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “weight”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">number | string</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>A <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight\">font weight</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">weight: </span><span style=\"--0:#F78C6C;--1:#AA0982\">200</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"weight: 200\"><div></div></button></div></figure></div>\n<p>If the associated font is a <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide\">variable font</a>, you can specify a range of weights:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">weight: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">100 900</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"weight: &#x22;100 900&#x22;\"><div></div></button></div></figure></div>\n<p>When the value is not set, by default Astro will try to infer the value based on the first <a href=\"#src\"><code dir=\"auto\">source</code></a>.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"style\">style</h4><a class=\"sl-anchor-link\" href=\"#style\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “style”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">\"normal\" | \"italic\" | \"oblique\"</code><br>\n<strong>Default:</strong> <code dir=\"auto\">undefined</code></p></p>\n<p>A <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-style\">font style</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">style: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"style: &#x22;normal&#x22;\"><div></div></button></div></figure></div>\n<p>When the value is not set, by default Astro will try to infer the value based on the first <a href=\"#src\"><code dir=\"auto\">source</code></a>.</p>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"src\">src</h4><a class=\"sl-anchor-link\" href=\"#src\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “src”</span></a></div>\n<p><p><strong>Type:</strong> <code dir=\"auto\">(string | URL | { url: string | URL; tech?: string })[]</code></p></p>\n<p>Font <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src\">sources</a>. It can be a path relative to the root, a package import or a URL. URLs are particularly useful if you inject local fonts through an integration:</p>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Relative path",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/MyFont.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/MyFont.woff</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"src: [&#x22;./src/assets/fonts/MyFont.woff2&#x22;, &#x22;./src/assets/fonts/MyFont.woff&#x22;]\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "URL",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">URL</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./custom.ttf</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#D6DEEB;--1:#403F53\">)]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"src: [new URL(&#x22;./custom.ttf&#x22;, import.meta.url)]\"><div></div></button></div></figure></div>"
      }), createVNode($$TabItem, {
        label: "Package import",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">my-package/SomeFont.ttf</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"src: [&#x22;my-package/SomeFont.ttf&#x22;]\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Caution\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Caution</p><div class=\"starlight-aside__content\"><p>We recommend not putting your font files in <a href=\"/en/reference/configuration-reference/#publicdir\">the <code dir=\"auto\">public/</code> directory</a>. Since Astro will copy these files into that folder at build time, this will result in duplicated files in your build output. Instead, store them somewhere else in your project, such as in <a href=\"/en/reference/configuration-reference/#srcdir\"><code dir=\"auto\">src/</code></a>.</p></div></aside>\n<p>You can also specify a <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#tech\">tech</a> by providing objects:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">src: [{ url:</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/MyFont.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, tech: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">color-COLRv1</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"src: [{ url:&#x22;./src/assets/fonts/MyFont.woff2&#x22;, tech: &#x22;color-COLRv1&#x22; }]\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h4\"><h4 id=\"other-properties\">Other properties</h4><a class=\"sl-anchor-link\" href=\"#other-properties\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Other properties”</span></a></div>\n<p>The following options from remote font families are also available for local font families within variants:</p>\n<ul>\n<li><a href=\"#display\">display</a></li>\n<li><a href=\"#unicoderange\">unicodeRange</a></li>\n<li><a href=\"#stretch\">stretch</a></li>\n<li><a href=\"#featuresettings\">featureSettings</a></li>\n<li><a href=\"#variationsettings\">variationSettings</a></li>\n</ul>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineConfig } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineConfig</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">experimental: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">local</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Custom</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-custom</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">variants: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">weight: </span><span style=\"--0:#F78C6C;--1:#AA0982\">400</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">style: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">normal</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">src: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">./src/assets/fonts/custom-400.woff2</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">display: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#804241\">block</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">                </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineConfig } from &#x22;astro/config&#x22;;export default defineConfig({    experimental: {        fonts: [{            provider: &#x22;local&#x22;,            name: &#x22;Custom&#x22;,            cssVariable: &#x22;--font-custom&#x22;,            variants: [                {                    weight: 400,                    style: &#x22;normal&#x22;,                    src: [&#x22;./src/assets/fonts/custom-400.woff2&#x22;],                    display: &#x22;block&#x22;                }            ]        }]    }});\"><div></div></button></div></figure></div>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"build-your-own-font-provider\">Build your own font provider</h2><a class=\"sl-anchor-link\" href=\"#build-your-own-font-provider\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Build your own font provider”</span></a></div>\n<p>If you do not wish to use one of the <a href=\"#available-remote-font-providers\">built-in providers</a> (eg. you want to use a 3rd-party unifont provider or build something for a private registry), you can build your own.</p>\n<p>An Astro font provider is made up of two parts: the config object and the actual implementation.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Using the ", createVNode(_components.code, {
              dir: "auto",
              children: "defineAstroFontProvider()"
            }), " type helper, create a function that returns a font provider config object containing:"]
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "entrypoint"
              }), ": A URL, a path relative to the root, or a package import."]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "config"
              }), ": An optional serializable object passed to the unifont provider."]
            }), "\n"]
          }), "\n", createVNode($$Tabs, {
            children: [createVNode($$TabItem, {
              label: "Without config",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">provider/config.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAstroFontProvider } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">myProvider</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAstroFontProvider</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">entrypoint: </span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">URL</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">./implementation.js</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAstroFontProvider } from &#x27;astro/config&#x27;;export function myProvider() {    return defineAstroFontProvider({        entrypoint: new URL(&#x27;./implementation.js&#x27;, import.meta.url)    });};\"><div></div></button></div></figure></div>"
            }), createVNode($$TabItem, {
              label: "With config",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">provider/config.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineAstroFontProvider } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">astro/config</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">interface</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Config {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">myProvider</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">config</span><span style=\"--0:#7FDBCA;--1:#096E72\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">Config</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineAstroFontProvider</span><span style=\"--0:#D6DEEB;--1:#403F53\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">entrypoint: </span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">URL</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">./implementation.js</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">import.</span><span style=\"--0:#7FDBCA;--1:#096E72\">meta</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">url</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">config</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineAstroFontProvider } from &#x27;astro/config&#x27;;interface Config {    // ...};export function myProvider(config: Config) {    return defineAstroFontProvider({        entrypoint: new URL(&#x27;./implementation.js&#x27;, import.meta.url),        config    });};\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Create a second file to export your unifont <code dir=\"auto\">provider</code> implementation:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">implementation.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { defineFontProvider } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">unifont</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">provider</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineFontProvider</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">my-provider</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">, async </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">options</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">ctx</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// fetch/define your custom fonts</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { defineFontProvider } from &#x22;unifont&#x22;;export const provider = defineFontProvider(&#x22;my-provider&#x22;, async (options, ctx) => {    // fetch/define your custom fonts    // ...});\"><div></div></button></div></figure></div>\n<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>You can check out <a href=\"https://github.com/unjs/unifont/blob/main/src/providers/\">the source code for unifont’s providers</a> to learn more about how to create a unifont provider.</p></div></aside>\n</li>\n<li>\n<p>Add your custom provider to your font configuration.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">astro.config.mjs</span></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fonts: [{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">provider: </span><span style=\"--0:#7FDBCA;--1:#096E72\">fontProviders</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><ins><span style=\"--0:#94b6ff;--1:#2d4a87\">myProvider</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></ins><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Custom Font</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">cssVariable: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">--font-custom</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fonts: [{  provider: fontProviders.myProvider(),  name: &#x22;Custom Font&#x22;,  cssVariable: &#x22;--font-custom&#x22; }]\"><div></div></button></div></figure></div>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"caching\">Caching</h2><a class=\"sl-anchor-link\" href=\"#caching\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Caching”</span></a></div>\n<p>The Fonts API caching implementation was designed to be practical in development and efficient in production. During builds, font files are copied to the <code dir=\"auto\">_astro/fonts</code> output directory, so they can benefit from HTTP caching of static assets (usually a year).</p>\n<p>To clear the cache in development, remove the <code dir=\"auto\">.astro/fonts</code> directory. To clear the build cache, remove the <code dir=\"auto\">node_modules/.astro/fonts</code> directory</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"further-reading\">Further reading</h2><a class=\"sl-anchor-link\" href=\"#further-reading\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Further reading”</span></a></div>\n<p>For full details and to give feedback on this experimental API, see <a href=\"https://github.com/withastro/roadmap/blob/rfc/fonts/proposals/0052-fonts.md\">the Fonts RFC</a>.</p>"
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

const url = "src/content/docs/en/reference/experimental-flags/fonts.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/fonts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/reference/experimental-flags/fonts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
