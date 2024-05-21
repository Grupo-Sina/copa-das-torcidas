'use client'

import useWindowWidth from '@/utils/window-width-hook'
import React from 'react'

interface RankingBackgroundProps {
  children: React.ReactNode
}

const RankingBackground: React.FC<RankingBackgroundProps> = ({ children }) => {
  const windowWidth = useWindowWidth()

  return (
    <div
      className="flex flex-1 bg-no-repeat bg-center object-cover overflow-hidden"
      style={{
        backgroundColor: '#101768',
        backgroundImage:
          (windowWidth ?? 768) > 768
            ? "url('/rankingbg.png')"
            : "url('/rankingbgmobile.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%',
        minWidth: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default RankingBackground
