import { CustomIcon } from "./CustomIcon";
import { CustomIconProps } from "./types";

export const ArrowLeft = (props: CustomIconProps) => (
  <CustomIcon
    fill="none"
    height="24px"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24px"
    {...props}
  >
    <path
      d="M4 12L20 12M4 12L10 6M4 12L10 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </CustomIcon>
);
