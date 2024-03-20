'use client'

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default LayoutWrapper
