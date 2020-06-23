import React from "react"

import Typewriter from "../Typewriter"
import './IntroText.css';

const IntroText = () => {
    return (
        <>
            <h1>
                My name is{" "}
                <span style={{ color: "lightcoral" }}>Andrew Woo</span>.
            </h1>
            <Typewriter>
                <h2>I am a Software Engineer.</h2>
            </Typewriter>
        </>
    )
}

export default IntroText
