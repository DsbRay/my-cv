import React, { ReactNode } from 'react'
import Header from './Header'
import Cursor from '../components/elements/Cursor'
import '../utils/styles.css'
import MouseContextProvider from '../utils/mouseContext'
import styled from 'styled-components'

type HomePageProps = {
  children: ReactNode
}

const Main = styled.div``

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
