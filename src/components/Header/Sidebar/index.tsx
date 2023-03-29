import React from 'react'
import styled from 'styled-components'
import TransitionButton from '../../elements/TransitionButton'
import { PageTransitionProps } from '../../elements/TransitionButton'

type SidebarProps = {
  isMenuActive: boolean
}

const TRANSITION_LINKS = [
  {
    id: 1,
    label: 'About me',
    to: '/about-me/',
    transitionColor: '#2a9085',
    direction: 'top',
  },
  {
    id: 2,
    label: 'My Work',
    to: '/my-work/',
    transitionColor: '#2a9085',
    direction: 'left',
  },
  {
    id: 3,
    label: 'Contact',
    to: '/',
    transitionColor: '#2a9085',
    direction: 'right',
  },
]

const Sidebar: React.FC<SidebarProps> = ({ isMenuActive }: SidebarProps) => {
  return (
    <Container id='sidebar'>
      <List className={isMenuActive ? 'active' : ''}>
        {TRANSITION_LINKS.map((link: PageTransitionProps, i: number) => {
          const { id, label, to, transitionColor, direction } = link
          return (
            <TransitionButton
              key={i}
              id={id}
              label={label}
              to={to}
              transitionColor={transitionColor}
              direction={direction}
            />
          )
        })}
      </List>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--lochinvar);
  height: 100vh;
  width: 30vw;
  position: fixed;
  right: calc(-30vw - 100px);
  z-index: 9;
  top: 0;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 50px;
  gap: 30px;
  div {
    position: relative;
    left: 100%;
    transition: all 0.5s ease-in;
    opacity: 0;
    transform: scale(0);
    &:nth-child(2) {
      transition-delay: 0.15s;
    }
    &:last-child {
      transition-delay: 0.3s;
    }
  }
  &.active {
    div {
      transform: scale(1);
      left: 0;
      opacity: 1;
    }
  }
`
export default Sidebar
