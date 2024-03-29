import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ChakraLink } from "@/common/components/ChakraLink";
import { FilterIcon, PlusIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";
import { set } from "@/common/functions/localStorage";
import { withOpacity } from "@/common/functions/withOpacity";

import { LogsCard } from "@/modules/dashboard/LogsCard";

import { selectUser } from "@/store/userSlice";

const Dashboard = () => {
  const user = useSelector(selectUser);
  useEffect(() => {
    set("chakra-ui-color-mode", "light");
  }, []);

  const [fetching, setFetching] = useBoolean(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/logs", {
      method: "POST",
      body: JSON.stringify({ id: user.id }),
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setFetching.off());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderData = () => {
    if (fetching) return <Spinner />;
    else if (data.length === 0)
      return (
        <VStack h="calc(100vh - 112px - 36px)" pt="30vh">
          <Heading color="grey.70">{`There's no route.`}</Heading>
          <Text color="grey.60" display="flex" flexDir="row" mt="1 !important">
            Tap
            <Box as="span" mx="1">
              <PlusIcon fill="#5A5B6A" />
            </Box>
            to add one!
          </Text>
        </VStack>
      );
    else
      return data.map((item) => (
        <ChakraLink
          key={item.id}
          _hover={{ textDecoration: "none" }}
          href={`dashboard/log/${item.id}`}
          width="full"
        >
          <LogsCard
            date={item.timestamp}
            grade={item.grade}
            gym={item.gym}
            noAttempt={item.attempt}
            sent={item.ascend}
          />
        </ChakraLink>
      ));
  };
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
              {renderData()}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
