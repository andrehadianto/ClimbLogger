import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface CreateViewContextType {
  gym: string;
  setGym: Dispatch<SetStateAction<string>>;
  grade: string;
  setGrade: Dispatch<SetStateAction<string>>;
  attempt: string;
  setAttempt: Dispatch<SetStateAction<string>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  instagram: string;
  setInstagram: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  isSent: boolean;
  setIsSent: Dispatch<SetStateAction<boolean>>;
  handleOnSubmit: () => void;
}

const CreateViewContext = createContext<CreateViewContextType | null>(null);

export const CreateViewContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [gym, setGym] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [attempt, setAttempt] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [instagram, setInstagram] = useState<string>(
    "https://www.instagram.com/p/ClEKcTUOhlu/"
  );
  const [description, setDescription] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleOnSubmit = async () => {
    //TODO: handle submit
  };

  return (
    <CreateViewContext.Provider
      value={{
        gym,
        grade,
        attempt,
        color,
        instagram,
        description,
        isSent,
        setGym,
        setGrade,
        setAttempt,
        setColor,
        setInstagram,
        setDescription,
        setIsSent,
        handleOnSubmit,
      }}
    >
      {children}
    </CreateViewContext.Provider>
  );
};

export const useCreate = (): CreateViewContextType => {
  const context = useContext(CreateViewContext);
  if (!context) {
    throw new Error("useCreate can only be used inside its context provider");
  }

  return context;
};
