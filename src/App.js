import React, { useState, useEffect } from 'react'

const Quote = () => {
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
      <blockquote>
        <p>{data.content}</p>
        <cite> - {data.author}</cite>
      </blockquote>

      <button variant="primary" onClick={updateQuote}>
        New Quote
      </button>
    </>
  )
}

const Footer = () => (
  <footer>
    <p>UltiRequiem</p>
  </footer>
)

export { Quote,Footer }
