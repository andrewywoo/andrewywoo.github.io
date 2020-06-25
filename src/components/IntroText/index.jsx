import React from "react"
import "twin.macro"

import Typewriter from "../Typewriter"

const IntroText = () => {
    return (
        <div>
            <h1>
                My name is <span tw="text-red-400">Andrew Woo</span>.
            </h1>
            <Typewriter>
                <h2>I am a Software Engineer.</h2>
            </Typewriter>
        </div>
    )
}

export default IntroText
