/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = "https://www.akvoflow.org";
const languages = ["en", "es", "fr"];
const defaultLanguage = "en";

module.exports = {
  siteMetadata: {
    title: "Akvo Flow Landing Page",
    siteUrl,
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
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          //debug: true,
          defaultNS: 'common',
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
