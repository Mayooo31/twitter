import React from "react";

// Hooks
import { useCtx } from "../../context";

// Components
import Overlay from "../Overlay";
import WriteATweet from "../WriteATweet";

const ModalsAndOverlays = () => {
  const {
    openMobileNavbar,
    setOpenMobileNavbar,
    openMore,
    setOpenMore,
    openWriteATweet,
    setOpenWriteATweet,
  } = useCtx();

  return (
    <>
      <Overlay isOpen={openMore} closeOverlay={setOpenMore} />
      <Overlay isOpen={openMobileNavbar} closeOverlay={setOpenMobileNavbar} />
      <Overlay isOpen={openWriteATweet} closeOverlay={setOpenWriteATweet} />
      {openWriteATweet && <WriteATweet isModal={true} />}
    </>
  );
};

export default ModalsAndOverlays;
