import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

const Backdrop = ({ shouldShowBackdrop }) =>
    shouldShowBackdrop && (
        <div tw="fixed top-0 w-screen h-screen bg-white bg-black opacity-25 z-20"></div>
    )

Backdrop.propTypes = {
    shouldShowBackdrop: PropTypes.bool.isRequired,
}

export default Backdrop
