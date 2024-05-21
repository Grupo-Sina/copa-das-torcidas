import Header from '@/app/components/Header/Header'
import '../globals.css'
import Footer from '@/app/components/Footer/Footer'
import RankingBackground from '../components/RankingBackground/RankingBackground'

export default function MissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col bg-yellow w-screen min-h-screen overflow-hidden">
      <Header />
      <RankingBackground>{children}</RankingBackground>
      <Footer />
    </div>
  )
}
