/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  FormControl,
  Heading,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { EyeClosedIcon, EyeOpenIcon } from "@/common/components/CustomIcon";

export const RegisterView = () => {
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
          <Img src="https://via.placeholder.com/300" />
        </Heading>
      </VStack>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <VStack marginBottom={"22px"} spacing="12px">
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
        <Button isLoading={isSubmitting} type="submit" width={"full"}>
          REGISTER
        </Button>
      </form>
    </Box>
  );
};
