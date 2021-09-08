import React from 'react'
import PropTypes from 'prop-types'

import StyledFooter from './styles'

const Footer = ({ text }) => (
  <StyledFooter>
    <p>{text}</p>
  </StyledFooter>
)

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
