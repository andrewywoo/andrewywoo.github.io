import React from "react"
import { graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "twin.macro"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
// import { BlogDiv } from "./styled"

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "dddd, MMMM Do YYYY")
                author
            }
        }
    }
`

const PostTemplate = ({ data: { mdx } }) => {
    const {
        frontmatter: { title, date, author },
    } = mdx

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
                            <OutboundLink
                                href={`https://twitter.com/${author.substr(1)}`}
                            >
                                {author}
                            </OutboundLink>
                        </div>
                        <Link
                            to="/blog"
                            tw="inline-block underline hover:text-red-500"
                        >
                            Back to the blog
                        </Link>
                    </aside>
                    <MDXProvider>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </article>
        </Layout>
    )
}

export default PostTemplate
