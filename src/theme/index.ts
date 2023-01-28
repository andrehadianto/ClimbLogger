import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { NumberInput } from "./components/numberInput";
import { Select } from "./components/select";
import { Text } from "./components/text";
import { Textarea } from "./components/textarea";
import { config } from "./config";
import { fonts } from "./fonts";

const theme = extendTheme({
  components: {
    Button,
    Text,
    Heading,
    Input,
    Select,
    Textarea,
    NumberInput,
  },
  fonts,
  colors,
  breakpoints,
  config,
});

export default theme;
