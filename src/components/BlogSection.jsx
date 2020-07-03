import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw from "twin.macro"

const StyledLink = tw(Link)`text-2xl underline hover:text-red-500 leading-none`

const BlogSection = ({ date, path, title, author, excerpt }) => (
    <article tw="my-12 mx-6 flex flex-col md:flex-row justify-center items-center space-x-4 space-y-2">
        <div tw="font-serif text-lg sm:text-xl self-start md:self-center w-full md:w-1/5">
            {date}
        </div>
        <div tw="w-full">
            <StyledLink to={path}>
                <h2>{title}</h2>
            </StyledLink>
            <div tw="font-mono text-sm mt-2">
                by{" "}
                <a href={`https://twitter.com/${author.substr(1)}`}>{author}</a>
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

BlogSection.propTypes = {
    date: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
}

export default BlogSection
