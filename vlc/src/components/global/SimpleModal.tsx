import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";

type SimpleModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  body: ReactNode;
  footer: ReactNode;
  title: string;
};

const SimpleModal = ({
  open,
  setOpen,
  body,
  footer,
  title,
}: SimpleModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (open) {
      onOpen();
    } else {
      onClose();
    }
  }, [open]);
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={() => {
        setOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SimpleModal;
