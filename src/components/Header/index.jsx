import React from "react"
import "twin.macro"

import MenuIcon from "../Icons/MenuIcon"
import NavLinks from "../NavLinks"
// import SideNavigationModal from "../SideNavigationModal"

const Header = () => {
    return (
        <header tw="container flex justify-between">
            {/* <SideNavigationModal /> */}
            {/* Rounded Profile Picture */}
            <div tw="ml-6"></div>
            <nav>
                <div tw="sm:hidden mr-3">
                    <MenuIcon />
                </div>
                <NavLinks />
            </nav>
        </header>
    )
}

export default Header
