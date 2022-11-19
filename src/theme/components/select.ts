import { defineStyleConfig } from "@chakra-ui/react";

export const Select = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      field: {
        bg: "grey.90",
        rounded: "md",
        _focusVisible: {
          bg: "grey.100",
          borderColor: "yellow.50",
        },
        _hover: {
          bg: "grey.80",
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
