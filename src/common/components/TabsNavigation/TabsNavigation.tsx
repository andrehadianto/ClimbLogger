import { Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ChakraLink } from "../ChakraLink";
import { HomeIcon, PlusIcon, UserIcon } from "../CustomIcon";

const TABS = [
  {
    icon: <HomeIcon height={24} width={24} />,
    activeIcon: <HomeIcon duotone height={24} width={24} />,
    href: "/dashboard",
  },
  {
    icon: <PlusIcon height={24} width={24} />,
    activeIcon: <PlusIcon duotone height={24} width={24} />,
    href: "/create",
  },
  {
    icon: <UserIcon height={24} width={24} />,
    activeIcon: <UserIcon duotone height={24} width={24} />,
    href: "/user",
  },
];

const Tabs = ({ icon, activeIcon, href, ...props }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = pathname.includes(href);
  return (
    <Center
      bg={isActive && "grey.80"}
      borderRadius={"4px"}
      height={"32px"}
      width={"60px"}
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
      bgColor={"grey.100"}
      height={"44px"}
      justify={"center"}
      padding={"4px 40px"}
      width={"full"}
      zIndex={99}
    >
      <Flex
        alignItems={"center"}
        height={"full"}
        justifyContent={"space-around"}
        maxW={"600px"}
        w={"full"}
      >
        {TABS.map(({ icon, href, ...props }, index) => (
          <Tabs key={index} href={href} icon={icon} {...props} />
        ))}
      </Flex>
    </Flex>
  );
};
