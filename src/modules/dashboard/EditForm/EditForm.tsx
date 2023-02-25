import {
  Box,
  Button,
  HStack,
  useBoolean,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { AscendInput } from "./fields/AscendInput";
import { AttemptInput } from "./fields/AttemptInput";
import { ColorInput } from "./fields/ColorInput";
import { DescriptionInput } from "./fields/DescriptionInput";
import { GradeInput } from "./fields/GradeInput";
import { GymInput } from "./fields/GymInput";
import { InstagramIframe } from "./fields/InstagramIframe";
import { InstagramInput } from "./fields/InstagramInput";
import { EDIT_LOG_SUCCESS, EDIT_LOG_FAIL } from "./fields/constants/toasts";

const schema = z.object({
  gym: z.string().min(1, { message: "Must select an option" }),
  grade: z.string().min(1, { message: "Must select an option" }),
  attempt: z.number(),
  routeColor: z.string().min(1, { message: "Must select an option" }),
  instagram: z.optional(z.string()),
  description: z.optional(z.string()),
  ascend: z.boolean(),
});

export type Schema = z.infer<typeof schema>;

interface EditFormProps {
  id: string;
  preloadedValues: Schema;
  router: NextRouter;
}

const EditForm = ({ id, preloadedValues, router }: EditFormProps) => {
  const [submitting, setSubmitting] = useBoolean(false);
  const toast = useToast();
  const { handleSubmit, watch, reset, getValues, control } = useForm({
    defaultValues: preloadedValues,
  });

  const instagramLink = watch("instagram");

  const onSubmit = async () => {
    setSubmitting.on();

    const body = getValues();
    const res = await fetch(`/api/log/edit/${id}`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    reset();
    setSubmitting.off();

    if (res.status === 200) {
      router.replace(`/dashboard/log/${id}`);
      toast(EDIT_LOG_SUCCESS);
    } else {
      toast(EDIT_LOG_FAIL);
    }
  };

  return (
    <Box p="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="16px">
          <InstagramIframe value={instagramLink} />
          <GymInput control={control} />
          <HStack spacing="20px" w="full">
            <GradeInput control={control} watch={watch} />
            <AscendInput control={control} />
          </HStack>
          <AttemptInput control={control} />
          <ColorInput control={control} />
          <InstagramInput control={control} />
          <DescriptionInput control={control} />
        </VStack>
        <VStack mt="40px">
          <Button isLoading={submitting} type="submit" w="full">
            Submit
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            w="full"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditForm;
