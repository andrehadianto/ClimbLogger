import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import firebase from "firebase/compat/app";

import { AuthLayout } from "@/common/components/AuthLayout";
import { PageHead } from "@/common/components/PageHead";

import { LoginView } from "@/modules/LoginView";

import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";

const LoginPage = () => {
  // Configure FirebaseUI
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        console.log(authResult);
        console.log(redirectUrl);
        return true; // false to not redirect
      },
    },
    signInFlow: "popup",
    // Redirect url after sign in is successful. Alternatively can use callbacks.signInSuccess fn
    signInSuccessUrl: "/dashboard",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div className="h-full px-12 py-20">
      <PageHead description="Login" name="Login" />
      <Box>
        <VStack className="py-10">
          <Heading fontWeight="hairline" size="h1">
            ALLEZ
          </Heading>
          <Text size="md">climb logger</Text>
        </VStack>
        <LoginView uiConfig={uiConfig} />
      </Box>
    </div>
  );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
