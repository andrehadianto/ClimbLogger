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
  LocationIcon,
  CalendarIcon,
  FlagIcon,
} from "@/common/components/CustomIcon";
import { SendTag } from "@/common/components/SendTag";
import { GYM_MAPPING } from "@/common/constants/common";
import { MsToDate } from "@/common/functions/MsToDate";
import { truncateText } from "@/common/functions/truncateText";

interface Props extends BoxProps {
  grade: string;
  gym: string;
  date: number;
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
  const statsData = [
    {
      icon: <LocationIcon color="black" />,
      text: truncateText(GYM_MAPPING[gym]),
    },
    {
      icon: <CalendarIcon color="black" />,
      text: MsToDate(date),
    },
    {
      icon: <FlagIcon />,
      text: noAttempt + " Attempt(s)",
    },
  ];

  return (
    <Box
      bgColor="white"
      borderRadius={"8px"}
      boxShadow="md"
      h="40"
      minW={"350px"}
      position="relative"
      px="8"
      py="4"
      w={"full"}
      {...props}
    >
      <SendTag
        borderBottomLeftRadius="0"
        borderBottomRightRadius="0"
        borderTopLeftRadius="0"
        position="absolute"
        right="0"
        top="0"
        unsent={!sent}
      />
      <HStack align="center" h="full" justify="space-between" spacing="44px">
        <VStack align="flex-start" spacing="4">
          {statsData.map(({ icon, text }) => (
            <HStack key={text} spacing="2">
              {icon}
              <Text fontWeight="700">{text}</Text>
            </HStack>
          ))}
        </VStack>
        <VStack justify="space-between" w="100px">
          {isNaN(parseInt(grade)) === false ? (
            <Heading fontFamily="Circular-Loom" size="h1">
              {grade}
            </Heading>
          ) : (
            <Center h="88px" w="full">
              {grade.toLowerCase() === "w" ? (
                <Heading fontFamily="Circular-Loom" size="h1">
                  W
                </Heading>
              ) : (
                <Box
                  bgColor={grade}
                  borderRadius="md"
                  h="12"
                  lineHeight="88px"
                  w="12"
                />
              )}
            </Center>
          )}
        </VStack>
      </HStack>
    </Box>
  );
};
