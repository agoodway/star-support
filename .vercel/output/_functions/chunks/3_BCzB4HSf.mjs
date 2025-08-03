import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import './InstallGuideTabGroup_BLWZL614.mjs';
import './PackageManagerTabs_DXh8l6mS.mjs';
import { $ as $$PreCheck } from './PreCheck_BzWyGivz.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "type": "tutorial",
  "title": "Write your first line of Astro",
  "description": "Tutorial: Build your first Astro blog —\nMake your first edits to your tutorial project's home page",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "edit-your-home-page",
    "text": "Edit your home page"
  }, {
    "depth": 2,
    "slug": "checklist",
    "text": "Checklist"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h2: "h2",
    path: "path",
    span: "span",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode($$PreCheck, {
      "set:html": "<ul>\n<li>Make your first edit to your new website</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"edit-your-home-page\">Edit your home page</h2><a class=\"sl-anchor-link\" href=\"#edit-your-home-page\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Edit your home page”</span></a></div>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>In your code editor, navigate in the Explorer file pane to <code dir=\"auto\">src/pages/index.astro</code> and click on it to open the file’s contents in an editable tab.</p>\n<p>The contents of your <code dir=\"auto\">index.astro</code> file should look like this:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">lang</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">en</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">head</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">charset</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">utf-8</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">link</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">rel</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">icon</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">type</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">image/svg+xml</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">href</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">/favicon.svg</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">viewport</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">content</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">width=device-width</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">meta</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">generator</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">content</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#E2817F;--1:#B23834\">{</span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">generator</span><span style=\"--0:#E2817F;--1:#B23834\">}</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> ></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">title</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">title</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">head</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">html</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"------<html lang=&#x22;en&#x22;>  <head>    <meta charset=&#x22;utf-8&#x22; />    <link rel=&#x22;icon&#x22; type=&#x22;image/svg+xml&#x22; href=&#x22;/favicon.svg&#x22; />    <meta name=&#x22;viewport&#x22; content=&#x22;width=device-width&#x22; />    <meta name=&#x22;generator&#x22; content={Astro.generator} >    <title>Astro</title>  </head>  <body>    <h1>Astro</h1>  </body></html>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Edit the content of your page <code dir=\"auto\">&#x3C;body></code>.</p>\n<p>Type in the editor to change the heading text on your page and save the change.</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/index.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Astro</span><span style=\"--1:#663383\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">My Astro Site</span><span style=\"--1:#6a3588\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">body</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<body>  <h1>Astro</h1>  <h1>My Astro Site</h1></body>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Check the browser preview and you should see your page content updated to the new text.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Congratulations! You are now an Astro developer!</p>\n<p>The rest of this unit will set you up for success with version control and a published website you can show off.</p>\n"
    }), createVNode($$Box, {
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can make changes and see them in the browser.</span></label></li>\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I am an Astro developer!</span></label></li>\n</ul>"
      })]
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

const url = "src/content/docs/en/tutorial/1-setup/3.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/1-setup/3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/1-setup/3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
