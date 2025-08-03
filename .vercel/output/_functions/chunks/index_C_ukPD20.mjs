import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$Box, a as $$Checklist } from './Box_BDRLIj7J.mjs';
import { f as $$Steps } from './Code_CLJ7HHbi.mjs';

/*StackBlitz instructions
<details>
<summary>Using StackBlitz: Follow these instructions, then go directly to Unit 2!</summary>

**Set up StackBlitz**

<Steps>
1. Follow the external link to [open the "Empty Project" template on StackBlitz](https://astro.new/minimal?on=stackblitz).

2. Click "Sign in" on the top right to log in using your GitHub credentials.

3. In the upper left of the StackBlitz editor window, click to "fork" the template (save to your own account dashboard).

4. Wait for the project to load, and you will see a live preview of the "Empty Project" starter.
</Steps>

**Make a Change**

In the file pane, you should see `src/pages/index.astro`. Click to open it, and follow [Write your first line of Astro](/en/tutorial/1-setup/3/) to make a change to this file.

**Create a GitHub Repository**

<Steps>
1. Press the <kbd>Connect Repository</kbd> button at the top of your list of files, enter a new name for your repository, and click <kbd>Create repo & push</kbd>.

2. When you have changes to be committed back to GitHub, a "Commit" button will appear at the top left of your workspace. Clicking on this will allow you to enter a commit message, and update your repository.
</Steps>

**Deploy your Site**

If you'd like to deploy to Netlify, and have a live published version of your site while you work, go ahead in Unit 1 to [Deploy your site to the web](/en/tutorial/1-setup/5/).

Otherwise, skip to [Unit 2](/en/tutorial/2-pages/) to start building with Astro!

</details>
*/
const frontmatter = {
  "type": "tutorial",
  "unitTitle": "Create and deploy your first Astro site",
  "title": "Check in: Unit 1 - Setup",
  "description": "Tutorial: Build your first Astro blog —\nPrepare your development environment, and create and deploy your first Astro site",
  "i18nReady": true,
  "head": [{
    "tag": "title",
    "content": "Build a blog tutorial: Unit 1 - Setup | Docs"
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "where-are-you-going",
    "text": "Where are you going?"
  }, {
    "depth": 2,
    "slug": "checklist",
    "text": "Checklist"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    aside: "aside",
    details: "details",
    div: "div",
    h2: "h2",
    p: "p",
    path: "path",
    span: "span",
    strong: "strong",
    summary: "summary",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Now that you know what you’re going to build, it’s time to set up all the tools you’ll need!</p>\n<p>This unit shows you how to set up your development environment and deploy to Netlify. Skip ahead to <a href=\"/en/tutorial/2-pages/\">Unit 2</a> if you are already comfortable with your environment and workflow.</p>\n"
    }), createVNode(_components.aside, {
      "aria-label": "Take the tutorial in an online code editor",
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
        }), "Take the tutorial in an online code editor"]
      }), createVNode(_components.div, {
        class: "starlight-aside__content",
        children: [createVNode(_components.p, {
          children: "Want to complete this tutorial in an online code editor instead? Follow the instructions below for getting started on Google IDX."
        }), createVNode(_components.details, {
          children: [createVNode(_components.summary, {
            children: "Using Google IDX: Follow these instructions, then go directly to Unit 2!"
          }), createVNode(_components.p, {
            children: createVNode(_components.strong, {
              children: "Set up IDX"
            })
          }), createVNode($$Steps, {
            "set:html": "<ol>\n<li>\n<p>Follow the external link to <a href=\"https://astro.new/minimal?on=idx\">open the “Empty Project” template in a new workspace on IDX</a>.</p>\n</li>\n<li>\n<p>Follow the prompt to log into your Google account if you are not already logged in.</p>\n</li>\n<li>\n<p>Enter a name for your project if you want to change it from the default “Empty Project”. Click <strong>Create</strong>.</p>\n</li>\n<li>\n<p>Wait for the workspace to be created. This may take 30 - 60 seconds. If all goes well, you will see the Astro project loaded in an online code editor.</p>\n</li>\n<li>\n<p>Wait for IDX to run two scripts: one to install Astro and another to start the development server. Note that you may briefly see a message that your workspace “couldn’t find Astro” if your workspace loads before Astro has finished installing. This message can be ignored and cancelled if it does not clear itself.</p>\n</li>\n</ol>"
          }), createVNode(Fragment$1, {
            "set:html": "<p><strong>Make a Change</strong></p><p>If all goes well, you should see the code for the file <code dir=\"auto\">src/pages/index.astro</code> opened in split screen with a live preview of the website. Follow the instruction to <a href=\"/en/tutorial/1-setup/3/\">“Write your first line of Astro”</a> to make a change to this file.</p><p><strong>Create a GitHub Repository</strong></p>"
          }), createVNode($$Steps, {
            "set:html": "<ol>\n<li>\n<p>Navigate to the “Source Control” navigation item in the vertical menu bar, or open with <kbd>CTRL + SHIFT + G</kbd>.</p>\n</li>\n<li>\n<p>Select the option to Publish to GitHub. This will create a new repository in your GitHub account.</p>\n</li>\n<li>\n<p>Follow the prompts to sign in to your GitHub account.</p>\n</li>\n<li>\n<p>Once you are signed in, return to the IDX tab and you will be given the choice to name your new repository, and whether you want to create a private or public repository. You can choose any name and either kind of repository for this tutorial.</p>\n</li>\n<li>\n<p>IDX will make an initial commit and publish to your new GitHub repo.</p>\n</li>\n<li>\n<p>Going forward, whenever you have changes to be committed back to GitHub, the Source Control navigation icon will show a number. This is the number of files that have changed since your last commit. Navigating to this tab and performing two steps (commit and publish) will allow you to enter a commit message, and update your repository.</p>\n</li>\n</ol>"
          }), createVNode(Fragment$1, {
            "set:html": "<p><strong>Deploy your Site</strong></p><p>If you’d like to deploy to Netlify, and have a live published version of your site while you work, go ahead in Unit 1 to <a href=\"/en/tutorial/1-setup/5/\">Deploy your site to the web</a>.</p><p>Otherwise, skip to <a href=\"/en/tutorial/2-pages/\">Unit 2</a> to start building with Astro!</p>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"where-are-you-going\">Where are you going?</h2><a class=\"sl-anchor-link\" href=\"#where-are-you-going\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Where are you going?”</span></a></div>\n<p>In this unit, you will <strong>create a new project</strong> that is <strong>stored online in GitHub</strong> and <strong>connected to Netlify</strong>.</p>\n<p>As you write code, you will periodically commit your changes to GitHub. Netlify will use the files in your GitHub repository to build your website, and then publish it on the internet at a unique address where anyone can view it.</p>\n<p>Every time you commit a change to GitHub, a notification will be sent to Netlify. Then, Netlify will automatically rebuild and republish your live site to reflect those changes.</p>\n"
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
        "set:html": "<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><label><input type=\"checkbox\" disabled><span> I’m ready to prepare a development environment for an Astro project!</span></label></li>\n</ul>"
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

const url = "src/content/docs/en/tutorial/1-setup/index.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/1-setup/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/tutorial/1-setup/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
