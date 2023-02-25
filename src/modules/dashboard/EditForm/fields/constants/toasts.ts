import { UseToastOptions } from "@chakra-ui/react";

export const EDIT_LOG_SUCCESS: UseToastOptions = {
  title: "Route edited.",
  description: "Your changes have been saved!",
  status: "success",
  duration: 3000,
};

export const EDIT_LOG_FAIL: UseToastOptions = {
  title: "Something went wrong. Please try again!",
  status: "error",
  duration: 3000,
};
