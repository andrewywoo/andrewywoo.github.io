import React from "react"
import { Link } from "gatsby"
import "twin.macro"

import Menu from "../Icons/Menu"

function Header() {
    const links = [
        <Link to="/">Home</Link>,
        <Link to="/work">Work</Link>,
        <Link to="/blog">Blog</Link>,
    ]

    return (
        <header tw="container flex justify-between">
            {/* Rounded Profile Picture */}
            <div tw="ml-6"></div>
            <nav>
                <div tw="sm:hidden mr-3">
                 <Menu width={45} height={45} />
                </div>
                <ul tw="hidden sm:flex flex-row">
                    {links.map(el => {
                        return <li tw="mx-6">{el}</li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header
