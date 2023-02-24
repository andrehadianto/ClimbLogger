import {
  ModalFooter as ChakraModalFooter,
  ModalFooterProps as ChakraModalFooterProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ModalFooterProps extends ChakraModalFooterProps {
  children: ReactNode;
}

export const ModalFooter = ({ children, ...rest }: ModalFooterProps) => {
  return <ChakraModalFooter {...rest}>{children}</ChakraModalFooter>;
};
