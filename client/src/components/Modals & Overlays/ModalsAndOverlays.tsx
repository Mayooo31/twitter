import React from "react";

// Hooks
import { useCtx } from "../../context";

// Components
import Overlay from "../Overlay";
import ThemeSettings from "../ThemeSettings";
import WriteATweet from "../WriteATweet";
import PreviewImage from "../PreviewImage";

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
    openEditProfile,
    setOpenEditProfile,
    previewImage,
  } = useCtx();

  return (
    <>
      <Overlay isOpen={openMore} closeOverlay={setOpenMore} />
      <Overlay isOpen={openMobileNavbar} closeOverlay={setOpenMobileNavbar} />
      <Overlay isOpen={openWriteATweet} closeOverlay={setOpenWriteATweet} />
      <Overlay isOpen={openThemeSettings} closeOverlay={setOpenThemeSettings} />
      <Overlay isOpen={openEditProfile} closeOverlay={setOpenEditProfile} />
      {openWriteATweet && <WriteATweet isModal={true} />}
      {openThemeSettings && <ThemeSettings />}
      {previewImage.images.length !== 0 && <PreviewImage />}
    </>
  );
};

export default ModalsAndOverlays;
