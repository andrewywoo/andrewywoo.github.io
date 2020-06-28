import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "twin.macro"
import Konami from "react-konami-code"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"

const TYPING_TEXT = "I am a Software Engineer."

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

    const [animatedText, setAnimatedText] = useState(TYPING_TEXT)

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
                <section tw="h-auto w-3/4 mx-auto my-32 md:my-64 text-2xl md:text-3xl">
                    Working as a software engineer for 8+ years across the
                    stack, I've been exposed many projects to solve a wide array
                    of problems. These problems span from securities processing
                    in fintech to growth engineering in e-commerce. I take a
                    heavy interest in the web and the evolving landscape of web
                    technologies, as well as front end development to provide
                    amazing user experience.
                </section>
                <section tw="h-auto w-full mx-auto my-32 md:my-64 text-2xl md:text-3xl">
                    <h2>Skills</h2>
                    <div tw="flex">
                        <div>
                            <h3>Web</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Javascript</h3>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Angular</li>
                                <li>NgRx</li>
                                <li>Node.js</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Java</h3>
                            <ul>
                                <li>Spring</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Python</h3>
                            <ul>
                                <li>Flask</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Database</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>Postgres</li>
                                <li>DB2</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default IndexPage
