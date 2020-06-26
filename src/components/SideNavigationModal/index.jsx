import React from "react"
import "twin.macro"

import Modal from "../Modal"
import NavLinks from "../NavLinks"
import CloseIcon from "../Icons/CloseIcon"

const SideNavigationModal = () => {
    return (
        <Modal>
            <div tw="container flex justify-end pr-3">
                <CloseIcon />
            </div>
            <NavLinks isModal={true} />
        </Modal>
    )
}

export default SideNavigationModal
