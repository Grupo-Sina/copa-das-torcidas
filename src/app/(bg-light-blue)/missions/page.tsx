'use client'

import { missions } from '@/utils/missions-items'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Missions() {
  const instructions = [
    `Clique na aba "Times".`,
    `Procure o nome do seu time.`,
    `Clique em "DEPOSITE".`,
    `Faça um depósito de QUALQUER VALOR e
  concorra.`,
  ]

  return (
    <main className="w-full xl:w-[87%] h-auto flex justify-around xl:justify-between items-center flex-col xl:flex-row mx-auto">
      <div className="lg:px-8 px-4 xl:w-[805px] w-full">
        <h1 className="text-shadow lg:ml-7 font-brakedSemibold text-white md:text-[80px] text-[52px] xl:text-start text-center  mt-[32px] mb-[24px] lg:my-4">
          MISSÕES DA SORTE
        </h1>
        <Accordion
          // disabledKeys={['1']}
          // defaultExpandedKeys={['1']}
          className="text-white xl:w-[805px] w-full p-6 pb-6 rounded-xl z-50"
          variant="splitted"
          fullWidth
        >
          {missions.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
              startContent={
                <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-microsportBold text-[10px] flex justify-center items-center">
                  {item.id}
                </div>
              }
              classNames={{
                subtitle: 'bg-white',
                title:
                  'text-white font-microsportBold lg:text-[24px] text-[18px] uppercase',
              }}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <MdArrowDropUp className="text-white text-[32px]" />
                ) : (
                  <MdArrowDropDown className="text-white text-[32px]" />
                )
              }
              // className="p-3"
            >
              <hr
                style={{
                  borderTopColor: 'white',
                  opacity: '0.5',
                  strokeWidth: '0.5px',
                  marginTop: '-8px',
                  marginBottom: '16px',
                }}
              />
              <p
                className={`${montserrat.className} text-white font-robotoRegular text-[18px]`}
              >
                Valem{' '}
                <span className="text-[#00E46F] font-bold lg:text-[18px] text-[16px]">
                  {item.points} Pontos
                </span>{' '}
                ({item.points}P)
              </p>
              <br />
              <p className={`${montserrat.className} text-white text-[16px]`}>
                {item.description}
              </p>
              <br />
              <ul>
                {instructions.map((instrction, index) => (
                  <li
                    key={index}
                    className={`${montserrat.className} text-white text-[16px]`}
                  >
                    {index + 1}. {instrction}
                  </li>
                ))}
              </ul>
              <br />
              <p
                className={`${montserrat.className} text-white lg:text-[16px] text-[14px]`}
              >
                Pontuaçes da missão:
              </p>
              <br />
              <p
                className={`${montserrat.className} text-white lg:text-[16px] text-[14px]`}
              >
                50 pontos para o 1º lugar.{' '}
              </p>
              <p
                className={`${montserrat.className} text-white lg:text-[16px] text-[14px]`}
              >
                30 pontos para o 2º lugar.{' '}
              </p>
              <p
                className={`${montserrat.className} text-white lg:text-[16px] text-[14px]`}
              >
                20 pontos para o 3º lugar.{' '}
              </p>
              <br />
              <Button
                as={Link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                radius="full"
                size="md"
                className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8 mb-3"
              >
                CUMPRIR A MISSÃO AGORA!
              </Button>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Image
        src={'/grouplogotext.png'}
        alt="logo eds copa das torcidas"
        width={530}
        height={151}
        quality={100}
        priority={true}
        className="h-[530px] w-[151px] hidden xl:flex mr-12"
      />

      {/* <Image
        src={'/grouplogotext.png'}
        alt="escudo copa das torcidas"
        width={108}
        height={380}
        quality={100}
        priority={true}
        className="xl:hidden flex w-full h-full max-w-[340px] max-h-[200px] rotate-90"
      /> */}
      <Image
        src={'/grouptextrow.svg'}
        alt="escudo copa das torcidas"
        width={108}
        height={380}
        quality={100}
        priority={true}
        className="xl:hidden flex w-full h-full max-w-[530px] max-h-[130px] mb-8 px-8 sm:px-0 sm:mb-8"
      />
    </main>
  )
}
