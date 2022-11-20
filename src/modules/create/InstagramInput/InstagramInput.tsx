import { ChangeEvent, useState } from "react";

import { TextInput } from "@/common/components/TextInput";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const InstagramInput = ({ value, setValue }: Props) => {
  const [errorMessage, _] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <TextInput
      errorMessage={errorMessage}
      id="instagram"
      label="Link to instagram"
      placeholder="#"
      value={value}
      onChange={handleOnChange}
    />
  );
};
