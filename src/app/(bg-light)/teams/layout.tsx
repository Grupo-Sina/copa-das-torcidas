import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Times - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutTeams({ children }: LayoutProps) {
  return <>{children}</>
}
