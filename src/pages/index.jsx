import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IntroText />
    </Layout>
)

export default IndexPage
