import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RankingTeamsMobile() {
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
    <div className="w-full flex flex-col justify-center items-center h-auto mt-10 mb-8 gap-6 lg:hidden">
      <div className="first bg-[#001f69] md:justify-center md:gap-4 justify-evenly items-center flex flex-row h-auto w-[80%] rounded-xl border-solid border-2 border-[#BCBCBC] py-6 pr-7 pl-12 relative">
        <Image
          src="/silverstar.png"
          alt="Silver Star"
          className="w-[60px] h-[57px] absolute left-[-30px]"
          width={60}
          height={57}
        />

        <Image
          src={teams[0].image}
          alt={teams[0].name}
          className="z-50 w-[88px] h-[88px] md:w-[140px] md:h-[140px] overflow-y-hidden flex justify-center items-center"
          width={88}
          height={88}
        />

        <div className="flex flex-col justify-center items-center">
          <p className="font-microsportBold text-[17px] inline">
            {teams[0].name}
          </p>
          <p className={`${montserrat.className} text-[16px]`}>
            {teams[0].points} Pontos
          </p>
        </div>
      </div>
      <div className="second bg-[#001f69] md:justify-center md:gap-4 justify-evenly flex flex-row h-auto w-[80%] rounded-xl border-solid border-2 border-[#ECC45C] py-6 pr-7 pl-12 relative">
        <Image
          src="/goldenstar.png"
          alt="Gold Star"
          width={60}
          height={57}
          className="w-[60px] h-[57px] absolute left-[-30px] top-[40px] md:top-[60px]"
        />

        <Image
          src={teams[1].image}
          alt={teams[1].name}
          className="w-[88px] h-[88px] md:w-[140px] md:h-[140px] overflow-y-hidden justify-center items-center"
          width={110}
          height={10}
        />

        <div className="flex flex-col justify-center items-center">
          <p className="font-microsportBold text-[17px]">{teams[1].name}</p>
          <p className={`${montserrat.className} text-[16px]`}>
            {teams[1].points} Pontos
          </p>
        </div>
      </div>
      <div className="third bg-[#001f69] md:justify-center md:gap-4 justify-evenly flex flex-row h-auto w-[80%] rounded-xl border-solid border-2 border-[#CD7F32] py-6 pr-7 pl-12 relative">
        <Image
          src="/bronzestar.png"
          alt="Bronze Star"
          width={60}
          height={57}
          className="w-[60px] h-[57px] absolute left-[-30px] top-[45px] md:top-[60px]"
        />

        <Image
          src={teams[2].image}
          alt={teams[2].name}
          className="my-[10px] w-[88px] h-[88px] md:w-[120px] md:h-[120px] overflow-y-hidden flex justify-center items-center"
          width={1110}
          height={110}
        />

        <div className="flex flex-col justify-center items-center">
          <p className="font-microsportBold text-[17px]">{teams[2].name}</p>
          <p className={`${montserrat.className} text-[16px]`}>
            {teams[2].points} Pontos
          </p>
        </div>
      </div>
    </div>
  )
}
