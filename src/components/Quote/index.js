import React from 'react'
import PropTypes from 'prop-types'

import { Figure, Blockquote, Quote, Figcaption } from './styles'

const ComponentQuote = ({ content, author }) => (
  <Figure>
    <Blockquote>
      <Quote>{content}</Quote>
      <Figcaption>
        &mdash; <cite>{author}</cite>
      </Figcaption>
    </Blockquote>
  </Figure>
)

ComponentQuote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
}

export default ComponentQuote
