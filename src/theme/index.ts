import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { config } from "./config";
import { fonts } from "./fonts";

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
