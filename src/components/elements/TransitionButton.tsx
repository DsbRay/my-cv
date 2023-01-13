import React from 'react'
//@ts-ignore // Ignore module import TS error
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

type PageTransitionProps = {
  label: string
  to: string
  transitionColor: string
  direction: string
  isActive: boolean
}

const TransitionButton: React.FC<PageTransitionProps> = ({
  label,
  to,
  transitionColor,
  direction,
  isActive,
}: PageTransitionProps) => {
  return (
    <TransitionButtonStyle
      className={isActive ? 'active' : ''}
      to={to}
      bg={transitionColor}
      direction={direction}
      cover
      duration={0.75}
    >
      {label}
    </TransitionButtonStyle>
  )
}

const TransitionButtonStyle = styled(AniLink)`
  color: var(--white);
  &.active {
    color: red;
  }
`

export default TransitionButton
