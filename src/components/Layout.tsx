import React, { ReactNode } from 'react'
import Header from './Header'

import '../utils/styles.css'

type HomePageProps = {
  children: ReactNode
}

export default function Layout({ children }: HomePageProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
