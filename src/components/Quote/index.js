import React from 'react'
import PropTypes from 'prop-types'

import { Figure, Blockquote } from './styles'

const ComponentQuote = ({ content, author }) => (
  <Figure>
    <Blockquote>
      <blockquote>&quot;{content}&quot;</blockquote>
      <figcaption>
        &mdash; <cite>{author}</cite>
      </figcaption>
    </Blockquote>
  </Figure>
)

ComponentQuote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
}

export default ComponentQuote
