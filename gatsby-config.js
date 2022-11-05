module.exports = {
  siteMetadata: {
    siteUrl: "https://mamiri263.com",
    title: "mamiri263's portfolio",
    description: `mamiri's personal portfolio`,
    twitterUsername: `@wynnu_`,
    image: `/icon.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
};
