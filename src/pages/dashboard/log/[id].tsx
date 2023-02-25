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
import { GYM_MAPPING } from "@/common/constants/gym";
import { MsToDate } from "@/common/functions/MsToDate";
import { withOpacity } from "@/common/functions/withOpacity";

import { InstagramIframe } from "@/modules/create/InstagramIframe";
import EditForm from "@/modules/dashboard/EditForm/EditForm";

const DEFAULT_DATA = {
  gym: "Boulder Planet (Sembawang)",
  timestamp: 0,
  attempt: 5,
  ascend: true,
  grade: "11",
  description:
    "start was too easy. hoping for a challenge but this 11 was so easy, I could have done it with my eyes closed.",
  instagram: "https://www.google.com",
};

const Log = () => {
  const router = useRouter();
  const { id: logId, edit } = router.query;

  const isEditing = edit && edit === "true";

  const [data, setData] = useState(DEFAULT_DATA);
  const [loading, setLoading] = useBoolean(true);

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/log/${logId}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading.off());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, logId]);

  const statsData = [
    {
      icon: <LocationIcon color="black" />,
      text: GYM_MAPPING[data.gym],
    },
    {
      icon: <CalendarIcon color="black" />,
      text: MsToDate(data.timestamp),
    },
    {
      icon: <FlagIcon />,
      text: data.attempt + " Attempt(s)",
    },
    {
      icon: <InstagramIcon />,
      href: data.instagram,
    },
  ];

  const statsComponent = (text, href) =>
    text ? (
      <Text size="sm">{text}</Text>
    ) : (
      <ChakraLink isExternal href={href ?? ""}>
        <Text size="sm" textDecoration="underline">
          link
        </Text>
      </ChakraLink>
    );

  return (
    <Box bgColor={!isEditing && withOpacity("grey.10", 35)} h="full">
      <PageHead description="A route" name="Route" />
      {!isEditing ? (
        <>
          <Flex align="center" bg="white" boxShadow="md" h="56px" p="8px 20px">
            <ArrowLeft onClick={() => router.back()} />
          </Flex>
          <Center
            bg="grey.10"
            h={data.instagram ? "440px" : "300px"}
            position="relative"
            w="full"
          >
            <SendTag
              borderRadius="0"
              bottom="0"
              loading={loading}
              position="absolute"
              right="0"
              unsent={!data.ascend}
            />
            {data.instagram ? (
              <InstagramIframe value={data.instagram} />
            ) : (
              <Image
                alt="route-image"
                src="https://placekitten.com/g/200/300"
              />
            )}
          </Center>
          <Box p="20px">
            <VStack spacing="4">
              <HStack align="center" h="full" justify="space-between" w="full">
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
                <Skeleton isLoaded={!loading}>
                  <Text
                    color="grey.50"
                    textAlign="right"
                    onClick={() => router.push(`${logId}?edit=true`)}
                  >
                    Edit
                  </Text>
                </Skeleton>
              </Flex>
            </VStack>
          </Box>
        </>
      ) : (
        !loading &&
        data && (
          <EditForm
            id={logId as string}
            preloadedValues={data}
            router={router}
          />
        )
      )}
    </Box>
  );
};

export default Log;
