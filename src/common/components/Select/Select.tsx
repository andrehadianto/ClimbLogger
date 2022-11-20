import {
  BoxProps,
  Flex,
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";

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
        <FormLabel color={"yellow.50"} htmlFor={props.id || undefined} mb={2}>
          {label}
        </FormLabel>
      </Flex>
      <ChakraSelect {...props}>
        <option disabled hidden selected color="red" value="">
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
    </FormControl>
  );
};
