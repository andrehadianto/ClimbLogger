import {
  Box,
  Flex,
  IconButton,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ChakraLink } from "@/common/components/ChakraLink";
import { FilterIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";
import { withOpacity } from "@/common/functions/withOpacity";

import { LogsCard } from "@/modules/dashboard/LogsCard";

const Dashboard = () => {
  localStorage.setItem("chakra-ui-color-mode", "light");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/logs")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <Box bgColor={withOpacity("grey.10", 35)} h="full">
      <PageHead description="Logs" name="Logs" />
      <Tabs>
        <Flex
          bg="white"
          boxShadow="md"
          h="56px"
          justify="space-between"
          p="8px 20px"
        >
          <TabList>
            <Tab>Logs</Tab>
            <Tab isDisabled>Stats (WIP)</Tab>
          </TabList>
          <IconButton
            aria-label="filter-button"
            borderColor="grey.40"
            h="40px"
            icon={<FilterIcon fill="black" />}
            variant="outline"
            w="40px"
          />
        </Flex>
        <TabPanels>
          <TabPanel>
            <VStack height="full" pt={5} spacing={5} width="full">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <ChakraLink
                    key={item.id}
                    _hover={{ textDecoration: "none" }}
                    href={`dashboard/log/${item.id}`}
                    width="full"
                  >
                    <LogsCard
                      date={item.Timestamp}
                      grade={item.Grade}
                      gym={item.Gym}
                      noAttempt={item.Attempts}
                      sent={item.Sent}
                    />
                  </ChakraLink>
                ))
              ) : (
                <>
                  <Spinner />
                </>
              )}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
