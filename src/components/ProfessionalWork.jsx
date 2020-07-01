import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import tw from "twin.macro"

const WorkHeader = tw.h2`text-lg font-medium`
const WorkSection = tw.section`flex flex-col sm:flex-row items-center`
const WorkDateRange = tw.span`font-serif`

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
        <div tw="relative mt-16 mx-3 p-6 border rounded shadow">
            <h1
                tw="absolute px-6 bg-white text-2xl font-medium"
                style={{ top: "-17px" }}
            >
                Work Experience
            </h1>
            <div tw="mt-6 space-y-8">
                <WorkSection>
                    <Img fixed={dailyHarvest.childImageSharp.fixed} />
                    <div>
                        <WorkHeader tw="text-lg">Daily Harvest</WorkHeader>
                        <WorkDateRange>November 2019 - Present</WorkDateRange>
                    </div>
                </WorkSection>
                <WorkSection>
                    <Img fixed={dtcc.childImageSharp.fixed} />
                    <div>
                        <WorkHeader>
                            Depository Trust & Clearing Corporation
                        </WorkHeader>
                        <WorkDateRange>
                            September 2011 - November 2019
                        </WorkDateRange>
                    </div>
                </WorkSection>
            </div>
        </div>
    )
}

export default ProfessionalWork
