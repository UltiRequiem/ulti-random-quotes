import React, { useState, useEffect } from 'react'

import { Card } from '../containers/main'

const Main = () => {
  const [data, setData] = useState(null)

  async function updateQuote() {
    const response = await fetch('https://api.quotable.io/random')
    setData(await response.json())
  }

  useEffect(() => {
    updateQuote()
  }, [])

  if (!data) return null

  return (
    <>
      <Card content={data.content} author={data.author} update={updateQuote} />
    </>
  )
}

export default Main
