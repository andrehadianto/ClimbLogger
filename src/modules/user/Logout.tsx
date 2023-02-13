import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { useFirebase } from "@/common/context/useFirebase";

import { logout } from "@/store/userSlice";

export const LogoutButton = () => {
  const { logoutFirebase, firebaseWidgetRef } = useFirebase();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logout());
    await logoutFirebase();
    router.push("/login");
  };

  return (
    <>
      <Box ref={firebaseWidgetRef} hidden />
      <Button
        colorScheme="red"
        variant="outline"
        w="full"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </>
  );
};
