import { createContext, useContext, useState } from "react";

type globalContent = {
  UserAns: string[];
  setUserAns: (userAns: string[]) => void;
};

const defaultValue = {
  UserAns: [],
  setUserAns: () => {},
};

const BtnContext = createContext<globalContent>(defaultValue);

export const BtnProvider: React.FC<{ children: any }> = ({ children }) => {
  const [UserAns, setUserAns] = useState<string[]>([]);

  return (
    <>
      <BtnContext.Provider
        value={{
          UserAns,
          setUserAns,
        }}
      >
        {children}
      </BtnContext.Provider>
    </>
  );
};

export const useBtnContext = () => {
  return useContext(BtnContext);
};
