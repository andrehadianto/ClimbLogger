import { Control, Controller } from "react-hook-form";

import { TextArea } from "@/common/components/TextArea";

import { Schema } from "../../EditForm";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "description";

export const DescriptionInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <TextArea
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Description (optional)"
          placeholder="The crux is at..."
          rows={5}
          {...field}
        />
      )}
    />
  );
};
