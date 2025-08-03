import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps, g as $$FileTree } from './Code_CLJ7HHbi.mjs';
import { $ as $$ReadMore } from './ReadMore_CcGJl1uo.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';

const frontmatter = {
  "title": "Customize file names in the build output",
  "description": "Learn how to change the default naming pattern for your built assets like JavaScript, CSS, and images in Astro using Vite's Rollup options.",
  "i18nReady": true,
  "type": "recipe"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "recipe",
    "text": "Recipe"
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
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>By default, the <code dir=\"auto\">astro build</code> command outputs your built assets from <a href=\"/en/basics/project-structure/#src\">your project source</a>, like JavaScript and CSS files located in the <code dir=\"auto\">src/</code> directory, into an <code dir=\"auto\">_astro</code> directory with hashed filenames (e.g. <code dir=\"auto\">_astro/index.DRf8L97S.js</code>) which are excellent for long-term caching.</p>\n<p>Although it is normally not necessary, you can customise the output file names when needed. For example, this can be helpful if you have scripts with names that might trigger ad blockers (e.g. <code dir=\"auto\">ads.js</code>), or if you want to organize your assets with a particular naming convention. By customizing Rollup output options, you can gain more control over your project’s build structure, allowing you to meet specific organizational or deployment requirements.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"recipe\">Recipe</h2><a class=\"sl-anchor-link\" href=\"#recipe\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Recipe”</span></a></div>\n<p>This recipe configures <code dir=\"auto\">vite.build.rollupOptions</code> to output built assets with the following structure and naming pattern:</p>\n<ul>\n<li>JavaScript entry files (e.g. scripts directly associated with your pages or layouts): <code dir=\"auto\">dist/js/[name]-[hash].js</code></li>\n<li>JavaScript code-split chunks (e.g. dynamically imported components or shared modules): <code dir=\"auto\">dist/js/chunks/[name]-[hash].js</code></li>\n<li>Other assets (e.g. CSS, images, fonts): <code dir=\"auto\">dist/static/[name]-[hash][extname]</code> (e.g. <code dir=\"auto\">dist/static/styles-a1b2c3d4.css</code>, <code dir=\"auto\">dist/static/logo-e5f6g7h8.svg</code>)</li>\n</ul>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Add Vite Rollup Output Options."
          }), "\n", createVNode(_components.p, {
            children: ["Modify your ", createVNode(_components.code, {
              dir: "auto",
              children: "astro.config.mjs"
            }), " to include the following ", createVNode(_components.code, {
              dir: "auto",
              children: "vite.build.rollupOptions.output"
            }), " configuration. This is where you can define the custom naming patterns for your assets using Rollup’s ", createVNode(_components.a, {
              href: "https://rollupjs.org/configuration-options/#output-entryfilenames",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "entryFileNames"
              })
            }), ", ", createVNode(_components.a, {
              href: "https://rollupjs.org/configuration-options/#output-chunkfilenames",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "chunkFileNames"
              })
            }), ", and ", createVNode(_components.a, {
              href: "https://rollupjs.org/configuration-options/#output-assetfilenames",
              children: createVNode(_components.code, {
                dir: "auto",
                children: "assetFileNames"
              })
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
                  children: "astro.config.mjs"
                })
              }), createVNode(_components.pre, {
                "data-language": "javascript",
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
                        children: " { defineConfig } "
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
                        children: "astro/config"
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
                        children: "// ..."
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
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "vite: {"
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
                        children: "build: {"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "rollupOptions: {"
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
                          children: "        "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "output: {"
                      })]
                    })
                  }), createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        class: "indent",
                        children: "          "
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#919F9F",
                          "--1": "#5D6376"
                        },
                        children: "// path names relative to `outDir`"
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
                          children: "          "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "entryFileNames: "
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
                        children: "js/[name]-[hash].js"
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
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "          "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "chunkFileNames: "
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
                        children: "js/chunks/[name]-[hash].js"
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
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "          "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "assetFileNames: "
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
                        children: "static/[name]-[hash][extname]"
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
                            "--0": "#D6DEEB",
                            "--1": "#403F53"
                          },
                          children: "        "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "},"
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
                          children: "      "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "},"
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
                        children: "},"
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
                          children: "  "
                        })
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "},"
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
                  "data-code": "import { defineConfig } from 'astro/config';export default defineConfig({  // ...  vite: {    build: {      rollupOptions: {        output: {          // path names relative to `outDir`          entryFileNames: 'js/[name]-[hash].js',          chunkFileNames: 'js/chunks/[name]-[hash].js',          assetFileNames: 'static/[name]-[hash][extname]',        },      },    },  },});",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n", createVNode(_components.p, {
            children: "This example uses the following file name placeholders:"
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "[name]"
              }), ": The original name of the file (without the extension and path)."]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "[hash]"
              }), ": A content-based hash generated for the file, crucial for cache busting. You can also specify a length, e.g. ", createVNode(_components.code, {
                dir: "auto",
                children: "[hash:8]"
              }), ". This ensures that when you update an asset, the filename changes, forcing browsers to download the new version instead of serving a stale cached version."]
            }), "\n", createVNode(_components.li, {
              children: [createVNode(_components.code, {
                dir: "auto",
                children: "[extname]"
              }), ": The original file extension, including the leading dot (e.g. ", createVNode(_components.code, {
                dir: "auto",
                children: ".js"
              }), ", ", createVNode(_components.code, {
                dir: "auto",
                children: ".css"
              }), ", ", createVNode(_components.code, {
                dir: "auto",
                children: ".svg"
              }), ")."]
            }), "\n"]
          }), "\n", createVNode($$ReadMore, {
            "set:html": "<p>For a full list of available placeholders and advanced patterns for these options, refer to the <a href=\"https://rollupjs.org/configuration-options/\">Rollup configuration documentation</a>.</p>"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Build your project."
          }), "\n", createVNode(_components.p, {
            children: "Since these filename customizations apply to the production build output only, you will need to run your project’s build command:"
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm run build\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm build\"><div></div></button></div></figure></div>"
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">build</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn build\"><div></div></button></div></figure></div>"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["After the build completes, inspect your ", createVNode(_components.a, {
              href: "/en/reference/configuration-reference/#outdir",
              children: "output directory"
            }), " (", createVNode(_components.code, {
              dir: "auto",
              children: "dist/"
            }), " by default)."]
          }), "\n", createVNode(_components.p, {
            children: ["Verify that the build assets from your project ", createVNode(_components.code, {
              dir: "auto",
              children: "src"
            }), " are named and organized according to the new patterns. (Files from ", createVNode(_components.a, {
              href: "/en/basics/project-structure/#public",
              children: ["your ", createVNode(_components.code, {
                dir: "auto",
                children: "public/"
              }), " directory"]
            }), " are copied directly to the output directory and are not affected by these Rollup naming options.)"]
          }), "\n", createVNode(_components.p, {
            children: "Depending on your project’s specific contents, your build folder will now look something like this:"
          }), "\n", createVNode($$FileTree, {
            "set:html": "<ul>\n<li>dist/\n<ul>\n<li>js/\n<ul>\n<li>index-a1b2c3d4.js</li>\n<li>chunks/\n<ul>\n<li>common-e5f6g7h8.js</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>img/\n<ul>\n<li>logo-i9j0k1l2.png</li>\n</ul>\n</li>\n<li>fonts/\n<ul>\n<li>myfont-q2w3e4r5.woff2</li>\n</ul>\n</li>\n<li>static_assets/\n<ul>\n<li>styles-m3n4o5p6.css</li>\n</ul>\n</li>\n<li>index.html</li>\n<li>about/\n<ul>\n<li>index.html</li>\n</ul>\n</li>\n<li>… (other HTML files and public assets)</li>\n</ul>\n</li>\n</ul>"
          }), "\n"]
        }), "\n"]
      })
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

const url = "src/content/docs/en/recipes/customizing-output-filenames.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/customizing-output-filenames.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/recipes/customizing-output-filenames.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
