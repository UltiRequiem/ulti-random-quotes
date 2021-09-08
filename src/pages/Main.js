import React, { useState, useEffect } from 'react'

import { Quote, Footer } from '../components'

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
      <Quote content={data.content} author={data.author} />

      <button variant="primary" onClick={updateQuote}>
        New Quote
      </button>
      <Footer text="UltiRequiem © 2021" />
    </>
  )
}

export default Main
