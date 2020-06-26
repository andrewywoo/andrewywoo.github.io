import React from "react"
import "twin.macro"

import Navigation from "../Navigation"

const Header = ({ setShouldShowSideNavigation }) => {
    return (
        <header tw="container flex justify-between">
            {/* Rounded Profile Picture */}
            <div tw="ml-6"></div>
            <Navigation
                setShouldShowSideNavigation={setShouldShowSideNavigation}
            />
        </header>
    )
}

export default Header
