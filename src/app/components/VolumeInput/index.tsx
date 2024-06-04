import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'
import { MdVolumeDown, MdVolumeOff } from 'react-icons/md'

export default function VolumeInput() {
  const { setVolumeVideo, volumeVideo, setShouldMutedVideo } = useAppContext()
  useEffect(() => {
    const slider = document.querySelector('.volume-slider') as HTMLInputElement
    if (slider) {
      const value =
        ((volumeVideo - Number(slider.min)) /
          (Number(slider.max) - Number(slider.min))) *
        100
      slider.style.setProperty('--value', `${value}%`)
    }
  }, [volumeVideo])
  return (
    <div className="bg-[#003B9C] rounded-full flex items-center h-10 gap-3 p-2 pr-4">
      <div className="bg-[#00E46F] rounded-full px-2 h-10 w-10 flex items-center justify-center ml-[-10px]">
        {volumeVideo === 0 ? (
          <MdVolumeOff
            color="#003B9C"
            className="text-[38px] cursor-pointer"
            onClick={() => {
              setVolumeVideo(0.5)
              setShouldMutedVideo(false)
            }}
          />
        ) : (
          <MdVolumeDown
            color="#003B9C"
            className="text-[38px] cursor-pointer"
            onClick={() => setVolumeVideo(0)}
          />
        )}
      </div>
      <input
        aria-label="volume"
        name="volume"
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volumeVideo}
        className="volume-slider appearance-none bg-transparent m-0 h-1 cursor-grab rounded-full"
        onChange={(e) => {
          setVolumeVideo(e.currentTarget.valueAsNumber)
          setShouldMutedVideo(false)
        }}
      />
    </div>
  )
}
