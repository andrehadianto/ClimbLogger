import { Box, Button, Center, Flex, VStack } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { AttemptInput } from "@/modules/create/AttemptInput";
import { ColorInput } from "@/modules/create/ColorInput";
import { DescriptionInput } from "@/modules/create/DescriptionInput";
import { GradeInput } from "@/modules/create/GradeInput";
import { GymInput } from "@/modules/create/GymInput";
import { InstagramIframe } from "@/modules/create/InstagramIframe";
import { InstagramInput } from "@/modules/create/InstagramInput";
import { useCreate } from "@/modules/create/createContext";

const Create = () => {
  const {
    instagram,
    setInstagram,
    description,
    setDescription,
    gym,
    setGym,
    color,
    setColor,
    grade,
    setGrade,
    attempt,
    setAttempt,
    handleOnSubmit,
  } = useCreate();
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <Box mt={6} px={5} py={5}>
        <form onSubmit={handleOnSubmit}>
          <VStack spacing={4}>
            <InstagramIframe value={instagram} />
            <GymInput setValue={setGym} value={gym} />
            <GradeInput setValue={setGrade} value={grade} />
            <AttemptInput setValue={setAttempt} value={attempt} />
            <ColorInput setValue={setColor} value={color} />
            <InstagramInput setValue={setInstagram} value={instagram} />
            <DescriptionInput setValue={setDescription} value={description} />
          </VStack>
          <Flex mt={10}>
            <Button type="submit" w={"full"}>
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </div>
  );
};

export default Create;
