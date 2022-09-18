import "@/styles/globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import Head from "next/head";
import { Provider } from "react-redux";

import { CoreLayout } from "@/common/components/CoreLayout";
import { ChakraFonts } from "@/common/components/CustomFont";
import { PageHead } from "@/common/components/PageHead";

import { store } from "@/pages/_store";
import theme from "@/theme";

// Configure Firebase Auth config
const authConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(authConfig);

export const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ChakraFonts />
        <Head>
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            name="viewport"
          />
          <PageHead />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
