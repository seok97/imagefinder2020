import React from "react"
import PropTypes from "prop-types"

function Images({ title, src }) {
  return (
    <div>
      <img src={src} alt={title} />
      {title}
    </div>
  )
}

Images.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Images
