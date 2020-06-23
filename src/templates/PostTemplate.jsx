import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/Seo"



const PostTemplate = ({ data }) => {
    const { markdownRemark: post } = data;
    const {frontmatter: {title, author}, html} = post;

    return (
        <Layout>
            <SEO title={title} />
        <article>
            <header>
                <h1>{title}</h1>
                <h2>{author}</h2>
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
                author
            }
        }
    }
`
