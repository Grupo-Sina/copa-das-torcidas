'use client'

import { ChangeEvent, useState } from 'react'
import ButtonGroupTeams from '@/app/components/ButtonGroupTeams/ButtonGroupTeams'
import { teams } from '@/utils/mock-teams'
import Image from 'next/image'
import { MdSearch } from 'react-icons/md'
import ModalQrCode from '@/app/components/ModalQrCode/ModalQrCode'

export default function Teams() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeams = teams.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex items-center justify-evenly w-full relative flex-col lg:flex-row">
      <div className="flex flex-col lg:w-[1160px] z-10 md:p-16 p-4">
        <h1 className="mb-3 text-shadow lg:text-start text-center text-shadow-lg sm:text-shadow-none font-cloverGroteskBlackRegular text-[#001F6D] text-[32px] md:text-[56px]  font-bold">
          TIMES PARTICIPANTES
        </h1>
        <div className="flex flex-col bg-[#001F6D] max-w-[844px] h-[420px] rounded-[12px] md:px-[24px] px-[12px] py-[24px]">
          <div className="flex items-center mb-3">
            <input
              className="focus:outline-none bg-[#fff] dark:bg-[#fff] px-4 py-3 rounded-[198px] h-[40px] w-full border-[#858C94] border-[1px] text-[#000]"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Pesquisar por nome"
            />
            <MdSearch className="w-[24px] h-[24px] text-[#001F6D] ml-[-35px] " />
          </div>
          <div
            className="flex flex-col overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#FFFFFF #001F6D',
            }}
          >
            {filteredTeams.map((item, index) => (
              <div
                key={index}
                className="flex  w-[98%] items-center justify-between mt-[16px] pb-[16px]  border-b-[#FFFFFF] border-b-[0.5px]"
              >
                <div className="inline-block md:w-full max-w-[30%]">
                  <p className="line-clamp-2 md:text-[18px] sm:text-[16px] text-[14px] text-[#FFFFFF] font-bold font-robotoRegular md:leading-7 leading-4">
                    {item.name}
                  </p>
                </div>
                <div className="md:w-full w-[70%] flex justify-end items-end">
                  <ButtonGroupTeams link={item.link} />
                </div>
              </div>
            ))}
            {teams.length >= 1 && filteredTeams.length === 0 && (
              <div className="h-svh flex items-center justify-center">
                <p className="text-center text-[18px] text-[#FFFFFF] font-bold font-robotoRegular leading-7">
                  Não existe time cadastrado com esse nome.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Image
        src={'/grouologotextlight.png'}
        alt="escudo copa das torcidas"
        width={660}
        height={476}
        quality={100}
        priority={true}
        className="hidden lg:flex"
      />
      <Image
        src={'/escudocopadastorcidas.png'}
        alt="escudo copa das torcidas"
        width={100}
        height={100}
        quality={100}
        priority={true}
        className="lg:hidden"
      />
      <ModalQrCode />
    </div>
  )
}
