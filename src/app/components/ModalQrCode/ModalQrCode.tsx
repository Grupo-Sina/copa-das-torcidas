import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { useAppContext } from '@/context/AppContext'
import { useQRCode } from 'next-qrcode'

export default function ModalQrCode() {
  const { modalVisible, setModalVisible, setTeamLinkSelect, teamLinkSelect } =
    useAppContext()
  const { Canvas } = useQRCode()
  return (
    <>
      <Modal
        scrollBehavior="outside"
        isOpen={modalVisible === 'qrcode'}
        onOpenChange={() => {
          setModalVisible(undefined)
          setTeamLinkSelect(undefined)
        }}
        className="bg-[#001F6D] max-w-[820px] m-5"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-robotoRegular font-bold text-[24px] text-[#FFF] ">
                CONFIRA O QR CODE DO SEU TIME E COMPARTILHE!
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center pb-10">
                  {teamLinkSelect && (
                    <Canvas
                      text={teamLinkSelect}
                      options={{
                        errorCorrectionLevel: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                          dark: '#000',
                          light: '#FFF',
                        },
                      }}
                    />
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
