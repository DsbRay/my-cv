import React from 'react'
import SpaceParallax from './SpaceParallax'
import styled from 'styled-components'
const HomePage: React.FC<{}> = () => {
  return (
    <HomeContainer>
      <SpaceParallax />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: black;
  height: calc(100vh - 50px);
  max-height: calc(100vh - 50px);
`
export default HomePage
