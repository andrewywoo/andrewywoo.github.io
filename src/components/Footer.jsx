import React from 'react'
import "twin.macro"

const Footer = () => {
    return (
        <footer tw="container mx-auto text-center">
            This is a footer. Created by Andrew Woo 	&copy;{new Date().getFullYear()};
        </footer>
    )
}

export default Footer
