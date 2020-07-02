import React from "react"
import "twin.macro"

import TwitterIcon from "./Icons/TwitterIcon"
import LinkedInIcon from "./Icons/LinkedInIcon"
import GithubIcon from "./Icons/GithubIcon"

const Footer = () => (
    <footer tw="w-full mx-auto bg-gray-200 absolute bottom-0 h-32">
        <div tw="flex flex-col items-center pt-8 space-y-3">
            <div tw="flex space-x-6 items-center">
                <a
                    href="https://twitter.com/andrewywoo"
                    aria-label="Andrew's Twitter Profile"
                >
                    <TwitterIcon />
                </a>
                <a
                    href="https://www.linkedin.com/in/andrewyhwoo/"
                    aria-label="Andrew's Linkedin Profile"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://github.com/andrewywoo"
                    aria-label="Andrew's Github"
                >
                    <GithubIcon />
                </a>
                <a href="mailto:andrew.woo@verizon.net">
                    <button tw="border border-gray-400 rounded-lg bg-white shadow-md p-2">
                        Contact Me
                    </button>
                </a>
            </div>
            <div>
                <span>&copy; {new Date().getFullYear()} Andrew Woo</span>
            </div>
        </div>
    </footer>
)

export default Footer
