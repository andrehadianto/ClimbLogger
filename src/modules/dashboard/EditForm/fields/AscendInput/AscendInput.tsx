import { Control, Controller } from "react-hook-form";

import { CheckboxInput } from "@/common/components/CheckboxInput";

import { Schema } from "../../EditForm";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "ascend";

export const AscendInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <CheckboxInput
          id={FIELD_NAME}
          isChecked={value}
          label="Send"
          wrapperProps={{ flex: 1 }}
          {...rest}
        />
      )}
    />
  );
};
