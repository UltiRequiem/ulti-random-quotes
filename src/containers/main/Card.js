import React from 'react'

import { Quote, Footer,Button } from '../../components'

const Card = ({ content, author, update }) => (
  <>
    <Quote content={content} author={author} />

    <Button text="Update Quote" onClick={update}/>

    <Footer text="UltiRequiem © 2021" />
  </>
)

export default Card
