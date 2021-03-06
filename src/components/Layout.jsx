import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "twin.macro"

import SideNavigationModal from "./SideNavigationModal"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ shouldShowProfileHeader, children }) => {
    const [shouldShowSideNavigation, setShouldShowSideNavigation] = useState(
        false
    )

    useEffect(() => {
        // Close side navigation any time user goes to new page.
        setShouldShowSideNavigation(false)
    }, [setShouldShowSideNavigation])

    return (
        <div tw="min-h-screen relative">
            <SideNavigationModal
                shouldShowSideNavigation={shouldShowSideNavigation}
                setShouldShowSideNavigation={setShouldShowSideNavigation}
            />
            <div tw="flex flex-col justify-center items-center pb-32">
                <Header
                    shouldShowSideNavigation={shouldShowSideNavigation}
                    setShouldShowSideNavigation={setShouldShowSideNavigation}
                    shouldShowProfileHeader={shouldShowProfileHeader}
                />
                <main tw="container">{children}</main>
                <Footer />
            </div>
        </div>
    )
}

Layout.propTypes = {
    shouldShowProfileHeader: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    shouldShowProfileHeader: true,
}

export default Layout
