import React from 'react'
import styled from 'styled-components'
import { LEARNING_DATA, LearningProps } from './data'

type TextProps = {
  title: string
}

const LearningBlock: React.FC<TextProps> = ({ title }: TextProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      {LEARNING_DATA.map((course: LearningProps, i: number) => {
        const { title, complete, year } = course
        return (
          <Course key={i}>
            <p className='title'>{title}</p>
            <p className='status'>Status: {complete ? <span>Complete</span> : <span>In Progress</span>}</p>
            <p className='year'>{year}</p>
          </Course>
        )
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
const Course = styled.div`
  padding-bottom: 20px;
  p {
    padding-bottom: 5px;
    &.title {
      font-size: 16px;
      font-weight: 700;
    }
    &.status {
      font-size: 14px;
    }
    &.year {
      font-size: 12px;
    }
  }
  &:last-child {
    padding-bottom: 0%;
  }
`

export default LearningBlock
