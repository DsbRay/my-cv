import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const linkList = [
  {
    label: 'About me',
    url: '/',
  },
  {
    label: 'Projects',
    url: '/projects',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
]

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <h1>D.R</h1>
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

export default Header
