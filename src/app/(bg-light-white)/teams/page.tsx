'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import ModalQrCode from '@/app/components/ModalQrCode/ModalQrCode'
import Button from '@/app/components/Button/Button'
import { teams } from '@/utils/mock-teams'
import autoAnimate from '@formkit/auto-animate'

import SwiperTeams from '@/app/components/SwiperTeams/SwiperTeams'
import { Spinner } from '@nextui-org/react'
import TeamMobile from '@/app/components/TeamMobile/TeamMobile'
import { useAppContext } from '@/context/AppContext'
import ModalAllTeams from '@/app/components/ModalAllTeams/ModalAllTeams'

export default function Teams() {
  const parent = useRef(null)
  const { setModalVisible } = useAppContext()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeams = teams.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  }, [])

  return (
    <div
      ref={parent}
      className="flex w-full z-10 min-h-[90vh] lg:p-16 p-4 flex-col lg:flex-row justify-between gap-10 items-center"
    >
      {!load ? (
        <div className="h-[450px] flex w-full justify-center">
          <Spinner size="lg" color="primary" />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start justify-center">
            <p className="lg:max-w-[450px] lg:mb-3  lg:leading-[6rem] leading-[3rem] text-shadow font-brakedBold lg:text-start text-center sm:text-shadow-none  text-[#001F6D] text-[48px] lg:text-[100px]">
              TIMES PARTICIPANTES
            </p>
            <p className="max-w-[450px] lg:flex hidden font-monterrat text-[24px] text-[#011E69] leading-[36px] font-medium">
              Lorem ipsum dolor sit amet consectetur. Feugiat iaculis ante massa
              dolor aliquam enim amet.
            </p>
          </div>
          <div className="flex z-0 flex-col bg-[#001F6D] lg:h-[486px] xl:w-[68%] lg:w-[60%] w-full  rounded-[12px] md:px-[24px] px-[12px] pt-[24px] pb-[6px]">
            <div className="flex items-center mb-6 w-full justify-between gap-5">
              <input
                className="focus:outline-none bg-[#fff] dark:bg-[#fff] px-4 py-3 rounded-[198px] h-[40px] w-full border-[#858C94] border-[1px] text-[#000]"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Pesquisar por nome"
              />
              <MdSearch className="w-[24px] h-[24px] text-[#001F6D] ml-[-55px]" />
              <div className="lg:block hidden">
                <Button
                  title={'VER TODOS'}
                  onClick={() => setModalVisible('allteams')}
                />
              </div>
            </div>

            <div
              className={`flex overflow-x-hidden w-full ${filteredTeams.length <= 3 && 'justify-center'}`}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#FFFFFF #001F6D',
              }}
            >
              {filteredTeams && <SwiperTeams teams={filteredTeams} />}

              <div className="flex-col lg:hidden flex justify-center w-full">
                {filteredTeams?.map((item, index) => (
                  <>
                    {index <= 3 && (
                      <TeamMobile team={item} key={index} index={index} />
                    )}
                  </>
                ))}
                {teams.length >= 1 && filteredTeams.length === 0 && (
                  <div className="flex h-[325px] w-full items-center justify-center">
                    <p className="text-center text-[18px] text-[#FFFFFF] font-bold font-robotoRegular leading-7">
                      Não existe time cadastrado com esse nome.
                    </p>
                  </div>
                )}
                <div className="border-t-[0.5px] border-white py-4">
                  <Button
                    title={'VER TODOS'}
                    onClick={() => setModalVisible('allteams')}
                    full
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:block hidden">
              <p className="font-robotoBold xl:text-[14px] lg:text-[14px] ">
                Informações importantes:
              </p>
              <p className="font-robotoRegular xl:text-[12px] lg:text-[12px] ">
                Inserir breve, bem breve mesmo, descrição sobre os CTA`s.
                Cadastro e depósito para ajudar o time e o QR Code como
                possibilidade para compartilhar com outras pessoas.
              </p>
            </div>
          </div>
        </>
      )}

      <ModalQrCode />
      <ModalAllTeams />
    </div>
  )
}
