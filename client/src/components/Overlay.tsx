import React from "react";

type Props = {
  isOpen: boolean;
  closeOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Overlay = ({ isOpen, closeOverlay }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <span
      onClick={() => closeOverlay(false)}
      className="fixed top-0 left-0 w-full h-screen bg-[#c1c1c110] z-[99]"
    />
  );
};

export default Overlay;
