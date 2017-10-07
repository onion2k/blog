module.exports = {
  siteMetadata: {
    author: 'Chris Neale',
    title: `Ooer`,
    siteUrl: `https://blog.ooer.com`,
    description: `Ooer description.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
  ],
}
