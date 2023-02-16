import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { MouseContext } from '../../utils/mouseContext'
import { MY_WORK_LIST } from './data'

import Button from '../elements/Button'

import gitHubIcon from '../../images/icons/github.svg'
import codeIcon from '../../images/icons/code.svg'

type SliderProps = {
  swiperIndex: number
}

const WorkDetails: React.FC<SliderProps> = ({ swiperIndex }: SliderProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)

  const [data, setData] = useState(MY_WORK_LIST[swiperIndex])

  useEffect(() => {
    setData(MY_WORK_LIST[swiperIndex])
  }, [swiperIndex])

  const { githubUrl, siteUrl, tools } = data

  return (
    <Container>
      <ButtonContainer>
        <Button title=' View Site' url={siteUrl} icon={codeIcon} type='site' />
        <Button title=' GitHub' url={githubUrl} icon={gitHubIcon} type='github' />
      </ButtonContainer>
      <ToolContainer></ToolContainer>
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
const ToolContainer = styled.div``

export default WorkDetails
