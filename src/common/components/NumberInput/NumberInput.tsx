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
  NumberInputProps,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { RefCallBack } from "react-hook-form";

interface Props extends NumberInputFieldProps {
  label: string;
  ref: RefCallBack;
  numberInputProps?: NumberInputProps;
}

export const NumberInput = ({
  label,
  ref,
  numberInputProps,
  ...props
}: Props) => {
  const { getIncrementButtonProps, getDecrementButtonProps, getInputProps } =
    useNumberInput({
      min: 0,
      onChange: (_, valueAsNumber) => props.onChange(valueAsNumber as any),
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
      <ChakraNumberInput errorBorderColor="red.70" {...numberInputProps}>
        <HStack>
          {isMobile && (
            <>
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
            </>
          )}
          {!isMobile && (
            <>
              <NumberInputField
                {...props}
                ref={ref}
                name={numberInputProps.name}
              />
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
