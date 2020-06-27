import React from "react"
import tw from "twin.macro"

import Navigation from "../Navigation"
import useHasScrolled from "../../hooks/useHasScrolled"

const Header = ({ shouldShowSideNavigation, setShouldShowSideNavigation }) => {
    const hasScrolled = useHasScrolled()

    return (
        <header
            css={[
                tw`w-full sticky top-0 bg-white`,
                hasScrolled && tw`shadow-lg`,
            ]}
        >
            <div tw="container mx-auto flex justify-between">
                {/* Rounded Profile Picture */}
                <div tw="ml-6"></div>
                <Navigation
                    shouldShowSideNavigation={shouldShowSideNavigation}
                    setShouldShowSideNavigation={setShouldShowSideNavigation}
                />
            </div>
        </header>
    )
}

export default Header
