import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import { $ as $$Spoiler } from './Spoiler_CiYU8sgc.mjs';
import { $ as $$PreCheck } from './PreCheck_BzWyGivz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "type": "tutorial",
  "title": "Style your About page",
  "description": "Tutorial: Build your first Astro blog —\nAdd an Astro style tag for scoped styling on the page",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "style-an-individual-page",
    "text": "Style an individual page"
  }, {
    "depth": 2,
    "slug": "use-your-first-css-variable",
    "text": "Use your first CSS variable"
  }, {
    "depth": 2,
    "slug": "try-it-yourself---define-css-variables",
    "text": "Try it yourself - Define CSS variables"
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
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    script: "script",
    span: "span",
    svg: "svg",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Now that you have an About page with content about you, it’s time to style it!</p>\n"
    }), createVNode($$PreCheck, {
      "set:html": "<ul>\n<li>Style items on a single page</li>\n<li>Use CSS variables</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"style-an-individual-page\">Style an individual page</h2><a class=\"sl-anchor-link\" href=\"#style-an-individual-page\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Style an individual page”</span></a></div>\n<p>Using Astro’s own <code dir=\"auto\">&#x3C;style>&#x3C;/style></code> tags, you can style items on your page. Adding <strong>attributes</strong> and <strong>directives</strong> to these tags gives you even more ways to style.</p>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Copy the following code and paste it into ", createVNode(_components.code, {
              dir: "auto",
              children: "src/pages/about.astro"
            }), ":"]
          }), "\n", createVNode(_components.div, {
            class: "expressive-code",
            children: [createVNode(_components.link, {
              rel: "stylesheet",
              href: "/_astro/ec.rvnnt.css"
            }), createVNode(_components.script, {
              type: "module",
              src: "/_astro/ec.8zarh.js"
            }), createVNode(_components.figure, {
              class: "frame has-title not-content",
              children: [createVNode(_components.figcaption, {
                class: "header",
                children: createVNode(_components.span, {
                  class: "title",
                  children: "src/pages/about.astro"
                })
              }), createVNode(_components.pre, {
                "data-language": "astro",
                children: createVNode(_components.code, {
                  children: [createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
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
                          children: "html"
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
                        children: "lang"
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
                        children: "en"
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
                          children: "head"
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
                          children: "meta"
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
                        children: "charset"
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
                        children: "utf-8"
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
                          children: "meta"
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
                        children: "viewport"
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
                        children: "content"
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
                        children: "width=device-width"
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
                          children: "title"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
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
                          children: "title"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
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
                          children: "style"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line highlight ins",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "      "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#ff9b9b",
                          "--1": "#723b3a"
                        },
                        children: "h1"
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
                        children: "        "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#80CBC4",
                          "--1": "#075457"
                        },
                        children: "color"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ": "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#075457"
                        },
                        children: "purple"
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
                        children: "        "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#80CBC4",
                          "--1": "#075457"
                        },
                        children: "font-size"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ": "
                      }), createVNode(_components.span, {
                        style: {
                          "--1": "#8f086e"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#f8a186"
                          },
                          children: "4"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#FFEB95"
                          },
                          children: "rem"
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
                        children: "}"
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
                          children: "style"
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
                          children: "</"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#CAECE6"
                          },
                          children: "head"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#7FDBCA"
                          },
                          children: ">"
                        })]
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "<html lang=\"en\">  <head>    <meta charset=\"utf-8\" />    <meta name=\"viewport\" content=\"width=device-width\" />    <title>{pageTitle}</title>    <style>      h1 {        color: purple;        font-size: 4rem;      }    </style>  </head>",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n", createVNode(_components.p, {
            children: "Check all three pages in your browser preview."
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["\n", createVNode(_components.p, {
                children: "Which color is the page title of:"
              }), "\n", createVNode(_components.ul, {
                children: ["\n", createVNode(_components.li, {
                  children: ["Your Home page?  ", createVNode($$Spoiler, {
                    "set:html": "black"
                  })]
                }), "\n", createVNode(_components.li, {
                  children: ["Your About page? ", createVNode($$Spoiler, {
                    "set:html": "purple"
                  })]
                }), "\n", createVNode(_components.li, {
                  children: ["Your Blog page? ", createVNode($$Spoiler, {
                    "set:html": "black"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", createVNode(_components.li, {
              children: ["\n", createVNode(_components.p, {
                children: ["The page with the biggest title text is? ", createVNode($$Spoiler, {
                  "set:html": "Your About page"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>If you are unable to determine colors visually, you can use the dev tools in your browser to inspect the <code dir=\"auto\">&#x3C;h1></code> title elements and verify the text color applied.</p></div></aside>\n"
          })]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Add the class name <code dir=\"auto\">skill</code> to the generated <code dir=\"auto\">&#x3C;li></code> elements on your About page, so you can style them. Your code should now look like this:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">My skills are:</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">skills</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">map</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">skill</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\"> </span></span><mark><span style=\"--0:#C5E478;--1:#325295\">class</span><span style=\"--0:#d0a4ed;--1:#753a96\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#804241\">skill</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">skill</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#E2817F;--1:#B23834\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">ul</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<p>My skills are:</p><ul>  {skills.map((skill) => <li class=&#x22;skill&#x22;>{skill}</li>)}</ul>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Add the following code to your existing style tag:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">font-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">4</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#2d4a87\">.skill</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075457\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#075457\">green</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075457\">font-weight</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#ff9b9b;--1:#723b3a\">bold</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<style>  h1 {    color: purple;    font-size: 4rem;  }  .skill {    color: green;    font-weight: bold;  }</style>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Visit your About page in your browser again, and verify, through visual inspection or dev tools, that each item in your list of skills is now green and bold.</p>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"use-your-first-css-variable\">Use your first CSS variable</h2><a class=\"sl-anchor-link\" href=\"#use-your-first-css-variable\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Use your first CSS variable”</span></a></div>\n<p>The Astro <code dir=\"auto\">&#x3C;style></code> tag can also reference any variables from your frontmatter script using the <code dir=\"auto\">define:vars={ {...} }</code> directive. You can <strong>define variables within your code fence</strong>, then <strong>use them as CSS variables in your style tag</strong>.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Define a <code dir=\"auto\">skillColor</code> variable by adding it to the frontmatter script of <code dir=\"auto\">src/pages/about.astro</code> like this:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">About Me</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">identity</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">firstName: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Sarah</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">country: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Canada</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">occupation: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Technical Writer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">hobbies:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">photography</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">birdwatching</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">baseball</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">skills</span><span style=\"--0:#C792EA;--1:#8844AE\"> =</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">HTML</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">CSS</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">JavaScript</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">React</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Writing Docs</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">];</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">happy</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">finished</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">goal</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">skillColor</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">navy</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---const pageTitle = &#x22;About Me&#x22;;const identity = {  firstName: &#x22;Sarah&#x22;,  country: &#x22;Canada&#x22;,  occupation: &#x22;Technical Writer&#x22;,  hobbies: [&#x22;photography&#x22;, &#x22;birdwatching&#x22;, &#x22;baseball&#x22;],};const skills = [&#x22;HTML&#x22;, &#x22;CSS&#x22;, &#x22;JavaScript&#x22;, &#x22;React&#x22;, &#x22;Astro&#x22;, &#x22;Writing Docs&#x22;];const happy = true;const finished = false;const goal = 3;const skillColor = &#x22;navy&#x22;;---\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Update your existing <code dir=\"auto\">&#x3C;style></code> tag below to first define, then use this <code dir=\"auto\">skillColor</code> variable inside double curly braces.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\"> </span></span><mark><span style=\"--0:#C5E478;--1:#325295\">define:vars</span><span style=\"--0:#7FDBCA;--1:#753a96\">=</span><span style=\"--0:#eaa2a1;--1:#99302d\">{</span><span style=\"--0:#7FDBCA;--1:#753a96\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">skillColor</span><span style=\"--0:#7FDBCA;--1:#753a96\">}</span><span style=\"--0:#eaa2a1;--1:#99302d\">}</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">font-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">4</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">.skill</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075356\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#075356\">green</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#075457\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><mark><span style=\"--0:#C5E478;--1:#253d6e\">var</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">(</span><span style=\"--0:#C5E478;--1:#253d6e\">--skillColor</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">)</span></mark><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">font-weight</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">bold</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<style define:vars={{skillColor}}>  h1 {    color: purple;    font-size: 4rem;  }  .skill {    color: green;    color: var(--skillColor);    font-weight: bold;  }</style>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Check your About page in your browser preview. You should see that the skills are now navy blue, as set by the <code dir=\"auto\">skillColor</code> variable passed to the <code dir=\"auto\">define:vars</code> directive.</p>\n</li>\n</ol>"
    }), "\n", createVNode($$Box, {
      icon: "puzzle-piece",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h2",
        children: [createVNode(_components.h2, {
          id: "try-it-yourself---define-css-variables",
          children: "Try it yourself - Define CSS variables"
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#try-it-yourself---define-css-variables",
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
            children: "Section titled “Try it yourself - Define CSS variables”"
          })]
        })]
      }), createVNode($$Steps, {
        "set:html": "<ol>\n<li>\n<p>Update the <code dir=\"auto\">&#x3C;style></code> tag on your About page so that it matches the one below.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">define:vars</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#7FDBCA;--1:#8844AE\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">skillColor</span><span style=\"--0:#7FDBCA;--1:#8844AE\">, </span><span style=\"--0:#D6DEEB;--1:#403F53\">fontWeight</span><span style=\"--0:#7FDBCA;--1:#8844AE\">, </span><span style=\"--0:#D6DEEB;--1:#403F53\">textCase</span><span style=\"--0:#7FDBCA;--1:#8844AE\">}</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#FF6D6D;--1:#984E4D\">h1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#7FDBCA;--1:#096E72\">purple</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">font-size</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">4</span><span style=\"--0:#FFEB95\">rem</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">.skill</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">color</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">--skillColor</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">font-weight</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">--fontWeight</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#80CBC4;--1:#096E72\">text-transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">var</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C5E478;--1:#3B61B0\">--textCase</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">style</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<style define:vars={{skillColor, fontWeight, textCase}}>  h1 {    color: purple;    font-size: 4rem;  }  .skill {    color: var(--skillColor);    font-weight: var(--fontWeight);    text-transform: var(--textCase);  }</style>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Add any missing variable definitions in your frontmatter script so that your new <code dir=\"auto\">&#x3C;style></code> tag successfully applies these styles to your list of skills:</p>\n<ul>\n<li>The text color is navy blue</li>\n<li>The text is bold</li>\n<li>The list items are in all-caps (all uppercase letters)</li>\n</ul>\n</li>\n</ol>"
      }), createVNode(_components.details, {
        "set:html": "<summary>✅ Show me the code! ✅</summary><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">About Me</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">identity</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">firstName: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Sarah</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">country: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Canada</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">occupation: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Technical Writer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">hobbies:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">photography</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">birdwatching</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">baseball</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">skills</span><span style=\"--0:#C792EA;--1:#8844AE\"> =</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">HTML</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">CSS</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">JavaScript</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">React</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Writing Docs</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">];</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">happy</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">finished</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">goal</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">skillColor</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">navy</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fontWeight</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">bold</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">textCase</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">uppercase</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---const pageTitle = &#x22;About Me&#x22;;const identity = {  firstName: &#x22;Sarah&#x22;,  country: &#x22;Canada&#x22;,  occupation: &#x22;Technical Writer&#x22;,  hobbies: [&#x22;photography&#x22;, &#x22;birdwatching&#x22;, &#x22;baseball&#x22;],};const skills = [&#x22;HTML&#x22;, &#x22;CSS&#x22;, &#x22;JavaScript&#x22;, &#x22;React&#x22;, &#x22;Astro&#x22;, &#x22;Writing Docs&#x22;];const happy = true;const finished = false;const goal = 3;const skillColor = &#x22;navy&#x22;;const fontWeight = &#x22;bold&#x22;;const textCase = &#x22;uppercase&#x22;;---\"><div></div></button></div></figure></div>"
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can add CSS styles to an individual page using an Astro <code dir=\"auto\">&#x3C;style></code> tag.</span></label></li>\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can use variables to style elements on the page.</span></label></li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"resources\">Resources</h3><a class=\"sl-anchor-link\" href=\"#resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Resources”</span></a></div>\n<ul>\n<li>\n<p><a href=\"/en/reference/astro-syntax/#differences-between-astro-and-jsx\">Astro syntax vs JSX - comparison</a></p>\n</li>\n<li>\n<p><a href=\"/en/guides/styling/#styling-in-astro\">Astro <code dir=\"auto\">&#x3C;style></code> tag</a></p>\n</li>\n<li>\n<p><a href=\"/en/guides/styling/#css-variables\">CSS variables in Astro</a></p>\n</li>\n</ul>"
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

const url = "src/content/docs/en/tutorial/2-pages/4.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/2-pages/4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/2-pages/4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
