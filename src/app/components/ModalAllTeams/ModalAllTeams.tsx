import { useAppContext } from '@/context/AppContext'
import { teams } from '@/utils/mock-teams'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react'
import Image from 'next/image'

export default function ModalAllTeams() {
  const { modalVisible, setModalVisible, setTeamLinkSelect } = useAppContext()

  const handleQrCodeClick = (link: string) => {
    setTeamLinkSelect(link)
    setModalVisible('qrcode')
  }

  return (
    <>
      <Modal
        scrollBehavior="outside"
        isOpen={modalVisible === 'allteams'}
        onOpenChange={() => {
          setModalVisible(undefined)
        }}
        className="bg-[#001F6D] max-w-[820px] m-5"
      >
        <ModalContent className="lg:p-8">
          <>
            <ModalHeader className="flex flex-col gap-1 font-robotoRegular font-bold text-[24px] text-[#FFF] ">
              CONFIRA TODOS OS TIMES PARTICIPANTES!
            </ModalHeader>
            <ModalBody>
              <div>
                <p className="font-semibold font-robotoRegular text-[12px] text-white">
                  NOME DA EQUIPE
                </p>
              </div>
              <div
                className={`flex flex-col lg:h-[400px] overflow-y-auto pr-3`}
              >
                {teams?.map((item, index) => (
                  <div
                    key={index}
                    className="py-4 flex lg:flex-row flex-col gap-3 w-full justify-between border-t-small border-t-[#ffffff]"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                        <Image
                          src={item.image}
                          alt=""
                          layout="fill"
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="font-robotoRegular font-normal text-[14px] text-white">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex flex-row lg:gap-3 gap-1 flex-wrap">
                      <Button
                        className={`button-height-thin font-headingExtraBold sm:py-[12px]  lg:px-[32px] px-[18px]  text-tiny text-[12px] md:text-[12px] lg:text-[14px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]`}
                        onClick={() => window.open(item.link, '_blank')}
                      >
                        CADASTRE-SE
                      </Button>
                      <Button
                        className={`button-height-thin font-headingExtraBold sm:py-[12px]  lg:px-[32px] px-[18px]  text-tiny text-[12px] md:text-[12px] lg:text-[14px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]`}
                        onClick={() => handleQrCodeClick(item.link)}
                      >
                        VER QR CODE
                      </Button>
                      <Button
                        className={`button-height-thin font-headingExtraBold sm:py-[12px]  lg:px-[32px] px-[18px]  text-tiny text-[12px] md:text-[12px] lg:text-[14px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]`}
                        onClick={() => window.open(item.deposit, '_blank')}
                      >
                        DEPOSITE
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className={`h-[33px] font-headingExtraBold sm:py-[12px] w-full lg:px-[32px] px-[18px]  text-tiny text-[12px] md:text-[12px] lg:text-[14px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]`}
                onClick={() => setModalVisible(undefined)}
              >
                FECHAR
              </Button>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}
