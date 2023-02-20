import {
  Heading,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ChakraLink } from "@/common/components/ChakraLink";
import {
  ArrowLeft,
  CalendarIcon,
  FlagIcon,
  InstagramIcon,
  LocationIcon,
} from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";
import { SendTag } from "@/common/components/SendTag";
import { withOpacity } from "@/common/functions/withOpacity";

const DEFAULT_DATA = {
  gym: "Boulder Planet (Sembawang)",
  date: "28 July 2022",
  noAttempt: 5,
  sent: true,
  grade: "11",
  description:
    "start was too easy. hoping for a challenge but this 11 was so easy, I could have done it with my eyes closed.",
  instagram: "https://www.google.com",
};

const Log = () => {
  const router = useRouter();
  const logId = router.query["id"] as string;

  const [data, setData] = useState(DEFAULT_DATA);

  useEffect(() => {
    fetch(`/api/log/${logId}`)
      .then((res) => res.json())
      .then((res) => {
        const {
          Attempts: noAttempt,
          Description: description,
          Grade: grade,
          Gym: gym,
          Sent: sent,
          Timestamp: date,
          VideoURL: instagram,
        } = res;
        setData({
          gym,
          date,
          noAttempt,
          sent,
          grade,
          description,
          instagram,
        });
      });
  }, [logId]);

  const statsData = [
    {
      icon: <LocationIcon color="black" />,
      text: data.gym,
    },
    {
      icon: <CalendarIcon color="black" />,
      text: data.date,
    },
    {
      icon: <FlagIcon />,
      text: data.noAttempt + " Attempt(s)",
    },
    {
      icon: <InstagramIcon />,
      href: data.instagram,
    },
  ];

  return (
    <Box bgColor={withOpacity("grey.10", 35)} h="full">
      <PageHead description="A route" name="Route" />
      <Flex align="center" bg="white" boxShadow="md" h="56px" p="8px 20px">
        <ArrowLeft onClick={() => router.back()} />
      </Flex>
      <Center bg="grey.10" h="300px" position="relative" w="full">
        <SendTag
          borderRadius="0"
          bottom="0"
          position="absolute"
          right="0"
          unsent={data.sent}
        />
        <Image alt="route-image" src="https://placekitten.com/g/200/300" />
      </Center>
      <Box p="20px">
        <VStack spacing="4">
          <HStack
            align="center"
            h="full"
            justify="space-between"
            spacing="44px"
            w="full"
          >
            <VStack align="flex-start" spacing="4">
              {statsData.map(({ icon, text, href }) => (
                <HStack key={text} spacing="2">
                  {icon}
                  {text ? (
                    <Text fontWeight="700">{text}</Text>
                  ) : (
                    <ChakraLink isExternal href={href}>
                      <Text fontWeight="700" textDecoration="underline">
                        link
                      </Text>
                    </ChakraLink>
                  )}
                </HStack>
              ))}
            </VStack>
            <VStack justify="space-between" w="100px">
              {isNaN(parseInt(data.grade)) === false ? (
                <Heading size="h1">{data.grade}</Heading>
              ) : (
                <Center h="88px" w="full">
                  <Box
                    bgColor="purple"
                    borderRadius="md"
                    h="12"
                    lineHeight="88px"
                    w="12"
                  />
                </Center>
              )}
            </VStack>
          </HStack>
          <Flex flexDir="column" w="full">
            <Text textAlign="left">
              {data.description && data.description.length > 0 ? (
                <>
                  <Box as="span" fontWeight="700">
                    {`${data.description.split(" ")[0]} `}
                  </Box>
                  {data.description.split(" ").slice(1).join(" ")}
                </>
              ) : (
                <Box as="span" color="grey.40">
                  no description
                </Box>
              )}
            </Text>
            <Text color="grey.50" textAlign="right">
              Edit
            </Text>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Log;
