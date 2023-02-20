import { UrlObject } from "url";

import { Link, type LinkProps as LinkFromChakraProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface ChakraLinkProps
  extends PropsWithChildren,
    Omit<LinkFromChakraProps, "href"> {
  href: string | UrlObject;
  linkProps?: LinkProps;
}

export const ChakraLink = ({
  href,
  linkProps,
  children,
  ...props
}: ChakraLinkProps) => (
  <NextLink legacyBehavior passHref href={href} {...linkProps}>
    <Link {...props}>{children}</Link>
  </NextLink>
);
