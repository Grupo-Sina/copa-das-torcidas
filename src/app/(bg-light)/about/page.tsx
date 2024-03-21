import Image from 'next/image'

export default function About() {
  return (
    <div className="flex items-center justify-evenly w-full relative">
      <div className="flex flex-col w-[1160px] z-10 p-16">
        <h1 className="font-cloverGroteskBlackRegular text-[#001F6D] text-[56px]">
          SOBRE
        </h1>
        <p className="text-[28px] text-[#001F6D] font-robotoRegular">
          Com realização da Esportes da Sorte, a Copa das Torcidas é um
          campeonato que promove uma disputa justa e saudável entre os maiores
          torcedores varzeanos. Para a alegria de todos e mostrando pra que
          veio, a EDS traz todas as dinâmicas e computação de votos aqui mesmo e
          com todos os números claros.
        </p>
        <br />
        <p className="text-[28px] text-[#001F6D] font-robotoRegular">
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
        className="mr-[-10%]"
      />
    </div>
  )
}
