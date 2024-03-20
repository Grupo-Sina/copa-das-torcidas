"use client";

import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Missions() {
  return (
    <main className="w-full flex justify-around items-center flex-wrap">
      <div className="px-8">
        <h1 className="font-cloverGroteskBlackRegular text-white text-[56px] font-bold my-4">
          MISSÕES ATIVAS
        </h1>
        <Accordion
          defaultExpandedKeys={["1"]}
          className="bg-[#001F6D] text-white lg:w-[805px] p-6 rounded-xl"
        >
          <AccordionItem
            key="1"
            aria-label="MISSÕES NÍVEL 1"
            title="MISSÕES NÍVEL 1"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">
                1
              </div>
            }
            classNames={{
              subtitle: "bg-white",
              title: "text-white font-robotoRegular",
            }}
          >
            <p className="text-white font-robotoRegular text-[18px]">
              Valem{" "}
              <span className="text-[#00E46F] font-robotoRegularBold font-bold text-[18px]">
                10 Pontos
              </span>{" "}
              (10P)
            </p>
            <br />
            <p className="text-white text-[16px] font-robotoRegular">
              Essas missões também terão como prêmio bancas de R$50,00 na
              Esportes da Sorte. Essas "bancas" são valores que o ganhador
              poderá usar no site da Esportes da Sorte.
            </p>
            <br />
            <Button
              radius="full"
              size="md"
              className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8"
            >
              COMEÇAR
            </Button>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="MISSÕES NÍVEL 2"
            title="MISSÕES NÍVEL 2"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">
                2
              </div>
            }
            classNames={{
              title: "text-white font-robotoRegular",
            }}
          >
            <p className="text-white font-robotoRegular text-[18px]">
              Valem{" "}
              <span className="text-[#00E46F] font-robotoRegularBold font-bold text-[18px]">
                10 Pontos
              </span>{" "}
              (10P)
            </p>
            <br />
            <p className="text-white text-[16px] font-robotoRegular">
              Essas missões também terão como prêmio bancas de R$50,00 na
              Esportes da Sorte. Essas "bancas" são valores que o ganhador
              poderá usar no site da Esportes da Sorte.
            </p>
            <br />
            <Button
              radius="full"
              size="md"
              className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8"
            >
              COMEÇAR
            </Button>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="MISSÕES NÍVEL 3"
            title="MISSÕES NÍVEL 3"
            startContent={
              <div className="bg-[#0038C1] w-[24px] h-[24px] rounded-full font-robotoRegular text-[16px]">
                3
              </div>
            }
            classNames={{
              title: "text-white font-robotoRegular",
            }}
          >
            <p className="text-white font-robotoRegular text-[18px]">
              Valem{" "}
              <span className="text-[#00E46F] font-robotoRegularBold font-bold text-[18px]">
                10 Pontos
              </span>{" "}
              (10P)
            </p>
            <br />
            <p className="text-white text-[16px] font-robotoRegular">
              Essas missões também terão como prêmio bancas de R$50,00 na
              Esportes da Sorte. Essas "bancas" são valores que o ganhador
              poderá usar no site da Esportes da Sorte.
            </p>
            <br />
            <Button
              radius="full"
              size="md"
              className="bg-[#00E46F] font-headingBold text-[18px] text-[#003B9C] py-3 px-8"
            >
              COMEÇAR
            </Button>
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
