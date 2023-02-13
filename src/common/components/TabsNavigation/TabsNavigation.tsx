import { Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { withOpacity } from "@/common/functions/withOpacity";

import { ChakraLink } from "../ChakraLink";
import { HomeIcon, PlusIcon, UserIcon } from "../CustomIcon";

const TABS = [
  {
    icon: <HomeIcon fill="#9696A0" height={28} width={28} />,
    activeIcon: <HomeIcon fill="black" height={28} width={28} />,
    href: "/dashboard",
  },
  {
    icon: <PlusIcon fill="#9696A0" height={28} width={28} />,
    activeIcon: <PlusIcon fill="black" height={28} width={28} />,
    href: "/create",
  },
  {
    icon: <UserIcon fill="#9696A0" height={28} width={28} />,
    activeIcon: <UserIcon fill="black" height={28} width={28} />,
    href: "/user",
  },
];

const Tabs = ({ icon, activeIcon, href, ...props }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = pathname.includes(href);
  return (
    <Center
      bg={isActive && withOpacity("grey.40", 35)}
      borderRadius={"4px"}
      height={"40px"}
      width={"80px"}
    >
      <ChakraLink href={href}>{isActive ? activeIcon : icon}</ChakraLink>
    </Center>
  );
};

export const TabsNavigation = () => {
  const position = {
    position: "fixed" as const,
    bottom: 0,
  };

  return (
    <Flex
      {...position}
      bgColor="white"
      height="56px"
      justify="center"
      padding="4px 40px"
      width="full"
      zIndex={99}
    >
      <Flex
        alignItems="center"
        height="full"
        justifyContent="space-around"
        maxW="600px"
        w="full"
      >
        {TABS.map(({ icon, href, ...props }, index) => (
          <Tabs key={index} href={href} icon={icon} {...props} />
        ))}
      </Flex>
    </Flex>
  );
};
