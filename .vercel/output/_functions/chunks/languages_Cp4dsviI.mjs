const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://docs.astro.build/", "SSR": true};
const allLanguages = {
  en: "English",
  de: "Deutsch",
  "pt-br": "Português do Brasil",
  es: "Español",
  "zh-cn": "简体中文",
  "zh-tw": "正體中文",
  fr: "Français",
  hi: "हिन्दी",
  ar: "العربية",
  ja: "日本語",
  ko: "한국어",
  pl: "Polski",
  ru: "Русский",
  it: "Italiano"
};
const twoLanguages = {
  en: "English",
  ko: "한국어"
};
const languages = Object.assign(__vite_import_meta_env__, { LANG: process.env.LANG })?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages;
const rtlLanguages = /* @__PURE__ */ new Set(["ar"]);

export { languages as l, rtlLanguages as r };
