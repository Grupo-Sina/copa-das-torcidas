import Image from 'next/image'
import logoedsfooter from '../../../../public/logoedsfooter.png'
import twittericon from '../../../../public/twittericon.png'
import youtubeicon from '../../../../public/youtubeicon.png'
import instagramicon from '../../../../public/instagramicon.png'
import { Link } from '@nextui-org/react'

export default function Footer() {
  return (
    <footer className="h-[140px] w-screen bg-[#0F1768] flex flex-col md:flex-row items-center justify-around">
      <Image src={logoedsfooter} alt="logoedsfooter" className="h-[28px]" />
      <p className="font-robotoRegular text-white">
        @2024 Copyright - Esportedasorte
      </p>
      <div className="flex space-x-3 cursor-pointer">
        <Link
          href="https://twitter.com/EsportesDaSorte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twittericon} alt="twittericon" />
        </Link>
        <Link
          href="https://www.youtube.com/@esportesdasorteoficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={youtubeicon} alt="youtubeicon" />
        </Link>
        <Link
          href="https://www.instagram.com/esportesdasorte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagramicon} alt="instagramicon" />
        </Link>
      </div>
    </footer>
  )
}
