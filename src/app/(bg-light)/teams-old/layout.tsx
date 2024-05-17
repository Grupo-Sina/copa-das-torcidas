import { Metadata } from 'next'
import Image from 'next/image'

import ObjectTop from '../../../../public/objetc-top.png'
import ObjectBottom from '../../../../public/object-bottom.png'

export const metadata: Metadata = {
  title: 'Times Participantes - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutTeams({ children }: LayoutProps) {
  return (
    <>
      {' '}
      <Image
        src={ObjectTop}
        alt=""
        className="absolute top-[93px] left-0 lg:block hidden"
      />
      <Image
        src={ObjectBottom}
        alt=""
        className="absolute bottom-[-55px] right-0 lg:block hidden"
      />
      {children}
    </>
  )
}
