import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ranking - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutRanking({ children }: LayoutProps) {
  return <>{children}</>
}
