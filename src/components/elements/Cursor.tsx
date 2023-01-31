import React from 'react'
import useMousePosition from '../../utils/useMousePosition'
import styled from 'styled-components'

const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition()
  return <Dot style={{ left: `${x}px`, top: `${y}px` }}></Dot>
}

const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  mix-blend-mode: difference;
  backface-visibility: hidden;
  pointer-events: none;
`

export default DotRing
