import React from 'react'
import styled from 'styled-components'

type TextProps = {
  title: string
  hobbies: string[]
}

const HobbiesBlock: React.FC<TextProps> = ({ title, hobbies }: TextProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      {hobbies.map((hobbie: string, i: number) => {
        return <p key={i}>{hobbie}</p>
      })}
    </Container>
  )
}

const Container = styled.div`
  h1 {
    padding-bottom: 20px;
    font-size: 24px;
  }
`

export default HobbiesBlock
