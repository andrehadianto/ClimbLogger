import { addAlphaToHex } from "./addAlphaToHex";
import { getThemeColorHex } from "./getThemeColorHex";

export const withOpacity = (color: string, opacity: number) => {
  const hexColor = getThemeColorHex(color);
  console.log(hexColor);
  console.log(addAlphaToHex(hexColor, opacity));

  return addAlphaToHex(hexColor, opacity);
};
