import React from 'react'

const Button = ({ text, onClick }) => (
  <p>
    <button type="button" variant="primary" onClick={onClick}>
      {text}
    </button>
  </p>
)

export default Button
