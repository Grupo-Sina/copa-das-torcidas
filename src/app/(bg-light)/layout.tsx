import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <div
        className="flex flex-1 bg-no-repeat bg-center bg-cover object-cover pb-10"
        style={{ backgroundImage: "url('/lightbg.png')" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
