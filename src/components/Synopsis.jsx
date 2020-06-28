import React from "react"
import "twin.macro"

import bongoCatGif from "../gifs/bongo_cat_keyboard.gif"

const Synopsis = () => {
    return (
        <>
            <section tw="h-auto w-3/4 mx-auto my-32 md:my-64 text-2xl md:text-3xl">
                I've been exposed to many projects that solve a wide array of
                problems. These problems span from securities processing, growth
                engineering, application modernization, and many more.
            </section>
            <section tw="h-auto w-full mx-auto my-32 md:my-64 text-2xl md:text-3xl flex justify-around flex-wrap-reverse">
                <div tw="w-3/4 p-3 sm:w-1/2">
                    Front end web development is a major interest of mine as I
                    strive to deliver great user experience through code and
                    design. I take a heavy interest in the web and the evolving
                    landscape of web technologies.
                </div>
                <div tw="mb-16">
                    <img src={bongoCatGif} alt="Cat banging on keyboard" />
                </div>
            </section>
        </>
    )
}

export default Synopsis
