import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"

import BorderedSection from "../components/BorderedSection"
import WorkSection from "../components/WorkSection"

const works = [
    {
        key: "dailyHarvest",
        title: "Daily Harvest",
        imgName: "daily-harvest-logo.jpg",
        dateRangeLabel: "November 2019 - Present",
    },
    {
        key: "dtcc",
        title: "Depository Trust & Clearing Corporation",
        imgName: "dtcc-logo.jpeg",
        dateRangeLabel: "September 2011 - November 2019",
    },
]

const ProfessionalWork = () => {
    const {
        allFile: { edges },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "work-logos" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fixed(width: 75) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)

    // TODO: Optimize time complexity
    // * This map will grow O(n^2) where n is the number of worked places
    // * This might not matter as work experience won't be that large.
    const workedList = works.map(work => {
        let result = {}
        edges.forEach(edge => {
            if (edge.node.base === work.imgName) {
                result = {
                    ...work,
                    childImageSharp: edge.node.childImageSharp,
                }
            }
        })
        return result
    })

    return (
        <BorderedSection sectionTitle="Work Experience">
            <div tw="my-6 space-y-8">
                {workedList.map(worked => {
                    return (
                        <WorkSection
                            key={worked.key}
                            img={worked.childImageSharp.fixed}
                            title={worked.title}
                            dateRangeLabel={worked.dateRangeLabel}
                        />
                    )
                })}
            </div>
        </BorderedSection>
    )
}

export default ProfessionalWork
