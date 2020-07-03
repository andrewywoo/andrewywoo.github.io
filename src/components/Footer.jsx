import React from "react"
import "twin.macro"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import TwitterIcon from "./Icons/TwitterIcon"
import LinkedInIcon from "./Icons/LinkedInIcon"
import GithubIcon from "./Icons/GithubIcon"

const Footer = () => (
    <footer tw="w-full mx-auto bg-gray-200 absolute bottom-0 h-32">
        <div tw="flex flex-col items-center pt-8 space-y-3">
            <div tw="flex space-x-6 items-center">
                <OutboundLink
                    href="https://twitter.com/andrewywoo"
                    aria-label="Andrew's Twitter Profile"
                >
                    <TwitterIcon />
                </OutboundLink>
                <OutboundLink
                    href="https://www.linkedin.com/in/andrewyhwoo/"
                    aria-label="Andrew's Linkedin Profile"
                >
                    <LinkedInIcon />
                </OutboundLink>
                <OutboundLink
                    href="https://github.com/andrewywoo"
                    aria-label="Andrew's Github"
                >
                    <GithubIcon />
                </OutboundLink>
                <OutboundLink href="mailto:andrew.woo@verizon.net">
                    <button tw="border border-gray-400 rounded-lg bg-white shadow-md p-2">
                        Contact Me
                    </button>
                </OutboundLink>
            </div>
            <div>
                <span>&copy; {new Date().getFullYear()} Andrew Woo</span>
            </div>
        </div>
    </footer>
)

export default Footer
