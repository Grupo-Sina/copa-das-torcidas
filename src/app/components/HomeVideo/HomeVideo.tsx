import { useAppContext } from '@/context/AppContext'
import useWindowWidth from '@/utils/window-width-hook'
import ReactPlayer from 'react-player'

export default function HomeVideo() {
  const {
    shouldMutedVideo,
    setShouldMutedVideo,
    setVideoReady,
    setVideoLoaded,
    volumeVideo,
    setVolumeVideo,
  } = useAppContext()
  const windowWidth = useWindowWidth()
  const isLargeScreen = !!(windowWidth && windowWidth > 1024)

  return (
    <div>
      {isLargeScreen && (
        <ReactPlayer
          url={'video-home.mp4'}
          width="100%"
          height="100%"
          playing
          onClick={() => {
            setShouldMutedVideo(false)
            setVolumeVideo(0.5)
          }}
          muted={shouldMutedVideo}
          onReady={() => setVideoReady(true)}
          onProgress={(progress) => setVideoLoaded(progress.loaded)}
          loop
          volume={volumeVideo}
        />
      )}
    </div>
  )
}
