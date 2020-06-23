import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"

const Blog = () => {
    const {
        allMarkdownRemark: { nodes: posts },
    } = useStaticQuery(
        graphql`
            {
                allMarkdownRemark {
                    nodes {
                        html
                        id
                        frontmatter {
                            path
                            title
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
            <header>
                <h1>Blog</h1>
            </header>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <Link to={post.frontmatter.path}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <h3>{post.frontmatter.author}</h3>
                    </article>
                )
            })}
        </Layout>
    )
}

export default Blog
