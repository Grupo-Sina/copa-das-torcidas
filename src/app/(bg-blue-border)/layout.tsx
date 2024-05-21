import '../globals.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function MissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden">
      <Header />
      <div
        className="flex flex-1 bg-no-repeat bg-center bg-cover object-cover overflow-hidden"
        style={{ backgroundImage: "url('/bg-blue-with-border.png')" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
