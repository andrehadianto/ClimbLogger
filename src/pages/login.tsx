import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { AuthLayout } from "@/common/components/AuthLayout";
import { PageHead } from "@/common/components/PageHead";

import TelegramLogin from "@/modules/LoginView/TelegramLogin";

import { selectUser } from "@/store/userSlice";

const LoginPage = () => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <PageHead description="Login" name="Login" />
      <Flex align="center" flexDir="column" h="full" px="12" py="20">
        <VStack className="py-10">
          <Heading fontFamily="Lato" fontWeight="hairline" size="h1">
            ALLEZ
          </Heading>
          <Text size="md">climb logger</Text>
        </VStack>
        <TelegramLogin />
      </Flex>
    </>
  );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
