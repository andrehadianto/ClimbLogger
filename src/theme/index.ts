import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";
import { Button } from "./components/button";

const theme = extendTheme({
  components: {
    Button,
  },
  fonts,
  colors,
  breakpoints,
  config,
});

export default theme;
