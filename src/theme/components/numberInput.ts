import { defineStyleConfig } from "@chakra-ui/react";

export const NumberInput = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      root: {},
      field: {
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
      stepper: {
        color: "yellow.50",
      },
      stepperGroup: {},
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
