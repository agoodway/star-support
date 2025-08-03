import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';

const frontmatter = {
  "title": "ButterCMS & Astro",
  "description": "Add content to your Astro project using ButterCMS",
  "sidebar": {
    "label": "ButterCMS"
  },
  "type": "cms",
  "service": "ButterCMS",
  "stub": false,
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "integrating-with-astro",
    "text": "Integrating with Astro"
  }, {
    "depth": 3,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 3,
    "slug": "setup",
    "text": "Setup"
  }, {
    "depth": 3,
    "slug": "fetching-data",
    "text": "Fetching Data"
  }, {
    "depth": 2,
    "slug": "official-resources",
    "text": "Official Resources"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    aside: "aside",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    script: "script",
    span: "span",
    svg: "svg",
    ...props.components
  }, { Fragment: Fragment$1 } = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": '<p><a href="https://buttercms.com/">ButterCMS</a> is a headless CMS and blog engine that allows you to publish structured content to use in your project.</p>\n<div class="sl-heading-wrapper level-h2"><h2 id="integrating-with-astro">Integrating with Astro</h2><a class="sl-anchor-link" href="#integrating-with-astro"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Integrating with Astro”</span></a></div>\n<aside aria-label="Note" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Note</p><div class="starlight-aside__content"><p>For a full blog site example, see the <a href="https://buttercms.com/starters/astro-starter-project/">Astro + ButterCMS Starter Project</a>.</p></div></aside>\n<p>In this section, we’ll use the <a href="https://www.npmjs.com/package/buttercms">ButterCMS SDK</a> to bring your data into your Astro project.\nTo get started, you will need to have the following:</p>\n<div class="sl-heading-wrapper level-h3"><h3 id="prerequisites">Prerequisites</h3><a class="sl-anchor-link" href="#prerequisites"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Prerequisites”</span></a></div>\n<ol>\n<li>\n<p><strong>An Astro project</strong> - If you don’t have an Astro project yet, our <a href="/en/install-and-setup/">Installation guide</a> will get you up and running in no time.</p>\n</li>\n<li>\n<p><strong>A ButterCMS account</strong>. If you don’t have an account, you can <a href="https://buttercms.com/join/">sign up</a> for a free trial.</p>\n</li>\n<li>\n<p><strong>Your ButterCMS API Token</strong> - You can find your API Token on the <a href="https://buttercms.com/settings/">Settings</a> page.</p>\n</li>\n</ol>\n<div class="sl-heading-wrapper level-h3"><h3 id="setup">Setup</h3><a class="sl-anchor-link" href="#setup"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Setup”</span></a></div>\n'
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Create a ", createVNode(_components.code, {
              dir: "auto",
              children: ".env"
            }), " file in the root of your project and add your API token as an environment variable:"]
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
                  children: ".env"
                })
              }), createVNode(_components.pre, {
                "data-language": "ini",
                children: createVNode(_components.code, {
                  children: createVNode(_components.div, {
                    class: "ec-line",
                    children: createVNode(_components.div, {
                      class: "code",
                      children: [createVNode(_components.span, {
                        style: {
                          "--0": "#C792EA",
                          "--1": "#8844AE"
                        },
                        children: "BUTTER_TOKEN"
                      }), createVNode(_components.span, {
                        style: {
                          "--0": "#D6DEEB",
                          "--1": "#403F53"
                        },
                        children: "=YOUR_API_TOKEN_HERE"
                      })]
                    })
                  })
                })
              }), createVNode(_components.div, {
                class: "copy",
                children: createVNode(_components.button, {
                  title: "Copy to clipboard",
                  "data-copied": "Copied!",
                  "data-code": "BUTTER_TOKEN=YOUR_API_TOKEN_HERE",
                  children: createVNode(_components.div, {})
                })
              })]
            })]
          }), "\n", createVNode(_components.aside, {
            "aria-label": "Tip",
            class: "starlight-aside starlight-aside--tip",
            children: [createVNode(_components.p, {
              class: "starlight-aside__title",
              "aria-hidden": "true",
              children: [createVNode(_components.svg, {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                fill: "currentColor",
                class: "starlight-aside__icon",
                children: [createVNode(_components.path, {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z"
                }), createVNode(_components.path, {
                  d: "M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z"
                })]
              }), "Tip"]
            }), createVNode(_components.div, {
              class: "starlight-aside__content",
              children: createVNode(_components.p, {
                children: ["Read more about ", createVNode(_components.a, {
                  href: "/en/guides/environment-variables/",
                  children: "using environment variables"
                }), " and ", createVNode(_components.code, {
                  dir: "auto",
                  children: ".env"
                }), " files in Astro."]
              })
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Install the ButterCMS SDK as a dependency:"
          }), "\n", createVNode($$PackageManagerTabs, {
            children: [createVNode(Fragment$1, {
              slot: "npm",
              "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">buttercms</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install buttercms"><div></div></button></div></figure></div>'
            }), createVNode(Fragment$1, {
              slot: "pnpm",
              "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">pnpm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">add</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">buttercms</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="pnpm add buttercms"><div></div></button></div></figure></div>'
            }), createVNode(Fragment$1, {
              slot: "yarn",
              "set:html": '<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">yarn</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">add</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">buttercms</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="yarn add buttercms"><div></div></button></div></figure></div>'
            })]
          }), "\n"]
        }), "\n", createVNode(Fragment$1, {
          "set:html": '<li>\n<p>Create a <code dir="auto">buttercms.js</code> file in a new <code dir="auto">src/lib/</code> directory in your project:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/lib/buttercms.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> Butter </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">buttercms</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export const </span><span style="--0:#82AAFF;--1:#3B61B0">butterClient</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#82AAFF;--1:#3B61B0">Butter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#C792EA;--1:#8844AE">import.</span><span style="--0:#7FDBCA;--1:#096E72">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">env</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">BUTTER_TOKEN</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import Butter from &#x22;buttercms&#x22;;export const butterClient = Butter(import.meta.env.BUTTER_TOKEN);"><div></div></button></div></figure></div>\n</li>\n'
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<p><strong>This authenticates the SDK using your API Token and exports it to be used across your project.</strong></p>\n<div class="sl-heading-wrapper level-h3"><h3 id="fetching-data">Fetching Data</h3><a class="sl-anchor-link" href="#fetching-data"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Fetching Data”</span></a></div>\n<p>To fetch content, import this client and use one of its <code dir="auto">retrieve</code> functions.</p>\n<p>In this example, we <a href="https://buttercms.com/docs/api/#retrieve-a-collection">retrieve a collection</a> that has three fields: a short text <code dir="auto">name</code>, a number <code dir="auto">price</code>, and a WYSIWYG <code dir="auto">description</code>.</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/ShopItem.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { butterClient } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../lib/buttercms</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">response</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#D6DEEB;--1:#403F53">butterClient</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">content</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">retrieve</span><span style="--0:#D6DEEB;--1:#403F53">([</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">shopitem</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">]);</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">interface</span><span style="--0:#D6DEEB;--1:#403F53"> ShopItem {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">name</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">price</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">number</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">description</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">items</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">response</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">data</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">data</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">shopitem</span><span style="--0:#C792EA;--1:#8844AE"> as </span><span style="--0:#FFCB8B;--1:#111111">ShopItem</span><span style="--0:#D6DEEB;--1:#403F53">[];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">items</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">map</span><span style="--1:#403F53"><span style="--0:#D6DEEB">(</span><span style="--0:#D7DBE0">item</span><span style="--0:#D6DEEB"> </span></span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">item</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">name</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--0:#D6DEEB;--1:#403F53"> - $</span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">item</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">price</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">set</span><span style="--0:#7FDBCA;--1:#8844AE">:</span><span style="--0:#C5E478;--1:#3B61B0">html</span><span style="--0:#C792EA;--1:#8844AE">=</span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">item</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">description</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#E2817F;--1:#B23834">}</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { butterClient } from &#x22;../lib/buttercms&#x22;;const response = await butterClient.content.retrieve([&#x22;shopitem&#x22;]);interface ShopItem {  name: string,  price: number,  description: string,}const items = response.data.data.shopitem as ShopItem[];---<body>  {items.map(item => <div>    <h2>{item.name} - ${item.price}</h2>    <p set:html={item.description}></p>  </div>)}</body>"><div></div></button></div></figure></div>\n<p>The interface mirrors the field types. The WYSIWYG <code dir="auto">description</code> field loads as a string of HTML, and <a href="/en/reference/directives-reference/#sethtml"><code dir="auto">set:html</code></a> lets you render it.</p>\n<p>Similarly, you can <a href="https://buttercms.com/docs/api/#get-a-single-page">retrieve a page</a> and display its fields:</p>\n<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/ShopItem.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">import</span><span style="--0:#D6DEEB;--1:#403F53"> { butterClient } </span><span style="--0:#C792EA;--1:#8844AE">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">../lib/buttercms</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">response</span><span style="--0:#C792EA;--1:#8844AE"> = await </span><span style="--0:#D6DEEB;--1:#403F53">butterClient</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">page</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">retrieve</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">*</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#C792EA;--1:#8844AE">, </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">simple-page</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">pageData</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">response</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#FAF39F;--1:#111111">data</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">data</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">interface</span><span style="--0:#D6DEEB;--1:#403F53"> Fields {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">seo_title</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">headline</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">hero_image</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const </span><span style="--0:#82AAFF;--1:#3B61B0">fields</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">pageData</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">fields</span><span style="--0:#C792EA;--1:#8844AE"> as </span><span style="--0:#FFCB8B;--1:#111111">Fields</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">fields</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">seo_title</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">title</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">fields</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">headline</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">img</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3B61B0">src</span><span style="--0:#7FDBCA;--1:#8844AE">=</span><span style="--0:#E2817F;--1:#B23834">{</span><span style="--0:#D6DEEB;--1:#403F53">fields</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">hero_image</span><span style="--0:#E2817F;--1:#B23834">}</span><span style="--0:#7FDBCA;--1:#8844AE"> /></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8844AE"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { butterClient } from &#x22;../lib/buttercms&#x22;;const response = await butterClient.page.retrieve(&#x22;*&#x22;, &#x22;simple-page&#x22;);const pageData = response.data.data;interface Fields {  seo_title: string,  headline: string,  hero_image: string,}const fields = pageData.fields as Fields;---<html>  <title>{fields.seo_title}</title>  <body>    <h1>{fields.headline}</h1>    <img src={fields.hero_image} />  </body></html>"><div></div></button></div></figure></div>\n<div class="sl-heading-wrapper level-h2"><h2 id="official-resources">Official Resources</h2><a class="sl-anchor-link" href="#official-resources"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Official Resources”</span></a></div>\n<ul>\n<li><a href="https://buttercms.com/starters/astro-starter-project/">Astro + ButterCMS Starter Project</a></li>\n<li>The <a href="https://buttercms.com/docs/api/">full ButterCMS API documentation</a></li>\n<li>ButterCMS’s <a href="https://buttercms.com/docs/api-client/javascript/">JavaScript Guide</a></li>\n</ul>\n<div class="sl-heading-wrapper level-h2"><h2 id="community-resources">Community Resources</h2><a class="sl-anchor-link" href="#community-resources"><span aria-hidden="true" class="sl-anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span class="sr-only">Section titled “Community Resources”</span></a></div>\n<ul>\n<li>Add yours!</li>\n</ul>'
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
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
const url = "src/content/docs/en/guides/cms/buttercms.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/buttercms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/cms/buttercms.mdx";
__astro_tag_component__(Content, "astro:jsx");

export { Content, Content as default, file, frontmatter, getHeadings, url };
