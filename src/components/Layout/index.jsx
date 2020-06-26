import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

import Header from "../Header"

const Layout = ({ children }) => (
    <>
        <div tw="flex flex-col justify-center items-center mt-6">
            <Header />
            <main tw="flex my-32">{children}</main>
            {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        </div>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
