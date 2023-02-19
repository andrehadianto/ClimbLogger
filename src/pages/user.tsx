import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FilterIcon, FlagIcon, UserIcon } from "@/common/components/CustomIcon";
import { FirebaseContextProvider } from "@/common/context/useFirebase";

import { LogoutButton } from "@/modules/user/Logout";

const User = () => {
  return (
    <FirebaseContextProvider>
      <Box minH="calc(100vh - 56px)" position="relative" px="5">
        <Flex flexDir="column" justify="center" pb="calc(88px + 56px)" pt="5">
          <VStack my="5">
            <Avatar
              name="Dan Abrahmov"
              size="xl"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontWeight="600" size="lg">
              @telegram_id
            </Text>
          </VStack>
          <HStack justify="space-evenly">
            <VStack spacing="2">
              <VStack h="70px" spacing="-1" w="60px">
                <UserIcon fill="black" height="30px" width="30px" />
                <Text>sent</Text>
              </VStack>
              <Text fontWeight="600" size="lg">
                142
              </Text>
            </VStack>
            <VStack spacing="2">
              <VStack h="70px" spacing="-1" w="60px">
                <FlagIcon
                  color="black"
                  height="30px"
                  strokeWidth="1.5"
                  width="30px"
                />
                <Text>attempt</Text>
              </VStack>
              <Text fontWeight="600" size="lg">
                489
              </Text>
            </VStack>
            <VStack spacing="2">
              <VStack h="70px" spacing="-1" w="60px">
                <FilterIcon fill="black" height="30px" width="30px" />
                <Text textAlign="center">{`highest\ngrade`}</Text>
              </VStack>
              <Text fontWeight="600" size="lg">
                2Q
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <VStack bottom="0" h="88px" position="absolute" w="calc(100% - 40px)">
          <Button w="full">App Info</Button>
          <LogoutButton />
        </VStack>
      </Box>
    </FirebaseContextProvider>
  );
};

export default User;
