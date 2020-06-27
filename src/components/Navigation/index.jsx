import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import MenuIcon from "../Icons/MenuIcon"
import NavLinks from "../NavLinks"

const Navigation = ({ shouldShowSideNavigation, setShouldShowSideNavigation }) => {
    console.log(shouldShowSideNavigation);
    return (
        <nav aria-label="primary">
            <div tw="sm:hidden mr-3">
                <button
                    css={shouldShowSideNavigation && tw`hidden`}
                    aria-hidden={shouldShowSideNavigation}
                    aria-label="Open Menu"
                    onClick={() => {
                        console.log("clicked Open");
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
