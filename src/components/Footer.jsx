import React from "react"
import "twin.macro"

import TwitterIcon from "./Icons/TwitterIcon"
import LinkedInIcon from "./Icons/LinkedInIcon"
import GithubIcon from "./Icons/GithubIcon"

const Footer = () => {
    return (
        <footer tw="w-full mx-auto bg-gray-200 absolute bottom-0 h-32">
            <div tw="flex flex-col items-center pt-12 space-y-3">
                <div tw="flex space-x-6">
                    <TwitterIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
                <span>&copy; {new Date().getFullYear()} Andrew Woo</span>
            </div>
        </footer>
    )
}

export default Footer
