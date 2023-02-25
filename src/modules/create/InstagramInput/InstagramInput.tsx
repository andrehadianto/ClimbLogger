import { Control, Controller } from "react-hook-form";

import { TextInput } from "@/common/components/TextInput";
import { formatInstagramLink } from "@/common/functions/instaLinkFormatter";

import { Schema } from "../CreateFormContext";

interface Props {
  control: Control<Schema, any>;
}

const FIELD_NAME = "instagram";

export const InstagramInput = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name={FIELD_NAME}
      render={({
        field: { onChange, value, ...props },
        fieldState: { error },
      }) => (
        <TextInput
          errorMessage={error?.message}
          id={FIELD_NAME}
          label="Link to instagram (optional)"
          placeholder="#"
          value={value ?? ""}
          onBlurCapture={() => {
            onChange(formatInstagramLink(value));
          }}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      )}
    />
  );
};
