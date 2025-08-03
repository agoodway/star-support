import { o as objectType, s as stringType } from './astro/server_CeKHpNWz.mjs';

const defaultI18nSchema = () => starlightI18nSchema().merge(pagefindI18nSchema()).merge(expressiveCodeI18nSchema());
function i18nSchema({
  extend = objectType({})
} = {}) {
  return defaultI18nSchema().merge(extend).passthrough();
}
function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema()).merge(expressiveCodeI18nSchema());
}
function starlightI18nSchema() {
  return objectType({
    "skipLink.label": stringType().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": stringType().describe("Text displayed in the search bar."),
    "search.ctrlKey": stringType().describe(
      "Visible representation of the Control key potentially used in the shortcut key to open the search modal."
    ),
    "search.cancelLabel": stringType().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": stringType().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": stringType().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": stringType().describe("Name of the dark color theme."),
    "themeSelect.light": stringType().describe("Name of the light color theme."),
    "themeSelect.auto": stringType().describe("Name of the automatic color theme that syncs with system preferences."),
    "languageSelect.accessibleLabel": stringType().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": stringType().describe("Accessible label for the mobile menu button."),
    "sidebarNav.accessibleLabel": stringType().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it fom other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": stringType().describe("Title for the table of contents component."),
    "tableOfContents.overview": stringType().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": stringType().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": stringType().describe("Text for the link to edit a page."),
    "page.lastUpdated": stringType().describe("Text displayed in front of the last updated date in the page footer."),
    "page.previousLink": stringType().describe("Label shown on the “previous page” pagination arrow in the page footer."),
    "page.nextLink": stringType().describe("Label shown on the “next page” pagination arrow in the page footer."),
    "page.draft": stringType().describe(
      "Development-only notice informing users they are on a page that is a draft which will not be included in production builds."
    ),
    "404.text": stringType().describe("Text shown on Starlight’s default 404 page"),
    "aside.tip": stringType().describe("Text shown on the tip aside variant"),
    "aside.note": stringType().describe("Text shown on the note aside variant"),
    "aside.caution": stringType().describe("Text shown on the warning aside variant"),
    "aside.danger": stringType().describe("Text shown on the danger aside variant"),
    "fileTree.directory": stringType().describe("Label for the directory icon in the file tree component."),
    "builtWithStarlight.label": stringType().describe(
      "Label for the “Built with Starlight” badge optionally displayed in the site footer."
    ),
    "heading.anchorLabel": stringType().describe("Label for anchor links in Markdown content.")
  }).partial();
}
function pagefindI18nSchema() {
  return objectType({
    "pagefind.clear_search": stringType().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": stringType().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": stringType().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": stringType().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": stringType().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": stringType().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": stringType().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}
function expressiveCodeI18nSchema() {
  return objectType({
    "expressiveCode.copyButtonCopied": stringType().describe('Expressive Code UI translation. English default value: `"Copied!"`'),
    "expressiveCode.copyButtonTooltip": stringType().describe('Expressive Code UI translation. English default value: `"Copy to clipboard"`'),
    "expressiveCode.terminalWindowFallbackTitle": stringType().describe('Expressive Code UI translation. English default value: `"Terminal window"`')
  }).partial();
}

function getCollectionPathFromRoot(collection, { root, srcDir }) {
  return (typeof srcDir === "string" ? srcDir : srcDir.pathname).replace(
    typeof root === "string" ? root : root.pathname,
    ""
  ) + "content/" + collection;
}

function ensureLeadingSlash(href) {
  if (href[0] !== "/") href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/") href += "/";
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/") href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/") href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}
function stripHtmlExtension(path) {
  const pathWithoutTrailingSlash = stripTrailingSlash(path);
  return pathWithoutTrailingSlash.endsWith(".html") ? pathWithoutTrailingSlash.slice(0, -5) : path;
}
function ensureHtmlExtension(path) {
  path = stripLeadingAndTrailingSlashes(path);
  if (!path.endsWith(".html")) {
    path = path ? path + ".html" : "/index.html";
  }
  return ensureLeadingSlash(path);
}
function stripExtension(path) {
  const periodIndex = path.lastIndexOf(".");
  return path.slice(0, periodIndex > -1 ? periodIndex : void 0);
}

export { stripTrailingSlash as a, stripLeadingSlash as b, stripHtmlExtension as c, ensureTrailingSlash as d, ensureHtmlExtension as e, ensureLeadingSlash as f, getCollectionPathFromRoot as g, stripExtension as h, builtinI18nSchema as i, i18nSchema as j, stripLeadingAndTrailingSlashes as s };
