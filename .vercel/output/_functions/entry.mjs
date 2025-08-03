import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D3XZ4u5-.mjs';
import { manifest } from './manifest_BinntOdb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/_llms-txt/_slug_.txt.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/star-support/chat.astro.mjs');
const _page4 = () => import('./pages/llms-full.txt.astro.mjs');
const _page5 = () => import('./pages/llms-small.txt.astro.mjs');
const _page6 = () => import('./pages/llms.txt.astro.mjs');
const _page7 = () => import('./pages/open-graph/_---path_.astro.mjs');
const _page8 = () => import('./pages/_lang_/404.astro.mjs');
const _page9 = () => import('./pages/_lang_/install.astro.mjs');
const _page10 = () => import('./pages/_lang_/tutorial.astro.mjs');
const _page11 = () => import('./pages/_lang_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const _page13 = () => import('./pages/_---enredirectslug_.astro.mjs');
const _page14 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.54.3_typescript@5.6.2_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/starlight-llms-txt@0.5.1_@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3_6hme5qszzdgjurx6f7itbfd43a/node_modules/starlight-llms-txt/llms-custom.txt.ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/star-support/chat.ts", _page3],
    ["node_modules/.pnpm/starlight-llms-txt@0.5.1_@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3_6hme5qszzdgjurx6f7itbfd43a/node_modules/starlight-llms-txt/llms-full.txt.ts", _page4],
    ["node_modules/.pnpm/starlight-llms-txt@0.5.1_@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3_6hme5qszzdgjurx6f7itbfd43a/node_modules/starlight-llms-txt/llms-small.txt.ts", _page5],
    ["node_modules/.pnpm/starlight-llms-txt@0.5.1_@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3_6hme5qszzdgjurx6f7itbfd43a/node_modules/starlight-llms-txt/llms.txt.ts", _page6],
    ["src/pages/open-graph/[...path].ts", _page7],
    ["src/pages/[lang]/404.astro", _page8],
    ["src/pages/[lang]/install.astro", _page9],
    ["src/pages/[lang]/tutorial.astro", _page10],
    ["src/pages/[lang]/index.astro", _page11],
    ["src/pages/index.astro", _page12],
    ["src/pages/[...enRedirectSlug].astro", _page13],
    ["node_modules/.pnpm/@astrojs+starlight@0.35.2_astro@5.12.8_@types+node@20.17.10_jiti@2.3.3_rollup@4.34.9_sass@1.5_dloq6whhu32b7mucqnreihbmnq/node_modules/@astrojs/starlight/routes/static/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "3451bf63-15a8-42f3-aec6-4ad9265d9c79",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
