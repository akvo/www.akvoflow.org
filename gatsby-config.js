/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Akvo Flow Landing Page",
    siteUrl: "https://www.akvoflow.org",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages: ["en", "es", "fr"],
        defaultLanguage: "en",
        siteUrl: "https://www.akvoflow.org",
        i18nextOptions: {
          //debug: true,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          lowerCaseLng: true,
          nsSeparator: false,
        },
      },
    },
  ],
};
