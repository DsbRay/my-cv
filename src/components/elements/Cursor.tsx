import React, { useContext } from 'react'
import useMousePosition from '../../utils/useMousePosition'
import styled from 'styled-components'
import { MouseContext } from '../../utils/mouseContext'

const Cursor = () => {
  const { cursorType } = useContext(MouseContext)
  const { x, y } = useMousePosition()
  return <Element className={cursorType} style={{ left: `${x}px`, top: `${y}px` }} />
}

const Element = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: var(--tango);
  border-radius: 100%;
  z-index: 999;
  mix-blend-mode: difference;
  backface-visibility: hidden;
  pointer-events: none;
  transition: transform 0.15s ease-in-out;
  &.hovered {
    transform: scale(2);
  }
`

export default Cursor
