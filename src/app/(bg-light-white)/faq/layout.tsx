import { Metadata } from 'next'
import Image from 'next/image'
import ObjectBottom from '../../../../public/object-bottom-faq.png'

export const metadata: Metadata = {
  title: 'FAQ - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutFaq({ children }: LayoutProps) {
  return (
    <>
      <Image
        src={ObjectBottom}
        alt=""
        className="absolute margin-bottom-object-faq right-0 lg:block hidden"
      />
      {children}
    </>
  )
}
