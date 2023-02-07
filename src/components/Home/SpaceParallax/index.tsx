import React from 'react'
import styled from 'styled-components'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse'
import { IMAGE_LIST } from './data'

const SpaceParallax: React.FC<{}> = () => {
  return (
    <ParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      {IMAGE_LIST.map((image, i) => {
        const { img, left, top, width, inverted } = image
        return (
          <ParallaxChild key={i} factorX={0.3} factorY={0.5} inverted={inverted} left={left} top={top} width={width}>
            <Image src={img} alt='space-img' width={width} />
          </ParallaxChild>
        )
      })}
    </ParallaxContainer>
  )
}

const ParallaxContainer = styled(MouseParallaxContainer)`
  height: 100%;
`
const ParallaxChild = styled(MouseParallaxChild)<{ top: string; left: string; width: string }>`
  position: absolute;
  top: ${({ top, width }) => `calc(${top}% - ${width}px)`};
  left: ${({ left, width }) => `calc(${left}% - ${width}px)`};
`
const Image = styled.img<{ width: string }>`
  width: ${({ width }) => `${width}px`};
`

export default SpaceParallax
