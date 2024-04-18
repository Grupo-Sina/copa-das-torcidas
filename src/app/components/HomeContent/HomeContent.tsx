import Image from 'next/image'
import CarouselLargeComponent from '../Carousel/CarouselLarge'
import CarouselMobileComponent from '../Carousel/CarouselMobile'
import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'

// xl:w-[70%] 2xl:w-[75%]

export default function HomeContent() {
  const [shouldChangeText, setShouldChangeText] = useState<boolean>(false)
  const { shouldMutedVideo, setShouldMutedVideo } = useAppContext()
  return (
    <main className="w-full flex-1 flex flex-col items-center desktop:justify-center justify-around xl:justify-evenly overflow-auto lg:p-8 py-8 px-2 gap-20 h-full relative">
      <CarouselLargeComponent />
      <CarouselMobileComponent />
      <div
        className="flex flex-col mb-[100px] lg:flex-row items-center justify-around lg:gap-8 bg-white w-[85%] p-4 px-4 rounded-xl h-auto lg:relative"
        style={{ backgroundImage: "url('/lightbgdiv.png')" }}
      >
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={429}
          height={454}
          quality={100}
          priority={true}
          className={`hidden lg:h-[294px] lg:w-[269px] lg:flex xl:max-h-[454px] xl:max-w-[429px]`}
        />
        <Image
          src={'/escudocopadastorcidas.png'}
          alt="escudo copa das torcidas"
          width={168}
          height={180}
          quality={100}
          priority={true}
          className="mt-[-120px] h-[180px] w-[168px] lg:hidden"
        />

        <div className="flex flex-col h-full my-8 lg:my-0 px-4 pt-3 xl:pt-0 2xl:px-0 w-full">
          <h1 className="text-shadow text-center xl:text-left mb-4 text-[32px] text-bold lg:text-[50px] text-[#001F6D] font-cloverGroteskBlack">
            COPA DAS TORCIDAS
          </h1>
          {shouldChangeText === false && (
            <>
              <p className="w-full text-[24px] md:text-[28px] text-[#001F6D] font-robotoRegular text-justify items-center">
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
                className="w-full lg:w-[141px] bg-[#00E46F] text-[#003B9C] md:flex py-3 px-8 font-headingBold text-[16px]"
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
