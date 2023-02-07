import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import useMousePosition from '../../../utils/useMousePosition'

const Overlay = () => {
  const { x, y } = useMousePosition()
  const width = window.innerWidth / 2
  const height = window.innerHeight / 2
  const left = x ? `${50 - (x - width) * 0.01}%` : '50%'
  const top = y ? `${50 - (y - height) * 0.04}%` : '50%'
  return (
    <Container>
      <Circle />
      <Circle className='blue' style={{ left: left, top: top }} />
    </Container>
  )
}

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  filter: blur(100px);
`

const Circle = styled.div`
  background-color: blue;
  height: 70vh;
  width: 70vh;
  border-radius: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &.blue {
    position: absolute;
    background-color: red;
    height: 50vh;
    width: 50vh;
  }
`

export default Overlay
