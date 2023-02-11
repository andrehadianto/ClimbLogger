import { defineStyleConfig } from "@chakra-ui/react";

export const NumberInput = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      root: {},
      field: {
        rounded: "md",
        _focus: {
          borderColor: "yellow.50",
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
