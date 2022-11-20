import { ChangeEvent, useState } from "react";

import { Select } from "@/common/components/Select";

import { useCreate } from "../createContext";

import { GRADE_OPTION } from "./gradeData";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const GradeInput = ({ value, setValue }: Props) => {
  const { gym } = useCreate();
  const [errorMessage, _] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <Select
      errorMessage={errorMessage}
      id="grade"
      label="Select grade"
      options={GRADE_OPTION[gym]}
      value={value}
      onChange={handleOnChange}
    />
  );
};
