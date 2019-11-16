module.exports = {
  siteMetadata: {
    title: `fourthBlog`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'page-2',
        link: '/page-2'
      }
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jtalexander4`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
        ? `https://young-river-62351.herokuapp.com`
        : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (Optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
