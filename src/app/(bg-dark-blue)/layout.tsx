import '../globals.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Image from 'next/image'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col bg-yellow w-screen min-h-screen">
      <Header />
      <div
        className="flex flex-1 bg-no-repeat bg-center bg-cover object-cover relative "
        style={{ backgroundImage: "url('/darkbluebg.png')" }}
      >
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src={'/darkbluebg.png'}
          alt={''}
          priority={true}
        />
        <div className="relative z-1"> {children}</div>
      </div>
      <Footer />
    </div>
  )
}
