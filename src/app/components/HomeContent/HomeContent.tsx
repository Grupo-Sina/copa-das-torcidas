import Image from 'next/image'
import CarouselLargeComponent from '../Carousel/CarouselLarge'
import CarouselMobileComponent from '../Carousel/CarouselMobile'
import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'
import { Montserrat } from 'next/font/google'
import { MdVolumeDown, MdVolumeOff } from 'react-icons/md'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function HomeContent() {
  const [shouldChangeText, setShouldChangeText] = useState<boolean>(false)
  const { shouldMutedVideo, setShouldMutedVideo } = useAppContext()
  return (
    <main className="w-full flex-1 flex flex-col items-center desktop:justify-center justify-around xl:justify-evenly overflow-auto lg:p-8 py-8 px-2 gap-20 h-full relative">
      <CarouselLargeComponent />
      <CarouselMobileComponent />
      <div
        className="flex flex-col lg:flex-row items-center justify-around lg:gap-8 bg-white w-[85%] p-4 px-4 rounded-xl h-auto lg:relative"
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

        <div className="flex flex-col h-full my-8 lg:my-0 px-4 lg:pt-3 xl:pt-0 2xl:px-0 w-full">
          <h1 className="xl:leading-tight text-center xl:text-left text-[56px] sm:text-[64px] lg:text-[100px] text-[#001F6D] font-brakedBold">
            COPA DAS TORCIDAS
          </h1>
          {shouldChangeText === false && (
            <>
              <p
                className={`${montserrat.className} w-full sm:text-[28px] text-[18px] text-[#001F6D] text-justify items-center`}
              >
                Foi dada a largada na{' '}
                <span className="text-[18px] sm:text-[28px] font-bold">
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
                className="hover:bg-[white] mx-auto xl:mx-0 w-full lg:w-[141px] bg-[#00E46F] text-[#003B9C] md:flex py-3 px-8 font-headingBold text-[18px]"
              >
                LER MAIS
              </Button>
            </>
          )}

          {shouldChangeText && (
            <>
              <p
                className={`${montserrat.className} text-[18px] md:text-[24px] text-[#001F6D] text-justify`}
              >
                Como a Esportes da Sorte não deixa a brincadeira ficar chata
                para ninguém, a procura pela torcida com o grito mais forte vai
                vir acompanhada de{' '}
                <span className="font-bold">premiações semanais</span>, com
                bancas na plataforma oficial, espaços vips para as torcidas em
                dia de eventos, brindes personalizados e o seu time ainda vai
                poder lutar pelo grande prêmio! Assim, a corrida até o título
                fica ainda mais emocionante para você!
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
        <div className="z-10 self-end mt-[-35px] mr-[10px] bg-[#00E46F] rounded-full px-2 w-[30px] h-[30px] flex items-center justify-center ml-[-10px]">
          {shouldMutedVideo ? (
            <MdVolumeOff
              color="#003B9C"
              className="text-[38px]"
              onClick={() => setShouldMutedVideo(false)}
            />
          ) : (
            <MdVolumeDown
              color="#003B9C"
              className="text-[38px]"
              onClick={() => setShouldMutedVideo(true)}
            />
          )}
        </div>
      </div>
    </main>
  )
}
