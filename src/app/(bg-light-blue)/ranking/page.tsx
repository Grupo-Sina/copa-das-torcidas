'use client'

import RankingModal from '@/app/components/RankingModal/RankingModal'
import { Button, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'

export default function Ranking() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-20 w-full overflow-hidden relative">
      <div className="flex w-full xl:justify-start justify-center gap-20 items-center lg:h-full lg:p-28">
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo"
          width={345}
          height={369}
          quality={100}
          priority={true}
          className="hidden lg:flex h-[345px] w-[369px]"
        />
        <div className="w-full flex flex-col lg:block items-center justify-center z-30">
          <p className="font-cloverGroteskBlackRegular  text-white text-[45px] sm:text-[60px] desktop:text-[79px]">
            CONFIRA O
          </p>

          <p className="text-shadow font-cloverGroteskBlackRegular text-white text-[55px] sm:text-[81px] desktop:text-[100px]">
            RANKING
          </p>
          <p className="text-shadow font-cloverGroteskBlackRegular text-white text-[32px] sm:text-[44px] desktop:text-[56px]">
            DA PROMOÇÃO!
          </p>
          <Button
            onPress={onOpen}
            radius="full"
            className="my-4 bg-[#00E46F] text-[#003B9C] text-[18px] desktop:text-[24px] font-headingBold py-3 px-8"
          >
            VER RANKING
          </Button>
        </div>
        <Image
          src={'/grouptext.svg'}
          alt="copa das torcidas"
          width={120}
          height={56}
          quality={100}
          priority={true}
          className="hidden lg:flex"
        />
      </div>
      <RankingModal isOpen={isOpen} onClose={onOpenChange} />
      <Image
        src={'/trophy1.png'}
        alt="trophy"
        width={816}
        height={1057}
        quality={100}
        priority={true}
        className="hidden 2xl:block 2xl:bottom-[-150px] 2xl:right-[160px] absolute z-[1] desktop:h-[822px] desktop:w-[909px]"
      />
      <div className="lg:hidden w-full flex items-center justify-center h-auto z-[40px] relative">
        <Image
          src={'/grouptext2.png'}
          alt="copa das torcidas"
          width={66}
          height={232}
          quality={100}
          priority={true}
          className="absolute left-6"
        />
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo"
          width={181}
          height={193}
          quality={100}
          priority={true}
          className="z-10"
        />
        <Image
          src={'/trophy1.png'}
          alt="trophy"
          width={419}
          height={387}
          quality={100}
          priority
          className="absolute right-[-160px] miniMobile:bottom-[-120px] bottom-[-80px]"
        />
      </div>
    </div>
  )
}
