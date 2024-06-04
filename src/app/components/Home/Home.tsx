'use client'
import { useEffect, useState } from 'react'
import useWindowWidth from '@/utils/window-width-hook'
import HomeContent from '../HomeContent/HomeContent'

import dynamic from 'next/dynamic'
import { Button, Spinner } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'
import VolumeInput from '../VolumeInput'

const HomeVideo = dynamic(() => import('../HomeVideo/HomeVideo'), {
  ssr: false,
})
export default function HomeComponent() {
  const windowWidth = useWindowWidth()
  const { videoReady, setShouldMutedVideo, setVolumeVideo } = useAppContext()
  const [shouldShowVideo, setShouldShowVideo] = useState(true)
  const isLargeScreen = !!(windowWidth && windowWidth > 1024)

  useEffect(() => {
    if (isLargeScreen) {
      setShouldShowVideo(true)
    } else {
      setShouldShowVideo(false)
    }
  }, [isLargeScreen])

  return (
    <div className="flex justify-center items-center h-full">
      {shouldShowVideo ? (
        <div>
          <HomeVideo />
          {videoReady ? (
            <div className="flex w-full items-center justify-center gap-3">
              <Button
                onClick={() => {
                  setShouldShowVideo(false)
                  setShouldMutedVideo(true)
                  setVolumeVideo(0)
                }}
                rel="noopener noreferrer"
                radius="full"
                className="bg-[#00E46F]  font-extrabold px-8 h-10  lg:mt-[-180px]  text-[#003B9C]  flex  font-headingBold text-[24px]   z-[3]"
              >
                SAIBA MAIS
              </Button>
              <div className="lg:bottom-auto bottom-6 lg:mt-[-180px]  z-[3]">
                <VolumeInput />
              </div>
            </div>
          ) : (
            <Spinner size="lg" color="primary" />
          )}
        </div>
      ) : (
        <HomeContent />
      )}
    </div>
  )
}
