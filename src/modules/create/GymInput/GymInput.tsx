import { ChangeEvent, useState } from "react";

import { Select } from "@/common/components/Select";

import { GYM_OPTION } from "./gymData";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const GymInput = ({ value, setValue }: Props) => {
  const [errorMessage, _] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <Select
      errorMessage={errorMessage}
      id="gym"
      label="Select gym"
      options={GYM_OPTION}
      value={value}
      onChange={handleOnChange}
    />
  );
};
