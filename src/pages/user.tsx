import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { FilterIcon, FlagIcon, UserIcon } from "@/common/components/CustomIcon";

import { AppInfoModal } from "@/modules/user/AppInfoModal";
import { LogoutButton } from "@/modules/user/Logout";

import { selectUser } from "@/store/userSlice";

const User = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const user = useSelector(selectUser);

  return (
    <Box minH="calc(100vh - 56px)" position="relative" px="5">
      <AppInfoModal isOpen={isOpen} onClose={onClose} />
      <Flex flexDir="column" justify="center" pb="calc(88px + 56px)" pt="5">
        <VStack my="5">
          <Avatar
            bg="grey.20"
            name={`${user.first_name} ${user.last_name}`}
            size="xl"
          />
          <Text fontWeight="600" size="lg">
            {`@${user.username}`}
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
      <VStack h="88px">
        <Button w="full" onClick={onOpen}>
          App Info
        </Button>
        <LogoutButton />
      </VStack>
    </Box>
  );
};

export default User;
