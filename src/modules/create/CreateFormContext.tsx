import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

export interface CreateViewContextType {
  handleOnSubmit: () => void;
}

const schema = z.object({
  gym: z.string(),
  grade: z.string(),
  attempt: z.number(),
  color: z.string(),
  instagram: z.string(),
  description: z.string(),
  ascend: z.boolean(),
});

export type Schema = z.infer<typeof schema>;

const CreateViewContext = createContext<CreateViewContextType | null>(null);

export const CreateViewContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const methods = useForm<Schema>({
    mode: "onChange",
    defaultValues: {
      gym: "",
      grade: "",
      attempt: 0,
      color: "",
      instagram: "https://www.instagram.com/p/ClEKcTUOhlu/",
      description: "",
      ascend: false,
    },
  });

  const handleOnSubmit = async () => {
    //TODO: handle submit
  };

  return (
    <CreateViewContext.Provider
      value={{
        handleOnSubmit,
      }}
    >
      <FormProvider {...methods}>{children}</FormProvider>
    </CreateViewContext.Provider>
  );
};

export const useCreateForm = (): CreateViewContextType => {
  const context = useContext(CreateViewContext);
  if (!context) {
    throw new Error(
      "useCreateForm can only be used inside its context provider"
    );
  }

  return context;
};
