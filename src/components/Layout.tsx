import React, { ReactNode } from 'react'
import Header from './Header'
import Cursor from '../components/elements/Cursor'
import '../utils/styles.css'
import MouseContextProvider from '../utils/mouseContext'
import styled from 'styled-components'
import starsBg from '../images/space/space-background-4.svg'
import plusBg from '../images/space/space-background-5.svg'

type HomePageProps = {
  children: ReactNode
}

const Main = styled.div`
  background-image: ${() => `url(${starsBg}), url(${plusBg})`};
  background-color: var(--black);
  min-height: calc(100vh);
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default function Layout({ children }: HomePageProps) {
  return (
    <Main>
      <MouseContextProvider>
        <Cursor />
        <Header />
        {children}
      </MouseContextProvider>
    </Main>
  )
}
