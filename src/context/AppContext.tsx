import React, { createContext, useContext, ReactNode, useState } from 'react'

export type ModalVisible = 'qrcode' | 'tutorial' | 'allteams' | undefined

type AppContextType = {
  modalVisible: ModalVisible
  setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>>
  teamLinkSelect: string | undefined
  setTeamLinkSelect: React.Dispatch<React.SetStateAction<string | undefined>>
  tutorialSelect: string | undefined
  setTutorialSelect: React.Dispatch<React.SetStateAction<string | undefined>>
  shouldMutedVideo: boolean
  setShouldMutedVideo: React.Dispatch<React.SetStateAction<boolean>>
  videoReady: boolean
  setVideoReady: React.Dispatch<React.SetStateAction<boolean>>
  videoLoaded: number
  setVideoLoaded: React.Dispatch<React.SetStateAction<number>>
  volumeVideo: number
  setVolumeVideo: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(0)
  const [shouldMutedVideo, setShouldMutedVideo] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const [modalVisible, setModalVisible] = useState<ModalVisible>(undefined)
  const [teamLinkSelect, setTeamLinkSelect] = useState<string | undefined>(
    undefined,
  )
  const [volumeVideo, setVolumeVideo] = useState(0)
  const [tutorialSelect, setTutorialSelect] = useState<string | undefined>(
    undefined,
  )

  const contextValue: AppContextType = {
    modalVisible,
    setModalVisible,
    teamLinkSelect,
    setTeamLinkSelect,
    tutorialSelect,
    setTutorialSelect,
    shouldMutedVideo,
    setShouldMutedVideo,
    videoReady,
    setVideoReady,
    videoLoaded,
    setVideoLoaded,
    volumeVideo,
    setVolumeVideo,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(
      'useAppContext deve ser usado dentro de um AppContextProvider',
    )
  }
  return context
}
