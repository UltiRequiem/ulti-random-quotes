import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ content, author }) => (
  <blockquote>
    <p>{content}</p>
    <cite> - {author}</cite>
  </blockquote>
)

Quote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
}

export default Quote
