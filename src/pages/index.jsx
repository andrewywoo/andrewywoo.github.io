import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "twin.macro"
import Konami from "react-konami-code"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"
import Synopsis from "../components/Synopsis"
import SkillsSection from "../components/SkillsSection"

const ANIMATED_TEXT = "I am a Software Engineer."

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

    const [animatedText, setAnimatedText] = useState(ANIMATED_TEXT)

    const [shouldShowProfileHeader, setShouldShowProfileHeader] = useState(
        false
    )

    const sectionRef = useRef(null)

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

        return () => observer.disconnect()
    }, [sectionRef, setShouldShowProfileHeader])

    return (
        <>
            <Konami
                action={() => {
                    setAnimatedText("I like games too! 👍")
                }}
            />
            <Layout shouldShowProfileHeader={shouldShowProfileHeader}>
                <SEO title="Home" />
                <section
                    ref={sectionRef}
                    tw="container flex flex-wrap justify-center items-center mt-16 sm:mt-32"
                >
                    <Img
                        tw="h-56 w-56 sm:h-96 sm:w-96 rounded-full"
                        fluid={data.file.childImageSharp.fluid}
                        alt="Potrait of Andrew Woo"
                    />
                    <IntroText animatedText={animatedText} />
                </section>
                <Synopsis />
                <SkillsSection />
            </Layout>
        </>
    )
}

export default IndexPage
