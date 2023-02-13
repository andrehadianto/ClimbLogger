import { addAlphaToHex } from "./addAlphaToHex";
import { getThemeColorHex } from "./getThemeColorHex";

export const withOpacity = (color: string, opacity: number) => {
  const hexColor = getThemeColorHex(color);

  return addAlphaToHex(hexColor, opacity);
};
