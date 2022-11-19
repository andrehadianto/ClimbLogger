import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

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
        <FormLabel color={"yellow.50"} htmlFor={props.id || undefined} mb={2}>
          {label}
        </FormLabel>
      </Flex>
      <Input
        errorBorderColor="red.70"
        isInvalid={!!errorMessage}
        type={type}
        {...props}
      />
    </FormControl>
  );
};
