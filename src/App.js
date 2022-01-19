import React, { useState, useEffect, Suspense } from 'react'
import './App.css'

const Quote = React.lazy(() => import('./components/Quote'))
const Button = React.lazy(() => import('./components/button'))

async function quote() {
  const response = await fetch('https://api.quotable.io/random')
  return response.json()
}

export default function Main() {
  const [data, setData] = useState()

  const updateQuote = async () => setData(await quote())

  useEffect(updateQuote, [])

  if (!data) return <p>Getting data...</p>

  return (
    <div className="container">
      <Suspense fallback={<p>Loading page...</p>}>
        <Quote content={data.content} author={data.author} />
        <Button text="Update Quote" onClick={updateQuote} />
      </Suspense>
    </div>
  )
}
