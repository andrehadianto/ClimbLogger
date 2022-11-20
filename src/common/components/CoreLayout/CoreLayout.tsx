import { Box, Flex } from "@chakra-ui/react";

import { TabsNavigation } from "../TabsNavigation";

export const CoreLayout = ({ children }) => {
  return (
    <Flex
      bg={"grey.100"}
      justifyContent={"center"}
      minH={"full"}
      pb={16}
      position={"relative"}
    >
      <Box bg={"black"} maxW={"600px"} w={"full"}>
        {children}
      </Box>
      <TabsNavigation />
    </Flex>
  );
};
