import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { Favicon } from "@/common/components/FavIcon";

import theme from "@/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
