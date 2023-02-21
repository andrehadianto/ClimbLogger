import {
  Heading,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useBoolean,
  Skeleton,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
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
import { GYM_MAPPING } from "@/common/constants/common";
import { MsToDate } from "@/common/functions/MsToDate";
import { withOpacity } from "@/common/functions/withOpacity";

const DEFAULT_DATA = {
  gym: "Boulder Planet (Sembawang)",
  date: 0,
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
  const [loading, setLoading] = useBoolean(true);

  useEffect(() => {
    if (!router.isReady) return;

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
        setLoading.off();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, logId]);

  const statsData = [
    {
      icon: <LocationIcon color="black" />,
      text: GYM_MAPPING[data.gym],
    },
    {
      icon: <CalendarIcon color="black" />,
      text: MsToDate(data.date),
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

  const statsComponent = (text, href) =>
    text ? (
      <Text fontWeight="700">{text}</Text>
    ) : (
      <ChakraLink isExternal href={href ?? ""}>
        <Text fontWeight="700" textDecoration="underline">
          link
        </Text>
      </ChakraLink>
    );

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
          loading={loading}
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
                <HStack key={text} spacing="2" w="full">
                  {icon}
                  <Skeleton isLoaded={!loading}>
                    {statsComponent(text, href)}
                  </Skeleton>
                </HStack>
              ))}
            </VStack>
            <VStack justify="space-between" w="100px">
              <Skeleton isLoaded={!loading}>
                {isNaN(parseInt(data.grade)) === false ? (
                  <Heading fontFamily="Circular-Loom" size="h1">
                    {data.grade.toUpperCase()}
                  </Heading>
                ) : data.grade.toLowerCase() === "w" ? (
                  <Heading fontFamily="Circular-Loom" size="h1">
                    W
                  </Heading>
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
              </Skeleton>
            </VStack>
          </HStack>
          <Flex flexDir="column" w="full">
            {loading ? (
              <VStack>
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} h="30px" w="full" />
                ))}
              </VStack>
            ) : (
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
            )}
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
