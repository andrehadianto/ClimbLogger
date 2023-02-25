import {
  Control,
  Controller,
  useFormContext,
  UseFormWatch,
} from "react-hook-form";

import { Select } from "@/common/components/Select";
import { GRADE_OPTION } from "@/common/constants/grade";

import { Schema } from "../../EditForm";

interface Props {
  control: Control<Schema, any>;
  watch: UseFormWatch<Schema>;
}

const FIELD_NAME = "grade";

export const GradeInput = ({ control, watch }: Props) => {
  const gym = watch("gym");

  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({ field, fieldState: { error } }) => (
        <Select
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Select grade"
          options={GRADE_OPTION[gym]}
          wrapperProps={{ flex: 3 }}
          {...field}
        />
      )}
    />
  );
};
