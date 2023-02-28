import {
  BoxProps,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select as ChakraSelect,
  SelectProps,
  Text,
} from "@chakra-ui/react";

import { AlertIcon } from "../CustomIcon";

interface Props extends SelectProps {
  label: string;
  options: string[];
  errorMessage: string;
  wrapperProps?: BoxProps;
}

export const Select = ({
  label,
  options,
  errorMessage,
  wrapperProps,
  ...props
}: Props) => {
  return (
    <FormControl {...wrapperProps}>
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <FormLabel color="black" htmlFor={props.id || undefined} mb="2">
          {label}
        </FormLabel>
      </Flex>
      <ChakraSelect {...props}>
        <option disabled hidden color="red" value="">
          {label}
        </option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option
              key={option}
              value={option.toLowerCase().replaceAll(/\s/g, "_")}
            >
              {option}
            </option>
          ))}
      </ChakraSelect>
      {errorMessage && (
        <Flex mt="1">
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
