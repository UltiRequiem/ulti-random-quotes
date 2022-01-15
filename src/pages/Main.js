import React, { useState, useEffect } from 'react'
import { Card } from '../containers/main'

export default function Main() {
  const [data, setData] = useState()

  const updateQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    setData(await response.json())
  }

  useEffect(updateQuote, [])

  if (!data) return <p>Loading...</p>

  return (
    <Card
      content={data.content}
      author={data.author}
      authorSlug={data.authorSlug}
      update={updateQuote}
    />
  )
}
