import { Control, Controller } from "react-hook-form";

import { Select } from "@/common/components/Select";
import { COLOR_OPTION } from "@/common/constants/color";

import { Schema } from "../CreateFormContext";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "routeColor";

export const ColorInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <Select
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Select color"
          options={COLOR_OPTION}
          {...field}
        />
      )}
    />
  );
};
