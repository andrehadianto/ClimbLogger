import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { AuthLayout } from "@/common/components/AuthLayout";
import { PageHead } from "@/common/components/PageHead";

import { LoginView } from "@/modules/LoginView";
import TelegramLogin from "@/modules/LoginView/TelegramLogin";

import { selectUser } from "@/store/userSlice";


const LoginPage = () => {
  const user = useSelector(selectUser);
  const { onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <div className="h-full px-12 py-20">
        <PageHead description="Login" name="Login" />
        <Box>
          <VStack className="py-10">
            <Heading fontWeight="hairline" size="h1">
              ALLEZ
            </Heading>
            <Text size="md">climb logger</Text>
            <TelegramLogin />
          </VStack>
          <LoginView />
        </Box>
      </div>
      {user && (
        <Modal isOpen onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dumbass Alert</ModalHeader>
            <ModalBody>
              <Text fontSize="6xl">{"You're already logged in, stupid."}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/dashboard");
                }}
              >
                {"Yes, I'm a dumbass"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
