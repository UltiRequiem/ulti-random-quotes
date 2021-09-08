import React from 'react'
import PropTypes from 'prop-types'

import { Figure, Blockquote, Figcaption } from './styles'

const Quote = ({ content, author }) => (
  <Figure>
    <Blockquote>
      <p style={{color: 'white'}}>{content}</p>
    </Blockquote>

    <Figcaption>
      &mdash; <cite>{author}</cite>
    </Figcaption>
  </Figure>
)

Quote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
}

export default Quote
