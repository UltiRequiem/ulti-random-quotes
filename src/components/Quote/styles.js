import styled from 'styled-components'

const Quote = styled.blockquote`
  font-size: 15;
`

const Blockquote = styled.div`
  padding: 20px;
  margin: 1em;
  margin-top: 35%;
  border: 2px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin: auto;
`

const Figcaption = styled.figcaption`
  margin: 1em;
`

export { Quote, Blockquote, Figure, Figcaption }
