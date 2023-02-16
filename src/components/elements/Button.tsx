import React, { useContext } from 'react'
import styled from 'styled-components'
import { MouseContext } from '../../utils/mouseContext'

type ButtonProps = {
  type: string
  url: string
  title: string
  icon: string
}

const Button: React.FC<ButtonProps> = ({ type, url, title, icon }: ButtonProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)
  if (!url || url === '/') return null
  return (
    <Link
      className={type}
      href={url}
      target='_blank'
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      <img src={icon} />
      {title}
    </Link>
  )
}

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 8px;
  width: 200px;
  border-radius: 30px;
  font-size: 20px;
  gap: 10px;
  border: 2px solid var(--white);
  transition: all 0.25s ease-in-out;
  img {
    height: 25px;
  }
  &.site {
    img {
      position: relative;
      top: 4px;
      height: 30px;
    }
  }
  &.github {
    background-color: var(--bunker);
    color: var(--white);
    border-color: var(--bunker);
  }
  &:hover {
    opacity: 0.8;
    border-color: var(--lochinvar);
  }
`

export default Button
