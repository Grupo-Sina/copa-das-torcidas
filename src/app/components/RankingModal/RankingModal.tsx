import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RankingModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="4xl"
      scrollBehavior="outside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="text-[24px] font-montserratBold text-white">
                Confere como está o ranking até agora!
              </h1>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    POSIÇÃO
                  </h1>
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    NÚMERO DO TICKET
                  </h1>
                </div>

                <hr
                  style={{
                    borderTopColor: "rgba(255, 255, 255, 0.20)",
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={onClose}
                size="sm"
                radius="full"
                className="my-6 w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-black hover:text-white mx-auto md:mx-0"
              >
                VOLTAR
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RankingModal;
