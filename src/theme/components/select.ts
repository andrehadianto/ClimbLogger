import { defineStyleConfig } from "@chakra-ui/react";

export const Select = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      field: {
        rounded: "md",
        _focusVisible: {
          borderColor: "black",
        },
      },
      icon: {
        color: "black",
      },
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
