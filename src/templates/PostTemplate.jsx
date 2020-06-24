import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const PostTemplate = ({ data }) => {
    const { markdownRemark: post } = data
    const {
        frontmatter: { title, date, author },
        html,
    } = post

    return (
        <Layout>
            <SEO title={title} />
            <article>
                <header>
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                    <h3>written by {author}</h3>
                </header>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Layout>
    )
}

export default PostTemplate

export const postQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                author
            }
        }
    }
`
