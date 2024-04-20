import { useRef, useState } from 'react'
import PlayCircle from '../../../../public/play-circle.png'
import Image from 'next/image'
export default function HomeVideoMobile() {
  const [playingSmall, setPlayingSmall] = useState(false)
  const [playingMedium, setPlayingMedium] = useState(false)
  const videoRefSmall = useRef<HTMLVideoElement>(null)
  const videoRefMedium = useRef<HTMLVideoElement>(null)
  const togglePlay = (type: 'small' | 'medium') => {
    let video
    if (type === 'small') {
      video = videoRefSmall.current
    } else {
      video = videoRefMedium.current
    }

    if (video?.paused) {
      video.play()
      if (type === 'small') {
        setPlayingSmall(true)
      } else {
        setPlayingMedium(true)
      }
    } else {
      video?.pause()
      if (type === 'small') {
        setPlayingSmall(false)
      } else {
        setPlayingMedium(false)
      }
    }
  }

  return (
    <div>
      <div className="relative flex items-center justify-center sm:hidden">
        <video
          loop
          className="w-full rounded-xl"
          disableRemotePlayback
          onClick={() => togglePlay('small')}
          ref={videoRefSmall}
        >
          <source src={'video-home-mobile.mp4'} type="video/mp4" />
        </video>
        {!playingSmall && (
          <Image
            src={PlayCircle}
            alt="player"
            className="cursor-pointer absolute"
            onClick={() => togglePlay('small')}
          />
        )}
      </div>
      <div className="relative hidden sm:flex lg:hidden  items-center justify-center ">
        <video
          loop
          className="w-full rounded-xl"
          onClick={() => togglePlay('medium')}
          disableRemotePlayback
          ref={videoRefMedium}
        >
          <source src={'video-home.mp4'} type="video/mp4" />
        </video>
        {!playingMedium && (
          <Image
            src={PlayCircle}
            alt="player"
            className="cursor-pointer absolute"
            onClick={() => togglePlay('medium')}
          />
        )}
      </div>
    </div>
  )
}
