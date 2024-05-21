import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutAbout({ children }: LayoutProps) {
  return <>{children}</>
}
