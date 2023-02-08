import React from 'react'
import styled from 'styled-components'

const ScreenTitle: React.FC<{}> = () => {
  return (
    <Container>
      <div id='screen-title'>
        <h1 className='test'>Hi!</h1>
        <h2>I'm a Front-End Developer</h2>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1,
  h2 {
    color: var(--white);
    font-weight: 700;
  }
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
`
export default ScreenTitle
