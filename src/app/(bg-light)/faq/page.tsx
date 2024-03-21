'use client'
import { faqItems } from '@/utils/faq-items'
import { Accordion, AccordionItem } from '@nextui-org/react'
import Image from 'next/image'

export default function Faq() {
  return (
    <div className="flex items-center justify-evenly w-full relative flex-col lg:flex-row">
      <div className="flex flex-col lg:w-[1160px] w-full z-10 md:p-16 p-4">
        <h1 className="mb-3 lg:ml-6 text-shadow lg:text-start text-center text-shadow-lg sm:text-shadow-none font-cloverGroteskBlackRegular text-[#001F6D] text-[32px] md:text-[56px]  font-bold">
          FAQ
        </h1>

        <Accordion
          className=" text-white lg:w-[805px] rounded-xl"
          variant="splitted"
          fullWidth
        >
          {faqItems.map((item, index) => (
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
        className="hidden lg:flex"
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
    </div>
  )
}
