import React from "react"
import PropTypes from "prop-types"
import { styled } from "twin.macro"
import { keyframes } from "@emotion/core"

const Typewriter = ({ speed, children }) => {
    const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
    `
    const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: black; }
    `

    const StyledDiv = styled.div`
        overflow: hidden;
        border-right: 0.15em solid black;
        white-space: nowrap;
        animation: ${typing} ${speed}s steps(40, end),
            ${blinkCaret} 0.75s step-end infinite;
    `

    return <StyledDiv>{children}</StyledDiv>
}

Typewriter.propTypes = {
    speed: PropTypes.number,
    children: PropTypes.node.isRequired,
}

Typewriter.defaultProps = {
    speed: 3.5,
}

export default Typewriter
