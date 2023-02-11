import { defineStyleConfig } from "@chakra-ui/react";

export const Textarea = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      rounded: "md",
      _focus: {
        borderColor: "yellow.50",
      },
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
