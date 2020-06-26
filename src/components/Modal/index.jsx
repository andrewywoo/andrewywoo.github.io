import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

const Modal = ({ children }) => {
    return <div tw="fixed w-screen h-screen bg-white z-10">{children}</div>
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Modal
