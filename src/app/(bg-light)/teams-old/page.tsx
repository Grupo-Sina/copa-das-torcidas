'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import ModalQrCode from '@/app/components/ModalQrCode/ModalQrCode'
import Button from '@/app/components/Button/Button'
import { teams } from '@/utils/mock-teams'

import SwiperTeams from '@/app/components/SwiperTeams/SwiperTeams'
import { Spinner } from '@nextui-org/react'
import TeamMobile from '@/app/components/TeamMobile/TeamMobile'

export default function Teams() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeams = teams.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  }, [])

  return (
    <div className="flex w-full z-10 lg:p-16 p-4 flex-col lg:flex-row justify-between gap-10 items-center">
      {!load ? (
        <div className="h-[450px] flex w-full justify-center">
          <Spinner size="lg" color="primary" />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start justify-center ">
            <p className="lg:max-w-[450px] mb-3 lg:leading-[6rem] leading-[3rem] text-shadow font-brakedBold lg:text-start text-centersm:text-shadow-none  text-[#001F6D] text-[48px] md:text-[100px]">
              TIMES PARTICIPANTES
            </p>
            <p className="max-w-[450px] lg:flex hidden font-monterrat text-[24px] text-[#011E69] leading-[36px] font-medium">
              Lorem ipsum dolor sit amet consectetur. Feugiat iaculis ante massa
              dolor aliquam enim amet.
            </p>
          </div>
          <div className="flex z-0 flex-col bg-[#001F6D] lg:h-[486px] xl:w-[68%] lg:w-[60%] w-full  rounded-[12px] md:px-[24px] px-[12px] pt-[24px] pb-[12px]">
            <div className="flex items-center mb-3 w-full justify-between gap-5">
              <input
                className="focus:outline-none bg-[#fff] dark:bg-[#fff] px-4 py-3 rounded-[198px] h-[40px] w-full border-[#858C94] border-[1px] text-[#000]"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Pesquisar por nome"
              />
              <MdSearch className="w-[24px] h-[24px] text-[#001F6D] ml-[-45px]" />
              <Button title={'VER TODOS'} onClick={() => console.log('')} />
            </div>

            <div
              className={`flex overflow-x-hidden w-full ${filteredTeams.length <= 3 && 'justify-center'}`}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#FFFFFF #001F6D',
              }}
            >
              {filteredTeams && <SwiperTeams teams={filteredTeams} />}

              <div className="flex flex-col">
                {filteredTeams?.map((item, index) => (
                  <TeamMobile team={item} key={index} index={index} />
                ))}
              </div>

              {/* {filteredTeams.map((item, index) => (
            <div
              key={index}
              className={`${index !== 0 && 'border-l-[0.5px] border-white'} px-5 py-3 flex w-[200px] flex-col  items-center justify-between h-[325px]`}
            >
              {item.image && <Image src={item.image} alt="" />}

              <div className="inline-block">
                <p className="line-clamp-1 lg:text-[20px] sm:text-[18px] text-[16px] text-[#FFFFFF] font-bold font-microsportGold text-center ">
                  {item.name}
                </p>
              </div>
              <div className="w-full flex md:justify-end md:items-end md:mt-0 mt-3">
                <ButtonGroupTeams link={item.link} deposit={item.deposit} />
              </div>
            </div>
          ))} */}
              {/* {teams.length >= 1 && filteredTeams.length === 0 && (
            <div className="flex h-[325px] w-full items-center justify-center">
              <p className="text-center text-[18px] text-[#FFFFFF] font-bold font-robotoRegular leading-7">
                Não existe time cadastrado com esse nome.
              </p>
            </div>
          )} */}
            </div>
            <div className="mt-4 lg:block hidden">
              <p className="font-robotoBold xl:text-[16px] lg:text-[14px] ">
                Informações importantes:
              </p>
              <p className="font-robotoRegular xl:text-[14px] lg:text-[12px] ">
                Inserir breve, bem breve mesmo, descrição sobre os CTA`s.
                Cadastro e depósito para ajudar o time e o QR Code como
                possibilidade para compartilhar com outras pessoas.
              </p>
            </div>
          </div>
        </>
      )}

      <ModalQrCode />
    </div>
  )
}
