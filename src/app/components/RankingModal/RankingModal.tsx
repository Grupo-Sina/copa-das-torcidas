import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import Image from 'next/image'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
}

const RankingModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const mockTeams = [
    {
      teamName: 'Ajax 1973',
      totalPoints: 25,
    },
    {
      teamName: 'Batti Fácil ',
      totalPoints: 10,
    },
    {
      teamName: 'Celeste',
      totalPoints: 0,
    },
    {
      teamName: 'Arsenal',
      totalPoints: 0,
    },
    {
      teamName: 'Tiradentes Vila Curuça',
      totalPoints: 0,
    },
    {
      teamName: 'X do Morro',
      totalPoints: 0,
    },
  ]

  const handleRenderLastItem = (index: number) => {
    if (index === mockTeams.length - 1) {
      return null
    } else {
      return (
        <hr
          style={{
            borderTopColor: 'rgba(255, 255, 255, 0.20)',
          }}
        />
      )
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="4xl"
      scrollBehavior="outside"
    >
      <ModalContent className="bg-[#001F6D] p-12">
        {() => (
          <>
            <ModalHeader className="flex flex-col">
              <div className="flex gap-3">
                <Image
                  src={'/littletrophyicon.png'}
                  alt="trophy icon"
                  width={28}
                  height={28}
                  quality={100}
                  priority={true}
                />
                <h1 className="text-[24px] font-robotoRegular text-white">
                  Confere como está o ranking até agora!
                </h1>
              </div>
              <h1 className="font-robotoRegular text-[12px] text-[#9E9E9E] mt-4">
                Atualizado em: 03/04/2024 às 17:27:46
              </h1>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    NOME DO TIME
                  </h1>
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    PONTOS
                  </h1>
                </div>
              </div>
              <hr
                style={{
                  borderTopColor: 'rgba(255, 255, 255, 0.20)',
                }}
              />
              <ul>
                {mockTeams.map((team, index) => (
                  <div key={team.teamName}>
                    <li className="text-white py-2 font-robotoRegular text-[14px] flex justify-between">
                      <p>
                        {index + 1}. {team.teamName}
                      </p>{' '}
                      <p>{team.totalPoints}</p>
                    </li>
                    {handleRenderLastItem(index)}
                  </div>
                ))}
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default RankingModal
