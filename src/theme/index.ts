import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";
import { Button } from "./components/button";
import { Text } from "./components/text";
import { Heading } from "./components/heading";

const theme = extendTheme({
  components: {
    Button,
    Text,
    Heading,
  },
  fonts,
  colors,
  breakpoints,
  config,
});

export default theme;
