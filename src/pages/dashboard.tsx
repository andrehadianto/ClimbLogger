import { Box, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FilterIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";

import { LogsCard } from "@/modules/dashboard/LogsCard";

const Dashboard = () => {
  // TODO: add types
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/logs")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

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
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <LogsCard
                key={item.id}
                date="28 July 2022"
                grade={item.Grade}
                gym={item.Gym}
                noAttempt={item.Attempts}
                sent={!!item.Sent}
              />
            ))}
          {/* TODO: Add loading spinning bar. Add content skeleton  */}
        </VStack>
      </VStack>
    </div>
  );
};

export default Dashboard;
