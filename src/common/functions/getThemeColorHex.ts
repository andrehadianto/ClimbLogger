import { colors } from "@/theme/colors";

export const getThemeColorHex = (color) =>
  color.split(".").reduce((acc: any, curr) => acc[curr], colors) as string;
