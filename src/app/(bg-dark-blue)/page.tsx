'use client'
// import useWindowWidth from '@/utils/window-width-hook'
import Image from 'next/image'
import CarouselMobileComponent from '../components/Carousel/CarouselMobile'
import CarouselLargeComponent from '../components/Carousel/CarouselLarge'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
export default function Home() {
  const [shouldChangeText, setShouldChangeText] = useState<boolean>(false)
  const [shouldMutedVideo, setShouldMutedVideo] = useState<boolean>(true)

  return (
    <main className="w-full flex-1 flex flex-col items-center desktop:justify-center justify-around xl:justify-evenly overflow-auto lg:p-8 py-8 px-2 gap-5 h-full relative">
      <CarouselLargeComponent />
      <CarouselMobileComponent />
      <div
        className="flex flex-col lg:flex-row items-center justify-end lg:gap-16 bg-white w-[85%] p-4 px-4 rounded-xl h-auto xl:relative"
        style={{ backgroundImage: "url('/lightbgdiv.png')" }}
      >
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={369}
          height={394}
          quality={100}
          priority={true}
          className={`hidden xl:flex xl:absolute left-[-70px] bottom-[-80px] max-h-[394px] max-w-[369px]`}
          style={{ width: '100%', height: 'auto' }} // Adicione esta linha
        />
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={168}
          height={180}
          quality={100}
          priority={true}
          className="absolute top-[245px] lg:top-[300px] right-[43%] h-[180px] w-[168px] xl:hidden"
        />

        <div className="flex flex-col h-full my-8 lg:my-0 px-4 pt-20 xl:pt-0 2xl:px-0 w-[100%] xl:w-[70%] 2xl:w-[75%]">
          <h1 className="text-shadow text-center xl:text-left mb-4 text-[32px] text-bold lg:text-[50px] text-[#001F6D] font-cloverGroteskBlack">
            COPA DAS TORCIDAS
          </h1>
          {shouldChangeText === false && (
            <>
              <p className="w-full text-[24px] text-[#001F6D] font-robotoRegular text-justify items-center">
                Foi dada a largada na{' '}
                <span className="font-bold font-robotoBold">
                  COPA DAS TORCIDAS
                </span>
                , que vai em busca da torcida mais apaixonada para premiar
                somente os de fé da Várzea!
              </p>
              <br />
              <Button
                onClick={() => setShouldChangeText(true)}
                target="_blank"
                rel="noopener noreferrer"
                radius="full"
                className="w-full md:w-[141px] bg-[#00E46F] text-[#003B9C] md:flex py-3 px-8 font-headingBold text-[16px]"
              >
                LER MAIS
              </Button>
            </>
          )}

          {shouldChangeText && (
            <>
              <p className="font-robotoRegular text-[18px] md:text-[24px] text-[#001F6D] text-justify">
                Como a Esportes da Sorte não deixa a brincadeira ficar chata
                para ninguém, a procura pela torcida com o grito mais forte vai
                vir acompanhada de premiações semanais, com bancas na plataforma
                oficial, espaços vips para as torcidas em dia de eventos,
                brindes personalizados e o seu time ainda vai poder lutar pelo
                grande prêmio! Assim, a corrida até o título fica ainda mais
                emocionante para você!
              </p>
              <br />
            </>
          )}
        </div>
        <video
          autoPlay
          loop
          muted={shouldMutedVideo}
          className="bg-video w-full lg:hidden rounded-xl"
          onClick={() => setShouldMutedVideo(false)}
          disableRemotePlayback
        >
          <source src={'/video-home.mp4'} type="video/mp4" />{' '}
        </video>
      </div>
    </main>
  )
}
