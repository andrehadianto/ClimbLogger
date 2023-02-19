import { CustomIcon } from "./CustomIcon";
import { CustomIconProps } from "./types";

export const LocationIcon = (props: CustomIconProps) => (
  <CustomIcon
    fill="none"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    {...props}
  >
    <path
      d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M12 21C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </CustomIcon>
);
