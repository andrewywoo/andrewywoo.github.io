import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Typewriter from "../components/Typewriter"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>My name is Andrew Woo.</h1>
        <Typewriter />
    </Layout>
)

export default IndexPage
