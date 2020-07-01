import React from "react"
import Img from "gatsby-image"
import "twin.macro"

const WorkSection = ({ img, title, dateRangeLabel }) => (
    <section tw="flex flex-col sm:flex-row items-center space-x-6">
        <Img fixed={img} />
        <div>
            <h2 tw="text-center sm:text-left text-lg font-medium">{title}</h2>
            <span tw="block text-center sm:text-left font-serif">{dateRangeLabel}</span>
        </div>
    </section>
)

export default WorkSection
