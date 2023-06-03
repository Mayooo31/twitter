import React, { useContext, useState, createContext, useEffect } from "react";

// Types
import { ContextType, LoggedAcountType, ThemeType } from "./types/types";

type PropsType = {
  children: React.ReactNode;
};

// Creating hook to get context
const Context = createContext<ContextType>(null!);
export const useCtx = () => useContext(Context);
// Getting item from local storage
const savedThemeSettings = localStorage.getItem("theme");
const savedAccount = localStorage.getItem("account");
// Parsing items from local storage
const parsedSavedThemeSettings =
  savedThemeSettings && JSON.parse(savedThemeSettings);
const parsedAccount = savedAccount && JSON.parse(savedAccount);

export const ContextProvider = ({ children }: PropsType) => {
  const [loggedAccount, setLoggedAccount] = useState<LoggedAcountType>(
    parsedAccount ?? {
      token: "",
      id: "",
      nick: "",
      profilePhoto: "",
      secondPhoto: "",
      username: "",
      about: "",
      following: [],
      followers: [],
      bookmarks: [],
    }
  );
  const [theme, setTheme] = useState<ThemeType>(
    parsedSavedThemeSettings ?? {
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
  const [previewImage, setPreviewImage] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(loggedAccount));
  }, [loggedAccount]);

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
        previewImage,
        setPreviewImage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
