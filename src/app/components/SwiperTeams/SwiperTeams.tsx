'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import ButtonGroupTeams from '../ButtonGroupTeams/ButtonGroupTeams'
import { TeamsProps } from '@/utils/mock-teams'
import Image from 'next/image'
import useWindowWidth from '@/utils/window-width-hook'

type SwiperTeamProps = {
  teams: TeamsProps[]
}

export default function SwiperTeams({ teams }: SwiperTeamProps) {
  const swiperRef = useRef<SwiperType>()
  const [slidesPerView, setSlidesPerView] = useState(4)
  const windowWidth = useWindowWidth()
  const [swipeIndex, setSwipeIndex] = useState(0)

  useEffect(() => {
    if (windowWidth) {
      if (windowWidth >= 1024) {
        setSlidesPerView(2)
      }
      if (windowWidth >= 1100) {
        setSlidesPerView(3)
      }
      if (windowWidth >= 1366) {
        setSlidesPerView(4)
      }
    }
  }, [windowWidth])

  return (
    <div className="flex w-full hidden-mobile mt-6">
      {teams.length > 3 && (
        <button
          className={`text-white text-[40px] z-50  ${swipeIndex === 0 && 'opacity-10 cursor-default'}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdArrowBackIos />
        </button>
      )}

      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={teams?.length > 0 ? slidesPerView : 1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className="mySwiper"
        onActiveIndexChange={(swiperCore) => {
          setSwipeIndex(swiperCore.activeIndex)
        }}
      >
        {teams?.length > 0 ? (
          <>
            {teams?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`${index !== 0 && 'border-l-[0.5px] border-white'}   bg-[#001F6D] px-6  flex flex-col items-center justify-between h-[310px]`}
                >
                  {item.image && <Image src={item.image} alt="" />}

                  <div className="inline-block">
                    <p className="line-clamp-1 lg:text-[20px] sm:text-[18px] text-[16px] text-[#FFFFFF] font-bold font-microsportGold text-center ">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <ButtonGroupTeams link={item.link} deposit={item.deposit} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <SwiperSlide>
            <div className="flex h-[310px] w-full items-center justify-center">
              <p className="text-center text-[18px] text-[#FFFFFF] font-bold font-robotoRegular leading-7">
                Não existe time cadastrado com esse nome.
              </p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {teams.length > 3 && (
        <button
          className={`text-white text-[40px] z-50  ${swipeIndex === teams?.length - slidesPerView && 'opacity-10 cursor-default'}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdArrowForwardIos />
        </button>
      )}
    </div>
  )
}
