import { defineStyleConfig } from "@chakra-ui/react";

export const Select = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      field: {
        rounded: "md",
        _focusVisible: {
          borderColor: "yellow.50",
        },
      },
      icon: {
        color: "yellow.50",
      },
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
