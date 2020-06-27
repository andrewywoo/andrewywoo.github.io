import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import Backdrop from "../Backdrop"

const Modal = ({ shouldShowModal, children }) => {
    return (
        <>
            <Backdrop shouldShowBackdrop={shouldShowModal} />
            <div
                inert
                aria-hidden={!shouldShowModal}
                role="dialog"
                aria-haspopup="dialog"
                aria-modal={!shouldShowModal}
                css={[
                    tw`transition-transform duration-500 ease-in-out fixed top-0 transform translate-x-0 w-screen h-screen bg-white z-10 pt-6`,
                    !shouldShowModal && tw`translate-x-full`,
                ]}
            >
                {children}
            </div>
        </>
    )
}

Modal.propTypes = {
    shouldShowModal: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal
