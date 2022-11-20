import {
  FormControl,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputFieldProps,
  useNumberInput,
  Button,
  HStack,
  Input,
  Flex,
  FormLabel,
} from "@chakra-ui/react";

interface Props extends NumberInputFieldProps {
  label: string;
  type?: string;
}

export const NumberInput = ({ label, ...props }: Props) => {
  const { getIncrementButtonProps, getDecrementButtonProps, getInputProps } =
    useNumberInput({
      min: 0,
    });

  // TODO: adjust dynamically based on width
  const isMobile = true;

  return (
    <FormControl>
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <FormLabel color={"yellow.50"} htmlFor={props.id || undefined} mb={2}>
          {label}
        </FormLabel>
      </Flex>
      <ChakraNumberInput errorBorderColor="red.70">
        <HStack>
          {isMobile && (
            <>
              <Button {...getDecrementButtonProps()}>-</Button>
              <Input {...getInputProps()} {...props} />
              <Button {...getIncrementButtonProps()}>+</Button>
            </>
          )}
          {!isMobile && (
            <>
              <NumberInputField {...props} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </>
          )}
        </HStack>
      </ChakraNumberInput>
    </FormControl>
  );
};
