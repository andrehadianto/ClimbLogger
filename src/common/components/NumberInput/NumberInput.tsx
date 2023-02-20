import {
  FormControl,
  NumberInput as ChakraNumberInput,
  NumberInputFieldProps,
  useNumberInput,
  Button,
  HStack,
  Input,
  Flex,
  FormLabel,
  NumberInputProps,
  Text,
} from "@chakra-ui/react";
import { RefCallBack } from "react-hook-form";

import { AlertIcon } from "../CustomIcon";

interface Props extends NumberInputFieldProps {
  label: string;
  ref: RefCallBack;
  errorMessage?: string;
  numberInputProps?: NumberInputProps;
}

export const NumberInput = ({
  label,
  ref,
  errorMessage,
  numberInputProps,
  ...props
}: Props) => {
  const { getIncrementButtonProps, getDecrementButtonProps, getInputProps } =
    useNumberInput({
      min: 0,
      value: props.value as number,
      onChange: (_, valueAsNumber) => props.onChange(valueAsNumber as any),
    });

  return (
    <FormControl>
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <FormLabel color={"yellow.50"} htmlFor={props.id || undefined} mb={2}>
          {label}
        </FormLabel>
      </Flex>
      <ChakraNumberInput errorBorderColor="red.70" {...numberInputProps}>
        <HStack>
          <Button {...getDecrementButtonProps()} ref={ref}>
            -
          </Button>
          <Input
            {...getInputProps()}
            {...props}
            ref={ref}
            name={numberInputProps.name}
          />
          <Button {...getIncrementButtonProps()} ref={ref}>
            +
          </Button>
        </HStack>
      </ChakraNumberInput>
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
