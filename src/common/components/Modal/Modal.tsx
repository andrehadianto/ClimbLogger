import {
  Modal as ChakraModal,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface ModalProps extends ChakraModalProps {
  isOpen: boolean;
  modalContentProps?: ModalContentProps;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  modalContentProps,
  ...rest
}: PropsWithChildren<ModalProps>) => {
  return (
    <ChakraModal isCentered isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent maxWidth="362px" mx="2" w="full" {...modalContentProps}>
        {children}
      </ModalContent>
    </ChakraModal>
  );
};
