import type { Metadata } from 'next'
import './globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Providers from './providers'
import { Suspense } from 'react'
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Copa das Torcidas',
  description: 'Copa das Torcidas',
}
const METRICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className=" overflow-x-hidden">
        <Providers>{children}</Providers>
        <Suspense fallback={null}>
          {METRICS_ID && <GoogleAnalytics gaId={METRICS_ID} />}
        </Suspense>
      </body>
    </html>
  )
}
