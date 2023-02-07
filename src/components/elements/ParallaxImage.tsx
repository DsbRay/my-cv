import React from 'react'
import styled from 'styled-components'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse'

type ImageProps = {
  img: string
  top: string
  left: string
  width: string
}

const ParallaxImage: React.FC<ImageProps> = ({ img, top, left, width }: ImageProps) => {
  return <Image src={img} top={top} left={left} width={width} />
}

const Image = styled.img<{ top: string; left: string; width: string }>`
  /* position: absolute; */
  /* top: ${({ top }) => `${top}`};
  left: ${({ left }) => `${left}`};
  width: ${({ width }) => `${width}`}; */
`

export default ParallaxImage
