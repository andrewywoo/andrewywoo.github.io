import React from "react"
import "twin.macro"

import Navigation from "../Navigation"

const Header = ({ shouldShowSideNavigation, setShouldShowSideNavigation }) => {
    return (
        <header tw="container flex justify-between">
            {/* Rounded Profile Picture */}
            <div tw="ml-6"></div>
            <Navigation
                shouldShowSideNavigation={shouldShowSideNavigation}
                setShouldShowSideNavigation={setShouldShowSideNavigation}
            />
        </header>
    )
}

export default Header
