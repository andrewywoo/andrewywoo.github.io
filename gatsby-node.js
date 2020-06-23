exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const PostTemplate = require.resolve("./src/templates/PostTemplate.jsx")

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
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
        createPage({
            path: node.frontmatter.path,
            component: PostTemplate,
        })
    })
}
