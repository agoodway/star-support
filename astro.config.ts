import starlight from '@astrojs/starlight';
import vercelStatic from '@astrojs/vercel/static';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { defineConfig, sharpImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';
import { sitemap } from './config/integrations/sitemap';
import { makeLocalesConfig } from './config/locales';
import { starlightPluginLlmsTxt } from './config/plugins/llms-txt';
import { rehypeTasklistEnhancer } from './config/plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './config/plugins/remark-fallback-lang';

// Use Vercel's auto-provided URL when deployed, fallback to custom SITE_URL or default
const site = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.SITE_URL || 'https://docs.astro.build/';

// https://astro.build/config
export default defineConfig({
	site,
	output: 'static',
	adapter: vercelStatic(),
	integrations: [
		devServerFileWatcher([
			'./config/**', // Custom plugins and integrations
			'./astro.sidebar.ts', // Sidebar configuration file
			'./src/content/nav/*.ts', // Sidebar labels
		]),
		starlight({
			title: 'Docs',
			expressiveCode: {
				plugins: [pluginCollapsibleSections()],
			},
			components: {
				EditLink: './src/components/starlight/EditLink.astro',
				Hero: './src/components/starlight/Hero.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				Footer: './src/components/starlight/Footer.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				Search: './src/components/starlight/Search.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
			},
			routeMiddleware: './src/routeData.ts',
			editLink: {
				baseUrl: 'https://github.com/withastro/docs/edit/main',
			},
			defaultLocale: 'en',
			locales: makeLocalesConfig(),
			sidebar,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/astro' },
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
			],
			pagefind: false,
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
			],
			disable404Route: true,
			plugins: [starlightPluginLlmsTxt()],
		}),
		sitemap(),
	],
	trailingSlash: 'always',
	scopedStyleStrategy: 'where',
	compressHTML: false,
	markdown: {
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			[remarkSmartypants, { dashes: false }],
			// Add our custom plugin that marks links to fallback language pages
			remarkFallbackLang(),
		],
		rehypePlugins: [
			rehypeSlug,
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
		],
	},
	image: {
		domains: ['avatars.githubusercontent.com'],
		service: sharpImageService(),
	},
});
