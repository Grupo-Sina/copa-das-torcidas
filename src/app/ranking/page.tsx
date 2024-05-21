'use client'

import RankingModal from '@/app/components/RankingModal/RankingModal'
import { Button, useDisclosure } from '@nextui-org/react'
import RankingTeams from '../components/RankingTeams/RankingTeams'
import RankingTeamsMobile from '../components/RankingTeamsMobile/RankingTeamsMobile'

export default function Ranking() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-20 w-full overflow-hidden relative mb-80 md:mb-0">
      <div className="flex w-full xl:justify-start justify-center gap-20 items-center lg:h-full lg:px-28">
        <div className="mt-20 h-full text-center w-full flex flex-col lg:block items-center justify-center z-30">
          <p className="text-shadow font-brakedBold text-white text-[55px] sm:text-[90px] desktop:text-[110px]">
            CONFIRA O RANKING
          </p>
          <p className="text-shadow font-brakedBold text-white text-[32px] sm:text-[50px] desktop:text-[70px]">
            DA PROMOÇÃO!
          </p>
          <RankingTeams />
          <RankingTeamsMobile />
          <Button
            onPress={onOpen}
            radius="full"
            className="hover:bg-white my-4 bg-[#00E46F] text-[#003B9C] text-[18px] desktop:text-[24px] font-headingBold py-3 px-8"
          >
            VER RANKING COMPLETO
          </Button>
        </div>
      </div>
      <RankingModal isOpen={isOpen} onClose={onOpenChange} />
    </div>
  )
}
