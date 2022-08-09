import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    rounded: "8px",
    fontWeight: "bold",
    textTransform: "uppercase",
    _disabled: {
      opacity: "40%",
    },
    width: "fit-content",
  },
  sizes: {
    xs: {
      paddingX: "20px",
      paddingY: "6px",
      fontSize: "14px",
      lineHeight: "22px",
    },
    sm: {
      paddingX: "20px",
      paddingY: "10px",
      fontSize: "14px",
      lineHeight: "22px",
    },
    md: {
      paddingX: "24px",
      paddingY: "12px",
      fontSize: "16px",
      lineHeight: "24px",
    },
    lg: {
      paddingX: "28px",
      paddingY: "14px",
      fontSize: "18px",
      lineHeight: "28px",
    },
    "iconOnly-xs": {
      height: "34px",
      width: "34px",
      padding: "10px",
    },
    "iconOnly-sm": {
      height: "42px",
      width: "42px",
      padding: "14px",
    },
    "iconOnly-md": {
      height: "48px",
      width: "48px",
      padding: "16px",
    },
    "iconOnly-lg": {
      height: "58px",
      width: "58px",
      padding: "20px",
    },
  },
  variants: {
    primary: {
      bgColor: "yellow.50",
      _hover: {
        bgColor: "yellow.60",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
};
