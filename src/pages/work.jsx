import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProfessionalWork from "../components/ProfessionalWork"
import PersonalWork from "../components/PersonalWork"

function Work() {
    return (
        <Layout>
            <SEO title="Work" />
            <ProfessionalWork />
            <PersonalWork />
        </Layout>
    )
}

export default Work
