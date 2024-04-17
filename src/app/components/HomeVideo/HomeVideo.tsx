import { useAppContext } from '@/context/AppContext'
import useWindowWidth from '@/utils/window-width-hook'
import ReactPlayer from 'react-player'

export default function HomeVideo() {
  const {
    shouldMutedVideo,
    setShouldMutedVideo,
    setVideoReady,
    setVideoLoaded,
  } = useAppContext()
  const windowWidth = useWindowWidth()
  const isLargeScreen = !!(windowWidth && windowWidth > 1024)

  return (
    <div>
      {isLargeScreen ? (
        <ReactPlayer
          url={'video-home.mp4'}
          width="100%"
          height="100%"
          playing
          onClick={() => setShouldMutedVideo(false)}
          muted={shouldMutedVideo}
          onReady={() => setVideoReady(true)}
          onProgress={(progress) => setVideoLoaded(progress.loaded)}
          loop
        />
      ) : (
        <video
          autoPlay
          loop
          muted={shouldMutedVideo}
          className="bg-video"
          onClick={() => setShouldMutedVideo(false)}
          disableRemotePlayback
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={'video-home.mp4'} type="video/mp4" />{' '}
        </video>
      )}
    </div>
  )
}
