import {
  Box,
  BoxProps,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

import {
  CrossIcon,
  FilterIcon,
  HomeIcon,
  PlusIcon,
} from "@/common/components/CustomIcon";

interface Props extends BoxProps {
  grade: string;
  gym: string;
  date: string;
  noAttempt: number;
  sent: boolean;
}

export const LogsCard: FunctionComponent<Props> = ({
  grade,
  gym,
  date,
  noAttempt,
  sent,
  ...props
}) => {
  return (
    <Box
      bgColor="white"
      borderRadius={"8px"}
      boxShadow="md"
      h="40"
      minW={"350px"}
      px="8"
      py="4"
      w={"full"}
      {...props}
    >
      <HStack align="center" h="full" justify="space-between" spacing="44px">
        <VStack align="flex-start" spacing="3">
          <HStack spacing="2">
            <HomeIcon />
            <Text fontWeight="700">{gym}</Text>
          </HStack>
          <HStack spacing="2">
            <FilterIcon />
            <Text fontWeight="700">{date}</Text>
          </HStack>
          <HStack spacing="2">
            {sent ? <PlusIcon /> : <CrossIcon />}
            <Text fontWeight="700">{`${noAttempt} Attempt(s)`}</Text>
          </HStack>
        </VStack>
        <VStack justify="space-between" w="100px">
          {isNaN(parseInt(grade)) === false ? (
            <Heading size="h1">{grade}</Heading>
          ) : (
            <Center h="88px" w="full">
              <Box
                bgColor="purple"
                borderRadius="full"
                h="8"
                lineHeight="88px"
                w="8"
              />
            </Center>
          )}
          <Box bgColor="coral" h="22px" w="full" />
        </VStack>
      </HStack>
    </Box>
  );
};
