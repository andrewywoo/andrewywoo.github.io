import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "twin.macro"

import BorderedSection from "../components/BorderedSection"

const PersonalWork = () => {
    return (
        <BorderedSection sectionTitle="Personal Work">
            <div tw="my-6 text-center sm:text-left">
                <OutboundLink
                    href="https://github.com/andrewywoo"
                    aria-label="Andrew's Github"
                    tw="text-2xl underline hover:text-red-500"
                >
                    Visit my GitHub!
                </OutboundLink>
            </div>
        </BorderedSection>
    )
}

export default PersonalWork
