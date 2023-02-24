import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { logout } from "@/store/userSlice";

export const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <>
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
