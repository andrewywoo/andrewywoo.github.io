import React from "react"
import "twin.macro"

import TwitterIcon from "./Icons/TwitterIcon"
import LinkedInIcon from "./Icons/LinkedInIcon"
import GithubIcon from "./Icons/GithubIcon"

const Footer = () => {
    return (
        <footer tw="w-full mx-auto flex flex-col items-center pt-12 space-y-3 bg-gray-200">
            <div tw="flex space-x-6">
                <TwitterIcon />
                <LinkedInIcon />
                <GithubIcon />
            </div>
            <span>
                Created by Andrew Woo &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}

export default Footer
