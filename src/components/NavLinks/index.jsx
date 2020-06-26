import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw from "twin.macro"

const NavLinks = ({ isModal }) => {
    const links = [
        <Link to="/">Home</Link>,
        <Link to="/work">Work</Link>,
        <Link to="/blog">Blog</Link>,
    ]

    return (
        <ul
            css={isModal ? tw`flex flex-col mt-6` : tw`hidden sm:flex flex-row`}
        >
            {links.map(el => {
                return (
                    <li css={isModal ? tw`text-xl py-2 ml-6` : tw`mx-6`}>
                        {el}
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
