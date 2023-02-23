import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

import { CREATE_LOG_FAIL, CREATE_LOG_SUCCESS } from "./constants/toasts";

export interface CreateViewContextType {
  handleOnSubmit: () => void;
  loading: boolean;
}

const schema = z.object({
  gym: z.string(),
  grade: z.string(),
  attempt: z.number(),
  color: z.string(),
  instagram: z.string(),
  description: z.string().optional(),
  ascend: z.boolean(),
});

const DEFAULT_VALUES = {
  gym: "",
  grade: "",
  attempt: 0,
  color: "",
  instagram: "",
  description: "",
  ascend: false,
};

export type Schema = z.infer<typeof schema>;

const CreateViewContext = createContext<CreateViewContextType | null>(null);

export const CreateViewContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const methods = useForm<Schema>({
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });

  const handleOnSubmit = async () => {
    setLoading(true);
    const body = methods.watch();
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(body),
    });

    methods.reset();
    setLoading(false);

    if (res.status === 200) {
      router.replace("/dashboard");
      toast(CREATE_LOG_SUCCESS);
    } else {
      toast(CREATE_LOG_FAIL);
    }
  };

  return (
    <CreateViewContext.Provider
      value={{
        handleOnSubmit,
        loading,
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
