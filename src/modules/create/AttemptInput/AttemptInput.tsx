import { ChangeEvent } from "react";

import { NumberInput } from "@/common/components/NumberInput";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const AttemptInput = ({ value, setValue }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <NumberInput
      id="attempt"
      label="No. of attempt(s)"
      min={0}
      placeholder="0"
      value={value}
      onChange={handleOnChange}
    />
  );
};
