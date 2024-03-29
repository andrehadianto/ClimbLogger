import { CustomIcon } from "./CustomIcon";
import { CustomIconProps } from "./types";

export const CalendarIcon = (props: CustomIconProps) => (
  <CustomIcon
    fill="none"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    {...props}
  >
    <path
      d="M20 11H4M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11ZM15 3V7M9 3V7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </CustomIcon>
);
