module.exports = {
    siteMetadata: {
        title: `Andrew Woo`,
        description: `Andrew Woo Software Engineer Site`,
        author: `@andrewywoo`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-adsense`,
            options: {
                publisherId: `ca-pub-1431127993178422`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-171543313-1",
                head: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `andrew-woo-dev-portfolio`,
                short_name: `aw-portfolio`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    classPrefix: "language-",
                    inlineCodeMarker: null,
                    aliases: {},
                    showLineNumbers: false,
                    noInlineHighlight: false,
                    languageExtensions: [
                      {
                        language: "superscript",
                        extend: "javascript",
                        definition: {
                          superscript_types: /(SuperType)/,
                        },
                        insertBefore: {
                          function: {
                            superscript_keywords: /(superif|superelse)/,
                          },
                        },
                      },
                    ],
                    prompt: {
                      user: "root",
                      host: "localhost",
                      global: false,
                    },
                    escapeEntities: {},
                  },
                },
              ],
            },
          },
    ],
}
