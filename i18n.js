module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  pages: {
    '*': ['common'], // We use one common file for all translations
  },
  loadLocaleFrom: (lang, ns) => import(`./src/locales/${lang}.${ns}.json`).then((m) => m.default),
};
