import {
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

interface Props extends TextareaProps {
  label: string;
  errorMessage: string;
  type?: string;
}

export const TextArea = ({
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
      <Textarea
        errorBorderColor="red.70"
        isInvalid={!!errorMessage}
        type={type}
        {...props}
      />
    </FormControl>
  );
};
