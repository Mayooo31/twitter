import React from "react";
import { useCtx } from "../context";

const ShowMorebutton = () => {
  const { theme } = useCtx();
  return (
    <button
      style={{ color: theme.color }}
      className={`px-4 text-left py-4 ${
        theme.bgName === "bg-blue" ? "hover:bg-[#41576f23]" : "hover:bg-[#0d0d0d]"
      } cursor-pointer w-full`}
    >
      Zobrazit více
    </button>
  );
};

export default ShowMorebutton;
