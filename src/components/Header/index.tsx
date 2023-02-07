import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import MenuButton from './MenuButton'
import Sidebar from './Sidebar'

const Header: React.FC<{}> = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  // TWEEN
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
        <h1>D.R</h1>
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

export default Header
