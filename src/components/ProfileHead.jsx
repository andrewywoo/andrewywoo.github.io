import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import tw from "twin.macro"

const ProfileHead = ({ shouldShowProfileHeader }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "cactus_andrew.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const [shouldFadeIn, setShouldFadeIn] = useState(false)

    useEffect(() => {
        setShouldFadeIn(shouldShowProfileHeader)
    }, [setShouldFadeIn, shouldShowProfileHeader])

    return (
        <>
            <div
                css={[
                    tw`opacity-0 flex items-center transition duration-500 ease-in-out`,
                    shouldFadeIn && tw`opacity-100`,
                ]}
            >
                <Link tw="" to="/">
                    <div tw="flex items-center px-3">
                        <Img
                            tw="h-8 w-8 rounded-full mr-3"
                            fluid={data.file.childImageSharp.fluid}
                            alt="Potrait of Andrew Woo"
                        />
                        <span tw="text-base md:text-xl font-medium">
                            Andrew Woo
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}

ProfileHead.propTypes = {
    shouldShowProfileHeader: PropTypes.bool.isRequired,
}

export default ProfileHead
