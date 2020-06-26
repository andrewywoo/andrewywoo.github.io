import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw from "twin.macro"

const NavLinks = ({ isModal }) => {
    const links = [
        { key: "home", linkEl: <Link to="/">Home</Link> },
        { key: "work", linkEl: <Link to="/work">Work</Link> },
        { key: "blog", linkEl: <Link to="/blog">Blog</Link> },
    ]

    return (
        <ul
            css={isModal ? tw`flex flex-col mt-6` : tw`hidden sm:flex flex-row`}
        >
            {links.map(link => {
                return (
                    <li
                        key={link.key}
                        css={isModal ? tw`text-xl py-2 ml-6` : tw`mx-6`}
                    >
                        {link.linkEl}
                    </li>
                )
            })}
        </ul>
    )
}

NavLinks.propTypes = {
    isModal: PropTypes.bool,
}

NavLinks.defaultProps = {
    isModal: false,
}

export default NavLinks
