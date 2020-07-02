import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw from "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const StyledLink = tw(Link)`text-2xl underline hover:text-red-500 leading-none`

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
                    <article
                        key={id}
                        tw="my-12 mx-6 flex flex-col md:flex-row justify-center items-center space-x-4 space-y-2"
                    >
                        <div tw="font-serif text-lg self-start md:self-center sm:text-xl w-1/3">
                            {date}
                        </div>
                        <div>
                            <StyledLink to={path}>
                                <h2>{title}</h2>
                            </StyledLink>
                            <div tw="font-mono text-sm mt-2">
                                by{" "}
                                <a
                                    href={`https://twitter.com/${author.substr(
                                        1
                                    )}`}
                                >
                                    {author}
                                </a>
                            </div>
                            <div tw="mt-2">
                                {excerpt}
                                <span>
                                    {" "}
                                    <StyledLink tw="text-base" to={path}>
                                        Read More
                                    </StyledLink>
                                </span>
                            </div>
                        </div>
                    </article>
                )
            })}
        </Layout>
    )
}

export default Blog
