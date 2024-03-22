'use client'

import useWindowWidth from '@/utils/window-width-hook'
import Image from 'next/image'

export default function Home() {
  const windowWidth = useWindowWidth()

  const bannerSrc =
    windowWidth && windowWidth < 768
      ? '/mobile-bannerclubedasorte.png'
      : '/bannerclubedasorte.png'

  return (
    <main className="flex-1 flex flex-col items-center justify-evenly overflow-auto lg:p-8 py-8 px-2 gap-5">
      <div
        className="overflow-hidden flex flex-col lg:flex-row items-center justify-center 2xl:gap-16 bg-white w-[85%] p-4 px-4 rounded-xl h-auto"
        style={{ backgroundImage: "url('/lightbgdiv.png')" }}
      >
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={337}
          height={361}
          quality={100}
          priority={true}
          className="w-[168px] h-[180px] xl:h-[321px] xl:w-[287px]"
        />
        <div className="flex flex-col flex-grow h-full max-w-[1222px] my-8 lg:my-0 px-4 2xl:px-0">
          <h1 className="text-shadow mb-4 text-center text-[32px] xl:text-left text-bold desktop:text-[65px] lg:text-[50px] text-[#001F6D] font-cloverGroteskBlack">
            COPA DAS TORCIDAS
          </h1>

          <p className="desktop:text-[33px] text-[18px] text-[#001F6D] font-robotoRegular text-justify">
            Foi dada a largada na{" "}
            <span className="font-bold font-robotoBold">COPA DAS TORCIDAS</span>
            , que vai em busca da torcida mais apaixonada para premiar somente
            os de fé da Várzea!
          </p>
          <br />
          <p className="font-robotoRegular text-[18px] text-[#001F6D] text-justify">
            Como a Esportes da Sorte não deixa a brincadeira ficar chata para
            ninguém, a procura pela torcida com o grito mais forte vai vir
            acompanhada de premiações semanais, com bancas na plataforma
            oficial, espaços vips para as torcidas em dia de eventos, brindes
            personalizados e o seu time ainda vai poder lutar pelo grande
            prêmio! Assim, a corrida até o título fica ainda mais emocionante
            para você!
          </p>
        </div>
      </div>
      <Image
        src={bannerSrc}
        alt="banner eds"
        width={1640}
        height={276}
        quality={100}
        priority={true}
        className="mx-auto mb-8 lg:mb-0 h-[210px] w-[85%]"
      />
    </main>
  )
}
