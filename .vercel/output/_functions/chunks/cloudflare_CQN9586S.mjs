import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';
import { $ as $$StaticSsrTabs } from './StaticSsrTabs_BJms5cwt.mjs';

const frontmatter = {
  "title": "Deploy your Astro Site to Cloudflare",
  "description": "How to deploy your Astro site to the web using Cloudflare",
  "sidebar": {
    "label": "Cloudflare"
  },
  "type": "deploy",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "cloudflare-workers",
    "text": "Cloudflare Workers"
  }, {
    "depth": 3,
    "slug": "how-to-deploy-with-wrangler",
    "text": "How to deploy with Wrangler"
  }, {
    "depth": 3,
    "slug": "how-to-deploy-with-cicd",
    "text": "How to deploy with CI/CD"
  }, {
    "depth": 2,
    "slug": "cloudflare-pages",
    "text": "Cloudflare Pages"
  }, {
    "depth": 3,
    "slug": "how-to-deploy-with-wrangler-1",
    "text": "How to deploy with Wrangler"
  }, {
    "depth": 3,
    "slug": "how-to-deploy-a-site-with-git",
    "text": "How to deploy a site with Git"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 3,
    "slug": "client-side-hydration",
    "text": "Client-side hydration"
  }, {
    "depth": 3,
    "slug": "nodejs-runtime-apis",
    "text": "Node.js runtime APIs"
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
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>You can deploy full-stack applications, including front-end static assets and back-end APIs, as well as on-demand rendered sites, to both <a href=\"https://developers.cloudflare.com/workers/static-assets/\">Cloudflare Workers</a> and <a href=\"https://pages.cloudflare.com/\">Cloudflare Pages</a>.</p>\n<p>This guide includes:</p>\n<ul>\n<li><a href=\"#cloudflare-workers\">How to deploy to Cloudflare Workers</a></li>\n<li><a href=\"#cloudflare-pages\">How to deploy to Cloudflare Pages</a></li>\n</ul>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>Cloudflare recommends using Cloudflare Workers for new projects. For existing Pages projects, refer to <a href=\"https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/\">Cloudflare’s migration guide</a> and <a href=\"https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/#compatibility-matrix\">compatibility matrix</a>.</p></div></aside>\n"
    }), createVNode($$ReadMore, {
      "set:html": "Read more about <a href=\"/en/guides/integrations-guide/cloudflare/\">using the Cloudflare runtime</a> in your Astro project."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"prerequisites\">Prerequisites</h2><a class=\"sl-anchor-link\" href=\"#prerequisites\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prerequisites”</span></a></div>\n<p>To get started, you will need:</p>\n<ul>\n<li>A Cloudflare account. If you don’t already have one, you can create a free Cloudflare account during the process.</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"cloudflare-workers\">Cloudflare Workers</h2><a class=\"sl-anchor-link\" href=\"#cloudflare-workers\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Cloudflare Workers”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"how-to-deploy-with-wrangler\">How to deploy with Wrangler</h3><a class=\"sl-anchor-link\" href=\"#how-to-deploy-with-wrangler\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy with Wrangler”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Install ", createVNode(_components.a, {
              href: "https://developers.cloudflare.com/workers/wrangler/get-started/",
              children: "Wrangler CLI"
            }), "."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: [createVNode(_components.link, {
              rel: "stylesheet",
              href: "/_astro/ec.rvnnt.css"
            }), createVNode(_components.script, {
              type: "module",
              src: "/_astro/ec.8zarh.js"
            }), createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                "data-language": "bash",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "npm"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "install"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "wrangler@latest"
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
                        children: "--save-dev"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "npm install wrangler@latest --save-dev",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["If your site uses on demand rendering, install the ", createVNode(_components.a, {
              href: "/en/guides/integrations-guide/cloudflare/",
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "@astrojs/cloudflare"
              }), " adapter"]
            }), "."]
          }), "\n", createVNode(_components.p, {
            children: ["This will install the adapter and make the appropriate changes to your ", createVNode(_components.code, {
              dir: "auto",
              children: "astro.config.mjs"
            }), " file in one step."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                "data-language": "bash",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "npx"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "add"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "cloudflare"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "npx astro add cloudflare",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode(_components.p, {
            children: ["Then, create a ", createVNode(_components.code, {
              dir: "auto",
              children: ".assetsignore"
            }), " file in your ", createVNode(_components.code, {
              dir: "auto",
              children: "public/"
            }), " folder, and add the following lines to it:"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "public/.assetsignore"
                })
              }), createVNode(_components.pre, {
                "data-language": "txt",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#d6deeb",
                          "--1": "#403f53"
                        },
                        children: "_worker.js"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: createVNode(_components.span, {
                        style: {
                          "--0": "#d6deeb",
                          "--1": "#403f53"
                        },
                        children: "_routes.json"
                      })
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "_worker.js_routes.json",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$ReadMore, {
            "set:html": "Read more about <a href=\"/en/guides/on-demand-rendering/\">on-demand rendering in Astro</a>."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a ", createVNode(_components.a, {
              href: "https://developers.cloudflare.com/workers/wrangler/configuration/",
              children: "Wrangler configuration file"
            }), "."]
          }), "\n", createVNode($$StaticSsrTabs, {
            children: [createVNode(Fragment$1, {
              slot: "static",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">wrangler.jsonc</span></figcaption><pre data-language=\"jsonc\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"$schema\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">node_modules/wrangler/config-schema.json</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"name\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">my-astro-app</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Update to today's date</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"compatibility_date\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">2025-03-25</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"assets\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"directory\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">./dist</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"not_found_handling\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">404-page</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#919F9F;--1:#5D6376\">// If you have a custom `src/pages/404.astro` page</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;node_modules/wrangler/config-schema.json&#x22;,  &#x22;name&#x22;: &#x22;my-astro-app&#x22;,  // Update to today&#x27;s date  &#x22;compatibility_date&#x22;: &#x22;2025-03-25&#x22;,  &#x22;assets&#x22;: {    &#x22;directory&#x22;: &#x22;./dist&#x22;,    &#x22;not_found_handling&#x22;: &#x22;404-page&#x22; // If you have a custom &#x60;src/pages/404.astro&#x60; page  }}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "ssr",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">wrangler.jsonc</span></figcaption><pre data-language=\"jsonc\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"$schema\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">node_modules/wrangler/config-schema.json</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"name\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">my-astro-app</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"main\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">./dist/_worker.js/index.js</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Update to today's date</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"compatibility_date\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">2025-03-25</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"compatibility_flags\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">nodejs_compat</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"assets\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"binding\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">ASSETS</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"directory\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C789D6;--1:#7C5686\">./dist</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"observability\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">\"enabled\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;node_modules/wrangler/config-schema.json&#x22;,  &#x22;name&#x22;: &#x22;my-astro-app&#x22;,  &#x22;main&#x22;: &#x22;./dist/_worker.js/index.js&#x22;,  // Update to today&#x27;s date  &#x22;compatibility_date&#x22;: &#x22;2025-03-25&#x22;,  &#x22;compatibility_flags&#x22;: [&#x22;nodejs_compat&#x22;],  &#x22;assets&#x22;: {    &#x22;binding&#x22;: &#x22;ASSETS&#x22;,    &#x22;directory&#x22;: &#x22;./dist&#x22;  },  &#x22;observability&#x22;: {    &#x22;enabled&#x22;: true  }}\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Preview your project locally with Wrangler.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> &#x26;&#x26; </span><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">wrangler</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">dev</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx astro build &#x26;&#x26; npx wrangler dev\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Deploy using <code dir=\"auto\">npx wrangler deploy</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> &#x26;&#x26; </span><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">wrangler</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">deploy</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx astro build &#x26;&#x26; npx wrangler deploy\"><div></div></button></div></figure></div>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>After your assets are uploaded, Wrangler will give you a preview URL to inspect your site.</p>\n"
    }), createVNode($$ReadMore, {
      "set:html": "Read more about using <a href=\"/en/guides/integrations-guide/cloudflare/\">Cloudflare runtime APIs</a> such as bindings."
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"how-to-deploy-with-cicd\">How to deploy with CI/CD</h3><a class=\"sl-anchor-link\" href=\"#how-to-deploy-with-cicd\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy with CI/CD”</span></a></div>\n<p>You can also use a CI/CD system such as <a href=\"https://developers.cloudflare.com/workers/ci-cd/builds/\">Workers Builds (BETA)</a> to automatically build and deploy your site on push.</p>\n<p>If you’re using Workers Builds:</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Follow Steps 1-3 from the Wrangler section above.</p>\n</li>\n<li>\n<p>Log in to the <a href=\"https://dash.cloudflare.com/\">Cloudflare dashboard</a> and navigate to <code dir=\"auto\">Workers &#x26; Pages</code>. Select <code dir=\"auto\">Create</code>.</p>\n</li>\n<li>\n<p>Under <code dir=\"auto\">Import a repository</code>, select a Git account and then the repository containing your Astro project.</p>\n</li>\n<li>\n<p>Configure your project with:</p>\n<ul>\n<li>Build command: <code dir=\"auto\">npx astro build</code></li>\n<li>Deploy command: <code dir=\"auto\">npx wrangler deploy</code></li>\n</ul>\n</li>\n<li>\n<p>Click <code dir=\"auto\">Save and Deploy</code>. You can now preview your Worker at its provided <code dir=\"auto\">workers.dev</code> subdomain.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"cloudflare-pages\">Cloudflare Pages</h2><a class=\"sl-anchor-link\" href=\"#cloudflare-pages\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Cloudflare Pages”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"how-to-deploy-with-wrangler-1\">How to deploy with Wrangler</h3><a class=\"sl-anchor-link\" href=\"#how-to-deploy-with-wrangler-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy with Wrangler”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Install ", createVNode(_components.a, {
              href: "https://developers.cloudflare.com/workers/wrangler/get-started/",
              children: "Wrangler CLI"
            }), "."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                "data-language": "bash",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "npm"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "install"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "wrangler@latest"
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
                        children: "--save-dev"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "npm install wrangler@latest --save-dev",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["If your site uses on demand rendering, install the ", createVNode(_components.a, {
              href: "/en/guides/integrations-guide/cloudflare/",
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "@astrojs/cloudflare"
              }), " adapter"]
            }), "."]
          }), "\n", createVNode(_components.p, {
            children: ["This will install the adapter and make the appropriate changes to your ", createVNode(_components.code, {
              dir: "auto",
              children: "astro.config.mjs"
            }), " file in one step."]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: createVNode(_components.figure, {
              class: "frame is-terminal not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: [createVNode(_components.span, {
                  class: "title"
                }), createVNode(_components.span, {
                  class: "sr-only",
                  children: "Terminal window"
                })]
              }), createVNode(_components.pre, {
                "data-language": "bash",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "npx"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "astro"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "add"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ECC48D",
                          "--1": "#3B61B0"
                        },
                        children: "cloudflare"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "npx astro add cloudflare",
                  children: createVNode(_components.div, {})
                })
              })]
            })
          }), "\n", createVNode($$ReadMore, {
            "set:html": "Read more about <a href=\"/en/guides/on-demand-rendering/\">on demand rendering in Astro</a>."
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Preview your project locally with Wrangler.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> &#x26;&#x26; </span><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">wrangler</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">pages</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">dev</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">./dist</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx astro build &#x26;&#x26; npx wrangler pages dev ./dist\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Deploy using <code dir=\"auto\">npx wrangler deploy</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> &#x26;&#x26; </span><span style=\"--0:#82AAFF;--1:#3B61B0\">npx</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">wrangler</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">pages</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">deploy</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">./dist</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npx astro build &#x26;&#x26; npx wrangler pages deploy ./dist\"><div></div></button></div></figure></div>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>After your assets are uploaded, Wrangler will give you a preview URL to inspect your site.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"how-to-deploy-a-site-with-git\">How to deploy a site with Git</h3><a class=\"sl-anchor-link\" href=\"#how-to-deploy-a-site-with-git\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “How to deploy a site with Git”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Push your code to your git repository (e.g. GitHub, GitLab).</p>\n</li>\n<li>\n<p>Log in to the <a href=\"https://dash.cloudflare.com/\">Cloudflare dashboard</a> and navigate to <strong>Compute (Workers) > Workers &#x26; Pages</strong>. Select <strong>Create</strong> and then select the <strong>Pages</strong> tab. Connect your git repository.</p>\n</li>\n<li>\n<p>Configure your project with:</p>\n<ul>\n<li><strong>Framework preset</strong>: <code dir=\"auto\">Astro</code></li>\n<li><strong>Build command:</strong> <code dir=\"auto\">npm run build</code></li>\n<li><strong>Build output directory:</strong> <code dir=\"auto\">dist</code></li>\n</ul>\n</li>\n<li>\n<p>Click the <strong>Save and Deploy</strong> button.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"troubleshooting\">Troubleshooting</h2><a class=\"sl-anchor-link\" href=\"#troubleshooting\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Troubleshooting”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"client-side-hydration\">Client-side hydration</h3><a class=\"sl-anchor-link\" href=\"#client-side-hydration\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Client-side hydration”</span></a></div>\n<p>Client-side hydration may fail as a result of Cloudflare’s Auto Minify setting. If you see <code dir=\"auto\">Hydration completed but contains mismatches</code> in the console, make sure to disable Auto Minify under Cloudflare settings.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"nodejs-runtime-apis\">Node.js runtime APIs</h3><a class=\"sl-anchor-link\" href=\"#nodejs-runtime-apis\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Node.js runtime APIs”</span></a></div>\n<p>If you are building a project that is using on-demand rendering with <a href=\"/en/guides/integrations-guide/cloudflare/\">the Cloudflare adapter</a> and the server fails to build with an error message such as <code dir=\"auto\">[Error] Could not resolve \"XXXX. The package \"XXXX\" wasn't found on the file system but is built into node.</code>:</p>\n<ul>\n<li>\n<p>This means that a package or import you are using in the server-side environment is not compatible with the <a href=\"https://developers.cloudflare.com/workers/runtime-apis/nodejs/\">Cloudflare runtime APIs</a>.</p>\n</li>\n<li>\n<p>If you are directly importing a Node.js runtime API, please refer to the Astro documentation on Cloudflare’s <a href=\"/en/guides/integrations-guide/cloudflare/#nodejs-compatibility\">Node.js compatibility</a> for further steps on how to resolve this.</p>\n</li>\n<li>\n<p>If you are importing a package that imports a Node.js runtime API, check with the author of the package to see if they support the <code dir=\"auto\">node:*</code> import syntax. If they do not, you may need to find an alternative package.</p>\n</li>\n</ul>"
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

const url = "src/content/docs/en/guides/deploy/cloudflare.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/cloudflare.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/deploy/cloudflare.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
