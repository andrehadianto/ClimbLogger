import { ChangeEvent } from "react";

import { CheckboxInput } from "@/common/components/CheckboxInput";

interface Props {
  value: boolean;
  setValue: (value: boolean) => void;
}

export const AscendInput = ({ value, setValue }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);

    //TODO: handle error message + validation
  };
  return (
    <CheckboxInput
      id="ascend"
      isChecked={value}
      label="Send"
      wrapperProps={{ flex: 1 }}
      onChange={handleOnChange}
    />
  );
};
