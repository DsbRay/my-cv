import React from 'react'
import styled from 'styled-components'
import SpaceParallax from './SpaceParallax'
import ScreenTitle from './ScreenTitle'

const HomePage = () => {
  return (
    <HomeContainer>
      <SpaceParallax />
      <ScreenTitle />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: calc(100vh - 50px);
  position: relative;
`
export default HomePage
