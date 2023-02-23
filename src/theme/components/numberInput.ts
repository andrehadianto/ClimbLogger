import { defineStyleConfig } from "@chakra-ui/react";

export const NumberInput = defineStyleConfig({
  baseStyle: {},
  variants: {
    filled: {
      root: {},
      field: {
        rounded: "md",
        _focus: {
          borderColor: "black",
        },
      },
      stepper: {
        color: "black",
      },
      stepperGroup: {},
    },
  },
  defaultProps: {
    variant: "filled",
    size: "md",
  },
});
