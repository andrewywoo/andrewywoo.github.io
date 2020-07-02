import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

const BorderedSection = ({ sectionTitle, children }) => {
    return (
        <div tw="relative my-16 mx-4 p-6 border rounded shadow">
            <h1
                tw="absolute px-6 bg-white text-2xl font-medium"
                style={{ top: "-19px" }}
            >
                {sectionTitle}
            </h1>
            {children}
        </div>
    )
}

BorderedSection.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
}

BorderedSection.defaultProps = {
    children: null,
}

export default BorderedSection
