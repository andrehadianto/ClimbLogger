import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { CoreLayout } from "@/common/components/CoreLayout";
import { ChakraFonts } from "@/common/components/CustomFont";
import { PageHead } from "@/common/components/PageHead";
import { ProtectedLayout } from "@/common/components/ProtectedLayout";

import { CreateViewContextProvider } from "@/modules/create/CreateFormContext";

import { persistor, store } from "@/store/store";
import theme from "@/theme";

import "@/styles/globals.scss";
import "firebaseui/dist/firebaseui.css";

export const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.layout ? Component.layout : ProtectedLayout;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ChakraFonts />
          <Head>
            <meta
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
              name="viewport"
            />
            <PageHead />
          </Head>
          <CreateViewContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CreateViewContextProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
