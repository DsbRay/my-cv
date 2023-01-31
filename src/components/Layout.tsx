import React, { ReactNode } from 'react'
import Header from './Header'
import Cursor from '../components/elements/Cursor'
import '../utils/styles.css'

type HomePageProps = {
  children: ReactNode
}

export default function Layout({ children }: HomePageProps) {
  return (
    <div>
      <Cursor />
      <Header />
      {children}
    </div>
  )
}
