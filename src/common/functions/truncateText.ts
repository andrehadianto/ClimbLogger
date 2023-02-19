type Placement = "start" | "middle" | "end";

export const truncateText = (
  text: string,
  placement: Placement = "end",
  maxLength = 15
) => {
  if (text.length > maxLength) {
    switch (placement) {
      case "start":
        return "..." + text.slice(-10);
      case "middle":
        return text.slice(0, 4) + "..." + text.slice(-6);
      case "end":
      default:
        return text.slice(0, 12) + "...";
    }
  }

  return text;
};
