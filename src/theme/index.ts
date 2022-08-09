import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { Button } from "./components/button";

const theme = extendTheme({
  components: {
    Button,
  },
  fonts,
  colors,
});

export default theme;
