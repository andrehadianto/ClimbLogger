import { Box, Flex } from "@chakra-ui/react";

import { TabsNavigation } from "../TabsNavigation";

export const CoreLayout = ({ children }) => {
  return (
    <Flex
      justifyContent={"center"}
      minH={"full"}
      pb={"56px"}
      position={"relative"}
    >
      <Box maxW={"600px"} w={"full"}>
        {children}
      </Box>
      <TabsNavigation />
    </Flex>
  );
};
