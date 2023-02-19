import { Tag, TagLabel, TagLeftIcon, TagProps } from "@chakra-ui/react";

import { DislikeIcon, LikeIcon } from "../CustomIcon";

interface SendTagProps extends TagProps {
  unsent?: boolean;
}

export const SendTag = ({ unsent = false, ...props }: SendTagProps) => {
  const color = !unsent ? "green" : "red";
  const icon = !unsent ? (
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
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};
