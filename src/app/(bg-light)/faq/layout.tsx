import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Copa das Torcidas',
  description: 'Copa das torcidas',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutFaq({ children }: LayoutProps) {
  return <>{children}</>
}
