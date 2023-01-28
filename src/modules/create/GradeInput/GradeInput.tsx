import { Control, Controller, useFormContext } from "react-hook-form";

import { Select } from "@/common/components/Select";

import { GRADE_OPTION } from "@/modules/create/GradeInput/gradeData";

import { Schema } from "../CreateFormContext";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "grade";

export const GradeInput = ({ control }: Props) => {
  const { watch } = useFormContext<Schema>();

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
