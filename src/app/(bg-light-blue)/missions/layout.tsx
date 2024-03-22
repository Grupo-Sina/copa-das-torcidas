import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Missões - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutMisisons({ children }: LayoutProps) {
  return <>{children}</>
}
