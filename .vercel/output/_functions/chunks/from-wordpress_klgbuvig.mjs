import { d as createVNode, K as Fragment, b5 as __astro_tag_component__ } from './astro/server_CeKHpNWz.mjs';
import { $ as $$PackageManagerTabs } from './PackageManagerTabs_DXh8l6mS.mjs';
import { k as $$CardGrid, l as $$LinkCard } from './Code_CLJ7HHbi.mjs';

const frontmatter = {
  "title": "Migrating from WordPress",
  "description": "Tips for migrating an existing WordPress project to Astro",
  "sidebar": {
    "label": "WordPress"
  },
  "type": "migration",
  "stub": true,
  "framework": "WordPress",
  "i18nReady": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-similarities-between-wordpress-and-astro",
    "text": "Key Similarities between WordPress and Astro"
  }, {
    "depth": 2,
    "slug": "key-differences-between-wordpress-and-astro",
    "text": "Key Differences between WordPress and Astro"
  }, {
    "depth": 2,
    "slug": "switch-from-wordpress-to-astro",
    "text": "Switch from WordPress to Astro"
  }, {
    "depth": 2,
    "slug": "community-resources",
    "text": "Community Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    aside: "aside",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><a href=\"https://wordpress.org\">WordPress</a> is an open-source, personal publishing system built on PHP and MySQL.</p>\n<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>You can <a href=\"/en/guides/cms/wordpress/\">use WordPress as a headless CMS for your Astro project</a>. Follow our guide to use your existing WordPress content in a new Astro project.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-similarities-between-wordpress-and-astro\">Key Similarities between WordPress and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-similarities-between-wordpress-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Similarities between WordPress and Astro”</span></a></div>\n<p>WordPress and Astro share some similarities that will help you migrate your project:</p>\n<ul>\n<li>\n<p>Both WordPress and Astro are ideal for <a href=\"/en/concepts/why-astro/#content-driven\">content-driven websites</a> like blogs and support writing your content in Markdown (requires a plugin in WordPress). Although the process for adding new content is different, <a href=\"/en/guides/markdown-content/\">writing in Markdown files</a> for your Astro blog should feel familiar if you have used Markdown syntax in your WordPress editor.</p>\n</li>\n<li>\n<p>Both WordPress and Astro encourage you to <a href=\"/en/concepts/islands/\">think about the design of your site in “blocks”</a> (components). In Astro you will probably <a href=\"/en/basics/astro-components/\">write more of your own code to create these blocks</a> rather than rely on pre-built plugins. But thinking about the individual pieces of your site and how they are presented on the page should feel familiar.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"key-differences-between-wordpress-and-astro\">Key Differences between WordPress and Astro</h2><a class=\"sl-anchor-link\" href=\"#key-differences-between-wordpress-and-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Key Differences between WordPress and Astro”</span></a></div>\n<p>When you rebuild your WordPress site in Astro, you will notice some important differences:</p>\n<ul>\n<li>\n<p>A WordPress site is edited using an online dashboard. In Astro, you will use a <a href=\"/en/editor-setup/\">code editor</a> and development environment to maintain your site. You can develop locally on your machine, or choose a cloud editor/development environment like IDX, StackBlitz, CodeSandbox or Gitpod.</p>\n</li>\n<li>\n<p>WordPress has an extensive plugin and theme market. In Astro, you will find some themes and <a href=\"https://astro.build/integrations/\">integrations</a> available, but you may now have to build many of your existing features yourself instead of looking for third-party solutions. Or, you can choose to start with an <a href=\"https://astro.build/themes\">Astro theme</a> with built-in features!</p>\n</li>\n<li>\n<p>WordPress stores your content in a database. In Astro, you will have individual files (typically Markdown or MDX) in your <a href=\"/en/basics/project-structure/\">project directory</a> for each page’s content. Or, you can choose to use a <a href=\"/en/guides/cms/\">CMS for your content</a>, even your existing WordPress site, and use Astro to fetch and present the data.</p>\n</li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"switch-from-wordpress-to-astro\">Switch from WordPress to Astro</h2><a class=\"sl-anchor-link\" href=\"#switch-from-wordpress-to-astro\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Switch from WordPress to Astro”</span></a></div>\n<p>To convert a WordPress blog to Astro, start with our blog theme starter template, or explore more community blog themes in our <a href=\"https://astro.build/themes\">theme showcase</a>.</p>\n<p>You can pass a <code dir=\"auto\">--template</code> argument to the <code dir=\"auto\">create astro</code> command to start a new Astro project with one of our official starters. Or, you can <a href=\"/en/install-and-setup/#install-from-the-cli-wizard\">start a new project from any existing Astro repository on GitHub</a>.</p>\n"
    }), createVNode($$PackageManagerTabs, {
      children: [createVNode(Fragment$1, {
        slot: "npm",
        "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.rvnnt.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">npm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm create astro@latest -- --template blog\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "pnpm",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">pnpm</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro@latest</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"pnpm create astro@latest --template blog\"><div></div></button></div></figure></div>"
      }), createVNode(Fragment$1, {
        slot: "yarn",
        "set:html": "<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"shell\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">yarn</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">create</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">astro</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">--template</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3B61B0\">blog</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"yarn create astro --template blog\"><div></div></button></div></figure></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>You can continue to <a href=\"/en/guides/cms/wordpress/\">use your existing WordPress blog as your CMS for Astro</a>, which means you will keep using your WordPress dashboard for writing your posts. Your content will be managed at WordPress, but all other aspects of your Astro site will be built in your code editing environment, and you will <a href=\"/en/guides/deploy/\">deploy your Astro site</a> separately from your WordPress site. (Be sure to update your domain at your host to keep the same website URL!)</p>\n<p>You may wish to take <a href=\"/en/tutorial/0-introduction/\">Astro’s Build a Blog Tutorial</a> if you are new to working in a code editor and using GitHub to store and deploy your site. It will walk you through all the accounts and setup you need! You will also learn how to <a href=\"/en/tutorial/3-components/\">build Astro components yourself</a>, and it will show you how to <a href=\"/en/tutorial/2-pages/2/\">add blog posts directly in Astro</a> if you choose not to use WordPress to write your content.</p>\n<p>If you want to move all of your existing post content to Astro, you may find this <a href=\"https://github.com/lonekorean/wordpress-export-to-markdown\">tool for exporting Markdown from WordPress helpful</a>. You may need to make some adjustments to the result if you have to <a href=\"https://swizec.com/blog/how-to-export-a-large-wordpress-site-to-markdown/\">convert a large or complicated WordPress site to Markdown</a>.</p>\n<p>To convert other types of sites, such as a portfolio or documentation site, see more official starter templates on <a href=\"https://astro.new\">astro.new</a>. You’ll find a link to each project’s GitHub repository, as well as one-click links to open a working project in IDX, StackBlitz, CodeSandbox and Gitpod online development environments.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"community-resources\">Community Resources</h2><a class=\"sl-anchor-link\" href=\"#community-resources\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Community Resources”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Goodbye Wordpress, hello Astro!",
        href: "https://trib.tv/posts/2025/wordpress-to-astro/"
      }), createVNode($$LinkCard, {
        title: "How I Migrated from Wordpress to Astro",
        href: "https://itsthatlady.dev/blog/migrate-from-wordpress-to-astro/"
      }), createVNode($$LinkCard, {
        title: "How and Why I Moved My Blog from WordPress to Astro and Markdown",
        href: "https://levelup.gitconnected.com/how-and-why-i-moved-my-blog-from-wordpress-to-astro-and-markdown-3549672d5a86"
      }), createVNode($$LinkCard, {
        title: "How I Migrated From Wordpress to Astro: Boosted Pagespeed Scores to 100% and Cut 100% Hosting cost",
        href: "https://devaradise.com/wordpress-to-static-website-astro/"
      }), createVNode($$LinkCard, {
        title: "WordPress to Astro site conversion",
        href: "https://share.transistor.fm/s/d86496cd"
      }), createVNode($$LinkCard, {
        title: "How to Convert a Wordpress blog to an Astro Static Site",
        href: "https://blog.okturtles.org/2024/10/convert-wordpress-to-static-site/"
      }), createVNode($$LinkCard, {
        title: "Why I switched from WordPress to Astro",
        href: "https://dev.to/fratzinger/why-i-switched-from-wordpress-to-astro-5ge"
      }), createVNode($$LinkCard, {
        title: "Why I ditched WordPress for Astro",
        href: "https://vbartalis.xyz/en/blog/why-i-ditched-wordpress-for-astro-js/"
      }), createVNode($$LinkCard, {
        title: "DeWP: utility to use your WordPress data in Astro projects",
        href: "https://delucis.github.io/dewp/"
      }), createVNode($$LinkCard, {
        title: "Astro vs. WordPress: Rendering Patterns of the Modern Web",
        href: "https://andrewkepson.com/blog/headless-wordpress/astro-vs-wordpress-rendering-patterns/"
      })]
    }), "\n", createVNode(_components.aside, {
      "aria-label": "Have a resource to share?",
      class: "starlight-aside starlight-aside--note",
      "set:html": "<p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Have a resource to share?</p><div class=\"starlight-aside__content\"><p>If you found (or made!) a helpful video or blog post about converting a WordPress site to Astro, <a href=\"https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx\">add it to this list</a>!</p></div>"
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

const url = "src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx/";
const file = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chasepursley/Development/ai/star-support/src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
