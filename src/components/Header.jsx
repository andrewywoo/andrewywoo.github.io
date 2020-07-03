import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import ProfileHead from "./ProfileHead"
import Navigation from "./Navigation"
import useHasScrolled from "../hooks/useHasScrolled"

const Header = ({
    shouldShowSideNavigation,
    setShouldShowSideNavigation,
    shouldShowProfileHeader,
}) => {
    const hasScrolled = useHasScrolled()

    return (
        <header
            css={[
                tw`w-full sticky top-0 bg-white z-10`,
                hasScrolled && tw`shadow-lg`,
            ]}
        >
            <div tw="container mx-auto flex justify-between">
                <ProfileHead
                    shouldShowProfileHeader={shouldShowProfileHeader}
                />
                <Navigation
                    shouldShowSideNavigation={shouldShowSideNavigation}
                    setShouldShowSideNavigation={setShouldShowSideNavigation}
                />
            </div>
        </header>
    )
}

Header.propTypes = {
    shouldShowSideNavigation: PropTypes.bool.isRequired,
    setShouldShowSideNavigation: PropTypes.func.isRequired,
    shouldShowProfileHeader: PropTypes.bool,
}

Header.defaultProps = {
    shouldShowProfileHeader: true,
}

export default Header
