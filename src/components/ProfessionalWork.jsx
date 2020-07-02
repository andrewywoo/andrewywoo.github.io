import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"

import BorderedSection from "../components/BorderedSection"
import WorkSection from "../components/WorkSection"

// TODO: Potentially dynamically generate each work section
const ProfessionalWork = () => {
    const { dailyHarvest, dtcc } = useStaticQuery(graphql`
        query {
            dailyHarvest: file(relativePath: { eq: "daily-harvest-logo.jpg" }) {
                childImageSharp {
                    fixed(width: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            dtcc: file(relativePath: { eq: "dtcc-logo.jpeg" }) {
                childImageSharp {
                    fixed(width: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <BorderedSection sectionTitle="Work Experience">
            <div tw="my-6 space-y-8">
                <WorkSection
                    img={dailyHarvest.childImageSharp.fixed}
                    title="Daily Harvest"
                    dateRangeLabel="November 2019 - Present"
                />
                <WorkSection
                    img={dtcc.childImageSharp.fixed}
                    title="Depository Trust & Clearing Corporation"
                    dateRangeLabel="September 2011 - November 2019"
                />
            </div>
        </BorderedSection>
    )
}

export default ProfessionalWork
