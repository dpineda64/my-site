const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Daniel Pineda`,
    description: `I'm a Full Stack developer`,
    author: `@dpineda64`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-typescript`,
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: process.env.MIXPANEL_TOKEN,
        enableOnDevMode: true,
        pageViews: {
          '/': 'Site Visited',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@': './',
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-alias-imports',
    //   options: {
    //     alias: {
    //       '@components': path.resolve(__dirname, 'src/components'),
    //       '@': path.resolve(__dirname, 'src'),
    //     },
    //     extensions: ['.ts', 'tsx'],
    //   },
    // },
  ],
};
