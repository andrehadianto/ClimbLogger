import { Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { ChakraLink } from "@/common/components/ChakraLink";
import { PageHead } from "@/common/components/PageHead";
import { useFirebase } from "@/common/context/useFirebase";

import { logout } from "@/store/userSlice";

const User = () => {
  const { logoutFirebase } = useFirebase();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logout());
    await logoutFirebase();
    router.push("/login");
  };

  return (
    <div className="h-full px-5 py-12">
      <PageHead name="User Profile" />
      <Flex flexDirection={"column"}>
        <Flex flexDirection={"column"} marginBottom={"40px"}>
          <Text fontWeight={"bold"} marginBottom={"8px"} size={"lg"}>
            Login
          </Text>
          <ChakraLink href={"login"}>
            <Text color={"yellow.50"} size={"md"}>
              Login user
            </Text>
          </ChakraLink>
          <Link onClick={handleLogOut}>
            <Text color={"red.70"} size={"md"}>
              Log out user
            </Text>
          </Link>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text fontWeight={"bold"} marginBottom={"8px"} size={"lg"}>
            Credits
          </Text>
          <ChakraLink href={"#"}>
            <Text color={"yellow.50"} size={"md"}>
              Privacy Policy
            </Text>
          </ChakraLink>
          <ChakraLink href={"#"}>
            <Text color={"yellow.50"} size={"md"}>
              Terms of Use
            </Text>
          </ChakraLink>
          <ChakraLink href={"#"}>
            <Text color={"yellow.50"} size={"md"}>
              Donation
            </Text>
          </ChakraLink>
        </Flex>
      </Flex>
    </div>
  );
};

export default User;
