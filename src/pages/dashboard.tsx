import { Box, Flex, VStack } from "@chakra-ui/react";

import { FilterIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";

import { LogsCard } from "@/modules/dashboard/LogsCard";

const Dashboard = () => {
  return (
    <div className="h-full">
      <PageHead description="Logs" name="Logs" />
      <VStack spacing={"8px"}>
        <Flex bgColor="coral" height={"200px"} width={"full"} />
        <Flex
          align={"center"}
          bgColor="grey.100"
          height={"34px"}
          justify={"space-between"}
          px={6}
          py={0}
          width={"full"}
        >
          <Box>Climbing Log</Box>
          <FilterIcon />
        </Flex>
        <VStack height={"full"} pt={5} px={5} spacing={5} width={"full"}>
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
    </div>
  );
};

export default Dashboard;
