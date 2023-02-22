import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { PageHead } from "@/common/components/PageHead";

import { AscendInput } from "@/modules/create/AscendInput";
import { AttemptInput } from "@/modules/create/AttemptInput";
import { ColorInput } from "@/modules/create/ColorInput";
import {
  useCreateForm,
  Schema as CreateFormSchema,
} from "@/modules/create/CreateFormContext";
import { DescriptionInput } from "@/modules/create/DescriptionInput";
import { GradeInput } from "@/modules/create/GradeInput";
import { GymInput } from "@/modules/create/GymInput";
import { InstagramIframe } from "@/modules/create/InstagramIframe";
import { InstagramInput } from "@/modules/create/InstagramInput";

const Create = () => {
  const { handleSubmit, control, watch } = useFormContext<CreateFormSchema>();
  const { handleOnSubmit, loading } = useCreateForm();

  const handleOnClick = async () => {
    await fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const instagramLink = watch("instagram");

  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <Box px={"20px"} py={"20px"}>
        {/* <Button onClick={handleOnClick}>API</Button> */}
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <VStack spacing={"16px"}>
            <InstagramIframe value={instagramLink} />
            <GymInput control={control} />
            <HStack spacing={"20px"} w={"full"}>
              <GradeInput control={control} />
              <AscendInput control={control} />
            </HStack>
            <AttemptInput control={control} />
            <ColorInput control={control} />
            <InstagramInput control={control} />
            <DescriptionInput control={control} />
          </VStack>
          <Flex mt={"40px"}>
            <Button isLoading={loading} type="submit" w={"full"}>
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </div>
  );
};

export default Create;
