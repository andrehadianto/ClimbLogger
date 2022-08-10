import { CustomIcon } from "./CustomIcon";
import { CustomIconProps } from "./types";

export const CrossIcon = (props: CustomIconProps) => (
  <CustomIcon {...props}>
    <path
      d="M18 6L6 18"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M6 6L18 18"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </CustomIcon>
);
