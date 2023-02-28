import { Control, Controller } from "react-hook-form";

import { NumberInput } from "@/common/components/NumberInput";

import { Schema } from "../../EditForm";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "attempt";

export const AttemptInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({
        field: { onChange, value, ...formFieldsProps },
        fieldState: { error },
      }) => (
        <NumberInput
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="No. of attempt(s)"
          min={0}
          numberInputProps={{ min: 0, onChange, ...formFieldsProps }}
          placeholder="0"
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
