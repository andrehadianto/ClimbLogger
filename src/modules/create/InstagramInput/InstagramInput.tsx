import { Control, Controller } from "react-hook-form";

import { TextInput } from "@/common/components/TextInput";

import { Schema } from "../CreateFormContext";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "instagram";

export const InstagramInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Link to instagram"
          placeholder="#"
          {...field}
        />
      )}
    />
  );
};
