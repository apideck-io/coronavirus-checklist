const title = 'Coronavirus (COVID-19) checklist'
const url = 'https://wwww.coronaviruschecklist.co'

module.exports = {
  siteMetadata: {
    title: title,
    siteUrl: url
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: url + '/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
