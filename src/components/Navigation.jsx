import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import MenuIcon from "./Icons/MenuIcon"
import NavLinks from "./NavLinks"

const Navigation = ({
    shouldShowSideNavigation,
    setShouldShowSideNavigation,
}) => {
    return (
        <nav aria-label="primary" tw="h-16 flex items-center">
            <div tw="sm:hidden pr-3">
                <button
                    css={shouldShowSideNavigation && tw`hidden`}
                    aria-hidden={shouldShowSideNavigation}
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
    shouldShowSideNavigation: PropTypes.bool.isRequired,
    setShouldShowSideNavigation: PropTypes.func.isRequired,
}

export default Navigation
