import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

import MenuIcon from "../Icons/MenuIcon"
import NavLinks from "../NavLinks"

const Navigation = ({ setShouldShowSideNavigation }) => {
    return (
        <nav aria-label="primary">
            <div tw="sm:hidden mr-3">
                <button
                    aria-label="Open Menu"
                    onClick={() => {
                        setShouldShowSideNavigation(true)
                    }}
                >
                    <MenuIcon />
                </button>
            </div>
            <NavLinks />
        </nav>
    )
}

Navigation.propTypes = {
    setShouldShowSideNavigation: PropTypes.func.isRequired,
}

export default Navigation
