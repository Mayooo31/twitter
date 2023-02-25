import React, { useContext, useState, createContext } from "react";

type ContextType = {
  openMobileNavbar: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  openMore: boolean;
  setOpenMore: React.Dispatch<React.SetStateAction<boolean>>;
  openWriteATweet: boolean;
  setOpenWriteATweet: React.Dispatch<React.SetStateAction<boolean>>;
};

type PropsType = {
  children: React.ReactNode;
};

const Context = createContext<ContextType>(null!);

export const useCtx = () => useContext(Context);

export const ContextProvider = ({ children }: PropsType) => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [openWriteATweet, setOpenWriteATweet] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        openMobileNavbar,
        setOpenMobileNavbar,
        openMore,
        setOpenMore,
        openWriteATweet,
        setOpenWriteATweet,
      }}
    >
      {children}
    </Context.Provider>
  );
};
