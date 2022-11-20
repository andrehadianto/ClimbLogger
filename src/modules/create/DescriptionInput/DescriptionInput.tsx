import { ChangeEvent, useState } from "react";

import { TextArea } from "@/common/components/TextArea";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const DescriptionInput = ({ value, setValue }: Props) => {
  const [errorMessage, _] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value || undefined);

    //TODO: handle error message + validation
  };

  return (
    <TextArea
      errorMessage={errorMessage}
      id="description"
      label="Description"
      placeholder="The crux is at..."
      rows={5}
      value={value}
      onChange={handleOnChange}
    />
  );
};
