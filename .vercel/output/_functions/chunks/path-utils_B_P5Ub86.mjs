function getLanguageFromURL(pathname) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "en";
}
const stripLangFromSlug = (slug) => slug.split("/").slice(1).join("/");
const getLangFromSlug = (slug) => slug.split("/")[0];

export { getLangFromSlug as a, getLanguageFromURL as g, stripLangFromSlug as s };
