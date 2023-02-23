export const formatInstagramLink = (link: string) =>
  link.split("/").slice(0, -1).join("/") + "/embed";
