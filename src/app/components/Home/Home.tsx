'use client'
import { useEffect, useState } from 'react'

import HomeContent from '../HomeContent/HomeContent'

import dynamic from 'next/dynamic'
import { Button } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'

const HomeVideo = dynamic(() => import('../HomeVideo/HomeVideo'), {
  ssr: false,
})
export default function HomeComponent() {
  const { videoReady } = useAppContext()
  const [shouldShowVideo, setShouldShowVideo] = useState(true)

  useEffect(() => {
    setShouldShowVideo(true)
  }, [])

  return (
    <div>
      {shouldShowVideo ? (
        <div>
          <HomeVideo />
          {videoReady ? (
            <div>
              <Button
                onClick={() => setShouldShowVideo(false)}
                rel="noopener noreferrer"
                radius="full"
                className="bg-[#00E46F] md:bottom-auto bottom-6 md:mt-[-120px]  text-[#003B9C]  flex py-3 px-8 font-headingBold text-[16px] absolute  left-1/2 transform -translate-x-1/2 z-[9999999]"
              >
                SAIBA MAIS
              </Button>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      ) : (
        <HomeContent />
      )}
    </div>
  )
}
