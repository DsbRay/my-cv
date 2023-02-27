import React, { useContext } from 'react'
import styled from 'styled-components'
import { MY_WORK_LIST } from './data'
import { MouseContext } from '../../utils/mouseContext'

type SlideProps = {
  swiperIndex: number
  handleSlideChange: (i: number) => void
}

const SelectList: React.FC<SlideProps> = ({ swiperIndex, handleSlideChange }: SlideProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)

  return (
    <ListContainer>
      {MY_WORK_LIST.map((item, i) => {
        const isActive = swiperIndex === i
        return (
          <ProjectName key={i} className={isActive ? 'active' : ''}>
            <p
              onMouseEnter={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              onClick={() => handleSlideChange(i)}
            >
              {item.title}
            </p>
          </ProjectName>
        )
      })}
    </ListContainer>
  )
}

const ListContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ProjectName = styled.div`
  color: var(--white);
  transform: scale(0.8);
  transition: all 0.25s ease-in-out;
  p {
    position: relative;
    display: initial;
    font-size: 1.5rem;
    left: 40px;
    transition: all 0.25s ease-in-out;
    opacity: 0.6;
    font-weight: 900;
    &:hover {
      color: var(--lochinvar);
    }
  }
  &.active {
    transform: scale(1);
    p {
      pointer-events: none;
      color: var(--lochinvar);
      left: 20px;
      opacity: 1;
    }
  }
`

export default SelectList
