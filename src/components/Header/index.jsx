import React from "react"
import { Link } from "gatsby"

function Header() {
    return (
        <header>
            {/* <ProfileImg></ProfileImg> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
