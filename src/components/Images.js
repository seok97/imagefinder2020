import React from "react"
import PropTypes from "prop-types"

function Images(title, key) {
  return <div>{title}</div>
}

Images.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Images
