'use client'
import { faqItems } from '@/utils/faq-items'
import { Accordion, AccordionItem } from '@nextui-org/react'
import Image from 'next/image'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

export default function Faq() {
  return (
    <div className=" flex w-full relative flex-col lg:flex-row lg:px-5 px-0 lg:h-[800px]">
      <div className="flex flex-col lg:w-[1024px] w-full z-10 lg:p-16 p-4 lg:gap-10">
        <h1 className="mt-3 mb-4 lg:mb-0 lg:ml-4 text-shadow lg:text-start text-center text-shadow-lg sm:text-shadow-none font-brakedBold text-[#001F6D] text-[48px] lg:text-[100px] leading-10">
          PERGUNTAS FREQUENTES
        </h1>

        <Accordion
          className=" text-white lg:w-[805px] rounded-xl "
          variant="splitted"
          fullWidth
          // defaultExpandedKeys={['0']}
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              classNames={{
                title:
                  'text-white font-microsportBold  lg:text-[20px] text-[16px] ',
              }}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <MdArrowDropUp className="text-white text-[32px]" />
                ) : (
                  <MdArrowDropDown className="text-white text-[32px]" />
                )
              }
            >
              <hr className="mb-[10px]" />
              {item.descriptions.map((description, indexDescription) => (
                <p
                  key={indexDescription}
                  className="text-white lg:text-[16px] text-[14px] font-monterrat font-normal mb-[15px]"
                >
                  {description}
                </p>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Image
        src={'/escudocopadastorcidas.png'}
        alt="escudo copa das torcidas"
        width={388}
        height={405}
        quality={100}
        priority={true}
        className="hidden lg:flex self-center"
      />
      {/* <Image
        src={'/escudocopadastorcidas.png'}
        alt="escudo copa das torcidas"
        width={100}
        height={100}
        quality={100}
        priority={true}
        className="lg:hidden flex"
      /> */}
    </div>
  )
}
