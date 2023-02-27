import React from 'react'
import styled from 'styled-components'
import SpaceParallax from './SpaceParallax'
import ScreenTitle from './ScreenTitle'
import background from '../../images/space/space-background.jpg'

const HomePage = () => {
  return (
    <HomeContainer background={background}>
      <SpaceParallax />
      <ScreenTitle />
    </HomeContainer>
  )
}

const HomeContainer = styled.div<{ background: string }>`
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 50px);
  max-height: calc(100vh - 50px);
  position: relative;
`
export default HomePage
