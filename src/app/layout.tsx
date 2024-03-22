import type { Metadata } from 'next'
import './globals.css'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Copa das Torcidas',
  description: 'Copa das Torcidas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className=" overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
