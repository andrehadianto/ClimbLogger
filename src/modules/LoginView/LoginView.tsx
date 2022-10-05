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
import { getAuth } from "@firebase/auth";
import { auth } from "firebaseui";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout, selectUser } from "@/store/userSlice";

interface Props {
  // https://github.com/firebase/firebaseui-web#configuration
  uiConfig: auth.Config;

  // Callback that will be passed the FirebaseUi instance before it starts
  uiCallback?(ui: auth.AuthUI): void;
}

const firebaseAuth = getAuth();

export const LoginView = ({ uiConfig, uiCallback }: Props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [firebaseUi, setFirebaseUi] = useState<
    typeof import("firebaseui") | null
  >(null);
  const elementRef = useRef(null);
  const { onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    // Load the package only after the component has mounted for SSR
    setFirebaseUi(require("firebaseui"));
  }, []);

  useEffect(() => {
    if (firebaseUi === null) return;

    // Get or Create a firebaseUI instance
    const firebaseUiWidget =
      firebaseUi.auth.AuthUI.getInstance() ||
      new firebaseUi.auth.AuthUI(getAuth());
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // Track the auth state to reset firebaseUi if the user signs out
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        firebaseUiWidget.reset();
        dispatch(logout());
      }
    });

    // Trigger the callback if any was set
    if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the widget
    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUi, uiConfig]);

  return (
    <div ref={elementRef}>
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
