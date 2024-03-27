'use client'

import { missions } from '@/utils/missions-items'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Missions() {
  return (
    <main className="w-full flex justify-around items-center flex-col lg:flex-row flex-wrap  pb-10">
      <div className="lg:px-8 px-4 lg:w-[805px] w-full">
        <h1 className="text-shadow lg:ml-7 font-cloverGroteskBlackRegular text-white lg:text-[56px] text-[32px] lg:text-start text-center font-bold  mt-[32px] mb-[24px] lg:my-4">
          MISSÕES ATIVAS
        </h1>
        <Accordion
          defaultExpandedKeys={['1']}
          className="text-white lg:w-[805px] w-full lg:p-6 pb-6 rounded-xl"
          variant="splitted"
          fullWidth
        >
          {missions.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
              startContent={
                <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">
                  {item.id}
                </div>
              }
              classNames={{
                subtitle: 'bg-white',
                title:
                  'text-white font-robotoRegular lg:text-[24px] text-[18px] uppercase',
              }}
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
              <p className="text-white font-robotoRegular text-[18px]">
                Valem{' '}
                <span className="text-[#00E46F] font-robotoRegularBold font-bold lg:text-[18px] text-[16px]">
                  {item.points} Pontos
                </span>{' '}
                ({item.points}P)
              </p>
              <br />
              <p className="text-white lg:text-[16px] text-[14px] font-robotoRegular">
                {item.description}
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
                COMEÇAR
              </Button>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Image
        src={'/grouplogotext.png'}
        alt="logo eds copa das torcidas"
        width={660}
        height={476}
        quality={100}
        priority={true}
        className="h-[452px] w-[603px] hidden lg:flex"
      />

      <Image
        src={'/escudocopadastorcidas.png'}
        alt="escudo copa das torcidas"
        width={100}
        height={100}
        quality={100}
        priority={true}
        className="lg:hidden flex"
      />
    </main>
  )
}
