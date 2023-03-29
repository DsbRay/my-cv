import React, { useState } from 'react'
import styled from 'styled-components'
import BlockWrapper from './BlockWrapper'
import TextBlock from './TextBlock'
import HobbiesBlock from './HobbiesBlock'
import SkillsBlock from './SkillsBlock'
import LearningBlock from './LearningBlock'
import background from '../../images/space/space-background.jpg'
import { ABOUT_ME_DATA } from './data'

const AboutMe = () => {
  const [language, setLanguage] = useState(ABOUT_ME_DATA.eng)
  const { overview, career, hobbies } = language
  return (
    <Container background={background}>
      <div className='grid two'>
        <BlockWrapper>
          <TextBlock title='Overview' data={overview} />
        </BlockWrapper>
        <BlockWrapper>
          <TextBlock title='Career' data={career} />
        </BlockWrapper>
      </div>
      <div className='grid three'>
        <BlockWrapper>
          <LearningBlock title='Courses' />
        </BlockWrapper>
        <BlockWrapper>
          <HobbiesBlock title='Hobbies' hobbies={hobbies} />
        </BlockWrapper>
        <BlockWrapper>
          <SkillsBlock title='Skills' />
        </BlockWrapper>
      </div>
    </Container>
  )
}

const Container = styled.div<{ background: string }>`
  color: var(--white);
  padding: 10px;
  .grid {
    display: grid;
    align-items: start;
    gap: 10px;
    &:first-child {
      padding-bottom: 10px;
    }
    &.two {
      grid-template-columns: 1fr 1fr;
    }
    &.three {
      grid-template-columns: 0.5fr 0.5fr 1fr;
    }
  }
`

export default AboutMe
