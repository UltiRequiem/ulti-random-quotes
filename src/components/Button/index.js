import React from 'react'

const Button = ({text, onClick}) => (
  <button type="button" variant="primary" onClick={onClick}>
    {text}
  </button>
)

export default Button
