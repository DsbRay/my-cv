import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import SelectList from './SelectList'
import spaceBackground from '../../images/space/space-background.jpg'

const MyWork = () => {
  const [swiperIndex, setSwiperIndex] = useState(0)

  const handleSlideChange = (i: number) => setSwiperIndex(i)

  return (
    <Container background={spaceBackground}>
      <SelectList handleSlideChange={handleSlideChange} swiperIndex={swiperIndex} />
      <Slider swiperIndex={swiperIndex} handleSlideChange={handleSlideChange} />
    </Container>
  )
}

const Container = styled.div<{ background: string }>`
  height: calc(100vh - 50px);
  display: grid;
  grid-template-columns: 30vw 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 50px;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export default MyWork
