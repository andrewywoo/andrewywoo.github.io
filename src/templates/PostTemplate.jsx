import React from "react"
import { graphql, Link } from "gatsby"
import tw, { styled } from "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const BlogDiv = styled.div`
    ${tw`mx-12 w-full lg:w-9/12`}
    p {
        ${tw`mb-6`}
    }
    h2 {
        ${tw`text-3xl md:text-4xl font-medium mb-6`}
    }
    h3 {
        ${tw`text-2xl md:text-3xl mb-2`}
    }
`

const PostTemplate = ({ data }) => {
    const { markdownRemark: post } = data
    const {
        frontmatter: { title, date, author },
        html,
    } = post

    return (
        <Layout>
            <SEO title={title} />
            <article tw="my-8 mx-6">
                <header tw="text-center lg:mb-16">
                    <div tw="font-serif text-lg">{date}</div>
                    <h1 tw="text-4xl md:text-5xl font-bold mb-2 lg:mb-6 leading-none">
                        {title}
                    </h1>
                    <hr tw="hidden lg:block" />
                </header>

                <div tw="flex flex-col items-center lg:flex-row lg:items-start">
                    <aside tw="text-center mb-8 lg:mb-0">
                        <div tw="font-mono">
                            written by{" "}
                            <a href={`https://twitter.com/${author.substr(1)}`}>
                                {author}
                            </a>
                        </div>
                        <Link
                            to="/blog"
                            tw="inline-block underline hover:text-red-500"
                        >
                            Back to the blog
                        </Link>
                    </aside>
                    <BlogDiv dangerouslySetInnerHTML={{ __html: html }} />
                </div>
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
                date(formatString: "dddd, MMMM Do YYYY")
                author
            }
        }
    }
`
