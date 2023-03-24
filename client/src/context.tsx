import React, { useContext, useState, createContext, useEffect } from "react";

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

const savedThemeSettings = localStorage.getItem("theme");
const parsedSavedThemeSettings = savedThemeSettings && JSON.parse(savedThemeSettings);

export const ContextProvider = ({ children }: PropsType) => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [openWriteATweet, setOpenWriteATweet] = useState<boolean>(false);
  const [openThemeSettings, setOpenThemeSettings] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeType>(
    parsedSavedThemeSettings
      ? parsedSavedThemeSettings
      : {
          color: "#1d9bf0",
          background: "#15202b",
          name: "blue",
          bgName: "bg-blue",
        }
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
