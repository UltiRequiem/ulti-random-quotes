import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

/** Quotation card Powered by the Quotable API https://github.com/lukePeavey/quotable */
const Main = () => {
  const [data, setData] = React.useState(null)

  async function updateQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random')
      const { statusCode, statusMessage, ...data } = await response.json()
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
      setData(data)
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error)
      setData({ content: 'Opps... Something went wrong' })
    }
  }

  // Run `updateQuote` once when component mounts
  React.useEffect(() => {
    updateQuote()
  }, [])

  // Do not render until the first quote is loaded
  if (!data) return null

  return (
    <div className="App">
      <Card style={{ width: '90%', maxWidth: '40rem' }}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{data.content}</p>
            {data.author && (
              <footer className="blockquote-footer">
                <cite title="Source Title">{data.author}</cite>
              </footer>
            )}
          </blockquote>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={updateQuote}>
            New Quote
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Main
