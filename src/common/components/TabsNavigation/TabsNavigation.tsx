import { Box, Center, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

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
      width={"40px"}
    >
      <NextLink passHref href={href}>
        <Link {...props}>{isActive ? activeIcon : icon}</Link>
      </NextLink>
    </Center>
  );
};

export const TabsNavigation = () => {
  return (
    <Box
      bgColor={"grey.100"}
      borderTop={"grey.0"}
      borderTopStyle={"solid"}
      borderTopWidth={"1px"}
      bottom={0}
      height={"64px"}
      padding={"4px 40px"}
      position={"fixed"}
      width={"full"}
      zIndex={99}
    >
      <Flex
        alignItems={"center"}
        height={"full"}
        justifyContent={"space-between"}
      >
        {TABS.map(({ icon, href, ...props }, index) => (
          <Tabs key={index} href={href} icon={icon} {...props} />
        ))}
      </Flex>
    </Box>
  );
};
