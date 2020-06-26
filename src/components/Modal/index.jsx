import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const Modal = ({ shouldShowModal, children }) => {
    return (
        <div
            css={[
                tw`fixed top-0 w-screen h-screen bg-white z-10 pt-6`,
                !shouldShowModal && tw`hidden`,
            ]}
        >
            {children}
        </div>
    )
}

Modal.propTypes = {
    shouldShowModal: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal
