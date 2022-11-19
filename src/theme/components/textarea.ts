import { defineStyleConfig } from "@chakra-ui/react";

export const Textarea = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      bg: "grey.90",
      rounded: "md",
      _focus: {
        bg: "grey.100",
        borderColor: "yellow.50",
      },
      _hover: {
        bg: "grey.80",
      },
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
