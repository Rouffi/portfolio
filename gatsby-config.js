require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Rouffi`,
    siteTitleAlt: `Rouffi's website`,
    siteHeadline: `Rouffi's website - Welcome`,
    siteDescription: `Designer, Cognitive Science, Paris`,
    siteLanguage: `en`,
    author: `@rouffi`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/rouffi`,
          },
          {
              name: `LinkedIn`,
              url: `https://linkedin.com/in/rouffi/`,
          },
          {
            name: `Facebook`,
            url: `https://facebook.com/rouffix/`,
          },
          {
            name: `Instagram`,
            url: `https://instagram.com/rouffi/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Romain Rouyer`,
        short_name: `rouffi-website`,
        description: `Site personel de Romain Rouyer, alias Rouffi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
