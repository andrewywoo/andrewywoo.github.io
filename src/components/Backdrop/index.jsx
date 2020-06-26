import React from "react"
import PropTypes from "prop-types"

function Backdrop({ shouldShowBackdrop }) {
    return shouldShowBackdrop && <div>test</div>;
}

Backdrop.propTypes = {
    shouldShowBackdrop: PropTypes.bool.isRequired,
}

export default Backdrop
