exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const PostTemplate = require.resolve(
        "./src/templates/PostTemplate/index.jsx"
    )

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            slug
                            title
                            author
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const {
            frontmatter: { slug },
        } = node

        createPage({
            path: `/blog/${slug}/`,
            component: PostTemplate,
            context: {
                slug: slug,
            },
        })
    })
}
