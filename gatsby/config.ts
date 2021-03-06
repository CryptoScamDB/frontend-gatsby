export const API_ENDPOINT = 'https://api.cryptoscamdb.org/v1';
export const RECAPTCHA_SITEKEY = '6LfTSysUAAAAAOIYE_x9aZuqBNRlzTRbHlMRpAiK';

export default {
  siteMetadata: {
    title: 'CryptoScamDB',
    siteUrl: 'https://cryptoscamdb.org',
    description:
      'Keeping track of all current cryptocurrency scams in an open-source database - Brought to you by MyCrypto',
    author: '@CryptoScamDB',
    theme: '#FFD166'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-recaptcha',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CryptoScamDB',
        short_name: 'CSDB',
        start_url: '/',
        background_color: '#282138',
        theme_color: '#FFD166',
        display: 'minimal-ui',
        icon: 'src/images/logo/csdb-icon.svg'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://analytics.mycryptoapi.com',
        siteUrl: 'https://cryptoscamdb.org'
      }
    },
    {
      resolve: 'gatsby-plugin-recaptcha',
      options: {
        async: true,
        defer: false,
        args: `?render=onload`
      }
    }
  ]
};
