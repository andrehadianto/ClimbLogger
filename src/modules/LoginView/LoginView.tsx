import { Box } from "@chakra-ui/react";

import { useFirebase } from "@/common/context/useFirebase";

import "firebaseui/dist/firebaseui.css";

export const LoginView = () => {
  const { firebaseWidgetRef } = useFirebase();

  return <Box ref={firebaseWidgetRef} />;
};
