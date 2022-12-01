import "firebaseui/dist/firebaseui.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { useFirebase } from "@/common/context/useFirebase";

import { selectUser } from "@/store/userSlice";

export const LoginView = () => {
  const { firebaseWidgetRef } = useFirebase();

  const user = useSelector(selectUser);
  const { onClose } = useDisclosure();
  const router = useRouter();

  return (
    <div ref={firebaseWidgetRef}>
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
    </div>
  );
};
