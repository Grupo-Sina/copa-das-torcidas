'use client'

import RankingModal from '@/app/components/RankingModal/RankingModal'
import { Button, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'

export default function Ranking() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="lg:flex flex-col items-center lg:justify-start justify-center w-full">
      <div className="flex w-full lg:justify-start justify-center gap-20 lg:ml-24 items-center lg:h-full">
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo"
          width={345}
          height={369}
          quality={100}
          priority={true}
          className="hidden lg:flex h-[345px] w-[369px]"
        />
        <div className="w-full flex flex-col lg:block items-center justify-center">
          <p className="font-cloverGroteskBlackRegular  text-white text-[45px] lg:text-[79px]">
            CONFIRA O
          </p>

          <p className="text-shadow font-cloverGroteskBlackRegular text-white text-[55px] lg:text-[100px]">
            RANKING
          </p>
          <p className="text-shadow font-cloverGroteskBlackRegular text-white text-[32px] lg:text-[56px]">
            DA PROMOÇÃO!
          </p>
          <Button
            onPress={onOpen}
            radius="full"
            className="my-4 bg-[#00E46F] text-[#003B9C] text-[18px] lg:text-[24px] font-headingBold py-3 px-8"
          >
            VER RANKING
          </Button>
        </div>
      </div>
      <RankingModal isOpen={isOpen} onClose={onOpenChange} />
      <Image
        src={'/trophy1.png'}
        alt="trophy"
        width={616}
        height={957}
        quality={100}
        priority={true}
        className="hidden 2xl:block 2xl:bottom-[10px] 2xl:right-20 absolute z-[1]"
      />
      {/* <div className="overflow-x-hidden w-full">
        <Image
          src={'/trophy1.png'}
          alt="trophy"
          width={303}
          height={470}
          quality={100}
          priority={true}
          className="overflow-x-hidden lg:hidden block right-[-90px] absolute z-[1] bottom-[-60px]"
        />
      </div> */}
      <Image
        src={'/grouptext.svg'}
        alt="copa das torcidas"
        width={120}
        height={56}
        quality={100}
        priority={true}
        className="lg:flex hidden absolute right-20 center-absolute-y"
      />
      <div className="lg:hidden w-full flex items-center justify-center h-[250px] static z-[40px]">
        <Image
          src={'/grouplogotext.png'}
          alt="copa das torcidas"
          width={250}
          height={115}
          quality={100}
          priority={true}
          className="flex lg:hidden z-[2]"
        />
      </div>
    </div>
  )
}
