import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
const linkList = [
  {
    label: 'Link 1',
    url: '/',
  },
  {
    label: 'Link 2',
    url: '/1',
  },
  {
    label: 'Link 3',
    url: '/2',
  },
  {
    label: 'Link 4',
    url: '/3',
  },
]

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <h1>Duran Ray</h1>
      <NavLinks links={linkList} />
    </Container>
  )
}
const Container = styled.div`
  background-color: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
`
export default Header
