import React, { ReactNode } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  children: ReactNode
}

export default function Layout({ children }: WrapperProps) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  background-color: rgb(0 0 0 / 50%);
  border: 2px solid var(--tango);
  border-radius: 27px;
  padding: 20px;
  transition: all 0.25s ease;
  &:hover {
    background-color: rgb(0 0 0 / 75%);
  }
`
