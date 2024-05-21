/* eslint-disable react/no-unescaped-entities */
'use client'

export default function About() {
  return (
    <div className="w-full h-auto relative overflow-x-hidden lg:py-12 lg:px-24 p-6">
      <div className="bg-white flex flex-col justify-between items-center lg:flex-row gap-12 w-full z-10 lg:px-8 lg:pt-4 lg:pb-8 rounded-xl p-6">
        <div className="lg:w-[50%]">
          <h1 className="font-brakedBold text-center text-[32px] lg:text-left text-[#001F6D] lg:text-[80px]">
            SOBRE
          </h1>
          <p className="text-justify text-[14px] lg:text-[24px] desktop:text-[28px] text-[#001F6D] font-monterrat font-normal">
            Com realização do Esportes da Sorte, a Copa das Torcidas é um
            campeonato que promove uma{' '}
            <b>
              disputa justa e saudável entre os maiores torcedores varzeanos.
            </b>{' '}
            Para a alegria de todos e mostrando pra que veio, o EDS traz todas
            as dinâmicas e computação de votos aqui mesmo e com todos os números
            claros
          </p>
          <br />
          <p className="text-justify text-[14px] lg:text-[24px] desktop:text-[28px] text-[#001F6D] font-monterrat font-normal">
            {' '}
            Na Copa das Torcidas, o time que estiver cadastrado pode começar a
            participar das <b>"Missões da Sorte"</b>, que serão publicadas no{' '}
            <b>Instagram @copadastorcidas.</b> As torcidas que forem completando
            as missões vão começar a acumular pontos que serão somados no final
            do campeonato.
            <b> O time que tiver mais pontos, vence a competição!</b>
          </p>
        </div>

        <div className="lg:w-[50%] lg:h-[637px]">
          <video autoPlay loop className="w-full h-full rounded-xl object-fill">
            <source src={'/video-home.mp4'} type="video/mp4" />{' '}
          </video>
        </div>
      </div>
    </div>
  )
}
