import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';
import { $ as $$UIFrameworkTabs } from './UIFrameworkTabs_Pe0L3Em4.mjs';
import './PackageManagerTabs_DXh8l6mS.mjs';

/*## Extension: Use Zod to validate your form

[Zod form data](https://www.npmjs.com/package/zod-form-data) builds on top of [Zod](https://github.com/colinhacks/zod) to validate your form using a schema. This simplifies your code, as it allows you to declare the fields and their requirements, and let Zod handle the validation.

1. Install `zod` and `zod-form-data`.

<PackageManagerTabs>
<Fragment slot="npm">
```shell
npm i zod zod-form-data
```
</Fragment>
<Fragment slot="pnpm">
```shell
pnpm i zod zod-form-data
```
</Fragment>
<Fragment slot="yarn">
```shell
yarn add zod zod-form-data
```
</Fragment>
</PackageManagerTabs>

2. In your API Route file, declare your schema using `zfd.formData` and export it.*/
const frontmatter = {
  "title": "Build forms with API routes",
  "description": "Learn how to use JavaScript to send form submissions to an API Route.",
  "i18nReady": true,
  "type": "recipe"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "recipe",
    "text": "Recipe"
  }];
}
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    li: "li",
    link: "link",
    mark: "mark",
    ol: "ol",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>An HTML form causes the browser to refresh the page or navigate to a new one. To send form data to an API endpoint instead, you must intercept the form submission using JavaScript.</p>\n<p>This recipe shows you how to send form data to an API endpoint and handle that data.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"prerequisites\">Prerequisites</h2><a class=\"sl-anchor-link\" href=\"#prerequisites\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Prerequisites”</span></a></div>\n<ul>\n<li>A project with <a href=\"/en/guides/on-demand-rendering/\">an adapter for on-demand rendering</a></li>\n<li>A <a href=\"/en/guides/framework-components/\">UI Framework integration</a> installed</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"recipe\">Recipe</h2><a class=\"sl-anchor-link\" href=\"#recipe\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Recipe”</span></a></div>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a ", createVNode(_components.code, {
              dir: "auto",
              children: "POST"
            }), " API endpoint at ", createVNode(_components.code, {
              dir: "auto",
              children: "/api/feedback"
            }), " that will receive the form data. Use ", createVNode(_components.code, {
              dir: "auto",
              children: "request.formData()"
            }), " to process it. Be sure to validate the form values before you use them."]
          }), "\n", createVNode(_components.p, {
            children: "This example sends a JSON object with a message back to the client."
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
                  children: "src/pages/api/feedback.ts"
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
                        children: "export const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "prerender"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#FF6A83",
                          "--1": "#A24848"
                        },
                        children: "false"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "; "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Not needed in 'server' mode"
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
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "type"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: " { APIRoute } "
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
                        children: "astro"
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
                        children: "export const "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "POST"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: ":"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#FFCB8B",
                          "--1": "#111111"
                        },
                        children: "APIRoute"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = async "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "("
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "{ "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D7DBE0",
                          "--1": "#403F53"
                        },
                        children: "request"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " => {"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
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
                        children: "data"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " = await "
                      }), createVNode(_components.mark, {
                        children: [createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "request"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#d0a4ed",
                            "--1": "#753a96"
                          },
                          children: "."
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#91b4ff",
                            "--1": "#325295"
                          },
                          children: "formData"
                        }), createVNode(_components.span, {
                          style: {
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "()"
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
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
                        children: "name"
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
                        children: "data"
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
                        children: "get"
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
                        children: "name"
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
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
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
                        children: "email"
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
                        children: "data"
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
                        children: "get"
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
                        children: "email"
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
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
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
                        children: "message"
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
                        children: "data"
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
                        children: "get"
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
                        children: "message"
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
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Validate the data - you'll probably want to do more than this"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "if "
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
                        children: "!"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "name"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " || !"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "email"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " || !"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "message)"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "return "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "new"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "Response"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "      "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "JSON"
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
                        children: "stringify"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "        "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "message: "
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
                        children: "Missing required fields"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "}"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "{ status: "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#F78C6C",
                          "--1": "#AA0982"
                        },
                        children: "400"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " }"
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
                        children: ")"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                        children: createVNode(_components.span, {
                          style: {
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// Do something with the data, then return a success response"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "return "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#7FDBCA",
                          "--1": "#096E72"
                        },
                        children: "new"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "Response"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "("
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
                          "--0": "#82AAFF",
                          "--1": "#3B61B0"
                        },
                        children: "JSON"
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
                        children: "stringify"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "message: "
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
                        children: "Success!"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D9F5DD",
                          "--1": "#111111"
                        },
                        children: "\""
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "}"
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
                            "--0": "#C792EA",
                            "--1": "#8844AE"
                          },
                          children: "    "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "{ status: "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#F78C6C",
                          "--1": "#AA0982"
                        },
                        children: "200"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: " }"
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
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ")"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
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
                        children: "}"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: ";"
                      })]
                    })
                  })]
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "export const prerender = false; // Not needed in 'server' modeimport type { APIRoute } from \"astro\";export const POST: APIRoute = async ({ request }) => {  const data = await request.formData();  const name = data.get(\"name\");  const email = data.get(\"email\");  const message = data.get(\"message\");  // Validate the data - you'll probably want to do more than this  if (!name || !email || !message) {    return new Response(      JSON.stringify({        message: \"Missing required fields\",      }),      { status: 400 }    );  }  // Do something with the data, then return a success response  return new Response(    JSON.stringify({      message: \"Success!\"    }),    { status: 200 }  );};",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a form component using your UI framework. Each input should have a ", createVNode(_components.code, {
              dir: "auto",
              children: "name"
            }), " attribute that describes the value of that input."]
          }), "\n", createVNode(_components.p, {
            children: ["Be sure to include a ", createVNode(_components.code, {
              dir: "auto",
              children: "<button>"
            }), " or ", createVNode(_components.code, {
              dir: "auto",
              children: "<input type=\"submit\">"
            }), " element to submit the form."]
          }), "\n", createVNode($$UIFrameworkTabs, {
            children: [createVNode(Fragment$1, {
              slot: "preact",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default function Form() {  return (    <form>      <label>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />      </label>      <label>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />      </label>      <label>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />      </label>      <button>Send</button>    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "react",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default function Form() {  return (    <form>      <label>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />      </label>      <label>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />      </label>      <label>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />      </label>      <button>Send</button>    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "solid",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default function Form() {  return (    <form>      <label>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />      </label>      <label>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />      </label>      <label>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />      </label>      <button>Send</button>    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "svelte",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.svelte</span></figcaption><pre data-language=\"svelte\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<form>  <label>    Name    <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />  </label>  <label>    Email    <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />  </label>  <label>    Message    <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />  </label>  <button>Send</button></form>\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "vue",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.vue</span></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#FFFFFF;--1:#984E4D\">/</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<template>  <form>    <label>      Name      <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />    </label>    <label>      Email      <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />    </label>    <label>      Message      <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />    </label>    <button>Send</button>  </form></template>\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a function that accepts a submit event, then pass it as a ", createVNode(_components.code, {
              dir: "auto",
              children: "submit"
            }), " handler to your form."]
          }), "\n", createVNode(_components.p, {
            children: "In the function:"
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["Call ", createVNode(_components.code, {
                dir: "auto",
                children: "preventDefault()"
              }), " on the event to override the browser’s default submission process."]
            }), "\n", createVNode(_components.li, {
              children: ["Create a ", createVNode(_components.code, {
                dir: "auto",
                children: "FormData"
              }), " object and send it in a ", createVNode(_components.code, {
                dir: "auto",
                children: "POST"
              }), " request to your endpoint using ", createVNode(_components.code, {
                dir: "auto",
                children: "fetch()"
              }), "."]
            }), "\n"]
          }), "\n", createVNode($$UIFrameworkTabs, {
            children: [createVNode(Fragment$1, {
              slot: "preact",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { useState } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">preact/hooks</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const [</span><span style=\"--0:#94b6ff;--1:#2d4a87\">responseMessage</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setResponseMessage</span><span style=\"--0:#d2a6ee;--1:#6a3588\">] = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">useState</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">SubmitEvent</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">e</span><span style=\"--0:#e2c6f4;--1:#552b6d\">.</span><span style=\"--0:#bad0ff;--1:#253d6e\">preventDefault</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">();</span></mark></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><mark><span style=\"--0:#bad0ff;--1:#253d6e\">formData</span></mark><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">FormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(e</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">target</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> as </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fetch</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><mark><span style=\"--0:#eeca99;--1:#5f3130\">/api/feedback</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>method: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>body: </span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setResponseMessage</span><span style=\"--0:#D6DEEB;--1:#403F53\">(data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><ins><span style=\"--0:#C5E478;--1:#2d4a87\">onSubmit</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">submit</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage </span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { useState } from &#x22;preact/hooks&#x22;;export default function Form() {  const [responseMessage, setResponseMessage] = useState(&#x22;&#x22;);  async function submit(e: SubmitEvent) {    e.preventDefault();    const formData = new FormData(e.target as HTMLFormElement);    const response = await fetch(&#x22;/api/feedback&#x22;, {      method: &#x22;POST&#x22;,      body: formData,    });    const data = await response.json();    if (data.message) {      setResponseMessage(data.message);    }  }  return (    <form onSubmit={submit}>      <label>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />      </label>      <label>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />      </label>      <label>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />      </label>      <button>Send</button>      {responseMessage &#x26;&#x26; <p>{responseMessage}</p>}    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "react",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { useState } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">react</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">type</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { FormEvent } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">react</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const [</span><span style=\"--0:#94b6ff;--1:#2d4a87\">responseMessage</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setResponseMessage</span><span style=\"--0:#d2a6ee;--1:#6a3588\">] = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">useState</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FFCB8B;--1:#111111\">FormEvent</span><span style=\"--0:#D6DEEB;--1:#403F53\">&#x3C;</span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">e</span><span style=\"--0:#e2c6f4;--1:#552b6d\">.</span><span style=\"--0:#bad0ff;--1:#253d6e\">preventDefault</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">();</span></mark></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><mark><span style=\"--0:#bad0ff;--1:#253d6e\">formData</span></mark><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">FormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(e</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">target</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> as </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fetch</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><mark><span style=\"--0:#eeca99;--1:#5f3130\">/api/feedback</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>method: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>body: </span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setResponseMessage</span><span style=\"--0:#D6DEEB;--1:#403F53\">(data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><ins><span style=\"--0:#C5E478;--1:#2d4a87\">onSubmit</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">submit</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">htmlFor</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">autoComplete</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">htmlFor</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">autoComplete</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">htmlFor</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">autoComplete</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">off</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage </span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { useState } from &#x22;react&#x22;;import type { FormEvent } from &#x22;react&#x22;;export default function Form() {  const [responseMessage, setResponseMessage] = useState(&#x22;&#x22;);  async function submit(e: FormEvent<HTMLFormElement>) {    e.preventDefault();    const formData = new FormData(e.target as HTMLFormElement);    const response = await fetch(&#x22;/api/feedback&#x22;, {      method: &#x22;POST&#x22;,      body: formData,    });    const data = await response.json();    if (data.message) {      setResponseMessage(data.message);    }  }  return (    <form onSubmit={submit}>      <label htmlFor=&#x22;name&#x22;>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; autoComplete=&#x22;name&#x22; required />      </label>      <label htmlFor=&#x22;email&#x22;>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; autoComplete=&#x22;email&#x22; required />      </label>      <label htmlFor=&#x22;message&#x22;>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; autoComplete=&#x22;off&#x22; required />      </label>      <button>Send</button>      {responseMessage &#x26;&#x26; <p>{responseMessage}</p>}    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "solid",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.tsx</span></figcaption><pre data-language=\"tsx\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { createSignal, createResource, Suspense } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">solid-js</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">postFormData</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><mark><span style=\"--0:#D7DBE0;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">FormData</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fetch</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><mark><span style=\"--0:#eeca99;--1:#5f3130\">/api/feedback</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>method: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>body: </span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">  </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Form</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const [</span><mark><span style=\"--0:#bad0ff;--1:#253d6e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setFormData</span><span style=\"--0:#d2a6ee;--1:#6a3588\">] = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">createSignal</span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x3C;</span><span style=\"--0:#FFCB8B;--1:#111111\">FormData</span><span style=\"--0:#d2a6ee;--1:#6a3588\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const [</span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">] = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">createResource</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#D6DEEB;--1:#403F53\">postFormData);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">SubmitEvent</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">e</span><span style=\"--0:#e2c6f4;--1:#552b6d\">.</span><span style=\"--0:#bad0ff;--1:#253d6e\">preventDefault</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">();</span></mark></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#94b6ff;--1:#2d4a87\">setFormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">FormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(e</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">target</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">as</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> </span></span><ins><span style=\"--0:#C5E478;--1:#2d4a87\">onSubmit</span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">submit</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;</span><span style=\"--0:#f8a186;--1:#8f086e\">Suspense</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#D6DEEB;--1:#403F53\">() </span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--0:#7FDBCA;--1:#6a3588\">&#x3C;/</span><span style=\"--0:#f8a186;--1:#8f086e\">Suspense</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { createSignal, createResource, Suspense } from &#x22;solid-js&#x22;;async function postFormData(formData: FormData) {  const response = await fetch(&#x22;/api/feedback&#x22;, {    method: &#x22;POST&#x22;,    body: formData,  });  const data = await response.json();  return data;}export default function Form() {  const [formData, setFormData] = createSignal<FormData>();  const [response] = createResource(formData, postFormData);  function submit(e: SubmitEvent) {    e.preventDefault();    setFormData(new FormData(e.target as HTMLFormElement));  }  return (    <form onSubmit={submit}>      <label>        Name        <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />      </label>      <label>        Email        <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />      </label>      <label>        Message        <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />      </label>      <button>Send</button>      <Suspense>{response() &#x26;&#x26; <p>{response().message}</p>}</Suspense>    </form>  );}\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "svelte",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.svelte</span></figcaption><pre data-language=\"svelte\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#2d4a87\">lang</span><span style=\"--0:#7FDBCA;--1:#6a3588\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">ts</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">let </span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">string</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">SubmitEvent</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">e</span><span style=\"--0:#e2c6f4;--1:#552b6d\">.</span><span style=\"--0:#bad0ff;--1:#253d6e\">preventDefault</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">();</span></mark></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><mark><span style=\"--0:#bad0ff;--1:#253d6e\">formData</span></mark><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">FormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(e</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">currentTarget</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> as </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fetch</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><mark><span style=\"--0:#eeca99;--1:#5f3130\">/api/feedback</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>method: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">      </span>body: </span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage </span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#CAECE6;--1:#8844AE\">form</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><ins><span style=\"--1:#6a3588\"><span style=\"--0:#d2a6ee\">on</span><span style=\"--0:#7FDBCA\">:submit=</span></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">submit</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span></ins><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{#</span><span style=\"--0:#d2a6ee;--1:#6a3588\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> responseMessage}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#eaa5a4;--1:#882b28\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#eaa5a4;--1:#882b28\">}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{/</span><span style=\"--0:#d2a6ee;--1:#6a3588\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script lang=&#x22;ts&#x22;>  let responseMessage: string;  async function submit(e: SubmitEvent) {    e.preventDefault();    const formData = new FormData(e.currentTarget as HTMLFormElement);    const response = await fetch(&#x22;/api/feedback&#x22;, {      method: &#x22;POST&#x22;,      body: formData,    });    const data = await response.json();    responseMessage = data.message;  }</script><form on:submit={submit}>  <label>    Name    <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />  </label>  <label>    Email    <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />  </label>  <label>    Message    <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />  </label>  <button>Send</button>  {#if responseMessage}    <p>{responseMessage}</p>  {/if}</form>\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "vue",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/components/FeedbackForm.vue</span></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">setup</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#2d4a87\">lang</span><span style=\"--0:#D6DEEB;--1:#403F53\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">ts</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref } </span><span style=\"--0:#d2a6ee;--1:#6a3588\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">responseMessage</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#94b6ff;--1:#2d4a87\">ref</span><span style=\"--0:#d2a6ee;--1:#6a3588\">&#x3C;</span><span style=\"--0:#C5E478;--1:#2d4a87\">string</span><span style=\"--0:#d2a6ee;--1:#6a3588\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">e</span><span style=\"--0:#7FDBCA;--1:#075457\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#111111\"><span style=\"--0:#FFCB8B\">Event</span><span style=\"--0:#D9F5DD\">)</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">e</span><span style=\"--0:#e2c6f4;--1:#552b6d\">.</span><span style=\"--0:#bad0ff;--1:#253d6e\">preventDefault</span><span style=\"--0:#D6DEEB;--1:#3c3b4e\">();</span></mark></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><mark><span style=\"--0:#bad0ff;--1:#253d6e\">formData</span></mark><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#7FDBCA;--1:#075457\">new</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> </span><span style=\"--0:#94b6ff;--1:#2d4a87\">FormData</span><span style=\"--0:#D6DEEB;--1:#403F53\">(e</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">currentTarget</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> as </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLFormElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#94b6ff;--1:#2d4a87\">fetch</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><mark><span style=\"--0:#eeca99;--1:#5f3130\">/api/feedback</span></mark><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> {</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>method: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#723b3a\">POST</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">    </span>body: </span><mark><span style=\"--0:#D6DEEB;--1:#3c3b4e\">formData</span></mark><span style=\"--0:#a8b9c6;--1:#3b4e5e\">,</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\"><span class=\"indent\">  </span>}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">data</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = await </span><span style=\"--0:#D6DEEB;--1:#403F53\">response</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#94b6ff;--1:#2d4a87\">json</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#d2a6ee;--1:#6a3588\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data</span><span style=\"--0:#d2a6ee;--1:#6a3588\">.</span><span style=\"--0:#7FDBCA;--1:#075457\">message</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">submit</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">text</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">name</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Email</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">input</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">email</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">textarea</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">id</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">message</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">required</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#FFFFFF;--1:#984E4D\">/</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">label</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Send</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#d2a6ee\">v-if</span><span style=\"--0:#7FDBCA\">=</span></span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">responseMessage</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#6a3588\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ responseMessage }}</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">form</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup lang=&#x22;ts&#x22;>import { ref } from &#x22;vue&#x22;;const responseMessage = ref<string>();async function submit(e: Event) {  e.preventDefault();  const formData = new FormData(e.currentTarget as HTMLFormElement);  const response = await fetch(&#x22;/api/feedback&#x22;, {    method: &#x22;POST&#x22;,    body: formData,  });  const data = await response.json();  responseMessage.value = data.message;}</script><template>  <form @submit=&#x22;submit&#x22;>    <label>      Name      <input type=&#x22;text&#x22; id=&#x22;name&#x22; name=&#x22;name&#x22; required />    </label>    <label>      Email      <input type=&#x22;email&#x22; id=&#x22;email&#x22; name=&#x22;email&#x22; required />    </label>    <label>      Message      <textarea id=&#x22;message&#x22; name=&#x22;message&#x22; required />    </label>    <button>Send</button>    <p v-if=&#x22;responseMessage&#x22;>{{ responseMessage }}</p>  </form></template>\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Import and include your ", createVNode(_components.code, {
              dir: "auto",
              children: "<FeedbackForm />"
            }), " component on a page. Be sure to use a ", createVNode(_components.code, {
              dir: "auto",
              children: "client:*"
            }), " directive to ensure that the form logic is hydrated when you want it to be."]
          }), "\n", createVNode($$UIFrameworkTabs, {
            children: [createVNode(Fragment$1, {
              slot: "preact",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FeedbackForm </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../components/FeedbackForm</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">FeedbackForm</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">client:load</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import FeedbackForm from &#x22;../components/FeedbackForm&#x22;---<FeedbackForm client:load />\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "react",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FeedbackForm </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../components/FeedbackForm</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">FeedbackForm</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">client:load</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import FeedbackForm from &#x22;../components/FeedbackForm&#x22;---<FeedbackForm client:load />\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "solid",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FeedbackForm </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../components/FeedbackForm</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">FeedbackForm</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">client:load</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import FeedbackForm from &#x22;../components/FeedbackForm&#x22;---<FeedbackForm client:load />\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "svelte",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FeedbackForm </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../components/FeedbackForm.svelte</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">FeedbackForm</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">client:load</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import FeedbackForm from &#x22;../components/FeedbackForm.svelte&#x22;---<FeedbackForm client:load />\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "vue",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FeedbackForm </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../components/FeedbackForm.vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">FeedbackForm</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><mark><span style=\"--0:#C5E478;--1:#325295\">client:load</span></mark><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import FeedbackForm from &#x22;../components/FeedbackForm.vue&#x22;---<FeedbackForm client:load />\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n"]
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

const url = "src/content/docs/en/recipes/build-forms-api.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/build-forms-api.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/build-forms-api.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
