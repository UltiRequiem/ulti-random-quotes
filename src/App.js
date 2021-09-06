import React from 'react'

function App() {
  const [data, setData] = React.useState(null)

  async function updateQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random')
      const { statusCode, statusMessage, ...data } = await response.json()
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
      setData(data)
    } catch (error) {
      setData({ content: 'Opps... Something went wrong' })
    }
  }

  React.useEffect(() => {
    updateQuote()
  }, [])

  if (!data) return null

  return (
    <div className="App">
      <blockquote className="blockquote mb-0">
        <p>{data.content}</p>
        {data.author && (
          <footer className="blockquote-footer">
            <cite title="Source Title">{data.author}</cite>
          </footer>
        )}
      </blockquote>
      <button variant="primary" onClick={updateQuote}>
        New Quote
      </button>
    </div>
  )
}
export default App
