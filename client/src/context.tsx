import React, { useContext, useState, createContext, useEffect } from "react";
import { ContextType, LoggedAcountType, ThemeType } from "./types/types";

type PropsType = {
  children: React.ReactNode;
};

const Context = createContext<ContextType>(null!);

export const useCtx = () => useContext(Context);

const savedThemeSettings = localStorage.getItem("theme");
const parsedSavedThemeSettings =
  savedThemeSettings && JSON.parse(savedThemeSettings);

export const ContextProvider = ({ children }: PropsType) => {
  const [loggedAccount, setLoggedAccount] = useState<LoggedAcountType>({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGFjNzNmYmJlMDMxNjIwYmVkMjU4NCIsImVtYWlsIjoibWFyaW9wb2RvbGluc2t5QGdtYWlsLmNvbSIsImlhdCI6MTY4NDUzMzE2NCwiZXhwIjoxNjg0NjE5NTY0fQ.kj-uMcW03VncCxQNFk8v3tlidm3CTy7Ni7djESYLldc",
    id: "",
    nick: "",
    photo: "",
    username: "mario",
  });
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
  // Modals
  const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [openWriteATweet, setOpenWriteATweet] = useState<boolean>(false);
  const [openThemeSettings, setOpenThemeSettings] = useState<boolean>(false);
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);

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
        loggedAccount,
        setLoggedAccount,
        openEditProfile,
        setOpenEditProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};
