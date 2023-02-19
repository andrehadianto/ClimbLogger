import { CustomIcon } from "./CustomIcon";
import { CustomIconProps } from "./types";

export const FlagIcon = (props: CustomIconProps) => (
  <CustomIcon
    fill="none"
    height="24px"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24px"
    {...props}
  >
    <path
      d="M4 21.1111V16.1111M4 16.1111V4.11109C4 4.11109 7 1.61112 12 4.11112C17 6.61112 20 4.11112 20 4.11112V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </CustomIcon>
);
