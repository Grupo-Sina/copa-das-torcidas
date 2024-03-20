import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-evenly overflow-auto">
      <div className="flex items-center justify-center gap-16">
        <Image
          src={"/escudocopadastorcidas.png"}
          alt="escudo copa das torcidas"
          width={337}
          height={361}
          quality={100}
          priority={true}
          className="ml-12 2xl:ml-0"
        />
        <div className="flex flex-col w-[1222px] my-8 lg:my-0 px-4 2xl:px-0">
          <h1 className="text-bold desktop:text-[80px] text-[60px] text-white font-cloverGroteskBlack">
            COPA DAS TORCIDAS
          </h1>
          <p className="desktop:text-[40px] text-[24px] text-white font-robotoRegular">
            Foi dada a largada na <span className="font-bold font-robotoBold">COPA DAS TORCIDAS</span>, que vai em busca da torcida
            mais apaixonada para premiar somente os de fé da Várzea!
          </p>
          <br />
          <p className="font-robotoRegular text-[24px] text-white">
            Como a Esportes da Sorte não deixa a brincadeira ficar chata para
            ninguém, a procura pela torcida com o grito mais forte vai vir
            acompanhada de premiações semanais, com bancas na plataforma
            oficial, espaços vips para as torcidas em dia de eventos, brindes
            personalizados e o seu time ainda vai poder lutar pelo grande
            prêmio!  Assim, a corrida até o título fica ainda mais emocionante
            para você!
          </p>
        </div>
      </div>
      <Image
        src={"/bannerclubedasorte.png"}
        alt="banner eds"
        width={1640}
        height={276}
        quality={100}
        priority={true}
        className="mx-auto mb-8 lg:mb-0 h-[250px] w-[1640px]"
      />
    </main>
  );
}
