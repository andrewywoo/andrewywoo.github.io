import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"

const IndexPage = () => {
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

    const sectionRef = useRef(null)
    const [shouldShowProfileHeader, setShouldShowProfileHeader] = useState(
        false
    )

    useEffect(() => {
        function shouldShowProfileHeader(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShouldShowProfileHeader(false)
                } else {
                    setShouldShowProfileHeader(true)
                }
            })
        }

        let observer = new IntersectionObserver(shouldShowProfileHeader, {})

        observer.observe(sectionRef.current)
    }, [sectionRef, setShouldShowProfileHeader])

    return (
        <Layout shouldShowProfileHeader={shouldShowProfileHeader}>
            <SEO title="Home" />
            <section
                ref={sectionRef}
                tw="container flex flex-wrap justify-center items-center my-8 md:my-32"
            >
                <Img
                    tw="h-56 w-56 md:h-96 md:w-96 rounded-full"
                    fluid={data.file.childImageSharp.fluid}
                    alt="Potrait of Andrew Woo"
                />
                <IntroText />
            </section>
            {new Array(6).fill(1).map((e, i) => {
                return (
                    <section key={i} tw="my-32">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </section>
                )
            })}
        </Layout>
    )
}

export default IndexPage
