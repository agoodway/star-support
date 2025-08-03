import { c as createComponent, G as maybeRenderHead, F as renderSlot, a as renderTemplate, d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import 'kleur/colors';
/* empty css                                                            */

const $$Lede = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p class="astro-6oucp7xk">
	${renderSlot($$result, $$slots["default"])}
</p>`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/Lede.astro", void 0);

const frontmatter = {
  "type": "tutorial",
  "unitTitle": "Welcome, world!",
  "title": "Build your first Astro Blog",
  "sidebar": {
    "label": "Tutorial: Build a blog"
  },
  "description": "Learn the basics of Astro with a project-based tutorial. All the background knowledge you need to get started!",
  "i18nReady": true,
  "head": [{
    "tag": "title",
    "content": "Build a blog tutorial | Docs"
  }]
};
function getHeadings() {
  return [{
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
    children: [createVNode($$Lede, {
      "set:html": " In this tutorial, you’ll learn Astro’s key features by building a fully-functioning blog, from zero to full launch! 🚀 "
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Along the way, you’ll:</p>\n<ul>\n<li>Set up your development environment</li>\n<li>Create pages and blog posts for your website</li>\n<li>Build with Astro components</li>\n<li>Query and work with local files</li>\n<li>Add interactivity to your site</li>\n<li>Deploy your site to the web</li>\n</ul>\n<p>Want a preview of what you’re going to build? You can view the final project on <a href=\"https://github.com/withastro/blog-tutorial-demo\">GitHub</a> or open a working version in an online coding environment such as <a href=\"https://idx.google.com/import?url=https:%2F%2Fgithub.com%2Fwithastro%2Fblog-tutorial-demo%2F\">IDX</a> or <a href=\"https://stackblitz.com/github/withastro/blog-tutorial-demo/tree/complete?file=src%2Fpages%2Findex.astro\">StackBlitz</a>.</p>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>If you would rather start exploring Astro with a pre-built Astro site, you can visit <a href=\"https://astro.new\">https://astro.new</a> and choose a starter template to open and edit in an online editor.</p></div></aside>\n"
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> Looks great! I’m ready to get started!</span></label></li>\n</ul>"
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

const url = "src/content/docs/en/tutorial/0-introduction/index.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/0-introduction/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/0-introduction/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
