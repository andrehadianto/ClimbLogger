import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const UserView = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex flexDirection={"column"} marginBottom={"40px"}>
        <Text fontWeight={"bold"} marginBottom={"8px"} size={"lg"}>
          Login
        </Text>
        <NextLink passHref href={"#"}>
          <Link>
            <Text color={"red.70"} size={"md"}>
              Log out user
            </Text>
          </Link>
        </NextLink>
      </Flex>
      <Flex flexDirection={"column"}>
        <Text fontWeight={"bold"} marginBottom={"8px"} size={"lg"}>
          Credits
        </Text>
        <NextLink passHref href={"#"}>
          <Link>
            <Text color={"yellow.50"} size={"md"}>
              Privacy Policy
            </Text>
          </Link>
        </NextLink>
        <NextLink passHref href={"#"}>
          <Link>
            <Text color={"yellow.50"} size={"md"}>
              Terms of Use
            </Text>
          </Link>
        </NextLink>
        <NextLink passHref href={"#"}>
          <Link>
            <Text color={"yellow.50"} size={"md"}>
              Donation
            </Text>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
