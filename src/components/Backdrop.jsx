import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

function Backdrop({ shouldShowBackdrop }) {
    return shouldShowBackdrop && <div tw="fixed top-0 w-screen h-screen bg-white bg-black opacity-25 z-10"></div>;
}

Backdrop.propTypes = {
    shouldShowBackdrop: PropTypes.bool.isRequired,
}

export default Backdrop
