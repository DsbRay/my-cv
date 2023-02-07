import React, { useContext } from 'react'
//@ts-ignore // Ignore module import TS error
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { MouseContext } from '../../utils/mouseContext'

export type PageTransitionProps = {
  label: string
  to: string
  transitionColor: string
  direction: string
  id: number
}

const TransitionButton: React.FC<PageTransitionProps> = ({
  label,
  to,
  transitionColor,
  direction,
  id,
}: PageTransitionProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)

  return (
    <div>
      <TransitionButtonStyle
        className={`sidebar-link-${id}`}
        to={to}
        bg={transitionColor}
        direction={direction}
        cover
        duration={0.75}
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        {label}
      </TransitionButtonStyle>
    </div>
  )
}

const TransitionButtonStyle = styled(AniLink)`
  color: var(--white);
  font-size: 40px;
  display: inline-table;
  font-weight: 700;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px var(--white);
    width: 0%;
    transition: width 0.25s ease-in-out;
  }
  &:hover {
    color: var(--white);
    &:after {
      width: 100%;
    }
  }
`

export default TransitionButton
