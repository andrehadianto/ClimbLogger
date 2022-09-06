import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface Props {
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
}) => {
  return (
    <HStack
      border={"2px solid"}
      borderColor="yellow.50"
      borderRadius={"8px"}
      height={"80px"}
      justify={"space-between"}
      maxWidth={"400px"}
      padding={"0px 20px"}
      spacing={"20px"}
      width={"full"}
    >
      <Text color={"#2364A2"} fontWeight={"bold"} size="xl">
        {grade}
      </Text>
      <Divider
        borderColor={"yellow.50"}
        height={"42px"}
        orientation="vertical"
      />
      <VStack align={"flex-start"} spacing={0}>
        <Text>{gym}</Text>
        <Text color={"grey.50"} size={"sm"}>
          {date}
        </Text>
      </VStack>
      <Divider
        borderColor={"yellow.50"}
        height={"42px"}
        orientation="vertical"
      />
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
  );
};
