import React from "react"
import PropTypes from "prop-types"

const CloseIcon = ({ width, height }) => {
    return (
        <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={`${width}px`}
            height={`${height}px`}
        >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
        </svg>
    )
}

CloseIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

CloseIcon.defaultProps = {
    width: 40,
    height: 40,
}

export default CloseIcon
