import PropTypes from "prop-types"
import React from "react"
import "./Typewriter.css"

const Typewriter = ({ speed }) => {
  return (
    <div class="typewriter">
      <h1>I am a Software Engineer.</h1>
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
