import { Button, FormControl, Input, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";

export const LoginView = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  return (
    <VStack spacing={12}>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <FormControl>
          <Input
            placeholder="Email"
            {...register("email", {
              required: "This is required",
            })}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "This is required",
            })}
          />
        </FormControl>
        <Button isLoading={isSubmitting} type="submit">
          SIGN IN
        </Button>
      </form>
      <NextLink passHref href="#">
        <Link>REGISTER A NEW ACCOUNT</Link>
      </NextLink>
    </VStack>
  );
};
