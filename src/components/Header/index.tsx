import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { MouseContext } from '../../utils/mouseContext'

import MenuButton from './MenuButton'
import Sidebar from './Sidebar'

const Header: React.FC<{}> = () => {
  const { cursorChangeHandler } = useContext(MouseContext)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [sidebarTween, setSidebarTween] = useState<any>(null)

  const handleIsMenuActive = () => {
    setIsMenuActive(!isMenuActive)
    if (sidebarTween) {
      if (isMenuActive) {
        sidebarTween.reverse()
      } else {
        sidebarTween.play()
      }
    }
  }

  useEffect(() => {
    const sidebar = gsap.to('#sidebar', {
      duration: 0.5,
      right: '0',
      ease: 'slow',
      paused: true,
    })
    setSidebarTween(sidebar)
  }, [])

  return (
    <>
      <Container>
        <HomeLink
          to={'/'}
          bg={'#2a9085'}
          direction={'bottom'}
          cover
          duration={0.75}
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          D.R
        </HomeLink>
        <MenuButton isMenuActive={isMenuActive} handleIsMenuActive={handleIsMenuActive} />
      </Container>
      <Sidebar isMenuActive={isMenuActive} />
    </>
  )
}
const Container = styled.div`
  background-color: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
`

const HomeLink = styled(AniLink)`
  color: var(--white);
  font-size: 1.8rem;
`

export default Header
