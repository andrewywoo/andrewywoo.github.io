import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

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
                    css={!shouldShowSideNavigation && tw`hidden`}
                    aria-label="Close Menu"
                    onClick={() => {
                        setShouldShowSideNavigation(false)
                    }}
                >
                    <CloseIcon />
                </button>
            </div>
            <NavLinks
                isLinkFocusable={!shouldShowSideNavigation}
                isModal={true}
            />
        </Modal>
    )
}

SideNavigationModal.propTypes = {
    shouldShowSideNavigation: PropTypes.bool.isRequired,
    setShouldShowSideNavigation: PropTypes.func.isRequired,
}

export default SideNavigationModal
