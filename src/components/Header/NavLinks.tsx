import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TransitionButton from '../elements/TransitionButton'
type Link = {
  label: string
  url: string
}

type LinkProps = {
  links: Link[]
}

const NavLinks: React.FC<LinkProps> = ({ links }: LinkProps) => {
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const pathName = typeof window !== 'undefined' ? window.location.pathname : ''
    setActiveLink(pathName)
  }, [])

  return (
    <LinksContainer>
      {links.map((link: Link, i: number) => {
        const { label, url } = link
        return (
          <TransitionButton
            key={i}
            label={label}
            to={url}
            transitionColor='green'
            direction='left'
            isActive={activeLink === url}
          />
        )
      })}
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`

export default NavLinks
