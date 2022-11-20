import { Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ChakraLink } from "../ChakraLink";
import { HomeIcon, PlusIcon, UserIcon } from "../CustomIcon";

const TABS = [
  {
    icon: <HomeIcon />,
    activeIcon: <HomeIcon duotone />,
    href: "/dashboard",
  },
  {
    icon: <PlusIcon />,
    activeIcon: <PlusIcon duotone />,
    href: "/create",
  },
  {
    icon: <UserIcon />,
    activeIcon: <UserIcon duotone />,
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
      height={"40px"}
      width={"80px"}
    >
      <ChakraLink href={href}>{isActive ? activeIcon : icon}</ChakraLink>
    </Center>
  );
};

export const TabsNavigation = () => {
  const borderStyle = {
    borderTopColor: "grey.0",
    borderTop: "1px solid",
  };

  const position = {
    position: "fixed" as const,
    bottom: 0,
  };

  return (
    <Flex
      {...borderStyle}
      {...position}
      bgColor={"grey.100"}
      height={"64px"}
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
