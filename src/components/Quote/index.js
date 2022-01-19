import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ComponentQuote = ({ content, author }) => (
  <figure>
    <div className="quote_container">
      <blockquote>&quot;{content}&quot;</blockquote>
      <figcaption>
        &mdash; <cite>{author}</cite>
      </figcaption>
    </div>
  </figure>
)

ComponentQuote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
}

export default ComponentQuote
