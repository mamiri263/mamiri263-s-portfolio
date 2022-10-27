module.exports = {
  pathPrefix: "/mamiri263-portfolio",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mamiri263 portfolio",
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
  ],
};
