import React from "react";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const NavbarBookmarks = () => {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={`sticky flex justify-between items-center top-0 left-0 xs:left-[70px] w-full h-[53px] bg-[#15202bed] px-5 pb-[3px] z-50 custom-blur cursor-pointer`}
    >
      <div>
        <p className="font-bold text-xl">Záložky</p>
        <p className="text-xs font-normal text-grayish">@_____majo_____</p>
      </div>
      <EllipsisHorizontalIcon className="h-8 w-8 p-[2px] cursor-pointer text-grayish hover:bg-[#41576f5d] rounded-full" />
    </div>
  );
};

export default NavbarBookmarks;
