import React from "react"
import PropTypes from "prop-types"
import "./Images.css"

function Images({ title, src, href }) {
  return (
    <div className="images">
      <a className="images_a" href={href}>
        <img className="images_img" src={src} alt={title} title={title} />
        <div className="images_title">{title}</div>
      </a>
    </div>
  )
}

Images.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Images
