import { useAppContext } from '@/context/AppContext'
import useWindowWidth from '@/utils/window-width-hook'
import ReactPlayer from 'react-player'

export default function HomeVideo() {
  const { shouldMutedVideo, setShouldMutedVideo, setVideoReady } =
    useAppContext()
  const windowWidth = useWindowWidth()
  const isMobile = !!(windowWidth && windowWidth < 768)

  return (
    <div>
      {isMobile ? (
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
      ) : (
        <ReactPlayer
          url={'video-home.mp4'}
          width="100%"
          height="100%"
          playing
          onClick={() => setShouldMutedVideo(false)}
          muted={shouldMutedVideo}
          onReady={() => setVideoReady(true)}
          loop
          style={{ minHeight: '500px !important' }}
        />
      )}
    </div>
  )
}
