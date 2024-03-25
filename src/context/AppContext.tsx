import React, { createContext, useContext, ReactNode, useState } from 'react'

export type ModalVisible = 'qrcode' | 'tutorial' | undefined

type AppContextType = {
  modalVisible: ModalVisible
  setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>>
  teamLinkSelect: string | undefined
  setTeamLinkSelect: React.Dispatch<React.SetStateAction<string | undefined>>
  tutorialSelect: string | undefined
  setTutorialSelect: React.Dispatch<React.SetStateAction<string | undefined>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalVisible, setModalVisible] = useState<ModalVisible>(undefined)
  const [teamLinkSelect, setTeamLinkSelect] = useState<string | undefined>(
    undefined,
  )
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
