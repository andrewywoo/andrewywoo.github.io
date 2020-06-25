import React from "react"
import { Link } from "gatsby"
import "twin.macro"

function Header() {
    const links = [
        <Link to="/">Home</Link>,
        <Link to="/work">Work</Link>,
        <Link to="/blog">Blog</Link>,
    ]

    return (
        <header tw="container flex justify-between">
            <span tw="ml-6">AW</span>
            {/* <ProfileImg></ProfileImg> */}
            <nav>
                <span tw="sm:hidden mr-6">Hamburger</span>
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
