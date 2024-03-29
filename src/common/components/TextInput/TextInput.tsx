import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputProps,
  Text,
} from "@chakra-ui/react";

import { AlertIcon } from "../CustomIcon";

interface Props extends InputProps {
  label: string;
  errorMessage: string;
  type?: string;
}

export const TextInput = ({
  label,
  errorMessage,
  type = "text",
  ...props
}: Props) => {
  return (
    <FormControl>
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <FormLabel color="black" htmlFor={props.id || undefined} mb="2">
          {label}
        </FormLabel>
      </Flex>
      <Input
        errorBorderColor="red.70"
        isInvalid={!!errorMessage}
        type={type}
        {...props}
      />
      {errorMessage && (
        <Flex mt={1}>
          <HStack spacing="1">
            <AlertIcon color="#F6655A" height="22px" width="22px" />
            <Text color="red.50" size="sm">
              {errorMessage}
            </Text>
          </HStack>
        </Flex>
      )}
    </FormControl>
  );
};
