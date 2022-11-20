import { Box, Button, Flex, VStack } from "@chakra-ui/react";

import { NumberInput } from "@/common/components/NumberInput";
import { PageHead } from "@/common/components/PageHead";
import { Select } from "@/common/components/Select";
import { TextArea } from "@/common/components/TextArea";
import { TextInput } from "@/common/components/TextInput";

import { useCreate } from "@/modules/create/createContext";

const Create = () => {
  const { handleOnSubmit } = useCreate();
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
            <Select
              errorMessage=""
              id="gym"
              label="Select gym"
              options={["Boruda", "Boulder Planet (Sembawang)", "Lighthouse"]}
            />
            <Select
              errorMessage=""
              id="grade"
              label="Select grade"
              options={["1", "2", "3"]}
            />
            <NumberInput
              id="attempt"
              label="No. of attempt(s)"
              min={0}
              placeholder="0"
            />
            <Select
              errorMessage=""
              id="color"
              label="Select color"
              options={["red", "green", "blue"]}
            />
            <TextInput
              errorMessage=""
              id="instagram"
              label="Link to instagram"
              placeholder="#"
            />
            <TextArea
              errorMessage=""
              id="description"
              label="Description"
              placeholder="The crux is at..."
              type="textarea"
            />
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
