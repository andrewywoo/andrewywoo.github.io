import React from "react"
import BorderedSection from "../components/BorderedSection"
import "twin.macro"

const PersonalWork = () => {
    return (
        <BorderedSection sectionTitle="Personal Work">
            <div tw="my-6 text-center sm:text-left">
                <a
                    href="https://github.com/andrewywoo"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Andrew's Github"
                    tw="text-2xl underline hover:text-red-500"
                >
                    Visit my github!
                </a>
            </div>
        </BorderedSection>
    )
}

export default PersonalWork
