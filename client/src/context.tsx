import React, { useContext, useState, createContext } from "react";

type ContextType = {
  openMobileNavbar: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

type PropsType = {
  children: React.ReactNode;
};

const Context = createContext<ContextType>(null!);

export const useCtx = () => useContext(Context);

export const ContextProvider = ({ children }: PropsType) => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(true);

  return (
    <Context.Provider value={{ openMobileNavbar, setOpenMobileNavbar }}>
      {children}
    </Context.Provider>
  );
};
