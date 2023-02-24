import {
  CloseButtonProps,
  Flex,
  FlexProps,
  ModalCloseButton,
  ModalHeader as ChakraModalHeader,
  ModalHeaderProps as ChakraModalHeaderProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ModalHeaderProps extends ChakraModalHeaderProps {
  closeButton?: boolean;
  children: ReactNode;
  wrapperProps?: FlexProps;
  closeButtonProps?: CloseButtonProps;
}

export const ModalHeader = ({
  closeButton = false,
  children,
  wrapperProps,
  closeButtonProps,
  ...rest
}: ModalHeaderProps) => {
  return (
    <Flex
      borderBottomColor={"gray.800"}
      borderBottomWidth={"1px"}
      justifyContent={"space-between"}
      px={{ base: 4, md: "12" }}
      py={{ base: 5, md: "6" }}
      {...wrapperProps}
    >
      <ChakraModalHeader fontSize={{ base: "xl", md: "2xl" }} {...rest}>
        {children}
      </ChakraModalHeader>
      {closeButton && <ModalCloseButton {...closeButtonProps} />}
    </Flex>
  );
};
