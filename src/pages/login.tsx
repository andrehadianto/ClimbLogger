import { Box, Heading, Text, VStack } from "@chakra-ui/react";

import { AuthLayout } from "@/common/components/AuthLayout";
import { PageHead } from "@/common/components/PageHead";

import { LoginView } from "@/modules/LoginView";

import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";

const LoginPage = () => {
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
        <LoginView />
      </Box>
    </div>
  );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
