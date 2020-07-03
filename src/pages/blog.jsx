import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BlogSection from "../components/BlogSection"

const Blog = () => {
    const {
        allMarkdownRemark: { nodes: posts },
    } = useStaticQuery(
        graphql`
            {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                    nodes {
                        excerpt(pruneLength: 250)
                        id
                        frontmatter {
                            path
                            title
                            date(formatString: "MMMM DD, YYYY")
                            author
                            categories
                            tags
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <SEO title="Blog" />
            <header tw="my-6 mx-6">
                <h1 tw="text-2xl sm:text-3xl font-medium">Latest Blogs</h1>
            </header>
            {posts.map(post => {
                const {
                    id,
                    excerpt,
                    frontmatter: { date, path, title, author },
                } = post

                return (
                    <BlogSection
                        key={id}
                        date={date}
                        path={path}
                        title={title}
                        author={author}
                        excerpt={excerpt}
                    />
                )
            })}
        </Layout>
    )
}

export default Blog
