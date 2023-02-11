import { hexTransparencies } from "@/common/constants/hex";

export const addAlphaToHex = (color, opacity) =>
  `${color}${hexTransparencies[opacity]}`;
