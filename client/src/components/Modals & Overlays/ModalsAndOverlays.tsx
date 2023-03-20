import React from "react";

// Hooks
import { useCtx } from "../../context";

// Components
import Overlay from "../Overlay";
import ThemeSettings from "../ThemeSettings";
import WriteATweet from "../WriteATweet";

const ModalsAndOverlays = () => {
  const {
    openMobileNavbar,
    setOpenMobileNavbar,
    openMore,
    setOpenMore,
    openWriteATweet,
    setOpenWriteATweet,
    openThemeSettings,
    setOpenThemeSettings,
  } = useCtx();

  return (
    <>
      <Overlay isOpen={openMore} closeOverlay={setOpenMore} />
      <Overlay isOpen={openMobileNavbar} closeOverlay={setOpenMobileNavbar} />
      <Overlay isOpen={openWriteATweet} closeOverlay={setOpenWriteATweet} />
      <Overlay isOpen={openThemeSettings} closeOverlay={setOpenThemeSettings} />
      {openWriteATweet && <WriteATweet isModal={true} />}
      {openThemeSettings && <ThemeSettings />}
    </>
  );
};

export default ModalsAndOverlays;
