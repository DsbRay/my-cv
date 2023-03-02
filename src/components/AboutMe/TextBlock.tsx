import React from 'react'
import styled from 'styled-components'

type TextProps = {
  title: string
  data: string
}

const TextBlock: React.FC<TextProps> = ({ title, data }: TextProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{data}</p>
    </Container>
  )
}

const Container = styled.div`
  h1 {
    padding-bottom: 20px;
    font-size: 24px;
  }
`

export default TextBlock
