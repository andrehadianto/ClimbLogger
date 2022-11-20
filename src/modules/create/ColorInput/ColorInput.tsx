import { ChangeEvent, useState } from "react";

import { Select } from "@/common/components/Select";

import { COLOR_OPTION } from "./colorData";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const ColorInput = ({ value, setValue }: Props) => {
  const [errorMessage, _] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //TODO: format string (replace whitespace with _, etc)
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <Select
      errorMessage={errorMessage}
      id="color"
      label="Select color"
      options={COLOR_OPTION}
      value={value}
      onChange={handleOnChange}
    />
  );
};
