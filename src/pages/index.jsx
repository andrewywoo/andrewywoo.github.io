import React from "react"
import "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section tw="container flex flex-wrap justify-center items-center my-8 md:my-32">
            <div tw="h-48 w-48 md:h-64 md:w-64 rounded-full border bg-gray-500 m-12"></div>
            <IntroText />
        </section>
        {new Array(5).fill(1).map(() => {
            return (
                <section tw="my-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </section>
            )
        })}
    </Layout>
)

export default IndexPage
