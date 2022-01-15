import React from 'react'
import PropTypes from 'prop-types'

import { Quote, Button } from '../../components'

const Card = ({ content, author, update }) => (
  <>
    <Quote content={content} author={author} />
    <Button text="Update Quote" onClick={update} />
  </>
)

Card.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
  update: PropTypes.func
}

export default Card
