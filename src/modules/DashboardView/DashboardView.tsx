import { Box, Flex, VStack } from "@chakra-ui/react";

import { FilterIcon } from "@/common/components/CustomIcon";

import { LogsCard } from "./LogsCard";

export const DashboardView = () => {
  return (
    <VStack spacing={"8px"}>
      <Flex bgColor="coral" height={"200px"} width={"full"} />
      <Flex
        align={"center"}
        bgColor="grey.100"
        height={"34px"}
        justify={"space-between"}
        padding={"0 24px"}
        width={"full"}
      >
        <Box>Climbing Log</Box>
        <FilterIcon />
      </Flex>
      <VStack
        height={"full"}
        paddingLeft={"20px"}
        paddingRight={"20px"}
        paddingTop={"20px"}
        spacing={"20px"}
        width={"full"}
      >
        <LogsCard
          date="28 July 2022"
          grade="11"
          gym="Boulder Planet"
          noAttempt={2}
          sent={true}
        />
        <LogsCard
          date="27 July 2022"
          grade="12"
          gym="Boulder Planet"
          noAttempt={5}
          sent={false}
        />
      </VStack>
    </VStack>
  );
};
