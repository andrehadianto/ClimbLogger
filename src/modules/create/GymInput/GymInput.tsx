import { Control, Controller } from "react-hook-form";

import { Select } from "@/common/components/Select";
import { GYM_OPTION } from "@/common/constants/common";

import { Schema } from "../CreateFormContext";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "gym";

export const GymInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <Select
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Select gym"
          options={GYM_OPTION}
          {...field}
        />
      )}
    />
  );
};
