'use client'

import ModalTutorialVideo from '@/app/components/ModalTutorialVideo/ModalTutorialVideo'
import { useAppContext } from '@/context/AppContext'
import { fansCup, luckySports } from '@/utils/tutorials'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function Tutorials() {
  const { setModalVisible, setTutorialSelect } = useAppContext()

  const handleOpenTutorial = (link: string) => {
    setModalVisible('tutorial')
    setTutorialSelect(link)
  }
  return (
    <main className="w-full flex justify-around items-center flex-col lg:flex-row flex-wrap  pb-10">
      <div className="lg:px-8 px-4 w-full">
        <h1 className="text-shadow lg:ml-7 font-cloverGroteskBlackRegular text-white lg:text-[56px] text-[32px] lg:text-start text-center font-bold  mt-[32px]">
          TUTORIAIS
        </h1>
        <div className="flex lg:flex-row flex-col items-start justify-between w-full">
          <div className="flex flex-col lg:w-[40%] w-full">
            <h3 className="text-shadow lg:ml-7 font-cloverGroteskBlackRegular text-white lg:text-[40px] text-[24px] lg:text-start text-center font-black my-4">
              COPA DAS TORCIDAS
            </h3>
            <Accordion
              defaultExpandedKeys={['0']}
              className="text-white  w-full lg:px-6 pb-6 rounded-xl"
              variant="splitted"
              fullWidth
            >
              {fansCup.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.title}
                  title={item.title}
                  classNames={{
                    title:
                      'text-white font-robotoRegular lg:text-[24px] text-[18px] ',
                  }}
                >
                  <hr className="mb-[10px]" />
                  {item.descriptions.map((description, indexDescription) => (
                    <p
                      key={indexDescription}
                      className="text-white lg:text-[16px] text-[14px] font-robotoRegular mb-[15px]"
                    >
                      {description}
                    </p>
                  ))}
                  <Button
                    radius="full"
                    size="md"
                    className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8"
                    onClick={() => handleOpenTutorial(item.link)}
                  >
                    ASSISTIR
                  </Button>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-col lg:w-[40%] w-full">
            <h3 className="text-shadow lg:ml-7 font-cloverGroteskBlackRegular text-white lg:text-[40px] text-[24px] lg:text-start text-center font-black  my-4">
              ESPORTES DA SORTE
            </h3>
            <Accordion
              defaultExpandedKeys={['0']}
              className="text-white w-full lg:px-6 pb-6 rounded-xl"
              variant="splitted"
              fullWidth
            >
              {luckySports.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.title}
                  title={item.title}
                  classNames={{
                    title:
                      'text-white font-robotoRegular lg:text-[24px] text-[18px] ',
                  }}
                >
                  <hr className="mb-[10px]" />
                  {item.descriptions.map((description, indexDescription) => (
                    <p
                      key={indexDescription}
                      className="text-white lg:text-[16px] text-[14px] font-robotoRegular mb-[15px]"
                    >
                      {description}
                    </p>
                  ))}
                  <Button
                    radius="full"
                    size="md"
                    className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8"
                    onClick={() => handleOpenTutorial(item.link)}
                  >
                    ASSISTIR
                  </Button>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="py-20 w-[20%]">
            <Image
              src={'/escudocopadastorcidas.png'}
              alt="escudo copa das torcidas"
              width={388}
              height={405}
              quality={100}
              priority={true}
              className="hidden lg:flex"
            />
          </div>
        </div>
      </div>
      <ModalTutorialVideo />
    </main>
  )
}
