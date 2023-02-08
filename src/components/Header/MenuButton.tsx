import React, { useContext } from 'react'
import styled from 'styled-components'
import { MouseContext } from '../../utils/mouseContext'

type MenuProps = {
  isMenuActive: boolean
  handleIsMenuActive: () => void
}

const MenuButton: React.FC<MenuProps> = ({ isMenuActive, handleIsMenuActive }: MenuProps) => {
  const { cursorChangeHandler } = useContext(MouseContext)
  return (
    <Menu
      className={isMenuActive ? 'active' : ''}
      onClick={handleIsMenuActive}
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      <div />
      <div />
      <div />
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  width: 34px;
  flex-direction: column;
  align-items: end;
  div {
    width: 100%;
    height: 4px;
    border-radius: 20px;
    background-color: var(--white);
    transition: all 0.25s ease;
  }
  &.active {
    div {
      &:first-child {
        width: 50%;
        background-color: var(--lochinvar);
      }
      &:last-child {
        width: 30%;
        background-color: var(--lochinvar);
      }
      &:nth-child(2) {
        width: 80%;
      }
    }
  }
`

export default MenuButton
