import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { MY_WORK_LIST } from './data'
import { MouseContext } from '../../utils/mouseContext'

import Button from '../elements/Button'

import gitHubIcon from '../../images/tools/github.svg'
import codeIcon from '../../images/icons/code.svg'
import udemyIcon from '../../images/tools/udemy.svg'

type SliderProps = {
  swiperIndex: number
}

const WorkDetails: React.FC<SliderProps> = ({ swiperIndex }: SliderProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)

  const [data, setData] = useState(MY_WORK_LIST[swiperIndex])

  useEffect(() => {
    setData(MY_WORK_LIST[swiperIndex])
  }, [swiperIndex])

  const { githubUrl, siteUrl, tools, udemyUrl, udemyCourse } = data

  return (
    <Container>
      <ButtonContainer>
        <Button title=' View Site' url={siteUrl} icon={codeIcon} type='site' />
        <Button title=' GitHub' url={githubUrl} icon={gitHubIcon} type='github' />
      </ButtonContainer>
      <ToolContainer>
        {tools.map((tool, i) => (
          <img key={i} src={tool} />
        ))}
      </ToolContainer>
      {udemyUrl ? (
        <Udemy>
          <p>{udemyCourse}</p>
          <a
            href={udemyUrl}
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            <img src={udemyIcon} alt='udemy logo' />
          </a>
        </Udemy>
      ) : null}
    </Container>
  )
}

const Container = styled.div``

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`
const ToolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  img {
    height: 50px;
  }
`

const Udemy = styled.div`
  margin: 20px auto;
  text-align: center;
  p {
    color: var(--white);
    padding: 20px 0;
  }
  img {
    width: 100px;
  }
`

export default WorkDetails
