/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { EyeClosedIcon, EyeOpenIcon } from "@/common/components/CustomIcon";

export const LoginView = () => {
  const [visiblePwd, setVisiblePwd] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  return (
    <Box>
      <VStack marginBottom={88}>
        <Heading fontWeight="hairline" size="h1">
          ALLEZ
        </Heading>
        <Text size="md">climb logger</Text>
      </VStack>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <Box marginBottom={"6px"}>
          <VStack marginBottom={"14px"} spacing="12px">
            <FormControl>
              <Input
                placeholder="Email"
                variant="flushed"
                {...register("email", {
                  required: "This is required",
                })}
              />
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <Input
                  placeholder="Password"
                  type={visiblePwd ? "text" : "password"}
                  variant="flushed"
                  {...register("password", {
                    required: "This is required",
                  })}
                />
                <InputRightElement
                  children={
                    visiblePwd ? (
                      <EyeClosedIcon
                        cursor={"pointer"}
                        onClick={() => setVisiblePwd((prev) => !prev)}
                      />
                    ) : (
                      <EyeOpenIcon
                        cursor={"pointer"}
                        onClick={() => setVisiblePwd((prev) => !prev)}
                      />
                    )
                  }
                />
              </InputGroup>
            </FormControl>
          </VStack>
          <Flex justifyContent={"flex-end"} marginBottom={"14px"}>
            <NextLink passHref href="#">
              <Link
                color={"white"}
                fontSize={"12px"}
                fontWeight={"bold"}
                lineHeight={"24px"}
                textDecor="underline"
              >
                Forgot password?
              </Link>
            </NextLink>
          </Flex>
          <Flex marginBottom={"14px"}>
            <Button isLoading={isSubmitting} type="submit" width={"full"}>
              SIGN IN
            </Button>
          </Flex>
        </Box>
      </form>
      <Flex justifyContent={"center"} marginBottom={"22px"}>
        <NextLink passHref href="/register">
          <Link
            color={"yellow.50"}
            fontSize={"12px"}
            fontWeight={"bold"}
            lineHeight={"24px"}
            textDecor="underline"
          >
            REGISTER A NEW ACCOUNT
          </Link>
        </NextLink>
      </Flex>
      <Divider borderColor="white" borderWidth={"1px"} marginBottom={"22px"} />
      <Flex
        alignItems={"center"}
        bgColor={"white"}
        color="black"
        height={"42px"}
        justifyContent={"center"}
        textAlign="center"
      >
        Continue with Google
      </Flex>
    </Box>
  );
};
