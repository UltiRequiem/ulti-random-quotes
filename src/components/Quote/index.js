import React from 'react'
import PropTypes from 'prop-types'

import { Figure, Blockquote, Figcaption } from './styles'

const Quote = ({ content, author, authorSlug }) => (
  <Figure>
    <Blockquote>
      <p>{content}</p>
    </Blockquote>

    <Figcaption>
      &mdash;
      <cite>
        {authorSlug} {author}
      </cite>
    </Figcaption>
  </Figure>
)

Quote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
  authorSlug: PropTypes.string
}

export default Quote
