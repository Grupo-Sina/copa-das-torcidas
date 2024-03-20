'use client'

import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Missions() {
  
  return (
    <main className="w-full flex">
      <div>
        {/* <h1 className="font-cloverGroteskBlackRegular text-white text-[56px] font-bold">
          MISSÕES ATIVAS
        </h1> */}
        <Accordion defaultExpandedKeys={["1"]} className="bg-[#001F6D] text-white w-[805px] p-6 rounded-xl">
          <AccordionItem
            key="1"
            aria-label="MISSÕES NÍVEL 1"
            title="MISSÕES NÍVEL 1"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">1</div>
            }
            classNames={{
              title: "text-white font-robotoRegular",
            }}
          >
            <p className="text-white font-robotoRegular text-[18px]">Valem <span className="text-[#00E46F] font-robotoRegularBold font-bold text-[18px]">10 Pontos</span> (10P)</p>
            <p className="text-white text-[16px] font-robotoRegular">Essas missões também terão como prêmio bancas de R$50,00 na Esportes da Sorte. Essas "bancas" são valores que o ganhador poderá usar no site da Esportes da Sorte.</p>
            <Button>COMEÇAR</Button>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="MISSÕES NÍVEL 2"
            title="MISSÕES NÍVEL 2"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">2</div>
            }
          >
            oi
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="MISSÕES NÍVEL 3"
            title="MISSÕES NÍVEL 3"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">3</div>
            }
          >
            oi
          </AccordionItem>
        </Accordion>
      </div>

      <Image
        src={"/grouplogotext.png"}
        alt="logo eds copa das torcidas"
        width={660}
        height={476}
        quality={100}
        priority={true}
        className="h-[452px] w-[603px]"
      />
    </main>
  );
}
