import React from 'react'
import PropTypes from 'prop-types'

import { StyledFooter, Text } from './styles'

const Footer = ({ text }) => (
  <StyledFooter>
    <Text>{text}</Text>
  </StyledFooter>
)

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
