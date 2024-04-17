'use client'
import { useEffect, useState } from 'react'

import HomeContent from '../HomeContent/HomeContent'

import dynamic from 'next/dynamic'
import { Button, Progress } from '@nextui-org/react'
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
                className="bg-[#00E46F] lg:bottom-auto bottom-6 lg:mt-[-120px]  text-[#003B9C]  flex py-3 px-8 font-headingBold text-[16px] absolute  left-1/2 transform -translate-x-1/2 z-[3]"
              >
                SAIBA MAIS
              </Button>
            </div>
          ) : (
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="w-screen"
            />
          )}
        </div>
      ) : (
        <HomeContent />
      )}
    </div>
  )
}
