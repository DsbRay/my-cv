import React, { useContext, useState, useEffect } from 'react'
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
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const pathName = typeof window !== 'undefined' ? window.location.pathname : ''
    setActiveLink(pathName)
  }, [])

  return (
    <div>
      <TransitionButtonStyle
        className={activeLink === to ? `sidebar-link-${id} active` : `sidebar-link-${id}`}
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
  &:hover,
  &.active {
    color: var(--tango);
    &:after {
      width: 100%;
      border-bottom: solid 3px var(--tango);
    }
  }
  &.active {
    pointer-events: none;
  }
`

export default TransitionButton
