import React from "react";

// Custom hooks
import { useCtx } from "../context";

// Css and icons
import "../index.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PreviewImage = () => {
  const { previewImage, setPreviewImage } = useCtx();

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-[100]">
      <span
        onClick={() => setPreviewImage("")}
        className="absolute top-0 left-0 w-full h-screen custom-blur bg-[#c1c1c110]"
      />
      <XMarkIcon
        onClick={() => setPreviewImage("")}
        className="absolute top-2 left-2 h-10 w-10 p-2 text-white rounded-full cursor-pointer bg-[#06050599] z-[111]"
      />
      <img
        src={previewImage}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-contain h-screen w-screen max-h-fit max-w-fit"
      />
    </div>
  );
};

export default PreviewImage;
