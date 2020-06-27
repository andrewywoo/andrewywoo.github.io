import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "twin.macro"

import Header from "./Header"
import SideNavigationModal from "./SideNavigationModal"

const Layout = ({ slug, children }) => {
    const [shouldShowSideNavigation, setShouldShowSideNavigation] = useState(
        false
    )

    useEffect(() => {
        // Close side navigation any time user goes to new page.
        setShouldShowSideNavigation(false)

        if(slug === 'home'){
            console.log("hello")
        }

    }, [setShouldShowSideNavigation])

    return (
        <>
            <SideNavigationModal
                shouldShowSideNavigation={shouldShowSideNavigation}
                setShouldShowSideNavigation={setShouldShowSideNavigation}
            />
            <div tw="flex flex-col justify-center items-center">
                <Header
                    shouldShowSideNavigation={shouldShowSideNavigation}
                    setShouldShowSideNavigation={setShouldShowSideNavigation}
                />
                <main tw="container">{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    slug: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Layout
