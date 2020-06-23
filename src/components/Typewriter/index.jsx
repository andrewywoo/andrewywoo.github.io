import React from "react"
import PropTypes from "prop-types"

import "./Typewriter.css"

const Typewriter = ({speed, children}) => {
    return (
        <div class="typewriter">
            {children}
        </div>
    )
}

Typewriter.propTypes = {
    speed: PropTypes.number,
}

Typewriter.defaultProps = {
    speed: 3.5,
}

export default Typewriter
