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
                    <a href="https://twitter.com/andrewywoo" target="_blank" rel="noreferrer" aria-label="Andrew's Twitter Profile"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/in/andrewyhwoo/" target="_blank" rel="noreferrer" aria-label="Andrew's Linkedin Profile"><LinkedInIcon /></a>
                    <a href="https://github.com/andrewywoo" target="_blank" rel="noreferrer" aria-label="Andrew's Github"><GithubIcon /></a>
                </div>
                <span>&copy; {new Date().getFullYear()} Andrew Woo</span>
            </div>
        </footer>
    )
}

export default Footer
