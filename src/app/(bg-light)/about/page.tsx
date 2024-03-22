/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function About() {
  return (

    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly w-full h-auto relative overflow-x-hidden">
      <div className="flex flex-col w-full z-10 lg:p-16">
        <h1 className="my-4 lg:mb-0 font-cloverGroteskBlackRegular text-center text-[32px] lg:text-left text-[#001F6D] lg:text-[56px] text-shadow">

          SOBRE
        </h1>
        <p className="px-8 lg:px-0 text-justify text-[18px] lg:text-[28px] text-[#001F6D] font-robotoRegular">
          Com realização da Esportes da Sorte, a Copa das Torcidas é um
          campeonato que promove uma disputa justa e saudável entre os maiores
          torcedores varzeanos. Para a alegria de todos e mostrando pra que
          veio, a EDS traz todas as dinâmicas e computação de votos aqui mesmo e
          com todos os números claros.
        </p>
        <br />
        <p className="px-8 lg:px-0 text-justify text-[18px] lg:text-[28px] text-[#001F6D] font-robotoRegular">
          {' '}
          Na Copa das Torcidas, o time que estiver cadastrado pode começar a
          participar das "Missões da Sorte", que serão publicadas no Instagram
          @copadastorcidas. As torcidas que forem completando as missões vão
          começar a acumular pontos que serão somados no final do campeonato. O
          time que tiver mais pontos, vence a competição!
        </p>
      </div>
      <Image
        src={'/escudocopadastorcidas.png'}
        alt="escudo copa das torcidas"
        width={527}
        height={564}
        quality={100}
        priority={true}
        className="w-[136px] h-[146px] lg:w-[527px] lg:h-[564px] mr-0 mt-7 lg:mr-[-3%]"
      />
    </div>
  )
}
