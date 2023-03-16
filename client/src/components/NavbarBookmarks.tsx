import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useCtx } from "../context";

const NavbarBookmarks = () => {
  const { theme } = useCtx();
  const navigate = useNavigate();
  return (
    <div
      style={{ background: theme.name === "blue" ? "#15202bda" : "#000000c9" }}
      onClick={() => window.scrollTo(0, 0)}
      className={`sticky flex justify-between items-center top-0 left-0 xs:left-[70px] w-full h-[53px] pr-5 pl-0 xs:pl-5 pb-[3px] z-50 custom-blur cursor-pointer`}
    >
      <button
        onClick={() => navigate(-1)}
        className="relative top-[1px] group h-full xs:hidden px-6 grid place-items-center cursor-pointer"
      >
        <ArrowLeftIcon className="w-9 h-9 p-2 rounded-full group-active:bg-[#e9e9e925] group-hover:bg-[#e9e9e925]" />
      </button>
      <div className="mr-auto">
        <p className="font-bold text-xl">Záložky</p>
        <p className="text-xs font-normal text-grayish">@_____majo_____</p>
      </div>
      <EllipsisHorizontalIcon className="h-8 w-8 p-[2px] cursor-pointer text-grayish hover:bg-[#41576f5d] rounded-full" />
    </div>
  );
};

export default NavbarBookmarks;
