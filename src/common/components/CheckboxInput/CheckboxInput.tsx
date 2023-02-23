import {
  BoxProps,
  Checkbox as ChakraCheckbox,
  CheckboxProps,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface Props extends CheckboxProps {
  label: string;
  wrapperProps?: BoxProps;
}

export const CheckboxInput = ({ label, wrapperProps, ...props }: Props) => {
  return (
    <FormControl {...wrapperProps}>
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <FormLabel color="black" htmlFor={props.id || undefined} mb="2">
          {label}
        </FormLabel>
      </Flex>
      <Flex h="10">
        <ChakraCheckbox colorScheme="gray" size="lg" {...props} />
      </Flex>
    </FormControl>
  );
};
