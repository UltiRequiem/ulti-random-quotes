import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => (
  <div style={{ textAlign: 'center' }}>
    <button type="button" variant="primary" onClick={onClick}>
      {text}
    </button>
  </div>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
