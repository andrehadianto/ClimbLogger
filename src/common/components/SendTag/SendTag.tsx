import {
  Skeleton,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagProps,
} from "@chakra-ui/react";

import { DislikeIcon, LikeIcon } from "../CustomIcon";

interface SendTagProps extends TagProps {
  loading?: boolean;
  unsent?: boolean;
}

export const SendTag = ({
  loading,
  unsent = false,
  ...props
}: SendTagProps) => {
  const color = loading ? "yellow" : !unsent ? "green" : "red";
  const icon = loading ? (
    <></>
  ) : !unsent ? (
    <LikeIcon color="green.50" />
  ) : (
    <DislikeIcon color="red.50" />
  );
  const label = !unsent ? "Sent" : "Unsent";
  return (
    <Tag colorScheme={color} variant="solid" {...props}>
      <TagLeftIcon alignItems="center" boxSize="12px">
        {icon}
      </TagLeftIcon>
      <Skeleton isLoaded={!loading}>
        <TagLabel>{label}</TagLabel>
      </Skeleton>
    </Tag>
  );
};
