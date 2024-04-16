'use client'
// import useWindowWidth from '@/utils/window-width-hook'
import Image from 'next/image'
import CarouselMobileComponent from '../components/Carousel/CarouselMobile'
import CarouselLargeComponent from '../components/Carousel/CarouselLarge'
export default function Home() {
  // const windowWidth = useWindowWidth()

  // const bannerSrc =
  //   windowWidth && windowWidth < 768
  //     ? '/mobile-bannerclubedasorte.png'
  //     : '/bannerclubedasorte.png'

  return (
    <main className="w-full flex-1 flex flex-col items-center desktop:justify-center justify-around xl:justify-evenly overflow-auto lg:p-8 py-8 px-2 gap-5 h-full relative">
      <CarouselLargeComponent />
      <CarouselMobileComponent />
      <div
        className="flex flex-col lg:flex-row items-center justify-end gap-16 bg-white w-[85%] p-4 px-4 rounded-xl h-auto xl:relative"
        style={{ backgroundImage: "url('/lightbgdiv.png')" }}
      >
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={369}
          height={394}
          quality={100}
          priority={true}
          className="hidden xl:flex xl:absolute left-[-70px] bottom-[-80px] desktop:h-[394px] desktop:w-[369px]"
        />
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={168}
          height={180}
          quality={100}
          priority={true}
          className="absolute top-[300px] right-[43%] h-[180px] w-[168px] xl:hidden"
        />

        <div className="flex flex-col h-full my-8 lg:my-0 px-4 pt-20 xl:pt-0 2xl:px-0 w-[100%] xl:w-[70%] 2xl:w-[75%]">
          <h1 className="text-shadow text-center xl:text-left mb-4 text-[32px] text-bold desktop:text-[65px] lg:text-[50px] text-[#001F6D] font-cloverGroteskBlack">
            COPA DAS TORCIDAS
          </h1>

          <p className="w-full desktop:text-[33px] text-[24px] text-[#001F6D] font-robotoRegular text-justify items-center">
            Foi dada a largada na{' '}
            <span className="font-bold font-robotoBold">COPA DAS TORCIDAS</span>
            , que vai em busca da torcida mais apaixonada para premiar somente
            os de fé da Várzea!
          </p>
          <br />
          {/* <p className="font-robotoRegular text-[18px] text-[#001F6D] text-justify">
            Como a Esportes da Sorte não deixa a brincadeira ficar chata para
            ninguém, a procura pela torcida com o grito mais forte vai vir
            acompanhada de premiações semanais, com bancas na plataforma
            oficial, espaços vips para as torcidas em dia de eventos, brindes
            personalizados e o seu time ainda vai poder lutar pelo grande
            prêmio! Assim, a corrida até o título fica ainda mais emocionante
            para você!
          </p> */}
        </div>
      </div>
    </main>
  )
}
