import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import "./Layout.css"

const Layout = ({ children }) => (
    <>
        <div
            style={{
                margin: "3rem",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Header />
            <main>{children}</main>
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
