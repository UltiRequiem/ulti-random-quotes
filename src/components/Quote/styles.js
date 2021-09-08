import styled from 'styled-components'

const Blockquote = styled.blockquote`
  padding: 20px;
  margin: 1em;
  background: #ccc;
  border-radius: 10px;
  margin-top:35%;
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

export { Blockquote, Figure, Figcaption }
