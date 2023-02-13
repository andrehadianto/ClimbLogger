import {
  Box,
  Flex,
  IconButton,
  Spinner,
  Tab,
  TabList,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FilterIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";
import { withOpacity } from "@/common/functions/withOpacity";

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
    <Box bgColor={withOpacity("grey.30", 35)} h="full">
      <PageHead description="Logs" name="Logs" />
      <Flex bg="white" boxShadow="md" justify="space-between" p="8px 20px">
        <Tabs>
          <TabList>
            <Tab>Logs</Tab>
            <Tab>Stats</Tab>
          </TabList>
        </Tabs>
        <IconButton
          aria-label="filter-button"
          borderColor="grey.40"
          h="40px"
          icon={<FilterIcon fill="black" />}
          variant="outline"
          w="40px"
        />
      </Flex>
      <VStack height={"full"} pt={5} px={5} spacing={5} width={"full"}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <LogsCard
              key={item.id}
              date="28 July 2022"
              grade={item.Grade}
              gym={item.Gym}
              noAttempt={item.Attempts}
              sent={!!item.Sent}
            />
          ))
        ) : (
          <>
            <Spinner />
          </>
        )}
        {/* TODO: Add loading spinning bar. Add content skeleton  */}
      </VStack>
    </Box>
  );
};

export default Dashboard;
