import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw from "twin.macro"

const NavLinks = ({ isModal, isLinkFocusable }) => {
    const activeStyleLink = tw`underline`
    const StyledLink = tw(Link)`text-xl hover:text-red-500`

    const links = [
        {
            key: "home",
            linkEl: (
                <StyledLink to="/" activeStyle={activeStyleLink}>
                    Home
                </StyledLink>
            ),
        },
        {
            key: "work",
            linkEl: (
                <StyledLink to="/work" activeStyle={activeStyleLink}>
                    Work
                </StyledLink>
            ),
        },
        {
            key: "blog",
            linkEl: (
                <StyledLink to="/blog" activeStyle={activeStyleLink}>
                    Blog
                </StyledLink>
            ),
        },
    ]

    return (
        <ul
            css={isModal ? tw`flex flex-col mt-6` : tw`hidden sm:flex flex-row space-x-12`}
        >
            {links.map(link => {
                return (
                    <li
                        key={link.key}
                        css={[
                            isModal && tw`text-xl py-2 ml-6`,
                            isLinkFocusable && isModal && tw`hidden`,
                        ]}
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
    isLinkFocusable: PropTypes.bool,
}

NavLinks.defaultProps = {
    isModal: false,
    isLinkFocusable: true,
}

export default NavLinks
