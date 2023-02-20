import { UseToastOptions } from "@chakra-ui/react";

export const CREATE_LOG_SUCCESS: UseToastOptions = {
  title: "Route logged.",
  description: "The route has been successfully logged!",
  status: "success",
  duration: 3000,
};

export const CREATE_LOG_FAIL: UseToastOptions = {
  title: "Something went wrong. Please try again!",
  status: "error",
  duration: 3000,
};
