import React from 'react'
import { Image } from '@nextui-org/react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RankingTeams() {
  const teams = [
    {
      name: 'Batti Fácil',
      points: 10,
      image: '/battifacillogo.png',
    },
    {
      name: 'Ajax 1973',
      points: 25,
      image: '/ajaxlogo.png',
    },
    {
      name: 'Celeste FC',
      points: 0,
      image: '/celestefc.png',
    },
  ]

  return (
    <div className="hidden  lg:w-full lg:flex lg:flex-row lg:justify-center items-center lg:items-end lg:space-x-8 lg:h-auto lg:mt-10 lg:mb-8 desktop:mt-8 desktop:mb-8">
      <div className="first bg-[#001f69] justify-center flex flex-col h-[300px] w-[80%] xl:w-[260px] rounded-xl border-solid border-2 border-[#BCBCBC]">
        <div className="flex flex-col justify-center items-center relative">
          <Image
            src="/silverstar.png"
            alt="Silver Star"
            width={55}
            height={55}
            className="mt-[-70px] mb-[20px] z-50"
          />
          <p className="font-microsportBold text-[20px] inline">
            {teams[0].name}
          </p>
        </div>
        <div className="overflow-y-hidden flex justify-center items-center">
          <Image
            src={teams[0].image}
            alt={teams[0].name}
            className="my-[25px] w-[110px] h-[110px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <p className={`${montserrat.className} text-[18px]`}>
            {teams[0].points} Pontos
          </p>
        </div>
      </div>
      <div className="second bg-[#001f69] flex flex-col h-[370px] w-[80%] xl:w-[260px] rounded-xl border-solid border-2 border-[#ECC45C]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/goldenstar.png"
            alt="Gold Star"
            width={55}
            height={55}
            className="mt-[-30px] mb-[20px] z-50"
          />
          <p className="font-microsportBold text-[20px]">{teams[1].name}</p>
        </div>
        <div className="overflow-y-hidden flex justify-center items-center">
          <Image
            src={teams[1].image}
            alt={teams[1].name}
            className="w-[200px] h-[200px] my-[10px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className={`${montserrat.className} text-[18px]`}>
            {teams[1].points} Pontos
          </p>
        </div>
      </div>
      <div className="third bg-[#001f69] flex flex-col h-[267px] w-[80%] xl:w-[260px] rounded-xl border-solid border-2 border-[#CD7F32]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/bronzestar.png"
            alt="Bronze Star"
            width={41}
            height={41}
            className="mt-[-24px] mb-[20px] z-50"
          />
          <p className="font-microsportBold text-[20px]">{teams[2].name}</p>
        </div>
        <div className="overflow-y-hidden flex justify-center items-center">
          <Image
            src={teams[2].image}
            alt={teams[2].name}
            className="my-[10px] w-[110px] h-[110px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className={`${montserrat.className} text-[18px]`}>
            {teams[2].points} Pontos
          </p>
        </div>
      </div>
    </div>
  )
}
