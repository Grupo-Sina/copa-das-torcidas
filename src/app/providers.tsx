'use client'

import { AppContextProvider } from '@/context/AppContext'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppContextProvider>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">{children} </main>
      </NextUIProvider>
    </AppContextProvider>
  )
}
