import { ChangeEvent, useState } from "react";

import { Select } from "@/common/components/Select";

import { GRADE_OPTION } from "@/modules/create/GradeInput/gradeData";
import { useCreate } from "@/modules/create/createContext";

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
      wrapperProps={{ flex: 3 }}
      onChange={handleOnChange}
    />
  );
};
