import {
  Box,
  BoxProps,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

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
  const LogsDivider = (
    <Divider
      borderColor={"yellow.50"}
      height={"42px"}
      orientation="vertical"
    />
  );

  return (
    <Box
      border={"2px solid"}
      borderColor="yellow.50"
      borderRadius={"8px"}
      minW={"350px"}
      w={"full"}
    >
      <HStack gap={"20px"} height={"80px"} justify={"space-evenly"} {...props}>
        <Text color={"#2364A2"} fontWeight={"bold"} size="xl">
          {grade}
        </Text>
        {LogsDivider}
        <VStack align={"flex-start"} spacing={0}>
          <Text>{gym}</Text>
          <Text color={"grey.50"} size={"sm"}>
            {date}
          </Text>
        </VStack>
        {LogsDivider}
        <Flex
          align={"center"}
          bgColor={sent ? "yellow.50" : "grey.70"}
          borderRadius={"999px"}
          color={sent ? "black" : "white"}
          height={"30px"}
          padding={"4px 12px"}
        >
          {sent ? `${noAttempt} - SENT` : `${noAttempt} - ATTE`}
        </Flex>
      </HStack>
    </Box>
  );
};
