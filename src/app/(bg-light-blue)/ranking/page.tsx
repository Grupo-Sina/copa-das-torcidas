"use client";

import RankingModal from "@/app/components/RankingModal/RankingModal";
import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";

export default function Ranking() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex items-center justify-start w-full">
      <div className="flex w-full justify-start gap-20 ml-24">
        <Image
          src={"/escudocopadastorcidas.png"}
          alt="escudo"
          width={345}
          height={369}
          quality={100}
          priority={true}
          className="h-[345px] w-[369px]"
        />
        <div className="z-20">
          <h1 className="text-shadow font-cloverGroteskBlackRegular text-white text-[45px] lg:text-[79px]">
            CONFIRA O
          </h1>
          <h1 className="text-shadow font-cloverGroteskBlackRegular text-white text-[55px] lg:text-[100px]">
            RANKING
          </h1>
          <h1 className="text-shadow font-cloverGroteskBlackRegular text-white text-[32px] lg:text-[56px]">
            DA PROMOÇÃO!
          </h1>
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
        src={"/trophy.png"}
        alt="trophy"
        width={859}
        height={772}
        quality={100}
        priority={true}
        className="absolute hidden 2xl:block 2xl:bottom-[140px] 2xl:right-20"
      />
      <Image
        src={"/grouptext.svg"}
        alt="copa das torcidas"
        width={120}
        height={56}
        quality={100}
        priority={true}
        className="absolute right-20"
      />
    </div>
  );
}
