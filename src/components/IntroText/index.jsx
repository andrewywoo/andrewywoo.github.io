import React from "react"
import "twin.macro"

import Typewriter from "../Typewriter"

const IntroText = () => {
    return (
        <div tw="mx-6">
            <h1 tw="text-5xl">
                My name is <span tw="text-red-400">Andrew Woo</span>.
            </h1>
            <div tw="inline-block">
                <Typewriter speed={2}>
                    <h2 tw="text-3xl">I am a Software Engineer.</h2>
                </Typewriter>
            </div>
        </div>
    )
}

export default IntroText
