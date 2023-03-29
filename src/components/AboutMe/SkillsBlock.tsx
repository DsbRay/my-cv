import React from 'react'
import styled from 'styled-components'
import { SLILLS_DATA } from './data'
import starIcon from '../../images/icons/star.svg'

type TextProps = {
  title: string
}

const SkillsBlock: React.FC<TextProps> = ({ title }: TextProps) => {
  const { fiveStar, fourStar, threeStar, twoStar } = SLILLS_DATA
  const renderStars = (stars: number) => {
    const fields: JSX.Element[] = []
    for (let i = 1; i <= stars; i++) {
      fields.push(<img src={starIcon} alt='star icon' />)
    }
    return fields
  }
  const renderSkillList = (list: string[], star: number) => {
    return (
      <div>
        <div className='stars'>{renderStars(star)}</div>
        {list.map((item: string, i: number) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    )
  }
  return (
    <Container>
      <h1>{title}</h1>
      <div className='grid'>
        {renderSkillList(fiveStar, 5)}
        {renderSkillList(fourStar, 4)}
        {renderSkillList(threeStar, 3)}
        {renderSkillList(twoStar, 2)}
      </div>
    </Container>
  )
}

const Container = styled.div`
  h1 {
    padding-bottom: 20px;
    font-size: 24px;
  }
  p {
    padding-bottom: 5px;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
    .stars {
      display: flex;
      gap: 10px;
      padding-bottom: 10px;
      img {
        width: 30px;
      }
    }
  }
`

export default SkillsBlock
