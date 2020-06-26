import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

import Modal from "../Modal"
import NavLinks from "../NavLinks"
import CloseIcon from "../Icons/CloseIcon"

const SideNavigationModal = ({
    shouldShowSideNavigation,
    setShouldShowSideNavigation,
}) => {
    return (
        <Modal shouldShowModal={shouldShowSideNavigation}>
            <div tw="container flex justify-end pr-3">
                <button
                    aria-label="Close Menu"
                    onClick={() => {
                        setShouldShowSideNavigation(false)
                    }}
                >
                    <CloseIcon />
                </button>
            </div>
            <NavLinks isModal={true} />
        </Modal>
    )
}

SideNavigationModal.propTypes = {
    shouldShowSideNavigation: PropTypes.bool.isRequired,
    setShouldShowSideNavigation: PropTypes.func.isRequired,
}

export default SideNavigationModal
