import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export const Tabs = defineMultiStyleConfig({
  variants: {
    line: {
      tab: {
        fontWeight: "600",
        marginRight: "8px",
        color: "grey.40",
        p: "4px 8px",
        _selected: {
          color: "black",
          borderColor: "yellow.50",
        },
      },
      tablist: {
        borderColor: "white",
      },
    },
  },
});
