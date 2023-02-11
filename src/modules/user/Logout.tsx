import { Box, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { useFirebase } from "@/common/context/useFirebase";

import { logout } from "@/store/userSlice";

export const LogoutUser = () => {
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
      <Link onClick={handleLogOut}>
        <Text color={"red.70"} size={"md"}>
          Log out user
        </Text>
      </Link>
    </>
  );
};
