import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      field: {
        rounded: "md",
        _focus: {
          borderColor: "black",
        },
      },
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
