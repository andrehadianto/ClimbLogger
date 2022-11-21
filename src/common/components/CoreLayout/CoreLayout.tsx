import { Box, Flex } from "@chakra-ui/react";

import { TabsNavigation } from "../TabsNavigation";

export const CoreLayout = ({ children }) => {
  return (
    <Flex
      bg={"bg"}
      justifyContent={"center"}
      minH={"full"}
      pb={"56px"}
      position={"relative"}
    >
      <Box bg={"black"} maxW={"600px"} w={"full"}>
        {children}
      </Box>
      <TabsNavigation />
    </Flex>
  );
};
