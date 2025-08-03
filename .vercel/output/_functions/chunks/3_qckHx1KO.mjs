import { c as createComponent, E as createAstro, I as renderScript, a as renderTemplate, d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import 'kleur/colors';
import './PreCheck_BzWyGivz.mjs';
import { $ as $$Button } from './Button_L62Xdzfn.mjs';
import { k as $$CardGrid, l as $$LinkCard } from './Code_CLJ7HHbi.mjs';

const $$Astro = createAstro("https://docs.astro.build/");
const $$CompletionConfetti = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CompletionConfetti;
  return renderTemplate`${renderScript($$result, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/CompletionConfetti.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chasepursley/Development/ai/star-support/src/components/tutorial/CompletionConfetti.astro", void 0);

const frontmatter = {
  "type": "tutorial",
  "title": "Congratulations!",
  "description": "Tutorial: Build your first Astro blog —\nCheck out the final version of your project and find out what’s next with Astro!",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "checklist",
    "text": "Checklist"
  }, {
    "depth": 2,
    "slug": "share-your-achievement",
    "text": "Share your achievement!"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
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
    children: [createVNode(Fragment$1, {
      "set:html": "<p>There’s one more edit to make…</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">src/pages/about.astro</span></figcaption><pre data-language=\"astro\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> BaseLayout </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">../layouts/BaseLayout.astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">pageTitle</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">About Me</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">happy</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#d0a3ed;--1:#663383\">const </span><span style=\"--0:#91b4ff;--1:#2c4984\">finished</span><span style=\"--0:#d0a3ed;--1:#663383\"> = </span><span style=\"--0:#ff96a8;--1:#7a3636\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#d2a6ee;--1:#6a3588\">const </span><span style=\"--0:#94b6ff;--1:#2d4a87\">finished</span><span style=\"--0:#d2a6ee;--1:#6a3588\"> = </span><span style=\"--0:#ff99aa;--1:#7a3636\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">goal</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">identity</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">firstName: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Sarah</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">country: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Canada</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">occupation: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Technical Writer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">hobbies:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">photography</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">birdwatching</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">baseball</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">skills</span><span style=\"--0:#C792EA;--1:#8844AE\"> =</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">HTML</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">CSS</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">JavaScript</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">React</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Astro</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Writing Docs</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">];</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">skillColor</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">navy</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">fontWeight</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">bold</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">textCase</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">uppercase</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">---</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"---import BaseLayout from &#x22;../layouts/BaseLayout.astro&#x22;;const pageTitle = &#x22;About Me&#x22;;const happy = true;const finished = false;const finished = true;const goal = 3;const identity = {  firstName: &#x22;Sarah&#x22;,  country: &#x22;Canada&#x22;,  occupation: &#x22;Technical Writer&#x22;,  hobbies: [&#x22;photography&#x22;, &#x22;birdwatching&#x22;, &#x22;baseball&#x22;],};const skills = [&#x22;HTML&#x22;, &#x22;CSS&#x22;, &#x22;JavaScript&#x22;, &#x22;React&#x22;, &#x22;Astro&#x22;, &#x22;Writing Docs&#x22;];const skillColor = &#x22;navy&#x22;;const fontWeight = &#x22;bold&#x22;;const textCase = &#x22;uppercase&#x22;;---\"><div></div></button></div></figure></div>\n<p>We hope you learned a little about the basics of Astro, and had fun along the way!</p>\n<p>You can find the code for the project in this tutorial on <a href=\"https://github.com/withastro/blog-tutorial-demo/tree/complete\">GitHub</a> or open a working version in an online code environment like <a href=\"https://idx.google.com/import?url=https:%2F%2Fgithub.com%2Fwithastro%2Fblog-tutorial-demo%2F\">IDX</a> or\n<a href=\"https://stackblitz.com/github/withastro/blog-tutorial-demo/tree/complete?file=src/pages/index.astro\">StackBlitz</a>.</p>\n<p>Check out our docs for guides and reference material, and visit our Discord to ask questions, get help or just hang out!</p>\n<p>Welcome to the universe, astronaut. 👩🏼‍🚀👨🏿‍🚀🧑‍🚀👩🏾‍🚀</p>\n"
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I can’t wait to start my next Astro project! 🚀</span></label></li>\n</ul>"
      })]
    }), "\n", createVNode($$CompletionConfetti, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"share-your-achievement\">Share your achievement!</h2><a class=\"sl-anchor-link\" href=\"#share-your-achievement\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Share your achievement!”</span></a></div>\n<p>Congratulations on completing the Astro blog tutorial! Share your achievement with the world and let everyone know you’re an Astronaut now!</p>\n"
    }), createVNode("div", {
      style: "display: flex; flex-wrap: wrap; gap: 0.5rem;",
      children: [createVNode($$Button, {
        link: "https://twitter.com/intent/tweet?text=Just%20finished%20learning%20how%20to%20build%20my%20first%20Astro%20blog!%20Check%20it%20out%20at%20https://docs.astro.build/%0Avia%20%40astrodotbuild",
        "set:html": "Share on Twitter"
      }), createVNode($$Button, {
        link: "https://www.reddit.com/submit?url=https://docs.astro.build/&title=Just%20finished%20learning%20how%20to%20build%20my%20first%20Astro%20blog!",
        "set:html": "Share on Reddit"
      }), createVNode($$Button, {
        link: "https://bsky.app/intent/compose?text=Just%20finished%20learning%20how%20to%20build%20my%20first%20Astro%20blog!%20Check%20it%20out%20at%20https://docs.astro.build/%0Avia%20%40astro.build",
        "set:html": "Share on Bluesky"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"next-steps\">Next Steps</h2><a class=\"sl-anchor-link\" href=\"#next-steps\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Next Steps”</span></a></div>\n<p>You can enhance this project’s final code with one of our tutorial extensions, or start your next Astro project!</p>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Start a new Astro Project",
        description: "Begin a new empty project, or use an existing Astro theme template.",
        href: "/en/install-and-setup/"
      }), createVNode($$LinkCard, {
        title: "Join us on Discord",
        description: "Connect with our community to ask questions, share your work, and get involved with the project!",
        href: "https://astro.build/chat"
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

const url = "src/content/docs/en/tutorial/6-islands/3.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/6-islands/3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/6-islands/3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
