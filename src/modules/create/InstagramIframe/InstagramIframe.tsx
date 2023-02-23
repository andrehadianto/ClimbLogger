import { Center, Text } from "@chakra-ui/react";

interface Props {
  value: string;
}

export const InstagramIframe = ({ value }: Props) => {
  const shouldRender = value.startsWith("https://www.instagram.com/");

  return (
    <Center
      border="1px dashed"
      borderColor="grey.20"
      borderRadius="2xl"
      borderWidth="2px"
      h="440px"
      p="1px"
      w="full"
    >
      {shouldRender ? (
        <iframe frameBorder="0" height="436" src={value} width="240" />
      ) : (
        // TODO: upload placeholder
        <Text color="grey.60" size="md">
          Enter instagram link
        </Text>
      )}
    </Center>
  );
};
