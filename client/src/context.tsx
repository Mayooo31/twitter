import React, { useContext, useState, createContext } from "react";

type ContextType = {
  openMobileNavbar: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  openMore: boolean;
  setOpenMore: React.Dispatch<React.SetStateAction<boolean>>;
  openWriteATweet: boolean;
  setOpenWriteATweet: React.Dispatch<React.SetStateAction<boolean>>;
  openThemeSettings: boolean;
  setOpenThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

type ThemeType = {
  color: string;
  background: string;
  name: string;
  bgName: string;
};

type PropsType = {
  children: React.ReactNode;
};

const Context = createContext<ContextType>(null!);

export const useCtx = () => useContext(Context);

// "rgb(255, 122, 0)"
// "#ff7a00"

export const ContextProvider = ({ children }: PropsType) => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [openWriteATweet, setOpenWriteATweet] = useState<boolean>(false);
  const [openThemeSettings, setOpenThemeSettings] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeType>({
    color: "#1997c8",
    background: "#000",
    // background: "#15202b",
    name: "black",
    bgName: "bg-black",
  });

  return (
    <Context.Provider
      value={{
        openMobileNavbar,
        setOpenMobileNavbar,
        openMore,
        setOpenMore,
        openWriteATweet,
        setOpenWriteATweet,
        openThemeSettings,
        setOpenThemeSettings,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
