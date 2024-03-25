import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'
import ReactPlayer from 'react-player'

export default function ModalTutorialVideo() {
  const { modalVisible, setModalVisible, tutorialSelect, setTutorialSelect } =
    useAppContext()

  return (
    <>
      <Modal
        scrollBehavior="outside"
        isOpen={modalVisible === 'tutorial'}
        onOpenChange={() => {
          setModalVisible(undefined)
          setTutorialSelect(undefined)
        }}
        className="bg-[#001F6D] lg:max-w-[60%] w-[90%] lg:h-[85%] h-[60%]"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-robotoRegular font-bold text-[24px] text-[#FFF] ">
                LOREM IPSUM DOLOR SIT AMET
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center pb-10 w-full h-full">
                  <ReactPlayer
                    url={tutorialSelect}
                    width="100%"
                    height="100%"
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
