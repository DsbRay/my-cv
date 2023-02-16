import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'
import { MY_WORK_LIST } from './data'
import WorkDetails from './WorkDetails'

import 'swiper/css'

type SliderProps = {
  swiperIndex: number
  handleSlideChange: (i: number) => void
}

const Slider: React.FC<SliderProps> = ({ swiperIndex, handleSlideChange }: SliderProps) => {
  const [swiper, setSwiper] = useState<any>(null)

  useEffect(() => {
    if (swiper) swiper.slideTo(swiperIndex)
  }, [swiperIndex])

  return (
    <div>
      <SwiperContainer
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
      >
        {MY_WORK_LIST.map((work, i) => {
          const { previewImg } = work
          return (
            <SwiperSlide key={i}>
              <ProjectImage backgroundImage={previewImg} />
            </SwiperSlide>
          )
        })}
      </SwiperContainer>
      <WorkDetails swiperIndex={swiperIndex} />
    </div>
  )
}

const SwiperContainer = styled(Swiper)`
  height: 350px;
  width: 600px;
`
const ProjectImage = styled.div<{ backgroundImage: string }>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
`
export default Slider
